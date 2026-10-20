import { Label, Section, Button } from './ui'

const BLOCKS = [
  {
    title: 'For schools and colleges',
    paras: [
      'Partnering costs your institution nothing. Nominate one teacher as coordinator, tell your students that the scholarship and the guidance services exist, and let us hold a session on your campus once a year. There is nothing to host and nothing to pay.',
      'Institutions whose students are selected as scholars are recognised publicly and invited to our annual ceremony.',
    ],
    cta: 'Become a partner institution →',
    href: '/partner',
  },
  {
    title: 'For NGOs and other organisations',
    paras: [
      'Help us find the students we would otherwise never hear about. You already know the families in your area, and you can tell which child is capable and which household simply cannot find the fees.',
      'Refer them to us and we will assess them properly. We are also glad to work the other way round, and to point students towards what your organisation does when it fits them better than anything we offer.',
    ],
    cta: 'Refer students to us →',
    href: '/partner',
  },
  {
    title: 'Donations',
    paras: [
      'Fund a scholar directly. A contribution goes to the Shiksha Sarathi Merit Scholarship award pool — merit scholarships for class 11 and 12 students across Karnataka, paid into a scholar’s own bank account.',
      'No payment is taken on this website. Tell us how you would like to help and the team will reach out and explain exactly how it is used.',
    ],
    cta: 'Support a student →',
    href: '/sponsor',
  },
  {
    title: 'Become a mentor',
    paras: [
      'Give a little of your free time. A short conversation about a course, a career or an exam can change a student’s direction — and you already know things they have no way to find out.',
      'Tell us your field and how much time you can spare, and we will match you with students who need exactly that.',
    ],
    cta: 'Mentor a student →',
    href: '/mentor',
  },
  {
    title: 'Volunteer with us',
    paras: [
      'Are you a student at one of our partner schools or colleges? You are closest to the students who need us — spread the word on campus, help at our sessions, and guide your juniors through applying.',
      'Tell us how you can help and how much time you can spare, and we will get you started.',
    ],
    cta: 'Volunteer with us →',
    href: '/volunteer',
  },
]

export default function WorkWithUs() {
  return (
    <Section className="bg-ink text-[#E7DECC]">
      <Label tone="light">Work with us</Label>
      <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-white">
        Five ways to help a student before the decision is made
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-9">
        {BLOCKS.map((b) => (
          <div key={b.title} className="flex flex-col">
            <h3 className="inline-block self-start font-serif text-lg text-white border-b-2 border-marigold-l pb-2.5">
              {b.title}
            </h3>
            {b.paras.map((p) => (
              <p key={p} className="mt-3 text-[15px] text-[#D2C8B4] leading-relaxed">
                {p}
              </p>
            ))}
            <div className="mt-auto pt-6">
              <Button href={b.href} variant="marigold">
                {b.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
