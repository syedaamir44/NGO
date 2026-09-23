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
    title: 'For donors and CSR partners',
    paras: [
      'A contribution does two things at once. It puts an additional student on the scholarship list, and it funds the concessions and sponsorships that let students afford the guidance and skill courses we arrange for them.',
      'Sponsoring a counselling session or a skill course costs a fraction of a scholarship and often changes a student’s direction just as decisively. We publish our accounts every year.',
    ],
    cta: 'Support a student →',
    href: '/sponsor',
  },
]

export default function WorkWithUs() {
  return (
    <Section className="bg-ink text-[#E7DECC]">
      <Label tone="light">Work with us</Label>
      <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-white">
        Three ways to reach a student before the decision is made
      </h2>

      <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-9">
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
