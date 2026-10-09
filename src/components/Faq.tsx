import { Label, Section, H2 } from './ui'
import { CONTACT_EMAIL } from '../config'

const FAQS: { q: string; a: string; open?: boolean }[] = [
  {
    q: 'What does Shikshasarathi Foundation actually provide?',
    a: 'Two different things. The Shiksha Sarathi Merit Scholarship, which we fund and award ourselves, and four guidance services — education mentorship, career mentorship, competitive exam guidance and add-on skill courses — which we arrange for students who need them.',
    open: true,
  },
  {
    q: 'Does applying for the scholarship cost anything?',
    a: 'No. There is no application fee, no processing fee and no charge at any stage of the scholarship. If anyone asks you for money to apply, to process an application or to release an award in our name, it is a fraud. Please do not pay, and tell us who approached you.',
  },
  {
    q: 'What about the mentorship and skill courses — are those free?',
    a: 'Those are delivered by partner mentors and institutes, and each partner sets its own fees. We tell you the cost before anything is booked. Where a student genuinely needs a service and the family cannot meet the cost, we arrange a concession, a discount or full sponsorship, decided case by case on family income and on how much difference the service will make.',
  },
  {
    q: 'Does the Foundation earn anything from the partners it recommends?',
    a: 'No. We take no commission and no referral fee from any mentor, institute, college or coaching centre. That independence is deliberate: it is what allows us to recommend one honestly, and to tell a student that a course is not worth paying for.',
  },
  {
    q: 'Who is eligible for the Shiksha Sarathi Merit Scholarship 2026?',
    a: 'Students currently studying in class 12, with a total annual family income below ₹8 lakh, who scored at least 60% in class 11, and who study in or are domiciled in Karnataka. Full details are on the scholarship page.',
  },
  {
    q: 'How are scholars selected?',
    a: 'Applications are first shortlisted on academic performance and financial background. Shortlisted candidates then go through a telephonic interview, followed by document verification before the final selection.',
  },
  {
    q: 'How is the scholarship money paid?',
    a: 'By bank transfer, directly into the selected student’s own bank account. Never in cash, never through a college, and never through a third party.',
  },
  {
    q: 'Do I have to apply for a scholarship to ask for guidance?',
    a: 'No. The two are entirely separate. You may ask for any of the guidance services without ever applying for a scholarship, and asking for guidance gives you no advantage in scholarship selection.',
  },
  {
    q: 'How soon will someone contact me after I send a request?',
    a: 'We aim to call you back within three working days. During admission season it can take a little longer, so it is worth asking early rather than in the last week before a deadline.',
  },
  {
    q: 'Which languages do you work in?',
    a: 'English, Kannada, Hindi and Urdu. Mention your preference when you send your request and we will match you accordingly.',
  },
  {
    q: 'I am not sure which service I need. What should I do?',
    a: `Send a request and say that you are unsure. Working out what you actually need is a large part of the first conversation. If you would rather write first, email us at ${CONTACT_EMAIL}.`,
  },
]

export default function Faq() {
  return (
    <Section inner="max-w-3xl">
      <Label>Questions</Label>
      <H2 className="text-ink-deep">Frequently asked</H2>

      <div className="mt-6">
        {FAQS.map((f) => (
          <details key={f.q} className="eif-faq border-b border-line" open={f.open}>
            <summary className="flex items-center justify-between gap-4 cursor-pointer py-4 min-h-[52px] font-serif text-[1.05rem] text-ink-deep">
              {f.q}
            </summary>
            <p className="pb-4 text-[15px] text-muted leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
