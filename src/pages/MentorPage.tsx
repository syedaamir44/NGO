import {
  PageHeader,
  Fieldset,
  Grid2,
  TextField,
  SelectField,
  TextAreaField,
  ChoiceGroup,
  SetupNotice,
  SuccessPanel,
  SubmitRow,
  Req,
  useEifForm,
} from '../components/form'
import { CONTACT_EMAIL } from '../config'

export default function MentorPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('mentor')

  return (
    <>
      <PageHeader
        crumb="Become a mentor"
        label="Volunteer · Mentorship"
        title="Guide a student in your free time"
        intro="A short conversation about a course, a career or an exam can change a student’s direction. Tell us your field and how much time you can spare, and we will match you with students who need exactly that."
      />

      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Thank you"
            title="Thank you — we’ll be in touch."
            intro="We have your details and will reach out to understand how you can help and match you with students."
            steps={[
              'We will contact you using the email or phone number you gave',
              'We will explain how mentoring works and the simple safeguards we follow',
              'You decide how much time to give — there is no fixed commitment',
            ]}
            delivered={delivered}
          >
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              Questions first? Email{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SuccessPanel>
        ) : (
          <>
            <SetupNotice formKey="mentor" />
            <h2 className="font-serif font-normal text-2xl text-ink-deep">Tell us about yourself</h2>
            <p className="mt-2 mb-7 text-sm text-muted leading-relaxed">
              Short and simple — fields marked <Req /> are required.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input type="hidden" name="_form" value="Mentor volunteer" />

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
                    name="Field or profession"
                    label="Your field or profession"
                    required
                    placeholder="e.g. Engineer, doctor, CA, teacher, designer"
                  />
                  <TextField name="City or town" label="City or town" placeholder="Optional" />
                  <SelectField
                    name="Time you can spare"
                    label="Time you can spare"
                    required
                    options={[
                      'A few hours a month',
                      'About an hour a week',
                      'One-off sessions',
                      'Flexible — ask me',
                    ]}
                  />
                </Grid2>
                <ChoiceGroup
                  name="How you can help"
                  label="How would you like to help?"
                  required
                  type="checkbox"
                  choices={[
                    { value: 'Career guidance', title: 'Career guidance' },
                    { value: 'Subject help', title: 'Subject help' },
                    { value: 'Competitive exam prep', title: 'Competitive exam preparation' },
                    { value: 'Life skills / motivation', title: 'Life skills and motivation' },
                  ]}
                />
                <TextAreaField name="Message" label="Anything you would like us to know" placeholder="Optional" />
              </Fieldset>

              <SubmitRow
                busy={busy}
                label="Sign up to mentor"
                note="We will reach out to match you with students who need your help."
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
