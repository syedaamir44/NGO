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

export default function VolunteerPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('volunteer')

  return (
    <>
      <PageHeader
        crumb="Volunteer"
        label="Volunteer · Students"
        title="Volunteer with us on your campus"
        intro="If you are a student at one of our partner schools or colleges, you are closest to the students who need us. Help us reach them, support our sessions and guide your juniors. Tell us how you can help and we will get in touch."
      />

      <div className="max-w-2xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Thank you"
            title="Thank you — we’ll be in touch."
            intro="We have your details and will reach out to understand how you would like to help and get you started."
            steps={[
              'We will contact you using the email or phone number you gave',
              'We will explain how volunteering works and the simple safeguards we follow',
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
            <SetupNotice formKey="volunteer" />
            <h2 className="font-serif font-normal text-2xl text-ink-deep">Tell us about yourself</h2>
            <p className="mt-2 mb-7 text-sm text-muted leading-relaxed">
              Short and simple — fields marked <Req /> are required.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input type="hidden" name="_form" value="Student volunteer" />

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
                    name="School or college"
                    label="Your school or college"
                    required
                    placeholder="Name of your school or college"
                  />
                  <TextField
                    name="Class or year"
                    label="Your class or year"
                    required
                    placeholder="e.g. Class 12, 1st year B.Com"
                  />
                  <TextField name="City or town" label="City or town" placeholder="Optional" />
                  <SelectField
                    full
                    name="Time you can spare"
                    label="Time you can spare"
                    required
                    options={[
                      'A few hours a month',
                      'About an hour a week',
                      'One-off — during events',
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
                    { value: 'Spread the word on campus', title: 'Spread the word on campus' },
                    { value: 'Help at our sessions and events', title: 'Help at our sessions and events' },
                    { value: 'Guide juniors who are applying', title: 'Guide juniors who are applying' },
                    { value: 'Content and social media', title: 'Content and social media' },
                    { value: 'Wherever needed', title: 'Wherever needed' },
                  ]}
                />
                <TextAreaField name="Message" label="Anything you would like us to know" placeholder="Optional" />
              </Fieldset>

              <SubmitRow
                busy={busy}
                label="Sign up to volunteer"
                note="We will reach out and get you started on your campus."
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
