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
import { Label } from '../components/ui'
import { CONTACT_EMAIL } from '../config'

const ASK = [
  'Nominate one teacher or staff member as your Shikshasarathi coordinator',
  'Tell your students that the scholarship and the guidance services exist',
  'Circulate the application details once, in class or on your notice board',
  'If you are able, give us a room and an hour for a session on your campus',
  'Refer the students you already know are capable and cannot find the fees',
]

const RECEIVE = [
  'A scholarship opportunity, free to apply for, open to every eligible student you reach',
  'Access to education counselling, career counselling, exam guidance and skill courses for your students and their parents',
  'Help with the cost of those services for students whose families cannot meet it',
  'An on-campus session at no cost to your organisation',
  'Public recognition whenever one of your students is selected as a scholar, and an invitation to the annual ceremony',
]

function TickList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4">
      {items.map((t) => (
        <li
          key={t}
          className="relative pl-6 py-2.5 border-b border-line last:border-b-0 text-[15px] text-muted leading-relaxed"
        >
          <span className="absolute left-0 top-2.5 font-bold text-marigold">—</span>
          {t}
        </li>
      ))}
    </ul>
  )
}

export default function PartnerPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('partner')

  return (
    <>
      <PageHeader
        crumb="Partner institutions"
        label="For schools, colleges, NGOs & other organisations"
        title="Reach your students before the decision is made"
        intro="Partnering costs your organisation nothing — no fee, no administrative burden, and no commitment beyond telling the students you already know that help exists."
      />

      {!submitted && (
        <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
          <Label>The arrangement</Label>
          <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
            What partnership involves
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted leading-relaxed">
            Every year, students make decisions they are not equipped to make and miss deadlines
            nobody told them about. Schools, colleges and NGOs working in their neighbourhoods are
            the only people who see them before that happens. That is the whole reason we ask.
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-11">
            <div>
              <h3 className="inline-block font-serif text-lg text-ink-deep border-b-2 border-marigold pb-2.5">
                What we ask of you
              </h3>
              <TickList items={ASK} />
            </div>
            <div>
              <h3 className="inline-block font-serif text-lg text-ink-deep border-b-2 border-marigold pb-2.5">
                What your organisation receives
              </h3>
              <TickList items={RECEIVE} />
            </div>
          </div>

          <p className="mt-8 text-[15px] text-muted leading-relaxed">
            A partnership is not a commercial arrangement in either direction. We pay nothing for a
            referral and we receive no commission or referral fee from any college, coaching centre
            or training institute, so nothing we say to your students is influenced by what we might
            earn from it.
          </p>
        </section>
      )}

      <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-14 sm:pb-20 pt-4">
        {submitted ? (
          <SuccessPanel
            label="Request received"
            title="Thank you — we’ll be in touch."
            intro="Your partnership request has reached us. A representative will call within a week to confirm the details and share the material."
            steps={[
              'We confirm your coordinator and send you the scholarship and guidance details',
              'Your students apply for the scholarship, and send us requests for guidance, directly',
              'If you offered a room, we schedule a session on your campus',
              'You are told whenever one of your students is selected as a scholar',
            ]}
            delivered={delivered}
          >
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              For anything urgent, write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SuccessPanel>
        ) : (
          <>
            <SetupNotice formKey="partner" />

            <h2 className="font-serif font-normal text-2xl text-ink-deep">
              Partnership request
            </h2>
            <p className="mt-2 mb-8 text-sm text-muted leading-relaxed">
              Fields marked <Req /> are required. A representative will call within a week of
              receiving this.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input type="hidden" name="_form" value="Partner Institution Request" />

              <Fieldset legend="1. Organisation details">
                <Grid2>
                  <TextField full name="Institution name" label="Name of the organisation" required />
                  <TextAreaField full name="Address" label="Address" required />
                  <TextField name="Town or city" label="Town or city" required />
                  <TextField name="District" label="District" required />
                  <SelectField
                    name="Institution type"
                    label="Type of organisation"
                    required
                    options={[
                      'Government school',
                      'Aided school',
                      'Private school',
                      'PU / Junior college',
                      'Degree college',
                      'ITI / Polytechnic',
                      'NGO / charitable trust',
                      'Community or welfare organisation',
                      'Other',
                    ]}
                  />
                  <TextField name="Phone" label="Contact phone number" type="tel" required />
                </Grid2>
              </Fieldset>

              <Fieldset legend="2. Who we should speak to">
                <Grid2>
                  <TextField name="Head name" label="Principal or head’s name" required />
                  <TextField name="Head email" label="Principal or head’s email" type="email" required />
                  <TextField
                    name="Coordinator name"
                    label="Proposed coordinator"
                    hint="The person who will be our point of contact. Can be decided later."
                  />
                  <TextField name="Coordinator mobile" label="Coordinator’s mobile" type="tel" />
                  <SelectField
                    full
                    name="Submitted by"
                    label="Who is filling in this form?"
                    required
                    options={[
                      'Principal',
                      'Vice Principal',
                      'Lecturer / Teacher',
                      'School counsellor',
                      'Administrative staff',
                      'Management / Trustee',
                      'NGO programme staff',
                    ]}
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="3. Your students">
                <Grid2>
                  <TextField
                    name="Student count"
                    label="Approximate number of students you reach in classes 11 and 12"
                    type="number"
                    min={1}
                    required
                    placeholder="e.g. 240"
                  />
                  <TextField
                    name="Low income share"
                    label="Roughly what share come from low-income families?"
                    placeholder="e.g. about half"
                  />
                </Grid2>
                <ChoiceGroup
                  name="Streams"
                  label="Which streams do your students study?"
                  type="checkbox"
                  required
                  inline
                  choices={[
                    { value: 'Science', title: 'Science' },
                    { value: 'Commerce', title: 'Commerce' },
                    { value: 'Arts / Humanities', title: 'Arts' },
                    { value: 'Vocational', title: 'Vocational' },
                  ]}
                />
              </Fieldset>

              <Fieldset
                legend="4. What you would like from us"
                note="Choose as many as apply. Nothing here is charged to your organisation."
              >
                <ChoiceGroup
                  name="Interested in"
                  label="We would like"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Scholarship information for students',
                      title: 'Scholarship information for our students',
                      note: 'Details of the current programme, to circulate',
                    },
                    {
                      value: 'On-campus session',
                      title: 'A session on our campus',
                      note: 'Somebody visits and speaks to a class or a group',
                    },
                    {
                      value: 'Career guidance for a batch',
                      title: 'Career guidance for a whole batch',
                      note: 'A structured session ahead of stream or course selection',
                    },
                    {
                      value: 'Competitive exam briefing',
                      title: 'A competitive exam briefing',
                      note: 'What is available, what it takes, and how to prepare affordably',
                    },
                    {
                      value: 'Parent session',
                      title: 'A session for parents',
                      note: 'Often the most useful hour we spend at an institution',
                    },
                    {
                      value: 'Refer students to the Foundation',
                      title: 'To refer students to you',
                      note: 'We already know students who need this support',
                    },
                  ]}
                />
                <Grid2>
                  <SelectField
                    name="Room availability"
                    label="Could you give us a room for an on-campus session?"
                    options={[
                      'Yes — a classroom or hall is available',
                      'Possibly — needs management approval',
                      'No — but we will circulate the information',
                    ]}
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="5. Anything else">
                <TextAreaField
                  name="Notes"
                  label="Questions, constraints or anything we should know"
                  placeholder="Optional"
                />
                <ChoiceGroup
                  name="Consent"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Agreed',
                      title: 'We are interested in partnering',
                      note: 'I confirm that the details above are accurate and that a representative may contact our organisation. Partnering involves no cost or financial commitment of any kind.',
                    },
                  ]}
                />
              </Fieldset>

              <SubmitRow
                busy={busy}
                label="Send partnership request"
                note="No cost, no commitment at this stage."
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
