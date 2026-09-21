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
import { CONTACT_EMAIL, CONTACT_PHONE } from '../config'

export default function RequestPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('request')

  return (
    <>
      <PageHeader
        crumb="Request a session"
        label="Open to any student · no eligibility conditions"
        title="Request a session"
        intro="Tell us roughly where you are and what you are trying to decide. Somebody from the Foundation will call you back, work out what would actually help, and arrange it with the right partner — telling you the cost, and any help available with it, before anything is booked."
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Request received"
            title="Thank you — we’ll call you."
            intro="Your request has reached us. Here is what happens next:"
            steps={[
              'Somebody from the Foundation calls you within three working days to understand your situation',
              'We match you with the partner best suited to it, and tell you what they charge',
              'If the cost is difficult for your family, we discuss a concession or sponsorship before anything is booked',
              'You attend the session, and we follow up before the relevant deadline closes',
            ]}
            delivered={delivered}
          >
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              If your deadline is sooner than three days, call us directly on{' '}
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="text-forest2 underline">
                {CONTACT_PHONE}
              </a>{' '}
              or write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>{' '}
              and say so — we will try to move faster.
            </p>
          </SuccessPanel>
        ) : (
          <>
            <SetupNotice formKey="request" />

            <h2 className="font-serif font-normal text-2xl text-ink-deep">Session request</h2>
            <p className="mt-2 mb-8 text-sm text-muted leading-relaxed">
              Fields marked <Req /> are required. Everything else helps us prepare, but you can leave
              it blank if you are not sure — being unsure is a perfectly good reason to ask.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input type="hidden" name="_form" value="Counselling Request" />

              <Fieldset legend="1. What you need help with">
                <ChoiceGroup
                  name="Services"
                  label="Which of these do you want to talk about?"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Education counselling',
                      title: 'Education counselling',
                      note: 'Which stream, which course and which college — and what each one leads to',
                    },
                    {
                      value: 'Career counselling',
                      title: 'Career counselling',
                      note: 'What a career actually involves, and whether it fits you',
                    },
                    {
                      value: 'Competitive exam guidance',
                      title: 'Competitive exam guidance',
                      note: 'CET, NEET, JEE, banking, SSC, railways, state services',
                    },
                    {
                      value: 'Add-on skill courses',
                      title: 'Add-on skill courses',
                      note: 'Which short courses lead to work, and which to avoid',
                    },
                    {
                      value: 'Not sure',
                      title: "I’m not sure",
                      note: 'Working that out is part of the first conversation',
                    },
                  ]}
                />
                <TextAreaField
                  name="What you want to discuss"
                  label="Briefly, what are you trying to decide?"
                  placeholder="A sentence or two is plenty. For example: I have got 71% in class 12 Commerce and I do not know whether to do B.Com or look for a course that gets me working sooner."
                />
                <Grid2>
                  <SelectField
                    name="Urgency"
                    label="Is there a deadline coming up?"
                    options={[
                      'No particular deadline',
                      'Within a month',
                      'Within two weeks',
                      'This week — it is urgent',
                    ]}
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="2. About you">
                <Grid2>
                  <TextField full name="Full name" label="Your name" required autoComplete="name" />
                  <TextField
                    name="Mobile number"
                    label="Mobile number"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="10-digit number"
                    hint="This is how we will reach you"
                  />
                  <TextField
                    name="Email"
                    label="Email address"
                    type="email"
                    autoComplete="email"
                    hint="Optional — your written summary goes here if you give one"
                  />
                  <SelectField
                    name="Who is asking"
                    label="You are"
                    required
                    options={[
                      'A student',
                      'A parent or guardian',
                      'A teacher or school staff member',
                      'Someone else helping a student',
                    ]}
                  />
                  <TextField name="City or town" label="City or town" required placeholder="e.g. Bangalore" />
                  <SelectField
                    name="Current stage"
                    label="Current stage of study"
                    required
                    options={[
                      'Class 9 or 10',
                      'Class 11',
                      'Class 12',
                      'Waiting for class 12 results',
                      'In a degree or diploma course',
                      'Finished studying',
                      'Discontinued studies',
                    ]}
                  />
                  <SelectField
                    name="Stream"
                    label="Stream, if applicable"
                    placeholder="Not applicable"
                    options={['Science', 'Commerce', 'Arts / Humanities', 'Vocational', 'Other']}
                  />
                  <TextField
                    name="Institution"
                    label="School or college name"
                    placeholder="Optional"
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="3. How to reach you">
                <ChoiceGroup
                  name="Preferred mode"
                  label="How would you prefer the session?"
                  required
                  inline
                  choices={[
                    { value: 'Phone call', title: 'Phone call' },
                    { value: 'Video call', title: 'Video call' },
                    { value: 'In person (Bangalore)', title: 'In person' },
                    { value: 'No preference', title: 'No preference' },
                  ]}
                />
                <ChoiceGroup
                  name="Preferred language"
                  label="Which language would you be most comfortable in?"
                  required
                  inline
                  choices={[
                    { value: 'English', title: 'English' },
                    { value: 'Kannada', title: 'Kannada' },
                    { value: 'Hindi', title: 'Hindi' },
                    { value: 'Urdu', title: 'Urdu' },
                  ]}
                />
                <ChoiceGroup
                  name="Best time to call"
                  label="When is it easiest to reach you?"
                  inline
                  choices={[
                    { value: 'Morning', title: 'Morning' },
                    { value: 'Afternoon', title: 'Afternoon' },
                    { value: 'Evening', title: 'Evening' },
                    { value: 'Weekends only', title: 'Weekends only' },
                  ]}
                />
                <ChoiceGroup
                  name="Consent"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Agreed',
                      title: 'The Foundation may contact me',
                      note: 'I understand that these services are arranged with partner organisations which set their own fees, that I will be told the cost before anything is booked, and that sending this request obliges me to nothing.',
                    },
                  ]}
                />
              </Fieldset>

              <SubmitRow
                busy={busy}
                label="Send request"
                note="Sending this costs nothing and commits you to nothing."
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
