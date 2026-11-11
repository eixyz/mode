// Legal texts (Privacy Policy, Terms of Use, Accessibility Statement) in EN/DE/PT.
//
// Maintenance rules:
// - The three languages must keep the same sections in the same order
//   (checked by tests/legal.test.ts). Change all three together.
// - Every statement about a service must match the code: if a third-party
//   resource is added or removed (fonts, maps, scripts, hosting, email),
//   update the privacy policy and its "updated" date in all languages.
// - Contact details come from content/settings/contact.json (Decap).
import { contactDetails, getAddressText } from "./siteSettings";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  subtitle: string;
  /** ISO date (YYYY-MM-DD) of the current version, used for <time dateTime>. */
  updatedIso: string;
  updated: string;
  sections: LegalSection[];
};

export type LegalContent = {
  privacy: LegalDocument;
  terms: LegalDocument;
  accessibility: LegalDocument;
};

const PRIVACY_UPDATED = "2026-11-11";
const TERMS_UPDATED = "2026-11-11";
const ACCESSIBILITY_UPDATED = "2026-07-30";

const { phone, email } = contactDetails;

const LINKS = {
  vercel: "https://vercel.com/legal/privacy-policy",
  google: "https://policies.google.com/privacy",
  github: "https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement",
  cloudflare: "https://www.cloudflare.com/privacypolicy/",
  berlinDpa: "https://www.datenschutz-berlin.de",
};

