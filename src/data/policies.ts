/* ============================================================
   Website Policy Pack — published policies (Part A).
   Source: SSF Website Policy Pack, effective 7 October 2026.
   These are published for transparency and legal compliance.
   ============================================================ */

export type Block =
  | string
  | { list: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { strong: string }

export type Section = { heading?: string; blocks: Block[] }

export type Policy = {
  slug: string
  nav: string
  title: string
  effective: string
  intro: string[]
  sections: Section[]
}

const EMAIL = 'connect@shikshasarathifoundation.org'
const OFFICE =
  'No. 1 & 2, Shop No. 2, 1st Floor, I Block, 1st Cross, R T Nagar, Bangalore North, Bangalore – 560032, Karnataka'

export const POLICIES: Policy[] = [
  {
    slug: 'privacy',
    nav: 'Privacy Policy',
    title: 'Privacy Policy',
    effective: '7 October 2026',
    intro: [
      `Shiksha Sarathi Foundation (“the Foundation”, “we”, “us”) is a company registered under Section 8 of the Companies Act, 2013, with its registered office at ${OFFICE}. This policy explains what personal data we collect, why, what we do with it, and the rights you have over it.`,
      'We take this seriously for one reason above all: most of the people who apply to our scholarship scheme are under eighteen. The law treats their data with particular care, and so do we.',
    ],
    sections: [
      {
        heading: 'Who this policy applies to',
        blocks: [
          'Anyone whose personal data we hold — applicants to our scholarship scheme, their parents and guardians, scholars, donors, volunteers, partner college staff, and visitors to this website.',
        ],
      },
      {
        heading: 'What personal data we collect',
        blocks: [
          'We collect only what the scholarship scheme requires. We do not collect data speculatively, and we do not buy personal data from any third party.',
          {
            table: {
              head: ['Whose data', 'What we collect'],
              rows: [
                ['Scholarship applicants', 'Name, date of birth, gender, mobile number, email address, residential address, PU college name, district, college type, stream, combination, marks in the qualifying examination, examination responses and score, photograph, proof of identity and date of birth, proof of admission, and a disability certificate where a relaxation is claimed'],
                ['Parents and guardians', 'Name, relationship to the applicant, occupation, annual income as stated in the income certificate, mobile number and email address, and the record of consent given'],
                ['Selected scholars', 'Bank account number, IFSC code and a copy of a cancelled cheque, together with the records above'],
                ['Donors', 'Name, email address, mobile number, postal address, PAN where a tax receipt is requested, and the amount and reference of the contribution'],
                ['Website visitors', 'See the Cookie Policy. You do not have to identify yourself to read this website.'],
              ],
            },
          },
          { strong: 'We do not collect Permanent Account Numbers from applicants. A student has no reason to hold one, and we have no reason to ask.' },
        ],
      },
      {
        heading: 'Why we collect it, and on what basis',
        blocks: [
          'We process personal data on the basis of consent — given by you, or by your parent or guardian where you are under eighteen. We use it only to:',
          { list: [
            'Check whether an applicant is eligible under the scheme',
            'Conduct the scholarship examination and prepare the merit list',
            'Verify documents and confirm selection',
            "Pay scholarship amounts into a scholar's own bank account",
            'Communicate with applicants, scholars, parents and guardians about the scheme',
            'Issue receipts to donors and meet tax requirements',
            'Keep the accounts and records that law and audit require',
          ] },
          'We do not use personal data for advertising. We do not profile applicants for any purpose other than ranking them on examination marks. We take no automated decision about a person other than the calculation of an examination score.',
        ],
      },
      {
        heading: 'If you are under eighteen',
        blocks: [
          'The Digital Personal Data Protection Act, 2023 treats anyone under eighteen as a child. If you are under eighteen we cannot process your personal data without the verifiable consent of your parent or legal guardian. That consent is collected as part of the application and recorded with a timestamp.',
          "We do not track children's behaviour, and we do not show advertising of any kind to any visitor. Your parent or guardian may withdraw consent at any time, and may ask to see or correct what we hold about you.",
        ],
      },
      {
        heading: 'Who we share it with',
        blocks: [
          'We do not sell personal data. We share it only:',
          { list: [
            'With your bank, so far as necessary to make a payment to you',
            'With a service provider engaged in connection with the online examination or the website, under a written obligation of confidentiality and only for that purpose',
            'With your PU college, to verify your enrolment and marks',
            'With our auditors, and with any authority to whom disclosure is required by law',
          ] },
          'We publish the final merit list on this website. It carries the roll number, name and rank of selected candidates and the name of their college. It does not carry contact details, income, date of birth or bank details.',
        ],
      },
      {
        heading: 'How long we keep it',
        blocks: [
          'Retention periods are set out in our Data Retention and Security Policy. In summary: applications from candidates who are not selected are deleted after one year; scholar records are kept for the duration of the scholarship and eight years thereafter for audit; donation records are kept eight years for tax purposes; and bank details are deleted once the final payment under a scholarship has been made and reconciled.',
        ],
      },
      {
        heading: 'How we protect it',
        blocks: [
          'Access is restricted to the officers who need it. Data is held on access-controlled systems with multi-factor authentication. Bank details are held separately from application data. These arrangements are reviewed annually.',
          'No system is perfectly secure. If a breach occurs that is likely to affect you, we will tell you, and the Data Protection Board of India, as the law requires.',
        ],
      },
      {
        heading: 'Your rights',
        blocks: [
          'You may ask us for a summary of the personal data we hold about you; have inaccurate data corrected or completed; have data erased where it is no longer needed; withdraw your consent; and nominate another person to exercise these rights on your behalf.',
          `Withdrawing consent is as easy as giving it. Write to ${EMAIL} and we will act on it. Please understand that withdrawing consent while your application is being processed means we cannot take it further.`,
          'If you are not satisfied with how we have handled a request or complaint, you may complain to the Data Protection Board of India.',
        ],
      },
      {
        heading: 'Who to contact',
        blocks: [
          `Data Protection contact and Grievance Officer: Shaike Ibrahim, ${EMAIL}. Hours: Monday to Friday, 10:00 am – 6:00 pm. Registered office: ${OFFICE}. We respond to a request about personal data within thirty days.`,
        ],
      },
    ],
  },

  {
    slug: 'terms',
    nav: 'Terms of Use',
    title: 'Terms of Use',
    effective: '7 October 2026',
    intro: [],
    sections: [
      { blocks: [ { list: [
        'These terms govern your use of https://www.shikshasarathifoundation.org and any service offered through it. By using the website you accept them. If you do not accept them, please do not use the website.',
        'The website is operated by Shiksha Sarathi Foundation, a company registered under Section 8 of the Companies Act, 2013, with its registered office at ' + OFFICE + '.',
        "The website exists to publish information about the Foundation's scholarship scheme, to receive applications, and to receive donations. It is not a commercial service and nothing on it is offered for sale.",
        'You may use this website only for lawful purposes. You must not attempt to gain unauthorised access to any part of it, interfere with its operation, submit false information, submit an application on behalf of a person without their knowledge, or use automated means to extract data from it.',
        'You are responsible for the accuracy of what you submit. An application containing false information is liable to be rejected, and a scholarship obtained on the basis of a false statement is recoverable, as the scheme document sets out.',
        'All content on this website — text, design, documents and examination material — belongs to the Foundation. You may read, download and print it for your own use or to inform students. You may not republish it commercially or present it as your own.',
        'The scholarship scheme is governed by the scheme document published on this website, not by these terms. Where the two differ, the scheme document prevails.',
        'We may change, suspend or withdraw any part of the website at any time. We try to keep it available but do not guarantee uninterrupted access.',
        'We are not liable for any loss arising from your use of this website, except to the extent that liability cannot be excluded by law.',
        'These terms are governed by the laws of India. The courts at Bengaluru, Karnataka have exclusive jurisdiction.',
        `Questions about these terms may be sent to ${EMAIL}.`,
      ] } ] },
    ],
  },

  {
    slug: 'cookies',
    nav: 'Cookie Policy',
    title: 'Cookie Policy',
    effective: '7 October 2026',
    intro: ['A cookie is a small file a website stores on your device. This policy explains which cookies we use, why, and what choice you have.'],
    sections: [
      {
        heading: 'What we use',
        blocks: [ { table: { head: ['Type', 'Purpose', 'Can you refuse it?'], rows: [
          ['Strictly necessary', 'Keeping a part-completed application form as you move between steps', 'No — the form will not work without them'],
          ['Analytics (Google Analytics 4)', 'Counting visitors and understanding which pages are used, so that we can improve them', 'Yes — these load only if you accept'],
          ['Advertising', 'We use none, and we will not', 'Not applicable'],
        ] } } ],
      },
      {
        heading: 'Analytics',
        blocks: [
          'If we use analytics, we run it in a restricted configuration. Advertising features, remarketing and ads personalisation are switched off. We never send a name, email address, mobile number or any other identifier to the analytics provider.',
          'Section 9(3) of the Digital Personal Data Protection Act, 2023 prohibits tracking or behavioural monitoring of children and advertising directed at them. Because nearly all of our visitors are students under eighteen, our configuration stays well inside that prohibition.',
        ],
      },
      {
        heading: 'Your choice',
        blocks: [
          'When you first visit, you will be asked whether you accept analytics cookies. The analytics script does not load until you accept. If you decline, the website works exactly as it otherwise would. You may change your mind at any time by clearing this site’s cookies in your browser.',
        ],
      },
      {
        heading: 'Cookies we do not use',
        blocks: [
          'We do not use advertising cookies, social media tracking pixels, or any cookie that follows you to another website. We do not share cookie data with advertisers, and we do not sell it.',
        ],
      },
    ],
  },

  {
    slug: 'donation-policy',
    nav: 'Donation Policy',
    title: 'Donation Policy',
    effective: '7 October 2026',
    intro: [],
    sections: [
      {
        heading: 'What donations are used for',
        blocks: [
          'Donations to Shiksha Sarathi Foundation fund scholarships for students under the SSF Scholarship Scheme, and meet the direct costs of running it — the examination, outreach, certificates and administration. We publish our accounts annually.',
          'Where a donor asks that a contribution be applied to a particular purpose within the scheme, we will respect that where it is practical. Where it is not, we will say so before accepting the contribution.',
        ],
      },
      {
        heading: 'Tax deduction — please read before donating',
        blocks: [
          'The Foundation has applied for registration under Section 80G of the Income-tax Act, 1961. That registration has not yet been granted.',
          { strong: 'Until it is granted, a donation to the Foundation does not qualify for deduction under Section 80G, and we cannot issue a receipt that supports such a claim. Please do not donate on the expectation of a tax deduction. We will announce it on this page if and when the registration is granted, and we will say from which date it takes effect.' },
          'We issue a receipt for every donation to the email address given at the time of the contribution, recording the amount, the date and the purpose. That receipt confirms the gift; it is not a tax certificate.',
        ],
      },
      {
        heading: 'Who we accept donations from',
        blocks: [
          'We accept donations from individuals and organisations in India. We do not accept foreign contributions, including from non-resident Indians holding foreign passports, unless and until the Foundation is registered under the Foreign Contribution (Regulation) Act, 2010. If you are outside India, please write to us before attempting to donate.',
          "We may decline a donation, or return one, where accepting it would conflict with the Foundation's objects or expose it to reputational or legal risk.",
        ],
      },
      {
        heading: 'Recognition and anonymity',
        blocks: [
          'We name a donor publicly only with their permission. A donor may ask to remain anonymous and we will respect that in all published material. We do not sell, rent or exchange donor lists with any other organisation.',
        ],
      },
      {
        heading: 'No claim over scholars',
        blocks: [
          "A donation does not entitle a donor to select, meet, contact or receive the personal details of any scholar. Scholars are selected on merit under the published scheme, and their privacy is protected by our Privacy Policy and Child Protection Policy.",
        ],
      },
    ],
  },

  {
    slug: 'refund',
    nav: 'Refund & Cancellation',
    title: 'Refund and Cancellation Policy',
    effective: '7 October 2026',
    intro: [],
    sections: [
      {
        heading: 'Nothing is sold on this website',
        blocks: [
          `The Foundation sells no goods or services. There is no fee to apply for a scholarship, no fee to sit the examination, and no fee to receive one. No agent, coaching centre or individual is authorised to collect money in our name. Any demand for payment made in our name is fraudulent and should be reported to ${EMAIL} immediately.`,
        ],
      },
      {
        heading: 'Donations are voluntary and ordinarily final',
        blocks: [
          'A donation is a voluntary gift and is ordinarily not refundable, because funds are committed to scholarship awards shortly after they are received.',
        ],
      },
      {
        heading: 'When we will refund',
        blocks: [ { list: [
          'The donation was made in error — a duplicate payment, or an amount materially different from the one intended — and the donor tells us within seven days',
          'The donation was made without the authority of the account holder',
          'A technical failure caused the amount to be debited more than once, or debited without the donation being recorded',
          'The Foundation decides to decline the donation under the Donation Policy',
        ] } ],
      },
      {
        heading: 'How to request a refund',
        blocks: [
          `Write to ${EMAIL} with the date, amount and payment reference. We acknowledge within three working days and decide within seven working days. An approved refund is made to the original payment method and ordinarily reaches the donor within seven to ten working days, depending on the bank.`,
        ],
      },
    ],
  },

  {
    slug: 'grievance',
    nav: 'Grievance Redressal',
    title: 'Grievance Redressal Policy',
    effective: '7 October 2026',
    intro: ['Anyone may raise a grievance with the Foundation — an applicant, a parent or guardian, a scholar, a donor, a partner college, a volunteer, or a member of the public.'],
    sections: [
      {
        heading: 'Grievance Officer',
        blocks: [ `Shaike Ibrahim, Grievance Officer, Shiksha Sarathi Foundation. Email ${EMAIL}. Postal address ${OFFICE}. Hours: Monday to Friday, 10:00 am – 6:00 pm.` ],
      },
      {
        heading: 'What you can raise',
        blocks: [
          "Anything concerning the conduct of the examination, the merit list, the verification of documents, the disbursement of a scholarship, the way your personal data has been handled, the conduct of anyone acting for the Foundation, or any demand for money made in the Foundation's name.",
        ],
      },
      {
        heading: 'How we handle it',
        blocks: [ { list: [
          'Write to the Grievance Officer at the address above. Give your name, a contact number or email, and enough detail for us to understand what happened and when.',
          'We acknowledge every grievance within seven working days.',
          'We decide it within thirty days of receipt and tell you the outcome in writing, with reasons.',
          'Nothing in this policy prevents you from approaching the Data Protection Board of India, or any other authority or court, at any time.',
        ] } ],
      },
      {
        heading: 'Anonymous complaints',
        blocks: [
          'We will consider an anonymous complaint, particularly one alleging fraud or misconduct, though we may be unable to investigate fully or to tell you the outcome. Where the complaint concerns the safety of a child, please see our Child Protection Policy.',
        ],
      },
    ],
  },

  {
    slug: 'child-protection',
    nav: 'Child Protection',
    title: 'Child Protection and Safeguarding Policy',
    effective: '7 October 2026',
    intro: [
      'Almost every applicant to our scholarship scheme is under eighteen. This policy sets out how the Foundation protects them. It binds every director, officer, employee, volunteer and contractor of the Foundation.',
    ],
    sections: [
      {
        heading: 'Our commitment',
        blocks: [
          "No child should come to harm through contact with this Foundation. The duty is ours, not the child's, and a child who is reluctant to speak up is the norm rather than the exception.",
        ],
      },
      {
        heading: 'Rules for contact with applicants and scholars',
        blocks: [ { list: [
          'All communication is through the channels recorded in the application — the registered mobile number and email address — and in the name of the Foundation, not in a personal capacity.',
          'No person acting for the Foundation may contact an applicant or scholar from a personal phone number, personal email, or personal social media, or add them on any personal messaging or social media service.',
          'A telephone call to an applicant or scholar under eighteen is made only with the parent or guardian informed in advance and welcome to be present. A record is kept.',
          'No person acting for the Foundation may meet an applicant or scholar alone, in person or on a one-to-one video call, without a second authorised adult present.',
          'No person acting for the Foundation may offer, or appear to offer, any benefit, advantage or inside information in exchange for anything.',
          'No person acting for the Foundation may ask an applicant or scholar for money, gifts, or help of any kind.',
          "Photographs or video of a child are published only with the written consent of a parent or guardian, and consent may be withdrawn at any time. A child's full name is not published alongside their photograph.",
        ] } ],
      },
      {
        heading: 'Reporting a concern',
        blocks: [
          `If you have any concern that a child has been harmed, is at risk of harm, or has been treated inappropriately by anyone acting for the Foundation, report it immediately to the Child Protection contact, Shaike Ibrahim, ${EMAIL}, Monday to Friday 10:00 am – 6:00 pm.`,
          { strong: 'You may also report a concern directly to the police, to the Child Welfare Committee for your district, or to the national child helpline on 1098, at any time and without telling the Foundation first. Nothing in this policy requires you to come to us before going to the authorities.' },
          'You do not need proof. A concern is enough. You will not be penalised for raising one in good faith, even if it turns out to be unfounded.',
        ],
      },
      {
        heading: 'What we do with a report',
        blocks: [ { list: [
          'The concern is recorded and the person named in it is removed from all contact with children immediately, as a precaution and without any implication of guilt.',
          'The Executive Committee is informed within twenty-four hours.',
          'Where there is any reason to believe an offence has been committed against a child, the matter is reported to the police or the Child Welfare Committee. This is a legal obligation under the Protection of Children from Sexual Offences Act, 2012.',
          'The child and their parent or guardian are kept informed so far as it is appropriate and safe to do so.',
        ] } ],
      },
    ],
  },

  {
    slug: 'disclaimer',
    nav: 'Disclaimer',
    title: 'Disclaimer',
    effective: '7 October 2026',
    intro: [],
    sections: [
      { blocks: [ { list: [
        'The information on this website is provided in good faith and for general information about the Foundation and its scholarship scheme.',
        'Applying creates no entitlement to a scholarship. Scholarships are awarded under the published scheme document, on merit, and subject to the number of awards available.',
        'Scholarship amounts, the number of awards and the dates published on this website relate to the stated academic year and may be revised for later years. Any change is published here.',
        'Where this website links to another website, we do not control that site and are not responsible for its content or its handling of your data.',
        'Nothing on this website is legal, financial or tax advice. Any reference to income tax treatment is general information only, and a person in doubt should consult a tax professional.',
        'The Foundation is not affiliated to any government department, board or university, and does not represent itself as acting for any of them.',
        `We make no charge of any kind. Any person or organisation demanding payment in the Foundation's name is acting fraudulently and should be reported to ${EMAIL}.`,
      ] } ] },
    ],
  },
]

export const POLICY_SLUGS = POLICIES.map((p) => p.slug)
