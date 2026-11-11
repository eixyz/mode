export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  title: string;
  subtitle: string;
  updated: string;
  sections: LegalSection[];
};

export type LegalContent = {
  privacy: LegalDocument;
  terms: LegalDocument;
  accessibility: LegalDocument;
};

const CONTACT = {
  name: "Embassy of the Republic of Mozambique in Berlin",
  address: "Stromstraße 47, 10551 Berlin, Germany",
  phone: "+49 30 3987 6500",
  email: "info@mozambique-embassy.de",
};

const LAST_UPDATED_ISO = "2026-11-11";

const en: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "How the Embassy collects, uses and protects your personal data",
    updated: "Last updated: 11 November 2026",
    sections: [
  {
    "title": "1. Responsibility and contact",
    "paragraphs": [
      "The Embassy of the Republic of Mozambique in Berlin is responsible for handling enquiries and consular requests submitted through this website. Contact: Stromstraße 47, 10551 Berlin, Germany; telephone +49 30 3987 6500; email info@mozambique-embassy.de.",
      "For a privacy question or request, use these details and mark your message “Data Protection”. Please provide enough information to identify the matter concerned, but do not send identity documents unless requested through an appropriate channel."
    ]
  },
  {
    "title": "2. Information you provide",
    "paragraphs": [
      "The contact form collects your title, first name, last name, email address, subject and message. The appointment form collects your name, email address, phone number, requested service, preferred date and time and, where supplied, date of birth, document-validity information, visa or ID type and additional details.",
      "Provide only information needed for your enquiry. Do not include passwords, payment-card details, full identity-document numbers, health information or other sensitive material in a general message. If further documents are needed, the Consular Section will explain how to provide them."
    ]
  },
  {
    "title": "3. Why information is processed",
    "paragraphs": [
      "Information is used to answer enquiries, assess and coordinate appointment requests, carry out relevant consular tasks and operate and secure the website. A form submission is not a formal visa or passport application unless the Consular Section expressly tells you otherwise.",
      "Where the GDPR applies, processing for a public task or legal obligation requires the applicable legal basis under Article 6(1)(e) or (c). Article 6(1)(b) applies only where processing is necessary for a contract or steps requested before a contract. Article 6(1)(f) applies only where lawful and not to public authorities performing their public tasks. The legal basis for an individual consular procedure depends on that procedure and applicable law; you may request further information from the Embassy.",
      "The form checkbox acknowledges the terms and privacy information; it is not blanket consent to tracking or unrelated uses of your data. Required details are needed to reply or coordinate your request. If you prefer not to use the forms, contact the Embassy by telephone or email."
    ]
  },
  {
    "title": "4. Website hosting and technical logs",
    "paragraphs": [
      "The website and its form-processing functions are currently hosted on Vercel. IONOS provides the Embassy email service and may also host a separately deployed static version of this website.",
      "When your browser requests a page or submits a form, the relevant provider receives connection information such as your IP address, request time and requested address. Browser information, referrers, response details and diagnostic errors may also appear in access or security logs, depending on the provider’s settings. These records support delivery, security and troubleshooting and are separate from the visitor statistics described below.",
      "The location and duration of provider logs depend on the hosting arrangement and configuration. For information about logs relating to your request, contact the Embassy. Provider privacy information is available at https://vercel.com/legal/privacy-policy and https://www.ionos.com/terms-gtc/privacy-policy/."
    ]
  },
  {
    "title": "5. Form emails and access to correspondence",
    "paragraphs": [
      "Form data is processed by the Vercel email functions and sent through IONOS email to the Embassy’s configured main inbox and, where configured, support inbox. A receipt email is also sent to the address you provide. Your own email provider also processes that receipt.",
      "These forms do not currently create a submission record in a website database. Information nevertheless remains in the receiving mailboxes, sent mail, applicable email logs and backups, and any consular records created to handle the matter. Access should be limited to authorised staff and relevant service providers. Data is not sold for advertising.",
      "Email is not an end-to-end encrypted document portal. Please do not use the general forms to transmit sensitive documents. The Embassy may need to share relevant information with competent Mozambican authorities to handle the consular matter."
    ]
  },
  {
    "title": "6. Storage in your browser",
    "paragraphs": [
      "The website saves your selected language (English, German or Portuguese) in your browser’s local storage under the key “language”. It remains until you change it or clear the site’s browser data. The preference is not used to identify you or record your browsing history.",
      "No advertising pixels or advertising-cookie tools are configured in the website code. This does not mean that hosting logs, email records or third-party services store no data. The embedded Google Map has its own data handling, described below."
    ]
  },
  {
    "title": "7. Visitor statistics on Lovable-hosted versions",
    "paragraphs": [
      "This section applies when a version of the website is served with Lovable visitor analytics. Enabling analytics in the Lovable project does not establish that the separately deployed Vercel or IONOS website includes that script.",
      "Lovable analytics uses no cookies, stores nothing on the visitor’s device, does not keep IP addresses and does not identify visitors or recognise returning visitors.",
      "It records pages visited, where visitors came from, their country, browser, operating system and device type, how long they stay, how fast pages load and errors. Click tracking is enabled for Lovable-hosted versions and records which buttons and links are clicked, identified by their position rather than their text. The website does not currently send additional custom app events to Lovable.",
      "No analytics consent banner is currently configured in this website. Where Lovable analytics is present, these visits, timing, performance, errors and enabled clicks are recorded for every visitor. This notice describes the data handling; it does not create an opt-in mechanism.",
      "Detailed data is kept for 90 days and daily summaries for one year. Lovable collects this data for us. Lovable’s privacy policy explains how it handles it: https://lovable.dev/privacy."
    ]
  },
  {
    "title": "8. Embedded Google Map and external services",
    "paragraphs": [
      "The contact page embeds Google Maps. When the map loads, your browser connects directly to Google and sends connection information, including your IP address and potentially browser information and the referring page. Google may use cookies or other device storage according to its settings and policies, and may process data outside the EU/EEA.",
      "The map is not currently held behind a consent or click-to-load control. Its processing is separate from the website’s language preference and Lovable statistics. The Embassy address is also available as text, so the map is not needed to obtain that information. Google’s privacy policy is available at https://policies.google.com/privacy.",
      "External links to other websites, including social networks, open services with their own privacy practices. A link is not itself an embedded social tracking pixel. The staff content manager uses GitHub sign-in through an OAuth service and loads Decap CMS from a content-delivery service; these services process staff connection and sign-in information. Visitors do not need a staff account to use the public website."
    ]
  },
  {
    "title": "9. Processing outside the EU/EEA",
    "paragraphs": [
      "Hosting, email, maps and other service providers may use infrastructure or subprocessors outside the EU/EEA. A consular matter may also require relevant data to be sent to competent authorities in Mozambique. The location and legal basis of a particular transfer depend on the service and circumstances.",
      "Where the GDPR applies, transfers require an applicable mechanism under Chapter V, such as an adequacy decision or appropriate safeguards. An Article 49 exception is not a general authorisation for routine transfers, and diplomatic or consular functions do not by themselves replace these requirements. Contact the Embassy for information about the safeguards applicable to your matter."
    ]
  },
  {
    "title": "10. How long information is kept",
    "paragraphs": [
      "Contact and appointment correspondence is kept for handling the matter and any applicable recordkeeping, legal or security requirements. Deletion must take account of copies in main and support mailboxes, sent items, backups and any consular file; submitting a request does not automatically delete those copies.",
      "Consular records follow the applicable procedure and archiving requirements. Provider logs and backups follow their configured retention arrangements. No single verified retention period for these records is stated here; contact the Embassy for the period or criteria applicable to your information. The separate Lovable statistics periods are stated in section 7."
    ]
  },
  {
    "title": "11. Your data protection rights",
    "paragraphs": [
      "Where the GDPR applies, and subject to its conditions and lawful exceptions, you may request access and a copy, rectification, erasure, restriction, portability where applicable, or object to relevant processing. Where processing relies on consent, you may withdraw it for the future without affecting prior lawful processing.",
      "Send requests to info@mozambique-embassy.de. The Embassy may need proportionate identity verification before disclosing or changing records. Where Article 12 GDPR applies, the normal response period is one month, with extensions permitted in specified circumstances. Erasure is not unconditional where records must lawfully be retained.",
      "You may lodge a complaint with the competent data protection authority where applicable, including the Berlin Commissioner for Data Protection and Freedom of Information (https://www.datenschutz-berlin.de/). The applicable supervisory arrangements depend on the Embassy’s legal status and the processing concerned."
    ]
  },
  {
    "title": "12. Security, changes and further information",
    "paragraphs": [
      "The website is intended to be accessed over HTTPS. Appropriate access controls, secure configuration and ongoing maintenance are important for protecting correspondence; no internet transmission or email system can be guaranteed completely secure.",
      "The forms do not make automated consular decisions or profile applicants. The Embassy may update this notice when services or data-handling practices change. The date above identifies this version. Contact the Embassy for procedure-specific information, retention details or questions about a provider used for your request."
    ]
  }
],
  },
  terms: {
    title: "Terms of Use",
    subtitle: "Conditions governing the use of this website and its online forms",
    updated: "Last updated: 11 November 2026",
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          `These terms explain the use of the website of the ${CONTACT.name} and its enquiry forms. Reading public information does not itself create a contract or a consular application. The form checkbox acknowledges these terms and the privacy notice for a submission; it is not consent to unrelated tracking.`,
        ],
      },
      {
        title: "2. Purpose of the website",
        paragraphs: [
          "This website provides general information about the Embassy, Mozambique and consular services. The information is provided for guidance only and does not constitute legally binding advice or a decision on any consular application.",
        ],
      },
      {
        title: "3. No guarantee of accuracy",
        paragraphs: [
          "We take great care to keep the published information accurate and up to date. Nevertheless, requirements, fees and processing times may change at short notice. Binding information is provided only by the Consular Section in writing on request.",
        ],
      },
      {
        title: "4. Contact and appointment forms",
        bullets: [
          "Submitting a contact message or an appointment request does not create a confirmed appointment or any entitlement to a service.",
          "An automatic receipt email confirms delivery of a request, not an approved appointment, visa, passport or other consular decision. An appointment is confirmed only when the Embassy expressly confirms it.",
          "Please provide accurate and complete information; incorrect data may delay or prevent processing.",
          "Misuse of the forms — in particular spam, automated submissions or offensive content — is prohibited and may be blocked.",
        ],
      },
      {
        title: "5. Intellectual property",
        paragraphs: [
          "Content may be protected by copyright or other rights held by the Embassy or third parties. Applicable licences and statutory permissions remain in force; no ownership of third-party material or restriction of legally permitted use is asserted here. Do not use the Embassy name, national emblem or flag to falsely suggest official approval.",
        ],
      },
      {
        title: "6. Links to third-party websites",
        paragraphs: [
          "Links to external websites are provided for convenience. At the time of linking, no unlawful content was identified. We have no ongoing control over external content and therefore accept no liability for it; responsibility lies with the respective provider.",
        ],
      },
      {
        title: "7. Availability and liability",
        paragraphs: [
          "We aim to keep information and forms available but cannot guarantee uninterrupted access or immediate email delivery. If a submission fails or no receipt arrives, contact the Embassy through another channel; avoid repeated submissions containing sensitive information. Nothing in these terms excludes liability or rights that cannot lawfully be excluded.",
        ],
      },
      {
        title: "8. Data protection",
        paragraphs: [
          "Personal data submitted through this website is processed in accordance with our Privacy Policy, which forms an integral part of these terms.",
        ],
      },
      {
        title: "9. Applicable law and amendments",
        paragraphs: [
          "Applicable law, jurisdiction and diplomatic privileges or immunities depend on the matter and relevant legal rules. These website terms do not determine or waive the Embassy’s status, replace consular law, or remove mandatory rights. Changes apply prospectively from publication; the date above identifies this version.",
        ],
      },
      {
        title: "10. Contact",
        paragraphs: [
          `${CONTACT.name}`,
          `${CONTACT.address}`,
          `Telephone: ${CONTACT.phone} · Email: ${CONTACT.email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility Statement",
    subtitle: "Our commitment to a website that everyone can use",
    updated: "Last updated: 30 July 2026",
    sections: [
      {
        title: "Our commitment",
        paragraphs: [
          `The ${CONTACT.name} aims to make this website usable by as many people as possible, including visitors who use assistive technology. We orient our work on the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.`,
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
          `If you encounter a barrier on this website, or if you need information in an alternative format, please contact us at ${CONTACT.email} or ${CONTACT.phone}. We aim to respond within five working days and to provide the requested information in an accessible way.`,
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
    subtitle: "Wie die Botschaft Ihre personenbezogenen Daten erhebt, nutzt und schützt",
    updated: "Letzte Aktualisierung: 11. November 2026",
    sections: [
  {
    "title": "1. Verantwortung und Kontakt",
    "paragraphs": [
      "Die Botschaft der Republik Mosambik in Berlin ist für die Bearbeitung der über diese Website eingereichten Anfragen und konsularischen Anliegen verantwortlich. Kontakt: Stromstraße 47, 10551 Berlin, Deutschland; Telefon +49 30 3987 6500; E-Mail info@mozambique-embassy.de.",
      "Richten Sie Datenschutzfragen oder Anträge unter dem Stichwort „Datenschutz“ an diese Kontaktdaten. Machen Sie ausreichende Angaben zur Zuordnung des Vorgangs, senden Sie jedoch keine Ausweisdokumente, sofern diese nicht über einen geeigneten Kanal angefordert wurden."
    ]
  },
  {
    "title": "2. Von Ihnen bereitgestellte Angaben",
    "paragraphs": [
      "Das Kontaktformular erfasst Anrede, Vorname, Nachname, E-Mail-Adresse, Betreff und Nachricht. Das Terminformular erfasst Name, E-Mail-Adresse, Telefonnummer, gewünschte Dienstleistung, Wunschtag und Uhrzeit sowie gegebenenfalls Geburtsdatum, Angaben zur Dokumentengültigkeit, Visa- oder Ausweisart und weitere Informationen.",
      "Geben Sie nur die für Ihr Anliegen erforderlichen Informationen an. Übermitteln Sie in allgemeinen Nachrichten keine Passwörter, Zahlungskartendaten, vollständigen Ausweisnummern, Gesundheitsdaten oder andere sensible Angaben. Falls weitere Unterlagen benötigt werden, erläutert die Konsularabteilung den geeigneten Übermittlungsweg."
    ]
  },
  {
    "title": "3. Zwecke und Rechtsgrundlagen",
    "paragraphs": [
      "Die Angaben dienen der Beantwortung von Anfragen, der Prüfung und Koordinierung von Terminanfragen, einschlägigen konsularischen Aufgaben sowie dem Betrieb und der Sicherheit der Website. Eine Formularnachricht ist kein förmlicher Visa- oder Passantrag, sofern die Konsularabteilung dies nicht ausdrücklich mitteilt.",
      "Soweit die DSGVO anwendbar ist, setzt die Verarbeitung für öffentliche Aufgaben oder rechtliche Pflichten eine einschlägige Rechtsgrundlage nach Art. 6 Abs. 1 lit. e oder c voraus. Art. 6 Abs. 1 lit. b gilt nur bei Erforderlichkeit für einen Vertrag oder angeforderte vorvertragliche Maßnahmen. Art. 6 Abs. 1 lit. f gilt nur, soweit zulässig, und nicht für Behörden bei der Erfüllung ihrer öffentlichen Aufgaben. Die Rechtsgrundlage eines konsularischen Verfahrens hängt vom Verfahren und dem anwendbaren Recht ab; nähere Informationen erhalten Sie bei der Botschaft.",
      "Das Kontrollkästchen bestätigt die Nutzungsbedingungen und die Kenntnisnahme der Datenschutzhinweise; es ist keine pauschale Einwilligung in Tracking oder zweckfremde Datenverwendungen. Erforderliche Angaben ermöglichen die Antwort oder Terminabstimmung. Alternativ können Sie die Botschaft telefonisch oder per E-Mail kontaktieren."
    ]
  },
  {
    "title": "4. Website-Hosting und technische Protokolle",
    "paragraphs": [
      "Die Website und die Funktionen zur Formularverarbeitung werden derzeit bei Vercel gehostet. IONOS stellt den E-Mail-Dienst der Botschaft bereit und kann zusätzlich eine separat bereitgestellte statische Version dieser Website hosten.",
      "Beim Aufruf einer Seite oder der Übermittlung eines Formulars erhält der jeweilige Anbieter Verbindungsdaten wie IP-Adresse, Anfragezeit und angeforderte Adresse. Je nach Konfiguration können auch Browserangaben, Referrer, Antwortdaten und Fehlermeldungen in Zugriffs- oder Sicherheitsprotokollen erscheinen. Diese dienen Bereitstellung, Sicherheit und Fehleranalyse und sind von den unten beschriebenen Besucherstatistiken getrennt.",
      "Speicherort und Speicherdauer der Anbieterprotokolle hängen vom Hosting-Vertrag und der Konfiguration ab. Informationen zu Protokollen Ihrer Anfrage erhalten Sie bei der Botschaft. Datenschutzhinweise der Anbieter: https://vercel.com/legal/privacy-policy und https://www.ionos.com/terms-gtc/privacy-policy/."
    ]
  },
  {
    "title": "5. Formular-E-Mails und Zugriff auf Korrespondenz",
    "paragraphs": [
      "Die Formulardaten werden von den E-Mail-Funktionen bei Vercel verarbeitet und über IONOS an das konfigurierte Hauptpostfach sowie gegebenenfalls das Support-Postfach der Botschaft gesendet. Eine Eingangsbestätigung geht an die angegebene E-Mail-Adresse. Auch Ihr eigener E-Mail-Anbieter verarbeitet diese Bestätigung.",
      "Die Formulare legen derzeit keinen Eintrag in einer Website-Datenbank an. Informationen verbleiben dennoch in empfangenden Postfächern, gesendeten Nachrichten, einschlägigen E-Mail-Protokollen und Sicherungen sowie gegebenenfalls in angelegten konsularischen Akten. Der Zugriff soll auf befugte Mitarbeitende und erforderliche Dienstleister beschränkt sein. Daten werden nicht für Werbezwecke verkauft.",
      "E-Mail ist kein Ende-zu-Ende-verschlüsseltes Dokumentenportal. Übermitteln Sie sensible Unterlagen nicht über die allgemeinen Formulare. Zur Bearbeitung können relevante Angaben an zuständige mosambikanische Behörden weitergegeben werden."
    ]
  },
  {
    "title": "6. Speicherung in Ihrem Browser",
    "paragraphs": [
      "Die Website speichert Ihre Sprachauswahl (Englisch, Deutsch oder Portugiesisch) im lokalen Browserspeicher unter dem Schlüssel „language“. Sie bleibt bestehen, bis Sie sie ändern oder die Browserdaten der Website löschen. Die Auswahl dient nicht Ihrer Identifizierung oder der Aufzeichnung Ihres Browserverlaufs.",
      "Im Website-Code sind keine Werbepixel oder Werkzeuge für Werbe-Cookies eingerichtet. Dies bedeutet nicht, dass Hosting-Protokolle, E-Mail-Systeme oder Dienste Dritter keine Daten speichern. Für die eingebettete Google-Karte gelten die unten erläuterten eigenen Datenverarbeitungen."
    ]
  },
  {
    "title": "7. Besucherstatistiken bei Lovable-gehosteten Versionen",
    "paragraphs": [
      "Dieser Abschnitt gilt, wenn eine Version der Website mit Lovable-Besucheranalysen ausgeliefert wird. Die Aktivierung im Lovable-Projekt belegt nicht, dass die separat bei Vercel oder IONOS bereitgestellte Website dieses Skript enthält.",
      "Lovable-Analysen verwenden keine Cookies, speichern nichts auf dem Gerät der Besucher, bewahren keine IP-Adressen auf und identifizieren Besucher nicht. Wiederkehrende Besucher werden nicht erkannt.",
      "Erfasst werden besuchte Seiten, Herkunft der Besucher, Land, Browser, Betriebssystem und Gerätetyp, Aufenthaltsdauer, Ladegeschwindigkeit und Fehler. Für Lovable-gehostete Versionen ist die Klickerfassung aktiviert: Klicks auf Schaltflächen und Links werden anhand ihrer Position und nicht ihres Textes erfasst. Die Website sendet derzeit keine zusätzlichen eigenen App-Ereignisse an Lovable.",
      "In dieser Website ist derzeit kein Einwilligungsbanner für Analysen eingerichtet. Wo Lovable-Analysen vorhanden sind, werden diese Seitenbesuche, Zeitangaben, Leistungsdaten, Fehler und aktivierten Klicks für alle Besucher erfasst. Diese Erklärung beschreibt die Verarbeitung und stellt keine Einwilligungsmöglichkeit bereit.",
      "Detaillierte Daten werden 90 Tage und tägliche Zusammenfassungen ein Jahr aufbewahrt. Lovable erhebt diese Daten für uns. Die Datenschutzerklärung von Lovable erläutert den Umgang damit: https://lovable.dev/privacy."
    ]
  },
  {
    "title": "8. Eingebettete Google-Karte und externe Dienste",
    "paragraphs": [
      "Die Kontaktseite bettet Google Maps ein. Sobald die Karte geladen wird, verbindet sich Ihr Browser direkt mit Google und übermittelt Verbindungsdaten, einschließlich Ihrer IP-Adresse sowie möglicherweise Browserangaben und der verweisenden Seite. Google kann nach seinen Einstellungen und Richtlinien Cookies oder anderen Gerätespeicher verwenden und Daten außerhalb der EU/des EWR verarbeiten.",
      "Die Karte wird derzeit nicht durch eine Einwilligungs- oder Klick-zum-Laden-Abfrage zurückgehalten. Diese Verarbeitung ist von Sprachauswahl und Lovable-Statistiken getrennt. Die Anschrift steht auch als Text zur Verfügung; die Karte ist dafür nicht erforderlich. Datenschutzhinweise von Google: https://policies.google.com/privacy.",
      "Externe Links, auch zu sozialen Netzwerken, öffnen Dienste mit eigenen Datenschutzpraktiken. Ein Link ist selbst kein eingebettetes Social-Tracking-Pixel. Die Personal-Inhaltsverwaltung nutzt GitHub-Anmeldung über einen OAuth-Dienst und lädt Decap CMS von einem Inhaltsbereitstellungsdienst; diese Dienste verarbeiten Verbindungs- und Anmeldedaten des Personals. Für die öffentliche Website ist kein Personalkonto erforderlich."
    ]
  },
  {
    "title": "9. Verarbeitung außerhalb der EU/des EWR",
    "paragraphs": [
      "Hosting-, E-Mail-, Karten- und andere Dienstleister können Infrastruktur oder Unterauftragnehmer außerhalb der EU/des EWR einsetzen. Konsularische Anliegen können außerdem die Übermittlung relevanter Angaben an zuständige Behörden in Mosambik erfordern. Ort und Rechtsgrundlage einer Übermittlung hängen vom Dienst und den Umständen ab.",
      "Soweit die DSGVO anwendbar ist, benötigen Übermittlungen einen einschlägigen Mechanismus nach Kapitel V, etwa einen Angemessenheitsbeschluss oder geeignete Garantien. Eine Ausnahme nach Art. 49 ist keine allgemeine Erlaubnis für regelmäßige Übermittlungen; diplomatische oder konsularische Aufgaben ersetzen diese Anforderungen nicht von selbst. Informationen zu den für Ihren Vorgang geltenden Garantien erhalten Sie bei der Botschaft."
    ]
  },
  {
    "title": "10. Aufbewahrung",
    "paragraphs": [
      "Kontakt- und Terminkorrespondenz wird zur Bearbeitung sowie für einschlägige Dokumentations-, Rechts- oder Sicherheitsanforderungen aufbewahrt. Bei einer Löschung sind Kopien in Haupt- und Support-Postfächern, gesendeten Nachrichten, Sicherungen und konsularischen Akten zu berücksichtigen; eine Anfrage löscht diese Kopien nicht automatisch.",
      "Für konsularische Akten gelten die jeweiligen Verfahrens- und Archivierungsvorgaben. Anbieterprotokolle und Sicherungen folgen den eingerichteten Aufbewahrungsregeln. Hier wird keine einheitliche verifizierte Frist für diese Daten angegeben; fragen Sie die Botschaft nach der für Ihre Angaben geltenden Dauer oder den Kriterien. Die gesonderten Lovable-Fristen stehen in Abschnitt 7."
    ]
  },
  {
    "title": "11. Ihre Datenschutzrechte",
    "paragraphs": [
      "Soweit die DSGVO anwendbar ist und unter deren Voraussetzungen und rechtmäßigen Ausnahmen können Sie Auskunft und eine Kopie, Berichtigung, Löschung, Einschränkung, gegebenenfalls Übertragbarkeit verlangen oder einschlägigen Verarbeitungen widersprechen. Eine Einwilligung kann für die Zukunft widerrufen werden, ohne die Rechtmäßigkeit früherer Verarbeitung zu berühren.",
      "Richten Sie Anträge an info@mozambique-embassy.de. Vor Auskunft oder Änderungen kann eine verhältnismäßige Identitätsprüfung erforderlich sein. Soweit Art. 12 DSGVO gilt, beträgt die reguläre Antwortfrist einen Monat; unter bestimmten Voraussetzungen ist eine Verlängerung zulässig. Bei rechtmäßigen Aufbewahrungspflichten besteht kein uneingeschränkter Löschungsanspruch.",
      "Soweit anwendbar können Sie sich bei der zuständigen Datenschutzaufsicht beschweren, unter anderem bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit (https://www.datenschutz-berlin.de/). Die Zuständigkeit hängt vom rechtlichen Status der Botschaft und der betreffenden Verarbeitung ab."
    ]
  },
  {
    "title": "12. Sicherheit, Änderungen und weitere Informationen",
    "paragraphs": [
      "Der Zugriff auf die Website soll über HTTPS erfolgen. Geeignete Zugriffskontrollen, sichere Konfiguration und laufende Wartung sind für den Schutz der Korrespondenz wichtig; eine vollständig sichere Internet- oder E-Mail-Übermittlung kann nicht garantiert werden.",
      "Die Formulare treffen keine automatisierten konsularischen Entscheidungen und erstellen keine Bewerberprofile. Die Botschaft kann diese Hinweise bei Änderungen der Dienste oder Verarbeitung aktualisieren. Das Datum oben kennzeichnet die Fassung. Verfahrensbezogene Hinweise, Aufbewahrungsdetails und Informationen zu beteiligten Anbietern erhalten Sie bei der Botschaft."
    ]
  }
],
  },
  terms: {
    title: "Nutzungsbedingungen",
    subtitle: "Bedingungen für die Nutzung dieser Website und ihrer Online-Formulare",
    updated: "Letzte Aktualisierung: 11. November 2026",
    sections: [
      {
        title: "1. Geltungsbereich",
        paragraphs: [
          "Diese Bedingungen erläutern die Nutzung der Website der Botschaft der Republik Mosambik in Berlin und ihrer Anfrageformulare. Das Lesen öffentlicher Informationen begründet allein keinen Vertrag und keinen konsularischen Antrag. Das Kontrollkästchen bestätigt die Bedingungen und Datenschutzhinweise für eine Übermittlung; es ist keine Einwilligung in zweckfremdes Tracking.",
        ],
      },
      {
        title: "2. Zweck der Website",
        paragraphs: [
          "Diese Website bietet allgemeine Informationen über die Botschaft, Mosambik und konsularische Dienstleistungen. Die Informationen dienen ausschließlich der Orientierung und stellen keine rechtsverbindliche Auskunft oder Entscheidung über einen konsularischen Antrag dar.",
        ],
      },
      {
        title: "3. Keine Gewähr für Richtigkeit",
        paragraphs: [
          "Wir bemühen uns, die veröffentlichten Informationen aktuell und korrekt zu halten. Anforderungen, Gebühren und Bearbeitungszeiten können sich jedoch kurzfristig ändern. Verbindliche Auskünfte erteilt ausschließlich die Konsularabteilung auf Anfrage in Textform.",
        ],
      },
      {
        title: "4. Kontakt- und Terminformulare",
        bullets: [
          "Das Absenden einer Nachricht oder Terminanfrage begründet weder einen bestätigten Termin noch einen Anspruch auf eine Dienstleistung.",
          "Eine automatische Eingangsbestätigung bestätigt die Übermittlung, nicht einen genehmigten Termin, ein Visum, einen Pass oder eine andere konsularische Entscheidung. Ein Termin ist erst bestätigt, wenn die Botschaft ihn ausdrücklich bestätigt.",
          "Bitte machen Sie vollständige und zutreffende Angaben; fehlerhafte Daten können die Bearbeitung verzögern oder verhindern.",
          "Der Missbrauch der Formulare – insbesondere Spam, automatisierte Übermittlungen oder beleidigende Inhalte – ist untersagt und kann gesperrt werden.",
        ],
      },
      {
        title: "5. Urheberrecht",
        paragraphs: [
          "Inhalte können durch Urheberrechte oder andere Rechte der Botschaft oder Dritter geschützt sein. Einschlägige Lizenzen und gesetzliche Nutzungsrechte bleiben unberührt; Eigentum an Material Dritter oder Einschränkungen gesetzlich zulässiger Nutzung werden hier nicht behauptet. Name der Botschaft, Staatswappen und Flagge dürfen keine falsche amtliche Billigung nahelegen.",
        ],
      },
      {
        title: "6. Links zu Websites Dritter",
        paragraphs: [
          "Links zu externen Websites dienen der Information. Zum Zeitpunkt der Verlinkung waren keine rechtswidrigen Inhalte erkennbar. Auf die weitere Gestaltung externer Inhalte haben wir keinen Einfluss und übernehmen dafür keine Haftung; verantwortlich ist der jeweilige Anbieter.",
        ],
      },
      {
        title: "7. Verfügbarkeit und Haftung",
        paragraphs: [
          "Wir bemühen uns um verfügbare Informationen und Formulare, können jedoch keinen unterbrechungsfreien Zugriff oder sofortige E-Mail-Zustellung garantieren. Bei fehlgeschlagener Übermittlung oder ausbleibender Bestätigung kontaktieren Sie die Botschaft auf anderem Wege; vermeiden Sie wiederholte Übermittlungen sensibler Angaben. Gesetzlich nicht ausschließbare Haftung und Rechte bleiben unberührt.",
        ],
      },
      {
        title: "8. Datenschutz",
        paragraphs: [
          "Über diese Website übermittelte personenbezogene Daten werden gemäß unserer Datenschutzerklärung verarbeitet, die Bestandteil dieser Bedingungen ist.",
        ],
      },
      {
        title: "9. Anwendbares Recht und Änderungen",
        paragraphs: [
          "Anwendbares Recht, Zuständigkeit und diplomatische Vorrechte oder Immunitäten richten sich nach dem jeweiligen Sachverhalt und den einschlägigen Regeln. Diese Website-Bedingungen bestimmen oder verzichten nicht auf den Status der Botschaft, ersetzen kein Konsularrecht und beschränken keine zwingenden Rechte. Änderungen gelten ab Veröffentlichung für die Zukunft; das Datum oben kennzeichnet diese Fassung.",
        ],
      },
      {
        title: "10. Kontakt",
        paragraphs: [
          "Botschaft der Republik Mosambik in Berlin",
          `${CONTACT.address}`,
          `Telefon: ${CONTACT.phone} · E-Mail: ${CONTACT.email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Erklärung zur Barrierefreiheit",
    subtitle: "Unser Anspruch: eine Website, die alle nutzen können",
    updated: "Letzte Aktualisierung: 30. Juli 2026",
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
          `Wenn Sie auf dieser Website auf eine Barriere stoßen oder Informationen in einem alternativen Format benötigen, wenden Sie sich bitte an ${CONTACT.email} oder ${CONTACT.phone}. Wir bemühen uns, innerhalb von fünf Werktagen zu antworten und die gewünschten Informationen zugänglich bereitzustellen.`,
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
    subtitle: "Como a Embaixada recolhe, utiliza e protege os seus dados pessoais",
    updated: "Última atualização: 11 de novembro de 2026",
    sections: [
  {
    "title": "1. Responsabilidade e contacto",
    "paragraphs": [
      "A Embaixada da República de Moçambique em Berlim é responsável pelo tratamento dos pedidos de informação e assuntos consulares apresentados através deste sítio. Contacto: Stromstraße 47, 10551 Berlim, Alemanha; telefone +49 30 3987 6500; e-mail info@mozambique-embassy.de.",
      "Envie questões ou pedidos relativos à privacidade para estes contactos, indicando «Proteção de Dados». Forneça informação suficiente para identificar o assunto, mas não envie documentos de identificação salvo se forem solicitados através de um canal adequado."
    ]
  },
  {
    "title": "2. Informações que fornece",
    "paragraphs": [
      "O formulário de contacto recolhe tratamento, nome próprio, apelido, endereço de e-mail, assunto e mensagem. O formulário de marcação recolhe nome, e-mail, telefone, serviço pretendido, data e hora preferidas e, quando fornecidos, data de nascimento, informações sobre validade de documentos, tipo de visto ou identificação e detalhes adicionais.",
      "Forneça apenas os dados necessários ao seu pedido. Não inclua palavras-passe, dados de cartões de pagamento, números completos de documentos de identificação, informações de saúde ou outros dados sensíveis numa mensagem geral. Caso sejam necessários mais documentos, a Secção Consular indicará como enviá-los."
    ]
  },
  {
    "title": "3. Finalidades e fundamentos jurídicos",
    "paragraphs": [
      "As informações são utilizadas para responder a pedidos, analisar e coordenar marcações, exercer funções consulares pertinentes e assegurar o funcionamento e a segurança do sítio. Uma submissão não constitui um pedido formal de visto ou passaporte, salvo indicação expressa da Secção Consular.",
      "Quando o RGPD se aplica, o tratamento para uma missão de interesse público ou obrigação legal exige o fundamento aplicável do artigo 6.º, n.º 1, alínea e) ou c). A alínea b) aplica-se apenas quando necessário a um contrato ou diligências pré-contratuais solicitadas. A alínea f) aplica-se apenas quando legalmente admissível e não às autoridades públicas no exercício das suas atribuições públicas. O fundamento de um procedimento consular depende desse procedimento e da lei aplicável; pode solicitar esclarecimentos à Embaixada.",
      "A caixa do formulário confirma os termos e a tomada de conhecimento das informações de privacidade; não constitui consentimento geral para rastreio ou utilizações alheias ao pedido. Os dados obrigatórios permitem responder ou coordenar o pedido. Em alternativa, contacte a Embaixada por telefone ou e-mail."
    ]
  },
  {
    "title": "4. Alojamento e registos técnicos",
    "paragraphs": [
      "O sítio e as funções de tratamento dos formulários estão atualmente alojados na Vercel. A IONOS presta o serviço de e-mail da Embaixada e pode também alojar uma versão estática deste sítio, disponibilizada separadamente.",
      "Quando o navegador solicita uma página ou envia um formulário, o fornecedor recebe dados de ligação, como endereço IP, hora do pedido e endereço solicitado. Conforme as definições do fornecedor, os registos de acesso ou segurança podem incluir navegador, referenciador, dados de resposta e erros de diagnóstico. Estes registos apoiam a disponibilização, segurança e resolução de problemas e são distintos das estatísticas abaixo.",
      "A localização e o prazo de conservação dos registos dependem do serviço e da configuração. Contacte a Embaixada para informações sobre registos relativos ao seu pedido. Informações de privacidade dos fornecedores: https://vercel.com/legal/privacy-policy e https://www.ionos.com/terms-gtc/privacy-policy/."
    ]
  },
  {
    "title": "5. E-mails dos formulários e acesso à correspondência",
    "paragraphs": [
      "Os dados dos formulários são tratados pelas funções de e-mail na Vercel e enviados através da IONOS para a caixa principal configurada da Embaixada e, quando configurada, para a caixa de suporte. Uma confirmação de receção é enviada ao endereço que indicar. O seu próprio fornecedor de e-mail também trata essa confirmação.",
      "Estes formulários não criam atualmente um registo numa base de dados do sítio. As informações permanecem, contudo, nas caixas de correio, mensagens enviadas, registos de e-mail e cópias de segurança aplicáveis e nos processos consulares criados para tratar o assunto. O acesso deve limitar-se ao pessoal autorizado e aos fornecedores necessários. Os dados não são vendidos para publicidade.",
      "O e-mail não é um portal de documentos com encriptação de ponta a ponta. Não envie documentos sensíveis através dos formulários gerais. A Embaixada pode precisar de partilhar informações relevantes com as autoridades moçambicanas competentes para tratar o assunto consular."
    ]
  },
  {
    "title": "6. Armazenamento no navegador",
    "paragraphs": [
      "O sítio guarda o idioma escolhido (inglês, alemão ou português) no armazenamento local do navegador, sob a chave «language». A preferência mantém-se até ser alterada ou até eliminar os dados do sítio no navegador. Não é utilizada para o identificar nem para registar o seu histórico de navegação.",
      "O código do sítio não tem pixels publicitários nem ferramentas de cookies publicitários configurados. Isto não significa que registos de alojamento, e-mails ou serviços de terceiros não guardem dados. O mapa Google incorporado tem tratamento próprio, descrito abaixo."
    ]
  },
  {
    "title": "7. Estatísticas nas versões alojadas na Lovable",
    "paragraphs": [
      "Esta secção aplica-se quando uma versão do sítio é disponibilizada com as estatísticas de visitantes da Lovable. A ativação no projeto Lovable não comprova que o sítio alojado separadamente na Vercel ou IONOS inclua esse programa.",
      "As estatísticas da Lovable não utilizam cookies, não guardam nada no dispositivo do visitante, não conservam endereços IP e não identificam visitantes nem reconhecem visitantes recorrentes.",
      "Registam as páginas visitadas, a origem dos visitantes, país, navegador, sistema operativo e tipo de dispositivo, tempo de permanência, velocidade de carregamento e erros. O registo de cliques está ativado nas versões alojadas na Lovable e regista os botões e ligações clicados pela sua posição, não pelo texto. O sítio não envia atualmente eventos adicionais próprios da aplicação à Lovable.",
      "Não existe atualmente neste sítio um aviso de consentimento para estatísticas. Onde as estatísticas da Lovable estão presentes, as visitas, tempos, desempenho, erros e cliques ativados são registados para todos os visitantes. Este aviso descreve o tratamento; não cria um mecanismo de aceitação prévia.",
      "Os dados detalhados são conservados durante 90 dias e os resumos diários durante um ano. A Lovable recolhe estes dados por nossa conta. A política de privacidade da Lovable explica como os trata: https://lovable.dev/privacy."
    ]
  },
  {
    "title": "8. Mapa Google incorporado e serviços externos",
    "paragraphs": [
      "A página de contacto incorpora Google Maps. Quando o mapa carrega, o navegador liga-se diretamente à Google e transmite informações de ligação, incluindo o endereço IP e, possivelmente, dados do navegador e a página de origem. A Google pode utilizar cookies ou outro armazenamento no dispositivo, segundo as suas definições e políticas, e tratar dados fora da UE/EEE.",
      "O mapa não é atualmente condicionado por uma opção de consentimento ou de clicar para carregar. Este tratamento é distinto da preferência de idioma e das estatísticas Lovable. A morada também está disponível em texto, pelo que o mapa não é necessário para a consultar. Política de privacidade da Google: https://policies.google.com/privacy.",
      "As ligações externas, incluindo para redes sociais, abrem serviços com práticas de privacidade próprias. Uma ligação não é, por si só, um pixel de rastreio social incorporado. O gestor de conteúdos do pessoal usa autenticação GitHub através de um serviço OAuth e carrega Decap CMS de um serviço de distribuição de conteúdos; estes serviços tratam informações de ligação e autenticação do pessoal. Os visitantes não precisam de uma conta de funcionário para utilizar o sítio público."
    ]
  },
  {
    "title": "9. Tratamento fora da UE/EEE",
    "paragraphs": [
      "Os fornecedores de alojamento, e-mail, mapas e outros serviços podem utilizar infraestrutura ou subcontratantes fora da UE/EEE. Um assunto consular pode também exigir o envio de dados relevantes às autoridades competentes em Moçambique. A localização e o fundamento de uma transferência dependem do serviço e das circunstâncias.",
      "Quando o RGPD se aplica, as transferências exigem um mecanismo aplicável do capítulo V, como uma decisão de adequação ou garantias apropriadas. Uma exceção do artigo 49.º não é uma autorização geral para transferências regulares, e as funções diplomáticas ou consulares não substituem por si só estes requisitos. Contacte a Embaixada para informações sobre as garantias aplicáveis ao seu assunto."
    ]
  },
  {
    "title": "10. Prazos de conservação",
    "paragraphs": [
      "A correspondência de contacto e marcação é conservada para tratar o assunto e cumprir requisitos aplicáveis de documentação, legais ou de segurança. A eliminação deve considerar cópias nas caixas principal e de suporte, mensagens enviadas, cópias de segurança e processos consulares; apresentar um pedido não elimina automaticamente essas cópias.",
      "Os processos consulares seguem as regras do procedimento e arquivo aplicáveis. Os registos e cópias dos fornecedores seguem os prazos configurados. Não se indica aqui um prazo único verificado para estes registos; contacte a Embaixada para conhecer o prazo ou critérios aplicáveis aos seus dados. Os prazos específicos das estatísticas Lovable constam da secção 7."
    ]
  },
  {
    "title": "11. Os seus direitos de proteção de dados",
    "paragraphs": [
      "Quando o RGPD se aplica, sujeito às suas condições e exceções legais, pode solicitar acesso e cópia, retificação, apagamento, limitação, portabilidade quando aplicável, ou opor-se ao tratamento pertinente. Quando o tratamento se baseia no consentimento, pode retirá-lo para o futuro sem afetar o tratamento lícito anterior.",
      "Envie os pedidos para info@mozambique-embassy.de. A Embaixada pode precisar de verificar proporcionalmente a identidade antes de divulgar ou alterar registos. Quando se aplica o artigo 12.º do RGPD, o prazo normal de resposta é um mês, podendo ser prorrogado nas circunstâncias previstas. O apagamento não é incondicional quando os registos devam ser legalmente conservados.",
      "Pode apresentar reclamação à autoridade de proteção de dados competente, quando aplicável, incluindo a Autoridade de Proteção de Dados de Berlim (https://www.datenschutz-berlin.de/). A competência de supervisão depende do estatuto jurídico da Embaixada e do tratamento em causa."
    ]
  },
  {
    "title": "12. Segurança, alterações e informações adicionais",
    "paragraphs": [
      "O sítio destina-se a ser acedido através de HTTPS. Controlos de acesso apropriados, configuração segura e manutenção contínua são importantes para proteger a correspondência; nenhuma transmissão pela internet ou sistema de e-mail pode ser garantido como totalmente seguro.",
      "Os formulários não tomam decisões consulares automatizadas nem criam perfis de requerentes. A Embaixada pode atualizar este aviso quando os serviços ou práticas mudarem. A data acima identifica esta versão. Contacte a Embaixada para informações específicas de procedimentos, conservação ou fornecedores envolvidos no seu pedido."
    ]
  }
],
  },
  terms: {
    title: "Termos de Utilização",
    subtitle: "Condições de utilização deste sítio e dos seus formulários",
    updated: "Última atualização: 11 de novembro de 2026",
    sections: [
      {
        title: "1. Âmbito",
        paragraphs: [
          "Estes termos explicam a utilização do sítio da Embaixada da República de Moçambique em Berlim e dos formulários de pedidos. Consultar informação pública não cria, por si só, um contrato ou pedido consular. A caixa do formulário confirma os termos e o aviso de privacidade para a submissão; não constitui consentimento para rastreio alheio ao pedido.",
        ],
      },
      {
        title: "2. Finalidade do sítio",
        paragraphs: [
          "Este sítio disponibiliza informação geral sobre a Embaixada, Moçambique e os serviços consulares. A informação tem caráter meramente orientador e não constitui aconselhamento juridicamente vinculativo nem decisão sobre qualquer pedido consular.",
        ],
      },
      {
        title: "3. Ausência de garantia de exatidão",
        paragraphs: [
          "Envidamos os melhores esforços para manter a informação atualizada e correta. Contudo, requisitos, taxas e prazos podem alterar-se a curto prazo. Informação vinculativa é prestada exclusivamente pela Secção Consular, por escrito e mediante pedido.",
        ],
      },
      {
        title: "4. Formulários de contacto e marcação",
        bullets: [
          "O envio de uma mensagem ou pedido de marcação não constitui marcação confirmada nem direito à prestação de um serviço.",
          "Um e-mail automático confirma a receção do pedido, não uma marcação aprovada, visto, passaporte ou outra decisão consular. A marcação só está confirmada quando a Embaixada a confirmar expressamente.",
          "Forneça informação completa e correta; dados incorretos podem atrasar ou impedir o tratamento do pedido.",
          "É proibida a utilização abusiva dos formulários — em especial spam, envios automatizados ou conteúdos ofensivos — podendo o acesso ser bloqueado.",
        ],
      },
      {
        title: "5. Propriedade intelectual",
        paragraphs: [
          "Os conteúdos podem estar protegidos por direitos de autor ou outros direitos da Embaixada ou de terceiros. Mantêm-se as licenças aplicáveis e utilizações permitidas por lei; não se reivindica propriedade de material de terceiros nem se restringem usos legalmente permitidos. Não utilize o nome da Embaixada, emblema ou bandeira para sugerir falsamente aprovação oficial.",
        ],
      },
      {
        title: "6. Ligações para sítios de terceiros",
        paragraphs: [
          "As ligações para sítios externos são disponibilizadas por conveniência. No momento da ligação não foram identificados conteúdos ilícitos. Não controlamos os conteúdos externos e não assumimos responsabilidade por eles; a responsabilidade cabe ao respetivo fornecedor.",
        ],
      },
      {
        title: "7. Disponibilidade e responsabilidade",
        paragraphs: [
          "Procuramos manter as informações e formulários disponíveis, sem garantir acesso ininterrupto ou entrega imediata de e-mail. Se o envio falhar ou não receber confirmação, contacte a Embaixada por outro canal; evite envios repetidos com informações sensíveis. Estes termos não excluem responsabilidades ou direitos que não possam ser legalmente excluídos.",
        ],
      },
      {
        title: "8. Proteção de dados",
        paragraphs: [
          "Os dados pessoais enviados através deste sítio são tratados nos termos da nossa Política de Privacidade, que faz parte integrante destes termos.",
        ],
      },
      {
        title: "9. Lei aplicável e alterações",
        paragraphs: [
          "A lei aplicável, competência e privilégios ou imunidades diplomáticos dependem do assunto e das regras pertinentes. Estes termos não determinam nem renunciam ao estatuto da Embaixada, não substituem a lei consular nem afastam direitos imperativos. As alterações aplicam-se para o futuro a partir da publicação; a data acima identifica esta versão.",
        ],
      },
      {
        title: "10. Contacto",
        paragraphs: [
          "Embaixada da República de Moçambique em Berlim",
          `${CONTACT.address}`,
          `Telefone: ${CONTACT.phone} · E-mail: ${CONTACT.email}`,
        ],
      },
    ],
  },
  accessibility: {
    title: "Declaração de Acessibilidade",
    subtitle: "O nosso compromisso com um sítio que todos possam utilizar",
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
          `Se encontrar alguma barreira neste sítio ou necessitar de informação num formato alternativo, contacte-nos através de ${CONTACT.email} ou ${CONTACT.phone}. Procuramos responder no prazo de cinco dias úteis e disponibilizar a informação de forma acessível.`,
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
export const legalUpdatedIso = LAST_UPDATED_ISO;
