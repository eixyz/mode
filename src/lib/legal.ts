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

const LAST_UPDATED_ISO = "2026-07-30";

const en: LegalContent = {
  privacy: {
    title: "Privacy Policy",
    subtitle: "How the Embassy collects, uses and protects your personal data",
    updated: "Last updated: 30 July 2026",
    sections: [
      {
        title: "1. Controller",
        paragraphs: [
          `The controller responsible for the processing of personal data on this website is the ${CONTACT.name}, ${CONTACT.address}.`,
          `Telephone: ${CONTACT.phone} · Email: ${CONTACT.email}`,
          "For any question regarding data protection, please contact us using the details above and mark your message “Data Protection”.",
        ],
      },
      {
        title: "2. Data we process",
        paragraphs: ["We process the following categories of personal data:"],
        bullets: [
          "Contact form data: name, email address, telephone number (optional), subject and message content.",
          "Appointment request data: name, contact details, service requested, preferred date and time, and any additional information you provide.",
          "Technical data automatically transmitted by your browser: IP address, date and time of access, requested page, referrer, browser type and operating system (server log files of our hosting provider).",
        ],
      },
      {
        title: "3. Purposes and legal bases",
        bullets: [
          "Answering enquiries and processing appointment requests — Art. 6(1)(b) and (e) GDPR (steps prior to a service, performance of a task carried out in the public interest / consular duties).",
          "Operating, securing and maintaining the website — Art. 6(1)(f) GDPR (legitimate interest in a stable and secure website).",
          "Fulfilling legal and consular obligations — Art. 6(1)(c) GDPR.",
        ],
        paragraphs: [
          "Where you tick the terms and conditions box before submitting a form, the submission of the data is voluntary; without it we cannot process your request.",
        ],
      },
      {
        title: "4. Recipients and hosting",
        paragraphs: [
          "This website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. The hosting provider processes server log data on our behalf under a data processing agreement pursuant to Art. 28 GDPR.",
          "Form submissions are delivered by email to the Embassy through our email provider. Data is not sold, rented or transferred to third parties for advertising purposes.",
          "Personal data may be shared with the competent authorities of the Republic of Mozambique where this is necessary for the consular service you requested, or where we are legally obliged to do so.",
        ],
      },
      {
        title: "5. Transfers outside the EU/EEA",
        paragraphs: [
          "Where a consular matter requires it, data may be transmitted to authorities of the Republic of Mozambique. Such transfers take place only to the extent necessary for the diplomatic and consular functions of the Embassy under the Vienna Convention on Consular Relations and Art. 49 GDPR.",
        ],
      },
      {
        title: "6. Retention",
        bullets: [
          "Contact and appointment correspondence: deleted once the matter is fully settled, unless statutory retention obligations apply.",
          "Server log files: retained by the hosting provider for a short period for security and troubleshooting purposes.",
          "Consular files: retained in accordance with the applicable archiving rules of the Ministry of Foreign Affairs and Cooperation of Mozambique.",
        ],
      },
      {
        title: "7. Cookies and analytics",
        paragraphs: [
          "This website does not use advertising cookies, tracking pixels or third-party analytics. Only technically necessary local storage is used to remember your language preference. You can delete this at any time in your browser settings.",
        ],
      },
      {
        title: "8. Your rights",
        paragraphs: ["Under the GDPR you have the right to:"],
        bullets: [
          "access your personal data (Art. 15) and receive a copy;",
          "rectification of inaccurate data (Art. 16);",
          "erasure (Art. 17) and restriction of processing (Art. 18);",
          "data portability (Art. 20);",
          "object to processing based on legitimate interests (Art. 21);",
          "withdraw consent at any time with effect for the future;",
          "lodge a complaint with a supervisory authority, e.g. the Berlin Commissioner for Data Protection and Freedom of Information.",
        ],
      },
      {
        title: "9. Data security",
        paragraphs: [
          "The website is delivered over an encrypted TLS connection. We apply appropriate technical and organisational measures to protect your data against loss, misuse and unauthorised access. Please note that no transmission over the internet can be guaranteed to be completely secure.",
        ],
      },
      {
        title: "10. External links",
        paragraphs: [
          "Our website contains links to external websites. We have no influence on their content or data protection practices and accept no responsibility for them. The privacy policy of the respective provider applies.",
        ],
      },
      {
        title: "11. Contact",
        paragraphs: [
          `${CONTACT.name}`,
          `${CONTACT.address}`,
          `Telephone: ${CONTACT.phone}`,
          `Email: ${CONTACT.email}`,
        ],
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    subtitle: "Conditions governing the use of this website and its online forms",
    updated: "Last updated: 30 July 2026",
    sections: [
      {
        title: "1. Scope",
        paragraphs: [
          `These terms govern the use of the website of the ${CONTACT.name}. By using this website you accept these terms. If you do not agree, please refrain from using the website.`,
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
          "An appointment is valid only after written confirmation by the Embassy.",
          "Please provide accurate and complete information; incorrect data may delay or prevent processing.",
          "Misuse of the forms — in particular spam, automated submissions or offensive content — is prohibited and may be blocked.",
        ],
      },
      {
        title: "5. Intellectual property",
        paragraphs: [
          "All content on this website — texts, images, graphics, coats of arms and layout — is protected by copyright. Reproduction, distribution or public display beyond private, non-commercial use requires prior written permission. The national emblem and flag of the Republic of Mozambique may not be used in a manner suggesting official endorsement.",
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
          "We endeavour to keep the website available at all times but cannot guarantee uninterrupted access. Liability for damages arising from the use of this website is excluded except in cases of intent or gross negligence, or where liability is mandatory by law (e.g. injury to life, body or health).",
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
          "These terms are governed by German law, without prejudice to the privileges and immunities of the Embassy under the Vienna Convention on Diplomatic Relations. We may amend these terms; the version published on this page at the time of your visit applies.",
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
    updated: "Letzte Aktualisierung: 30. Juli 2026",
    sections: [
      {
        title: "1. Verantwortlicher",
        paragraphs: [
          `Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist die Botschaft der Republik Mosambik in Berlin, ${CONTACT.address}.`,
          `Telefon: ${CONTACT.phone} · E-Mail: ${CONTACT.email}`,
          "Bei Fragen zum Datenschutz wenden Sie sich bitte unter dem Stichwort „Datenschutz“ an die oben genannten Kontaktdaten.",
        ],
      },
      {
        title: "2. Welche Daten wir verarbeiten",
        paragraphs: ["Wir verarbeiten folgende Kategorien personenbezogener Daten:"],
        bullets: [
          "Kontaktformular: Name, E-Mail-Adresse, Telefonnummer (optional), Betreff und Nachrichtentext.",
          "Terminanfragen: Name, Kontaktdaten, gewünschte Dienstleistung, Wunschtermin sowie ergänzende Angaben.",
          "Technische Daten, die Ihr Browser automatisch übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer, Browsertyp und Betriebssystem (Server-Logfiles des Hosting-Anbieters).",
        ],
      },
      {
        title: "3. Zwecke und Rechtsgrundlagen",
        bullets: [
          "Beantwortung von Anfragen und Bearbeitung von Terminanfragen – Art. 6 Abs. 1 lit. b und e DSGVO (vorvertragliche Maßnahmen bzw. Wahrnehmung konsularischer Aufgaben im öffentlichen Interesse).",
          "Betrieb, Sicherheit und Wartung der Website – Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer stabilen und sicheren Website).",
          "Erfüllung rechtlicher und konsularischer Pflichten – Art. 6 Abs. 1 lit. c DSGVO.",
        ],
        paragraphs: [
          "Die Angabe der Daten erfolgt freiwillig; ohne die erforderlichen Angaben und die Bestätigung der Nutzungsbedingungen können wir Ihr Anliegen nicht bearbeiten.",
        ],
      },
      {
        title: "4. Empfänger und Hosting",
        paragraphs: [
          "Diese Website wird gehostet von der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland. Der Anbieter verarbeitet Server-Logdaten in unserem Auftrag auf Grundlage eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.",
          "Formularübermittlungen werden per E-Mail an die Botschaft zugestellt. Eine Weitergabe zu Werbezwecken findet nicht statt.",
          "Soweit es für die von Ihnen gewünschte konsularische Leistung erforderlich ist oder wir gesetzlich dazu verpflichtet sind, können Daten an die zuständigen Behörden der Republik Mosambik übermittelt werden.",
        ],
      },
      {
        title: "5. Übermittlung außerhalb der EU/des EWR",
        paragraphs: [
          "Sofern eine konsularische Angelegenheit dies erfordert, können Daten an Behörden der Republik Mosambik übermittelt werden. Dies erfolgt nur im erforderlichen Umfang zur Wahrnehmung der diplomatischen und konsularischen Aufgaben der Botschaft im Sinne des Wiener Übereinkommens über konsularische Beziehungen und des Art. 49 DSGVO.",
        ],
      },
      {
        title: "6. Speicherdauer",
        bullets: [
          "Korrespondenz zu Anfragen und Terminen: Löschung nach abschließender Bearbeitung, sofern keine gesetzlichen Aufbewahrungsfristen bestehen.",
          "Server-Logfiles: kurzfristige Speicherung durch den Hosting-Anbieter zu Sicherheits- und Fehleranalysezwecken.",
          "Konsularvorgänge: Aufbewahrung nach den geltenden Archivierungsregeln des Ministeriums für auswärtige Angelegenheiten und Zusammenarbeit Mosambiks.",
        ],
      },
      {
        title: "7. Cookies und Analyse",
        paragraphs: [
          "Diese Website verwendet keine Werbe-Cookies, Tracking-Pixel oder Analysedienste Dritter. Es wird lediglich technisch notwendiger lokaler Speicher genutzt, um Ihre Sprachauswahl zu speichern. Sie können diesen jederzeit in Ihren Browsereinstellungen löschen.",
        ],
      },
      {
        title: "8. Ihre Rechte",
        paragraphs: ["Nach der DSGVO haben Sie das Recht auf:"],
        bullets: [
          "Auskunft über Ihre personenbezogenen Daten (Art. 15);",
          "Berichtigung unrichtiger Daten (Art. 16);",
          "Löschung (Art. 17) und Einschränkung der Verarbeitung (Art. 18);",
          "Datenübertragbarkeit (Art. 20);",
          "Widerspruch gegen Verarbeitungen auf Grundlage berechtigter Interessen (Art. 21);",
          "Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft;",
          "Beschwerde bei einer Aufsichtsbehörde, z. B. der Berliner Beauftragten für Datenschutz und Informationsfreiheit.",
        ],
      },
      {
        title: "9. Datensicherheit",
        paragraphs: [
          "Die Website wird über eine verschlüsselte TLS-Verbindung ausgeliefert. Wir treffen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten vor Verlust, Missbrauch und unbefugtem Zugriff. Eine vollständige Sicherheit der Datenübertragung im Internet kann jedoch nicht garantiert werden.",
        ],
      },
      {
        title: "10. Externe Links",
        paragraphs: [
          "Unsere Website enthält Links zu externen Websites. Auf deren Inhalte und Datenschutzpraxis haben wir keinen Einfluss und übernehmen dafür keine Verantwortung. Es gilt jeweils die Datenschutzerklärung des Anbieters.",
        ],
      },
      {
        title: "11. Kontakt",
        paragraphs: [
          "Botschaft der Republik Mosambik in Berlin",
          `${CONTACT.address}`,
          `Telefon: ${CONTACT.phone}`,
          `E-Mail: ${CONTACT.email}`,
        ],
      },
    ],
  },
  terms: {
    title: "Nutzungsbedingungen",
    subtitle: "Bedingungen für die Nutzung dieser Website und ihrer Online-Formulare",
    updated: "Letzte Aktualisierung: 30. Juli 2026",
    sections: [
      {
        title: "1. Geltungsbereich",
        paragraphs: [
          "Diese Bedingungen regeln die Nutzung der Website der Botschaft der Republik Mosambik in Berlin. Mit der Nutzung dieser Website erkennen Sie diese Bedingungen an. Falls Sie nicht einverstanden sind, bitten wir Sie, die Website nicht zu nutzen.",
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
          "Ein Termin ist erst nach schriftlicher Bestätigung durch die Botschaft gültig.",
          "Bitte machen Sie vollständige und zutreffende Angaben; fehlerhafte Daten können die Bearbeitung verzögern oder verhindern.",
          "Der Missbrauch der Formulare – insbesondere Spam, automatisierte Übermittlungen oder beleidigende Inhalte – ist untersagt und kann gesperrt werden.",
        ],
      },
      {
        title: "5. Urheberrecht",
        paragraphs: [
          "Alle Inhalte dieser Website – Texte, Bilder, Grafiken, Hoheitszeichen und Layout – sind urheberrechtlich geschützt. Vervielfältigung, Verbreitung oder öffentliche Wiedergabe über die private, nicht kommerzielle Nutzung hinaus bedürfen der vorherigen schriftlichen Zustimmung. Staatswappen und Flagge der Republik Mosambik dürfen nicht in einer Weise verwendet werden, die eine amtliche Billigung nahelegt.",
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
          "Wir bemühen uns um eine ständige Verfügbarkeit der Website, können jedoch keinen unterbrechungsfreien Zugriff garantieren. Die Haftung für Schäden aus der Nutzung dieser Website ist ausgeschlossen, soweit nicht Vorsatz oder grobe Fahrlässigkeit vorliegt oder eine gesetzlich zwingende Haftung besteht (z. B. bei Verletzung von Leben, Körper oder Gesundheit).",
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
          "Es gilt deutsches Recht, unbeschadet der Vorrechte und Immunitäten der Botschaft nach dem Wiener Übereinkommen über diplomatische Beziehungen. Wir können diese Bedingungen ändern; maßgeblich ist die zum Zeitpunkt Ihres Besuchs auf dieser Seite veröffentlichte Fassung.",
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
    updated: "Última atualização: 30 de julho de 2026",
    sections: [
      {
        title: "1. Responsável pelo tratamento",
        paragraphs: [
          `O responsável pelo tratamento dos dados pessoais neste sítio é a Embaixada da República de Moçambique em Berlim, ${CONTACT.address}.`,
          `Telefone: ${CONTACT.phone} · E-mail: ${CONTACT.email}`,
          "Para qualquer questão relativa à proteção de dados, contacte-nos através dos dados acima, indicando «Proteção de Dados».",
        ],
      },
      {
        title: "2. Dados que tratamos",
        paragraphs: ["Tratamos as seguintes categorias de dados pessoais:"],
        bullets: [
          "Formulário de contacto: nome, endereço de e-mail, telefone (facultativo), assunto e conteúdo da mensagem.",
          "Pedidos de marcação: nome, contactos, serviço pretendido, data e hora preferidas e informações adicionais fornecidas.",
          "Dados técnicos transmitidos automaticamente pelo navegador: endereço IP, data e hora do acesso, página consultada, referenciador, tipo de navegador e sistema operativo (registos do servidor do fornecedor de alojamento).",
        ],
      },
      {
        title: "3. Finalidades e fundamentos jurídicos",
        bullets: [
          "Resposta a pedidos de informação e tratamento de marcações — art. 6.º, n.º 1, alíneas b) e e) do RGPD (diligências prévias e exercício de funções consulares de interesse público).",
          "Funcionamento, segurança e manutenção do sítio — art. 6.º, n.º 1, alínea f) do RGPD (interesse legítimo num sítio estável e seguro).",
          "Cumprimento de obrigações legais e consulares — art. 6.º, n.º 1, alínea c) do RGPD.",
        ],
        paragraphs: [
          "O fornecimento dos dados é voluntário; sem os dados necessários e a aceitação dos termos não é possível dar seguimento ao seu pedido.",
        ],
      },
      {
        title: "4. Destinatários e alojamento",
        paragraphs: [
          "Este sítio é alojado pela IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Alemanha. O fornecedor trata os registos do servidor por nossa conta, ao abrigo de um contrato de subcontratação nos termos do art. 28.º do RGPD.",
          "As submissões dos formulários são entregues por e-mail à Embaixada. Os dados não são vendidos nem cedidos a terceiros para fins publicitários.",
          "Os dados pessoais podem ser partilhados com as autoridades competentes da República de Moçambique quando tal for necessário ao serviço consular solicitado ou legalmente exigido.",
        ],
      },
      {
        title: "5. Transferências para fora da UE/EEE",
        paragraphs: [
          "Quando um processo consular o exija, os dados podem ser transmitidos a autoridades da República de Moçambique, apenas na medida necessária ao exercício das funções diplomáticas e consulares da Embaixada, nos termos da Convenção de Viena sobre Relações Consulares e do art. 49.º do RGPD.",
        ],
      },
      {
        title: "6. Prazos de conservação",
        bullets: [
          "Correspondência de contacto e marcações: eliminada após a conclusão do assunto, salvo obrigações legais de conservação.",
          "Registos do servidor: conservados pelo fornecedor de alojamento por um período curto, para fins de segurança e diagnóstico.",
          "Processos consulares: conservados de acordo com as regras de arquivo do Ministério dos Negócios Estrangeiros e Cooperação de Moçambique.",
        ],
      },
      {
        title: "7. Cookies e estatísticas",
        paragraphs: [
          "Este sítio não utiliza cookies publicitários, pixels de rastreio nem serviços de análise de terceiros. Apenas é utilizado armazenamento local tecnicamente necessário para guardar a sua preferência de idioma, que pode eliminar a qualquer momento nas definições do navegador.",
        ],
      },
      {
        title: "8. Os seus direitos",
        paragraphs: ["Ao abrigo do RGPD, tem direito a:"],
        bullets: [
          "aceder aos seus dados pessoais (art. 15.º) e obter uma cópia;",
          "retificação de dados inexatos (art. 16.º);",
          "apagamento (art. 17.º) e limitação do tratamento (art. 18.º);",
          "portabilidade dos dados (art. 20.º);",
          "oposição a tratamentos baseados em interesses legítimos (art. 21.º);",
          "retirar o consentimento a qualquer momento, com efeitos para o futuro;",
          "apresentar reclamação junto de uma autoridade de controlo, por exemplo a Autoridade de Proteção de Dados de Berlim.",
        ],
      },
      {
        title: "9. Segurança dos dados",
        paragraphs: [
          "O sítio é disponibilizado através de ligação encriptada TLS. Aplicamos medidas técnicas e organizativas adequadas para proteger os seus dados contra perda, utilização indevida e acesso não autorizado. Note-se que nenhuma transmissão pela internet é totalmente segura.",
        ],
      },
      {
        title: "10. Ligações externas",
        paragraphs: [
          "O nosso sítio contém ligações para sítios externos. Não temos influência sobre os seus conteúdos ou práticas de privacidade e não assumimos qualquer responsabilidade por eles. Aplica-se a política de privacidade do respetivo fornecedor.",
        ],
      },
      {
        title: "11. Contacto",
        paragraphs: [
          "Embaixada da República de Moçambique em Berlim",
          `${CONTACT.address}`,
          `Telefone: ${CONTACT.phone}`,
          `E-mail: ${CONTACT.email}`,
        ],
      },
    ],
  },
  terms: {
    title: "Termos de Utilização",
    subtitle: "Condições de utilização deste sítio e dos seus formulários",
    updated: "Última atualização: 30 de julho de 2026",
    sections: [
      {
        title: "1. Âmbito",
        paragraphs: [
          "Os presentes termos regulam a utilização do sítio da Embaixada da República de Moçambique em Berlim. Ao utilizar este sítio, aceita estes termos. Caso não concorde, solicitamos que não utilize o sítio.",
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
          "A marcação só é válida após confirmação escrita da Embaixada.",
          "Forneça informação completa e correta; dados incorretos podem atrasar ou impedir o tratamento do pedido.",
          "É proibida a utilização abusiva dos formulários — em especial spam, envios automatizados ou conteúdos ofensivos — podendo o acesso ser bloqueado.",
        ],
      },
      {
        title: "5. Propriedade intelectual",
        paragraphs: [
          "Todos os conteúdos deste sítio — textos, imagens, grafismos, símbolos nacionais e layout — estão protegidos por direitos de autor. A reprodução, distribuição ou apresentação pública além do uso privado e não comercial carece de autorização prévia por escrito. O emblema e a bandeira da República de Moçambique não podem ser utilizados de forma que sugira aprovação oficial.",
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
          "Procuramos manter o sítio permanentemente disponível, mas não podemos garantir o acesso ininterrupto. Exclui-se a responsabilidade por danos decorrentes da utilização deste sítio, salvo em caso de dolo ou negligência grosseira ou quando a responsabilidade seja legalmente imperativa (por exemplo, lesão da vida, da integridade física ou da saúde).",
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
          "Aplica-se a lei alemã, sem prejuízo dos privilégios e imunidades da Embaixada ao abrigo da Convenção de Viena sobre Relações Diplomáticas. Podemos alterar os presentes termos; é aplicável a versão publicada nesta página no momento da sua visita.",
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