const en: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "How the Embassy processes your personal data on this website",
    updatedIso: PRIVACY_UPDATED,
    updated: "Last updated: 11 November 2026",
    sections: [
      {
        title: "1. Who is responsible",
        paragraphs: [
          `This policy explains how the Embassy of the Republic of Mozambique in Berlin (“the Embassy”, “we”) processes personal data when you use www.mozambique-embassy.de.`,
          `Embassy of the Republic of Mozambique, ${getAddressText("en")}. Telephone: ${phone}. Email: ${email}. Please mark questions about your data “Data protection”.`,
        ],
      },
      {
        title: "2. Legal framework",
        paragraphs: [
          "The Embassy is the diplomatic mission of the Republic of Mozambique in the Federal Republic of Germany. Its status, privileges and immunities under international law, in particular under the Vienna Convention on Diplomatic Relations of 18 April 1961, are not affected by this policy.",
          "Irrespective of this, we process personal data in line with the principles of the EU General Data Protection Regulation (GDPR): lawfully, fairly and transparently, only for specified purposes, limited to what is necessary, for no longer than necessary and with appropriate security.",
        ],
      },
      {
        title: "3. Visiting the website",
        paragraphs: [
          "The website is hosted by Vercel Inc. (USA). When you open a page, your browser automatically transmits technical data to Vercel’s servers: IP address, date and time of the request, the page requested, the referring page, and browser and operating system information. This data is needed to deliver the website and to protect it against attacks and errors. It is not combined with other data or used to identify visitors.",
          `Vercel processes this data on our behalf and only for a limited period, after which it is deleted. Vercel may process data on servers outside the EU/EEA, in particular in the USA; such transfers are covered by appropriate safeguards such as the EU Standard Contractual Clauses. Further information: ${LINKS.vercel}`,
          "Fonts, images, PDF documents and program code are delivered from the website itself. Viewing this website does not load content from other providers unless you choose to show the map described in section 6.",
        ],
      },
      {
        title: "4. Contact and appointment forms",
        paragraphs: [
          "The contact form asks for your title, first and last name, email address, subject and message. The appointment form asks for your name, email address, telephone number, the service and preferred date and time and, depending on the service, your date of birth, document validity, visa or ID type and further details. Required fields are marked; without them we cannot process your request.",
          "We use this data only to answer your enquiry or to arrange your appointment. Your entries are transmitted in encrypted form to a function on Vercel’s servers, which forwards them by email via IONOS SE (Montabaur, Germany) to the Embassy’s mailboxes. You receive a confirmation of receipt containing a copy of your details at the email address you entered. The website itself does not store your entries in a database.",
          "Within the Embassy, only staff responsible for your matter have access. If your matter requires it, relevant information may be passed to the competent authorities of the Republic of Mozambique. We do not sell your data or use it for advertising.",
          "By ticking the checkbox you accept the Terms of Use and confirm that you have read this policy; it is not consent to any other use of your data. If you prefer not to use the forms, you can contact us by telephone, email or post.",
          "Please do not send identity documents, health information or other sensitive data through the forms. If documents are needed, the Consular Section will tell you how to submit them.",
        ],
      },
      {
        title: "5. Cookies and storage in your browser",
        paragraphs: [
          "This website sets no cookies and uses no analytics, tracking or advertising tools.",
          "Your chosen language (English, German or Portuguese) is saved in your browser’s local storage under the name “language”, so that the website appears in that language on your next visit. This entry stays on your device until you change the language or delete your browser data, and is not transmitted to us.",
        ],
      },
      {
        title: "6. Google Maps",
        paragraphs: [
          "The contact page can show a map from Google Maps, a service of Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. The map is loaded only after you click “Show map”. Only then does your browser connect to Google’s servers and transmit, among other things, your IP address and the address of the page. Google may set cookies and process data in the USA. Your choice is not stored; the map stays off on your next visit.",
          "We use the map so that visitors can find the Embassy easily. The address is also given in text on the same page, so you do not need the map. We have no influence on Google’s processing. Further information: " + LINKS.google,
        ],
      },
      {
        title: "7. Links to other websites",
        paragraphs: [
          "This website links to other websites, such as Mozambican government portals and documents for download. These are only loaded when you click a link; the privacy policy of the respective provider then applies.",
        ],
      },
      {
        title: "8. Editing area for Embassy staff",
        paragraphs: [
          `Embassy staff maintain the website content in a separate editing area (/admin). Signing in there uses a GitHub account (GitHub Inc., USA) and a sign-in service running on Cloudflare (Cloudflare Inc., USA); the editing software is loaded from the unpkg.com software repository. Only the data of the staff signing in is processed. Visitors to the public website are not affected. Further information: ${LINKS.github} and ${LINKS.cloudflare}`,
        ],
      },
      {
        title: "9. How long we keep data",
        paragraphs: [
          "We keep messages and appointment requests only as long as needed to handle your matter. We then delete them, unless rules on record-keeping for consular matters require us to keep them longer. Documents that become part of a consular procedure are kept in accordance with the rules applicable to that procedure.",
        ],
      },
      {
        title: "10. Your rights",
        paragraphs: [
          "You may ask for access to the personal data we hold about you and for a copy of it, and you may request its correction, deletion or restricted processing. You may also object to processing and, where applicable, ask for your data in a portable format. If you have given consent, you may withdraw it at any time with effect for the future.",
          `Please send your request to ${email} or by post to the address above. To protect your data, we may ask you to verify your identity. We reply within one month; in complex cases this period may be extended. Data that we are required to keep cannot be deleted until the retention period has ended.`,
          `If you believe that we have not handled your data correctly, please contact us first. You may also contact the Berlin Commissioner for Data Protection and Freedom of Information (Berliner Beauftragte für Datenschutz und Informationsfreiheit), ${LINKS.berlinDpa}. Because of the Embassy’s status under international law, the powers of German authorities in relation to the Embassy are limited.`,
        ],
      },
      {
        title: "11. Security and changes to this policy",
        paragraphs: [
          "The website is transmitted exclusively over an encrypted connection (HTTPS), and the form functions pass your entries to the email server only over an encrypted connection. Ordinary email is not end-to-end encrypted. We do not use automated decision-making or profiling.",
          "We update this policy when the website or our data processing changes. The current version is always available on this page; the date at the top shows when it was last updated.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    subtitle: "Conditions for using this website and its online forms",
    updatedIso: TERMS_UPDATED,
    updated: "Last updated: 11 November 2026",
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          "These terms apply to the use of www.mozambique-embassy.de, the website of the Embassy of the Republic of Mozambique in Berlin, and its contact and appointment forms. Accepting these terms is only required to send a form.",
        ],
      },
      {
        title: "2. Purpose of the website",
        paragraphs: [
          "This website provides general information about the Embassy, the Republic of Mozambique and consular services. The information is for guidance only. It is not legal advice and is not a decision on any application. Decisions on visas, passports and other consular matters are made only in the relevant procedure.",
        ],
      },
      {
        title: "3. Accuracy of information",
        paragraphs: [
          "We take care to keep the information on this website accurate and up to date. Requirements, fees and processing times may nevertheless change at short notice. Binding information is given only by the Consular Section, in writing and on request. Please check the current requirements with us before you apply or travel.",
        ],
      },
      {
        title: "4. Contact and appointment forms",
        bullets: [
          "A message or appointment request sent through this website is not an application and gives no right to a particular service or date.",
          "The automatic email you receive confirms only that your request has arrived. An appointment is confirmed only when the Embassy confirms it to you expressly.",
          "Please give complete and correct information. Incorrect information may delay your request or prevent it from being handled.",
          "Misuse of the forms, in particular spam, automated submissions or offensive content, is not permitted. Such submissions may be blocked and are not answered.",
        ],
      },
      {
        title: "5. Copyright and national symbols",
        paragraphs: [
          "The texts, images and graphics on this website are protected by copyright. Unless stated otherwise, the rights belong to the Embassy; some images are used under the licences of their authors. You may view and print content for personal, non-commercial purposes. Any other use requires our prior consent, unless permitted by law.",
          "The national emblem, the flag and the name of the Republic of Mozambique and of the Embassy may not be used in a way that suggests an official connection or approval that does not exist.",
        ],
      },
      {
        title: "6. Links to other websites",
        paragraphs: [
          "This website contains links to websites of other providers. We checked the linked pages when the link was created and found no unlawful content. We have no influence on their current or future content and are not responsible for it; the respective provider is responsible.",
        ],
      },
      {
        title: "7. Availability and liability",
        paragraphs: [
          "We cannot guarantee that the website and forms are always available or that emails are delivered immediately. If you receive no confirmation of receipt, please contact us by telephone or email rather than sending the form again.",
          "We accept no liability for damage resulting from the use of the information on this website, insofar as the law permits such exclusion. Liability that cannot be excluded by law is not affected.",
        ],
      },
      {
        title: "8. Data protection",
        paragraphs: [
          "Information on how we process personal data is given in our Privacy Policy.",
        ],
      },
      {
        title: "9. Diplomatic status and changes to these terms",
        paragraphs: [
          "Nothing in these terms waives or restricts the privileges and immunities of the Republic of Mozambique or its Embassy under international law, in particular under the Vienna Convention on Diplomatic Relations. Rights of users that cannot be excluded by law remain unaffected.",
          "We may change these terms with effect for the future. The version published on this page at the time of use applies.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          "Embassy of the Republic of Mozambique",
          getAddressText("en"),
          `Telephone: ${phone} · Email: ${email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    subtitle: "Our commitment to a website that everyone can use",
    updatedIso: ACCESSIBILITY_UPDATED,
    updated: "Last updated: 30 July 2026",
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          "The Embassy of the Republic of Mozambique in Berlin aims to make this website usable by as many people as possible, including visitors who use assistive technology. We orient our work on the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.",
        ],
      },
      {
        title: "Measures we have taken",
        bullets: [
          "Semantic HTML structure with landmarks and a single main heading per page.",
          "Descriptive alternative text for informative images.",
          "Full keyboard operability with visible focus indicators.",
          "Colour contrast checked against WCAG AA thresholds.",
          "Responsive layout that supports text resizing and mobile screens.",
          "Descriptive link text and accessible labels on form fields.",
        ],
      },
      {
        title: "Known limitations",
        bullets: [
          "Some PDF documents provided for download may not be fully tagged for screen readers. We will supply an accessible alternative on request.",
          "Embedded third-party maps may not be fully keyboard accessible; the same information is available as text on the page.",
        ],
      },
      {
        title: "Feedback and alternative formats",
        paragraphs: [
          `If you encounter a barrier on this website, or if you need information in an alternative format, please contact us at ${email} or ${phone}. We aim to respond within five working days and to provide the requested information in an accessible way.`,
        ],
      },
      {
        title: "Assessment",
        paragraphs: [
          "This statement is based on an internal review of the website carried out by the Embassy. It is reviewed whenever significant changes are made to the website.",
        ],
      },
    ],
  },
};

const de: LegalContent = {
  privacy: {
    title: "Datenschutzerklärung",
    subtitle: "Wie die Botschaft Ihre personenbezogenen Daten auf dieser Website verarbeitet",
    updatedIso: PRIVACY_UPDATED,
    updated: "Stand: 11. November 2026",
    sections: [
      {
        title: "1. Verantwortliche Stelle",
        paragraphs: [
          "Diese Datenschutzerklärung erläutert, wie die Botschaft der Republik Mosambik in Berlin („die Botschaft“, „wir“) personenbezogene Daten verarbeitet, wenn Sie www.mozambique-embassy.de nutzen.",
          `Botschaft der Republik Mosambik, ${getAddressText("de")}. Telefon: ${phone}. E-Mail: ${email}. Bitte kennzeichnen Sie Anfragen zu Ihren Daten mit dem Stichwort „Datenschutz“.`,
        ],
      },
      {
        title: "2. Rechtlicher Rahmen",
        paragraphs: [
          "Die Botschaft ist die diplomatische Vertretung der Republik Mosambik in der Bundesrepublik Deutschland. Ihr völkerrechtlicher Status sowie ihre Vorrechte und Immunitäten, insbesondere nach dem Wiener Übereinkommen über diplomatische Beziehungen vom 18. April 1961, bleiben von dieser Datenschutzerklärung unberührt.",
          "Unabhängig davon verarbeiten wir personenbezogene Daten nach den Grundsätzen der EU-Datenschutz-Grundverordnung (DSGVO): rechtmäßig, fair und transparent, nur für festgelegte Zwecke, beschränkt auf das Notwendige, nicht länger als erforderlich und mit angemessener Sicherheit.",
        ],
      },
      {
        title: "3. Besuch der Website",
        paragraphs: [
          "Die Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf einer Seite übermittelt Ihr Browser automatisch technische Daten an die Server von Vercel: IP-Adresse, Datum und Uhrzeit des Abrufs, die aufgerufene Seite, die zuvor besuchte Seite sowie Angaben zu Browser und Betriebssystem. Diese Daten sind erforderlich, um die Website auszuliefern und sie vor Angriffen und Fehlern zu schützen. Sie werden nicht mit anderen Daten zusammengeführt und nicht zur Identifizierung von Besuchern verwendet.",
          `Vercel verarbeitet diese Daten in unserem Auftrag und nur für einen begrenzten Zeitraum; danach werden sie gelöscht. Vercel kann Daten auf Servern außerhalb der EU/des EWR verarbeiten, insbesondere in den USA; solche Übermittlungen sind durch geeignete Garantien wie die EU-Standardvertragsklauseln abgesichert. Weitere Informationen: ${LINKS.vercel}`,
          "Schriftarten, Bilder, PDF-Dokumente und Programmcode werden von der Website selbst ausgeliefert. Beim Besuch dieser Website werden keine Inhalte anderer Anbieter geladen, es sei denn, Sie lassen sich die in Abschnitt 6 beschriebene Karte anzeigen.",
        ],
      },
      {
        title: "4. Kontakt- und Terminformular",
        paragraphs: [
          "Das Kontaktformular fragt Anrede, Vor- und Nachname, E-Mail-Adresse, Betreff und Nachricht ab. Das Terminformular fragt Name, E-Mail-Adresse, Telefonnummer, Dienstleistung sowie Wunschtermin und Uhrzeit ab und, je nach Dienstleistung, Geburtsdatum, Gültigkeit von Dokumenten, Visum- oder Ausweisart und weitere Angaben. Pflichtfelder sind gekennzeichnet; ohne sie können wir Ihr Anliegen nicht bearbeiten.",
          "Wir verwenden diese Daten ausschließlich, um Ihre Anfrage zu beantworten oder Ihren Termin abzustimmen. Ihre Eingaben werden verschlüsselt an eine Funktion auf den Servern von Vercel übertragen, die sie per E-Mail über die IONOS SE (Montabaur, Deutschland) an die Postfächer der Botschaft weiterleitet. Sie erhalten an die angegebene E-Mail-Adresse eine Eingangsbestätigung mit einer Kopie Ihrer Angaben. Die Website selbst speichert Ihre Eingaben nicht in einer Datenbank.",
          "Innerhalb der Botschaft haben nur die für Ihr Anliegen zuständigen Mitarbeitenden Zugriff. Soweit Ihr Anliegen es erfordert, können erforderliche Angaben an die zuständigen Behörden der Republik Mosambik weitergegeben werden. Wir verkaufen Ihre Daten nicht und nutzen sie nicht für Werbung.",
          "Mit dem Ankreuzen des Kontrollkästchens akzeptieren Sie die Nutzungsbedingungen und bestätigen, dass Sie diese Datenschutzerklärung zur Kenntnis genommen haben; es ist keine Einwilligung in eine anderweitige Nutzung Ihrer Daten. Wenn Sie die Formulare nicht nutzen möchten, erreichen Sie uns telefonisch, per E-Mail oder per Post.",
          "Bitte übermitteln Sie über die Formulare keine Ausweisdokumente, Gesundheitsdaten oder andere sensible Daten. Werden Unterlagen benötigt, teilt Ihnen die Konsularabteilung mit, wie Sie diese einreichen.",
        ],
      },
      {
        title: "5. Cookies und Speicherung in Ihrem Browser",
        paragraphs: [
          "Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder Werbewerkzeuge.",
          "Ihre gewählte Sprache (Englisch, Deutsch oder Portugiesisch) wird im lokalen Speicher Ihres Browsers unter dem Namen „language“ gespeichert, damit die Website beim nächsten Besuch in dieser Sprache erscheint. Dieser Eintrag bleibt auf Ihrem Gerät, bis Sie die Sprache ändern oder Ihre Browserdaten löschen, und wird nicht an uns übermittelt.",
        ],
      },
      {
        title: "6. Google Maps",
        paragraphs: [
          "Die Kontaktseite kann eine Karte von Google Maps anzeigen, einem Dienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die Karte wird erst geladen, wenn Sie auf „Karte anzeigen“ klicken. Erst dann baut Ihr Browser eine Verbindung zu den Servern von Google auf und übermittelt dabei unter anderem Ihre IP-Adresse und die Adresse der Seite. Google kann Cookies setzen und Daten in den USA verarbeiten. Ihre Auswahl wird nicht gespeichert; beim nächsten Besuch bleibt die Karte ausgeblendet.",
          "Wir nutzen die Karte, damit Besucher die Botschaft leicht finden. Die Anschrift steht auf derselben Seite auch als Text; die Karte ist dafür nicht erforderlich. Auf die Verarbeitung durch Google haben wir keinen Einfluss. Weitere Informationen: " + LINKS.google,
        ],
      },
      {
        title: "7. Links zu anderen Websites",
        paragraphs: [
          "Diese Website enthält Links zu anderen Websites, etwa zu Regierungsportalen Mosambiks und zu Dokumenten zum Herunterladen. Diese werden erst geladen, wenn Sie einen Link anklicken; dann gilt die Datenschutzerklärung des jeweiligen Anbieters.",
        ],
      },
      {
        title: "8. Redaktionsbereich für Mitarbeitende der Botschaft",
        paragraphs: [
          `Mitarbeitende der Botschaft pflegen die Inhalte der Website in einem gesonderten Redaktionsbereich (/admin). Die Anmeldung dort erfolgt über ein GitHub-Konto (GitHub Inc., USA) und einen Anmeldedienst bei Cloudflare (Cloudflare Inc., USA); die Redaktionssoftware wird vom Software-Verzeichnis unpkg.com geladen. Verarbeitet werden nur die Daten der angemeldeten Mitarbeitenden. Besucher der öffentlichen Website sind davon nicht betroffen. Weitere Informationen: ${LINKS.github} und ${LINKS.cloudflare}`,
        ],
      },
      {
        title: "9. Speicherdauer",
        paragraphs: [
          "Nachrichten und Terminanfragen bewahren wir nur so lange auf, wie es für die Bearbeitung Ihres Anliegens erforderlich ist. Danach löschen wir sie, sofern Aufbewahrungsvorschriften für konsularische Angelegenheiten keine längere Aufbewahrung verlangen. Unterlagen, die Teil eines konsularischen Verfahrens werden, werden nach den für dieses Verfahren geltenden Vorschriften aufbewahrt.",
        ],
      },
      {
        title: "10. Ihre Rechte",
        paragraphs: [
          "Sie können Auskunft über die zu Ihrer Person gespeicherten Daten und eine Kopie davon verlangen sowie deren Berichtigung, Löschung oder die Einschränkung ihrer Verarbeitung. Außerdem können Sie der Verarbeitung widersprechen und gegebenenfalls Ihre Daten in einem übertragbaren Format erhalten. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.",
          `Bitte richten Sie Ihr Anliegen an ${email} oder per Post an die oben genannte Anschrift. Zum Schutz Ihrer Daten können wir Sie bitten, Ihre Identität nachzuweisen. Wir antworten innerhalb eines Monats; in komplexen Fällen kann sich diese Frist verlängern. Daten, die wir aufbewahren müssen, können erst nach Ablauf der Aufbewahrungsfrist gelöscht werden.`,
          `Wenn Sie der Ansicht sind, dass wir Ihre Daten nicht korrekt behandelt haben, wenden Sie sich bitte zunächst an uns. Sie können sich außerdem an die Berliner Beauftragte für Datenschutz und Informationsfreiheit wenden, ${LINKS.berlinDpa}. Aufgrund des völkerrechtlichen Status der Botschaft sind die Befugnisse deutscher Behörden gegenüber der Botschaft eingeschränkt.`,
        ],
      },
      {
        title: "11. Sicherheit und Änderungen dieser Erklärung",
        paragraphs: [
          "Die Website wird ausschließlich über eine verschlüsselte Verbindung (HTTPS) übertragen; die Formularfunktionen übergeben Ihre Eingaben nur über eine verschlüsselte Verbindung an den E-Mail-Server. Gewöhnliche E-Mails sind nicht Ende-zu-Ende-verschlüsselt. Automatisierte Entscheidungen oder Profiling finden nicht statt.",
          "Wir passen diese Datenschutzerklärung an, wenn sich die Website oder unsere Datenverarbeitung ändert. Die aktuelle Fassung finden Sie stets auf dieser Seite; das Datum oben zeigt den Stand.",
        ],
      },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen",
    subtitle: "Bedingungen für die Nutzung dieser Website und ihrer Online-Formulare",
    updatedIso: TERMS_UPDATED,
    updated: "Stand: 11. November 2026",
    sections: [
      {
        title: "1. Geltungsbereich",
        paragraphs: [
          "Diese Bedingungen gelten für die Nutzung von www.mozambique-embassy.de, der Website der Botschaft der Republik Mosambik in Berlin, und ihrer Kontakt- und Terminformulare. Die Annahme dieser Bedingungen ist nur für das Absenden eines Formulars erforderlich.",
        ],
      },
      {
        title: "2. Zweck der Website",
        paragraphs: [
          "Diese Website bietet allgemeine Informationen über die Botschaft, die Republik Mosambik und konsularische Dienstleistungen. Die Informationen dienen der Orientierung. Sie sind keine Rechtsberatung und keine Entscheidung über einen Antrag. Über Visa, Pässe und andere konsularische Angelegenheiten wird ausschließlich im jeweiligen Verfahren entschieden.",
        ],
      },
      {
        title: "3. Richtigkeit der Informationen",
        paragraphs: [
          "Wir achten darauf, die Informationen auf dieser Website richtig und aktuell zu halten. Anforderungen, Gebühren und Bearbeitungszeiten können sich dennoch kurzfristig ändern. Verbindliche Auskünfte erteilt ausschließlich die Konsularabteilung, schriftlich und auf Anfrage. Bitte prüfen Sie die aktuellen Anforderungen mit uns, bevor Sie einen Antrag stellen oder reisen.",
        ],
      },
      {
        title: "4. Kontakt- und Terminformular",
        bullets: [
          "Eine über diese Website gesendete Nachricht oder Terminanfrage ist kein Antrag und begründet keinen Anspruch auf eine bestimmte Leistung oder einen bestimmten Termin.",
          "Die automatische E-Mail, die Sie erhalten, bestätigt nur den Eingang Ihrer Anfrage. Ein Termin gilt erst als vereinbart, wenn die Botschaft ihn Ihnen ausdrücklich bestätigt.",
          "Bitte machen Sie vollständige und richtige Angaben. Unrichtige Angaben können die Bearbeitung verzögern oder verhindern.",
          "Der Missbrauch der Formulare, insbesondere Spam, automatisierte Übermittlungen oder beleidigende Inhalte, ist nicht gestattet. Solche Übermittlungen können gesperrt werden und werden nicht beantwortet.",
        ],
      },
      {
        title: "5. Urheberrecht und Hoheitszeichen",
        paragraphs: [
          "Die Texte, Bilder und Grafiken dieser Website sind urheberrechtlich geschützt. Soweit nicht anders angegeben, liegen die Rechte bei der Botschaft; einige Bilder werden mit den Lizenzen ihrer Urheber verwendet. Sie dürfen Inhalte für private, nicht kommerzielle Zwecke ansehen und ausdrucken. Jede andere Nutzung bedarf unserer vorherigen Zustimmung, soweit sie nicht gesetzlich erlaubt ist.",
          "Das Staatswappen, die Flagge und der Name der Republik Mosambik und der Botschaft dürfen nicht so verwendet werden, dass eine nicht bestehende amtliche Verbindung oder Billigung nahegelegt wird.",
        ],
      },
      {
        title: "6. Links zu anderen Websites",
        paragraphs: [
          "Diese Website enthält Links zu Websites anderer Anbieter. Die verlinkten Seiten wurden bei der Verlinkung geprüft; rechtswidrige Inhalte waren nicht erkennbar. Auf deren aktuelle und künftige Inhalte haben wir keinen Einfluss und sind dafür nicht verantwortlich; verantwortlich ist der jeweilige Anbieter.",
        ],
      },
      {
        title: "7. Verfügbarkeit und Haftung",
        paragraphs: [
          "Wir können nicht garantieren, dass die Website und die Formulare jederzeit verfügbar sind oder E-Mails sofort zugestellt werden. Wenn Sie keine Eingangsbestätigung erhalten, kontaktieren Sie uns bitte telefonisch oder per E-Mail, statt das Formular erneut zu senden.",
          "Für Schäden, die aus der Nutzung der Informationen auf dieser Website entstehen, übernehmen wir keine Haftung, soweit ein solcher Ausschluss gesetzlich zulässig ist. Gesetzlich nicht ausschließbare Haftung bleibt unberührt.",
        ],
      },
      {
        title: "8. Datenschutz",
        paragraphs: [
          "Informationen dazu, wie wir personenbezogene Daten verarbeiten, finden Sie in unserer Datenschutzerklärung.",
        ],
      },
      {
        title: "9. Diplomatischer Status und Änderungen dieser Bedingungen",
        paragraphs: [
          "Diese Bedingungen bedeuten keinen Verzicht auf und keine Einschränkung der völkerrechtlichen Vorrechte und Immunitäten der Republik Mosambik oder ihrer Botschaft, insbesondere nach dem Wiener Übereinkommen über diplomatische Beziehungen. Gesetzlich nicht ausschließbare Rechte der Nutzer bleiben unberührt.",
          "Wir können diese Bedingungen mit Wirkung für die Zukunft ändern. Es gilt die zum Zeitpunkt der Nutzung auf dieser Seite veröffentlichte Fassung.",
        ],
      },
      {
        title: "10. Kontakt",
        paragraphs: [
          "Botschaft der Republik Mosambik",
          getAddressText("de"),
          `Telefon: ${phone} · E-Mail: ${email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    subtitle: "Unser Anspruch: eine Website, die alle nutzen können",
    updatedIso: ACCESSIBILITY_UPDATED,
    updated: "Stand: 30. Juli 2026",
    sections: [
      {
        title: "Unser Anspruch",
        paragraphs: [
          "Die Botschaft der Republik Mosambik in Berlin möchte diese Website möglichst vielen Menschen zugänglich machen, einschließlich Nutzerinnen und Nutzern assistiver Technologien. Wir orientieren uns dabei an den Web Content Accessibility Guidelines (WCAG) 2.1, Stufe AA.",
        ],
      },
      {
        title: "Umgesetzte Maßnahmen",
        bullets: [
          "Semantische HTML-Struktur mit Landmarks und einer eindeutigen Hauptüberschrift je Seite.",
          "Aussagekräftige Alternativtexte für informative Bilder.",
          "Vollständige Bedienbarkeit per Tastatur mit sichtbarer Fokusanzeige.",
          "Farbkontraste nach den Vorgaben der WCAG-Stufe AA geprüft.",
          "Responsives Layout mit Unterstützung für Textvergrößerung und mobile Bildschirme.",
          "Sprechende Linktexte und zugängliche Beschriftungen der Formularfelder.",
        ],
      },
      {
        title: "Bekannte Einschränkungen",
        bullets: [
          "Einzelne PDF-Dokumente zum Download sind möglicherweise nicht vollständig für Screenreader ausgezeichnet. Auf Anfrage stellen wir eine barrierefreie Alternative bereit.",
          "Eingebettete Karten Dritter sind unter Umständen nicht vollständig per Tastatur bedienbar; die Informationen stehen auch als Text auf der Seite zur Verfügung.",
        ],
      },
      {
        title: "Rückmeldung und alternative Formate",
        paragraphs: [
          `Wenn Sie auf dieser Website auf eine Barriere stoßen oder Informationen in einem alternativen Format benötigen, wenden Sie sich bitte an ${email} oder ${phone}. Wir bemühen uns, innerhalb von fünf Werktagen zu antworten und die gewünschten Informationen zugänglich bereitzustellen.`,
        ],
      },
      {
        title: "Bewertung",
        paragraphs: [
          "Diese Erklärung beruht auf einer internen Prüfung der Website durch die Botschaft. Sie wird bei wesentlichen Änderungen der Website überprüft.",
        ],
      },
    ],
  },
};

const pt: LegalContent = {
  privacy: {
    title: "Política de Privacidade",
    subtitle: "Como a Embaixada trata os seus dados pessoais neste sítio",
    updatedIso: PRIVACY_UPDATED,
    updated: "Última atualização: 11 de novembro de 2026",
    sections: [
      {
        title: "1. Responsável pelo tratamento",
        paragraphs: [
          "Esta política explica como a Embaixada da República de Moçambique em Berlim («a Embaixada», «nós») trata dados pessoais quando utiliza www.mozambique-embassy.de.",
          `Embaixada da República de Moçambique, ${getAddressText("pt")}. Telefone: ${phone}. E-mail: ${email}. Identifique as questões sobre os seus dados com a indicação «Proteção de dados».`,
        ],
      },
      {
        title: "2. Enquadramento jurídico",
        paragraphs: [
          "A Embaixada é a missão diplomática da República de Moçambique na República Federal da Alemanha. O seu estatuto, privilégios e imunidades ao abrigo do direito internacional, em especial da Convenção de Viena sobre Relações Diplomáticas, de 18 de abril de 1961, não são afetados por esta política.",
          "Independentemente disso, tratamos os dados pessoais de acordo com os princípios do Regulamento Geral sobre a Proteção de Dados da UE (RGPD): de forma lícita, leal e transparente, apenas para finalidades determinadas, limitada ao necessário, apenas durante o tempo necessário e com segurança adequada.",
        ],
      },
      {
        title: "3. Visita ao sítio",
        paragraphs: [
          "O sítio está alojado na Vercel Inc. (EUA). Quando abre uma página, o seu navegador transmite automaticamente dados técnicos aos servidores da Vercel: endereço IP, data e hora do acesso, página solicitada, página de origem e informações sobre o navegador e o sistema operativo. Estes dados são necessários para disponibilizar o sítio e protegê-lo contra ataques e erros. Não são combinados com outros dados nem utilizados para identificar visitantes.",
          `A Vercel trata estes dados por nossa conta e apenas durante um período limitado, após o qual são eliminados. A Vercel pode tratar dados em servidores fora da UE/EEE, em especial nos EUA; essas transferências estão cobertas por garantias adequadas, como as Cláusulas Contratuais-Tipo da UE. Mais informações: ${LINKS.vercel}`,
          "Os tipos de letra, as imagens, os documentos PDF e o código do programa são disponibilizados pelo próprio sítio. A visita a este sítio não carrega conteúdos de outros fornecedores, a menos que opte por mostrar o mapa descrito na secção 6.",
        ],
      },
      {
        title: "4. Formulários de contacto e de marcação",
        paragraphs: [
          "O formulário de contacto pede o tratamento, nome próprio e apelido, endereço de e-mail, assunto e mensagem. O formulário de marcação pede nome, endereço de e-mail, telefone, serviço, data e hora pretendidas e, consoante o serviço, data de nascimento, validade de documentos, tipo de visto ou de documento de identificação e outros dados. Os campos obrigatórios estão assinalados; sem eles não podemos tratar o seu pedido.",
          "Utilizamos estes dados apenas para responder ao seu pedido ou para agendar a sua marcação. Os dados introduzidos são transmitidos de forma encriptada para uma função nos servidores da Vercel, que os reencaminha por e-mail, através da IONOS SE (Montabaur, Alemanha), para as caixas de correio da Embaixada. Receberá no endereço de e-mail indicado uma confirmação de receção com uma cópia dos seus dados. O próprio sítio não guarda os dados introduzidos numa base de dados.",
          "Na Embaixada, só os funcionários responsáveis pelo seu assunto têm acesso. Se o seu assunto o exigir, as informações necessárias podem ser transmitidas às autoridades competentes da República de Moçambique. Não vendemos os seus dados nem os utilizamos para publicidade.",
          "Ao assinalar a caixa de verificação, aceita os Termos de Utilização e confirma que leu esta política; não se trata de consentimento para qualquer outra utilização dos seus dados. Se preferir não utilizar os formulários, pode contactar-nos por telefone, e-mail ou correio.",
          "Não envie documentos de identificação, dados de saúde ou outros dados sensíveis através dos formulários. Se forem necessários documentos, a Secção Consular indicará como os deve entregar.",
        ],
      },
      {
        title: "5. Cookies e armazenamento no navegador",
        paragraphs: [
          "Este sítio não utiliza cookies nem ferramentas de análise, rastreio ou publicidade.",
          "O idioma que escolher (inglês, alemão ou português) é guardado no armazenamento local do seu navegador com o nome «language», para que o sítio seja apresentado nesse idioma na sua próxima visita. Este registo permanece no seu dispositivo até mudar de idioma ou apagar os dados do navegador e não nos é transmitido.",
        ],
      },
      {
        title: "6. Google Maps",
        paragraphs: [
          "A página de contacto pode mostrar um mapa do Google Maps, um serviço da Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda. O mapa só é carregado depois de clicar em «Mostrar mapa». Só então o seu navegador se liga aos servidores da Google e transmite, entre outros, o seu endereço IP e o endereço da página. A Google pode utilizar cookies e tratar dados nos EUA. A sua escolha não é guardada; na visita seguinte, o mapa volta a estar oculto.",
          "Utilizamos o mapa para que os visitantes encontrem facilmente a Embaixada. A morada consta também em texto na mesma página, pelo que o mapa não é necessário. Não temos influência sobre o tratamento feito pela Google. Mais informações: " + LINKS.google,
        ],
      },
      {
        title: "7. Ligações para outros sítios",
        paragraphs: [
          "Este sítio contém ligações para outros sítios, como portais do Governo de Moçambique e documentos para descarregar. Estes só são carregados quando clica numa ligação; aplica-se então a política de privacidade do respetivo fornecedor.",
        ],
      },
      {
        title: "8. Área de edição para funcionários da Embaixada",
        paragraphs: [
          `Os funcionários da Embaixada gerem os conteúdos do sítio numa área de edição separada (/admin). O acesso a essa área utiliza uma conta GitHub (GitHub Inc., EUA) e um serviço de autenticação na Cloudflare (Cloudflare Inc., EUA); o programa de edição é carregado a partir do repositório de software unpkg.com. Apenas são tratados os dados dos funcionários que iniciam sessão. Os visitantes do sítio público não são afetados. Mais informações: ${LINKS.github} e ${LINKS.cloudflare}`,
        ],
      },
      {
        title: "9. Prazo de conservação",
        paragraphs: [
          "Conservamos as mensagens e os pedidos de marcação apenas durante o tempo necessário para tratar o seu assunto. Depois, eliminamo-los, salvo se as regras de arquivo aplicáveis aos assuntos consulares exigirem uma conservação mais longa. Os documentos que passem a fazer parte de um procedimento consular são conservados de acordo com as regras aplicáveis a esse procedimento.",
        ],
      },
      {
        title: "10. Os seus direitos",
        paragraphs: [
          "Pode pedir acesso aos dados pessoais que guardamos sobre si e uma cópia dos mesmos, bem como a sua retificação, apagamento ou a limitação do seu tratamento. Pode ainda opor-se ao tratamento e, quando aplicável, receber os seus dados num formato portável. Se tiver dado o seu consentimento, pode retirá-lo a qualquer momento, com efeitos para o futuro.",
          `Envie o seu pedido para ${email} ou por correio para a morada acima indicada. Para proteger os seus dados, podemos pedir-lhe que comprove a sua identidade. Respondemos no prazo de um mês; em casos complexos, este prazo pode ser prorrogado. Os dados que somos obrigados a conservar só podem ser apagados depois de terminado o prazo de conservação.`,
          `Se considerar que não tratámos os seus dados corretamente, contacte-nos primeiro. Pode também dirigir-se à autoridade de proteção de dados de Berlim (Berliner Beauftragte für Datenschutz und Informationsfreiheit), ${LINKS.berlinDpa}. Devido ao estatuto da Embaixada ao abrigo do direito internacional, os poderes das autoridades alemãs em relação à Embaixada são limitados.`,
        ],
      },
      {
        title: "11. Segurança e alterações desta política",
        paragraphs: [
          "O sítio é transmitido exclusivamente através de uma ligação encriptada (HTTPS) e as funções dos formulários entregam os dados introduzidos ao servidor de e-mail apenas através de uma ligação encriptada. O e-mail comum não tem encriptação de ponta a ponta. Não utilizamos decisões automatizadas nem definição de perfis.",
          "Atualizamos esta política quando o sítio ou o tratamento dos dados mudar. A versão em vigor está sempre disponível nesta página; a data no topo indica a última atualização.",
        ],
      },
    ],
  },
  terms: {
    title: "Termos de Utilização",
    subtitle: "Condições de utilização deste sítio e dos seus formulários",
    updatedIso: TERMS_UPDATED,
    updated: "Última atualização: 11 de novembro de 2026",
    sections: [
      {
        title: "1. Âmbito",
        paragraphs: [
          "Estes termos aplicam-se à utilização de www.mozambique-embassy.de, o sítio da Embaixada da República de Moçambique em Berlim, e dos seus formulários de contacto e de marcação. A aceitação destes termos só é necessária para enviar um formulário.",
        ],
      },
      {
        title: "2. Finalidade do sítio",
        paragraphs: [
          "Este sítio disponibiliza informação geral sobre a Embaixada, a República de Moçambique e os serviços consulares. A informação tem caráter orientador. Não constitui aconselhamento jurídico nem decisão sobre qualquer pedido. As decisões sobre vistos, passaportes e outros assuntos consulares são tomadas apenas no respetivo procedimento.",
        ],
      },
      {
        title: "3. Exatidão da informação",
        paragraphs: [
          "Procuramos manter a informação deste sítio correta e atualizada. Ainda assim, requisitos, taxas e prazos de tratamento podem mudar a curto prazo. Só a Secção Consular presta informação vinculativa, por escrito e mediante pedido. Confirme connosco os requisitos em vigor antes de apresentar um pedido ou de viajar.",
        ],
      },
      {
        title: "4. Formulários de contacto e de marcação",
        bullets: [
          "Uma mensagem ou pedido de marcação enviado através deste sítio não constitui um requerimento e não confere direito a um determinado serviço ou data.",
          "O e-mail automático que recebe confirma apenas que o seu pedido chegou. Uma marcação só fica confirmada quando a Embaixada lha confirmar expressamente.",
          "Forneça informação completa e correta. Informação incorreta pode atrasar ou impedir o tratamento do seu pedido.",
          "Não é permitida a utilização abusiva dos formulários, em especial spam, envios automatizados ou conteúdos ofensivos. Esses envios podem ser bloqueados e não obtêm resposta.",
        ],
      },
      {
        title: "5. Direitos de autor e símbolos nacionais",
        paragraphs: [
          "Os textos, imagens e gráficos deste sítio estão protegidos por direitos de autor. Salvo indicação em contrário, os direitos pertencem à Embaixada; algumas imagens são utilizadas ao abrigo das licenças dos seus autores. Pode consultar e imprimir os conteúdos para fins pessoais e não comerciais. Qualquer outra utilização requer o nosso consentimento prévio, salvo se for permitida por lei.",
          "O emblema, a bandeira e o nome da República de Moçambique e da Embaixada não podem ser utilizados de forma a sugerir uma ligação ou aprovação oficial que não exista.",
        ],
      },
      {
        title: "6. Ligações para outros sítios",
        paragraphs: [
          "Este sítio contém ligações para sítios de outros fornecedores. As páginas foram verificadas quando a ligação foi criada e não foram identificados conteúdos ilícitos. Não temos influência sobre os seus conteúdos atuais ou futuros e não somos responsáveis por eles; a responsabilidade cabe ao respetivo fornecedor.",
        ],
      },
      {
        title: "7. Disponibilidade e responsabilidade",
        paragraphs: [
          "Não podemos garantir que o sítio e os formulários estejam sempre disponíveis nem que os e-mails sejam entregues de imediato. Se não receber uma confirmação de receção, contacte-nos por telefone ou e-mail em vez de enviar novamente o formulário.",
          "Não assumimos responsabilidade por danos resultantes da utilização da informação deste sítio, na medida em que a lei permita essa exclusão. A responsabilidade que não possa ser excluída por lei não é afetada.",
        ],
      },
      {
        title: "8. Proteção de dados",
        paragraphs: [
          "As informações sobre a forma como tratamos os dados pessoais constam da nossa Política de Privacidade.",
        ],
      },
      {
        title: "9. Estatuto diplomático e alterações destes termos",
        paragraphs: [
          "Nada nestes termos constitui renúncia ou limitação dos privilégios e imunidades da República de Moçambique ou da sua Embaixada ao abrigo do direito internacional, em especial da Convenção de Viena sobre Relações Diplomáticas. Os direitos dos utilizadores que não possam ser excluídos por lei não são afetados.",
          "Podemos alterar estes termos com efeitos para o futuro. Aplica-se a versão publicada nesta página no momento da utilização.",
        ],
      },
      {
        title: "10. Contacto",
        paragraphs: [
          "Embaixada da República de Moçambique",
          getAddressText("pt"),
          `Telefone: ${phone} · E-mail: ${email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Declaração de Acessibilidade",
    subtitle: "O nosso compromisso com um sítio que todos possam utilizar",
    updatedIso: ACCESSIBILITY_UPDATED,
    updated: "Última atualização: 30 de julho de 2026",
    sections: [
      {
        title: "O nosso compromisso",
        paragraphs: [
          "A Embaixada da República de Moçambique em Berlim pretende que este sítio seja utilizável pelo maior número possível de pessoas, incluindo utilizadores de tecnologias de apoio. Orientamo-nos pelas Web Content Accessibility Guidelines (WCAG) 2.1, nível AA.",
        ],
      },
      {
        title: "Medidas adotadas",
        bullets: [
          "Estrutura HTML semântica, com marcos de navegação e um título principal por página.",
          "Textos alternativos descritivos para imagens informativas.",
          "Navegação integral por teclado, com indicador de foco visível.",
          "Contraste de cores verificado de acordo com o nível AA das WCAG.",
          "Layout responsivo, compatível com ampliação de texto e ecrãs móveis.",
          "Textos de ligação descritivos e etiquetas acessíveis nos campos dos formulários.",
        ],
      },
      {
        title: "Limitações conhecidas",
        bullets: [
          "Alguns documentos PDF disponibilizados para descarregamento podem não estar totalmente etiquetados para leitores de ecrã. Mediante pedido, disponibilizamos uma alternativa acessível.",
          "Mapas incorporados de terceiros podem não ser totalmente acessíveis por teclado; a mesma informação está disponível em texto na página.",
        ],
      },
      {
        title: "Sugestões e formatos alternativos",
        paragraphs: [
          `Se encontrar alguma barreira neste sítio ou necessitar de informação num formato alternativo, contacte-nos através de ${email} ou ${phone}. Procuramos responder no prazo de cinco dias úteis e disponibilizar a informação de forma acessível.`,
        ],
      },
      {
        title: "Avaliação",
        paragraphs: [
          "Esta declaração baseia-se numa avaliação interna do sítio realizada pela Embaixada e é revista sempre que ocorram alterações significativas.",
        ],
      },
    ],
  },
};

export const legalContent: Record<"en" | "de" | "pt", LegalContent> = { en, de, pt };
