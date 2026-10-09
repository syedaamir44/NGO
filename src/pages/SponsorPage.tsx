import {
  PageHeader,
  Fieldset,
  Grid2,
  TextField,
  TextAreaField,
  ChoiceGroup,
  SetupNotice,
  SuccessPanel,
  SubmitRow,
  Req,
  useEifForm,
} from '../components/form'
import { Label } from '../components/ui'
import { CONTACT_EMAIL, PROGRAMME } from '../config'

const HELP = [
  {
    title: 'Fund a scholar',
    body: `A contribution goes directly to the ${PROGRAMME.name} award pool — ${PROGRAMME.scholarships} merit scholarships for class 11 and 12 students across Karnataka, paid into a scholar’s own bank account.`,
  },
  {
    title: 'Sponsor the examination (in-kind)',
    body: 'We are seeking a developer or technology firm to build and host the online scholarship examination and bear its running costs, in return for public acknowledgement. This underwrites the whole scheme.',
  },
  {
    title: 'Open doors',
    body: 'Introduce us to a college, a CSR team or a fellow supporter. Reaching students before the decision is made is half the work.',
  },
]

export default function SponsorPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('sponsor')

  return (
    <>
      <PageHeader
        crumb="Support us"
        label="Support the scholarship"
        title="Help a student stay in college"
        intro="Every contribution puts a capable student on the scholarship list. Tell us how you would like to help and the team will reach out — no payment is taken on this website."
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Thank you"
            title="Thank you — your interest has reached us."
            intro="We have recorded your details and a member of the team will be in touch to take it forward. In the meantime:"
            steps={[
              'We will contact you using the email or phone number you gave',
              'We will explain exactly how a contribution is used, and share our accounts',
              'Nothing is committed until you decide — this is only an expression of interest',
            ]}
            delivered={delivered}
          >
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              Prefer to write first? Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SuccessPanel>
        ) : (
          <>
            {/* How support helps */}
            <Label>How your support helps</Label>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {HELP.map((h) => (
                <div key={h.title} className="border border-line border-l-4 border-l-marigold bg-cream px-5 py-4">
                  <h3 className="font-serif text-[1.05rem] text-ink-deep">{h.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>

            {/* 80G note */}
            <div className="mt-8 bg-[#FDF3DC] border-[1.5px] border-l-[5px] border-[#E0B95E] px-5 py-4 rounded-sm text-[15px] text-[#5C4409] leading-relaxed">
              <strong className="block mb-1">Please read before you give</strong>
              The Foundation has applied for registration under Section 80G of the Income-tax Act,
              1961, but it has not yet been granted. Until it is, a donation does not qualify for a
              tax deduction, and we cannot issue a receipt that supports such a claim. We take no
              payment on this website — this form only registers your interest so the team can reach
              out. See our{' '}
              <a href="/donation-policy" className="underline">
                Donation Policy
              </a>
              .
            </div>

            {/* Our sponsors */}
            <div className="mt-10">
              <Label>Our sponsors</Label>
              <p className="mt-4 text-[15px] text-muted leading-relaxed">
                We are building our founding group of supporters for the {PROGRAMME.cycle} cycle.
                Sponsors who agree to be named will be acknowledged here, with their permission. If
                you would like to be among the first, use the form below.
              </p>
            </div>

            {/* Interest form */}
            <div className="mt-10">
              <SetupNotice formKey="sponsor" />
              <h2 className="font-serif font-normal text-2xl text-ink-deep">Register your interest</h2>
              <p className="mt-2 mb-8 text-sm text-muted leading-relaxed">
                Fields marked <Req /> are required. We use your details only to get in touch about
                supporting the scholarship.
              </p>

              <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
                <input type="hidden" name="_form" value="Sponsor / donor interest" />

                <Fieldset legend="Your details">
                  <Grid2>
                    <TextField full name="Full name" label="Your name" required autoComplete="name" />
                    <TextField
                      full
                      name="Organisation"
                      label="Organisation"
                      placeholder="Company, trust or CSR team — leave blank if giving as an individual"
                    />
                    <TextField name="Email" label="Email address" type="email" required autoComplete="email" />
                    <TextField
                      name="Mobile number"
                      label="Mobile number"
                      type="tel"
                      required
                      numeric
                      maxLength={10}
                      rule="mobile"
                      autoComplete="tel"
                      placeholder="10-digit number"
                    />
                  </Grid2>
                </Fieldset>

                <Fieldset legend="How you would like to help">
                  <ChoiceGroup
                    name="Type of support"
                    label="Type of support"
                    required
                    type="checkbox"
                    choices={[
                      { value: 'Fund scholarships', title: 'Fund scholarships', note: 'A financial contribution to the award pool' },
                      { value: 'In-kind — build or host the online exam', title: 'In-kind — the online examination', note: 'Build or host the exam platform and bear its running cost' },
                      { value: 'Introductions / outreach', title: 'Introductions and outreach', note: 'Connect us to a college, CSR team or supporter' },
                      { value: 'Not sure yet', title: 'Not sure yet — let’s talk', note: 'Tell us and we will explain the options' },
                    ]}
                  />
                  <Grid2>
                    <TextField
                      full
                      name="Approximate amount"
                      label="Approximate amount you have in mind"
                      placeholder="Optional — e.g. ₹10,000, or in-kind"
                      hint="Only if you have a figure in mind. It is not a commitment."
                    />
                  </Grid2>
                  <TextAreaField
                    name="Message"
                    label="Anything you would like us to know"
                    placeholder="Optional"
                  />
                </Fieldset>

                <SubmitRow
                  busy={busy}
                  label="Register my interest"
                  note="No payment is taken here. We will contact you to take it forward."
                />
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}
