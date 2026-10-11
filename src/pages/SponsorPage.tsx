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
import { CONTACT_EMAIL, PROGRAMME } from '../config'

export default function SponsorPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('sponsor')

  return (
    <>
      <PageHeader
        crumb="Support us"
        label="Donate · Support the scholarship"
        title="Help a student stay in college"
        intro="Every contribution puts a capable student on the scholarship list. Tell us how you would like to help and the team will reach out — no payment is taken on this website."
      />

      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Thank you"
            title="Thank you — your interest has reached us."
            intro="We have your details and a member of the team will be in touch to take it forward."
            steps={[
              'We will contact you using the email or phone number you gave',
              'We will explain exactly how a contribution is used, and share our accounts',
              'Nothing is committed — this is only an expression of interest',
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
            <p className="text-[15px] text-muted leading-relaxed">
              A contribution goes to the {PROGRAMME.name} award pool — merit scholarships for class 11
              and 12 students across Karnataka, paid into a scholar’s own bank account. We take no
              payment here; this form simply lets the team reach out.
            </p>

            <div className="mt-8">
              <SetupNotice formKey="sponsor" />
              <h2 className="font-serif font-normal text-2xl text-ink-deep">Register your interest</h2>
              <p className="mt-2 mb-7 text-sm text-muted leading-relaxed">
                Short and simple — fields marked <Req /> are required.
              </p>

              <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
                <input type="hidden" name="_form" value="Donor / sponsor interest" />

                <Fieldset legend="Your details">
                  <Grid2>
                    <TextField full name="Full name" label="Your name" required autoComplete="name" />
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
                    <TextField
                      full
                      name="Organisation"
                      label="Organisation"
                      placeholder="Company, trust or CSR team — leave blank if giving as an individual"
                    />
                  </Grid2>
                  <ChoiceGroup
                    name="How you would like to help"
                    label="How would you like to help?"
                    required
                    type="checkbox"
                    choices={[
                      { value: 'Fund scholarships', title: 'Fund scholarships' },
                      { value: 'In-kind support', title: 'In-kind support (hosting, print, the exam platform)' },
                      { value: 'Introductions / outreach', title: 'Introductions and outreach' },
                      { value: 'Not sure yet', title: 'Not sure yet — let’s talk' },
                    ]}
                  />
                  <Grid2>
                    <TextField
                      full
                      name="Approximate amount"
                      label="Approximate amount you have in mind"
                      placeholder="Optional — e.g. ₹10,000, or in-kind. Not a commitment."
                    />
                  </Grid2>
                  <TextAreaField name="Message" label="Anything you would like us to know" placeholder="Optional" />
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
