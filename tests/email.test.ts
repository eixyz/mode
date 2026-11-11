import { afterEach, beforeEach, describe, expect, spyOn, test } from "bun:test";
import nodemailer from "nodemailer";
import contact from "../api/contact";
import appointment from "../api/appointment";
import mailCheck from "../api/mail-check";

const sent: Array<{ to?: unknown }> = [];
const saved = { ...process.env };
const createTransport = spyOn(nodemailer, "createTransport");

function response() {
  const result = { code: 0, payload: undefined as unknown };
  const res = {
    setHeader() {},
    status(code: number) { result.code = code; return res; },
    json(payload: unknown) { result.payload = payload; },
    end() {},
  };
  return { result, res };
}

beforeEach(() => {
  sent.length = 0;
  process.env.CONTACT_EMAIL = "main@example.test";
  process.env.SUPPORT_EMAIL = "support@example.test";
  process.env.CONTACT_EMAIL_PASSWORD = "fake-test-only";
  process.env.MAIL_DEBUG_TOKEN = "fake-diagnostic-token";
  delete process.env.SMTP_PORT;
  createTransport.mockImplementation(() => ({
    verify: async () => true,
    sendMail: async (mail: { to?: unknown }) => { sent.push(mail); return { messageId: "local-test" }; },
    close() {},
  }) as unknown as ReturnType<typeof nodemailer.createTransport>);
});

afterEach(() => { process.env = { ...saved }; });

const auth = { authorization: "Bearer fake-diagnostic-token" };

describe("support-only diagnostics", () => {
  test("POST sends exactly one email only to support, ignoring request recipient", async () => {
    const { result, res } = response();
    await mailCheck({ method: "POST", headers: auth, query: { to: "main@example.test" } }, res);
    expect(result.code).toBe(200);
    expect(sent.map((mail) => mail.to)).toEqual(["support@example.test"]);
  });
  test("GET checks connectivity without sending any email", async () => {
    const { res } = response();
    await mailCheck({ method: "GET", headers: auth }, res);
    expect(sent).toHaveLength(0);
  });
  test("missing support address never falls back to main", async () => {
    delete process.env.SUPPORT_EMAIL;
    const { result, res } = response();
    await mailCheck({ method: "POST", headers: auth }, res);
    expect(result.code).toBe(400);
    expect(sent).toHaveLength(0);
  });
  test("support identical to main is refused", async () => {
    process.env.SUPPORT_EMAIL = "MAIN@example.test";
    const { result, res } = response();
    await mailCheck({ method: "POST", headers: auth }, res);
    expect(result.code).toBe(400);
    expect(sent).toHaveLength(0);
  });
  test("unauthorized diagnostics do not send", async () => {
    const { result, res } = response();
    await mailCheck({ method: "POST", headers: { authorization: "Bearer wrong" } }, res);
    expect(result.code).toBe(404);
    expect(sent).toHaveLength(0);
  });
});

for (const [name, handler, fields] of [
  ["contact", contact, { message: "A local test enquiry", subject: "Test" }],
  ["appointment", appointment, { service: "passport", date: "2026-11-02", time: "10:00" }],
] as const) {
  describe(name, () => {
    const body = { firstName: "Local", lastName: "Test", email: "visitor@example.test", ...fields };
    test("real submissions retain main, support and visitor confirmation", async () => {
      const { result, res } = response();
      await handler({ method: "POST", body: { ...body, agreedToTerms: true } }, res);
      expect(result.code).toBe(200);
      expect(sent.map((mail) => mail.to)).toEqual(["main@example.test", "support@example.test", "visitor@example.test"]);
    });
    test("single-recipient setup still works when support is absent", async () => {
      delete process.env.SUPPORT_EMAIL;
      const { result, res } = response();
      await handler({ method: "POST", body: { ...body, agreedToTerms: true } }, res);
      expect(result.code).toBe(200);
      expect(sent.map((mail) => mail.to)).toEqual(["main@example.test", "visitor@example.test"]);
    });
    test("unchecked terms prevents email delivery", async () => {
      const { result, res } = response();
      await handler({ method: "POST", body: { ...body, agreedToTerms: false } }, res);
      expect(result.code).toBe(400);
      expect(sent).toHaveLength(0);
    });
  });
}