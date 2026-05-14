declare module "nodemailer" {
  const nodemailer: {
    createTransport: (options: any) => {
      sendMail: (mailOptions: any) => Promise<unknown>;
    };
  };

  export default nodemailer;
}