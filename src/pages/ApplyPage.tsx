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
  ApplicationReceipt,
  SubmitRow,
  Req,
  useEifForm,
} from '../components/form'
import { CONTACT_EMAIL, PROGRAMME } from '../config'

const EDUCATION_LEVELS = [
  'No formal education',
  'Primary school (up to class 5)',
  'Middle school (up to class 8)',
  'SSLC / Class 10',
  'PUC / Class 12',
  'ITI / Diploma',
  'Graduate',
  'Post-graduate',
  'Not known',
]

const RELIGIONS = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Buddhist', 'Jain', 'Other']

export default function ApplyPage() {
  const { formRef, submitted, delivered, busy, reference, applicantName, onSubmit, onInput } =
    useEifForm('apply')

  return (
    <>
      <PageHeader
        crumb="Apply"
        label={PROGRAMME.name}
        title="Scholarship application"
        intro="Applying is free of cost. Take your time — details that match your documents exactly will save you weeks later."
      />

      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-10 sm:py-14">
        {submitted ? (
          <SuccessPanel
            label="Application received"
            title="Thank you — your application is in."
            intro="Your application for the All India Merit Scholarship has been recorded. Here is what happens next:"
            steps={[
              'We shortlist applications on academic performance and financial background',
              'Shortlisted candidates are called for a telephonic interview',
              'Selected candidates go through document verification',
              'Results are published on this website and sent to your registered email',
            ]}
            delivered={delivered}
          >
            <ApplicationReceipt
              reference={reference}
              name={applicantName}
              programme={PROGRAMME.name}
            />
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              Keep the documents listed on the scholarship page ready — verification moves quickly
              once shortlisting is done. Questions in the meantime? Write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SuccessPanel>
        ) : (
          <>
            <SetupNotice formKey="apply" />

            <h2 className="font-serif font-normal text-2xl text-ink-deep">Application form</h2>
            <p className="mt-2 mb-8 text-sm text-muted leading-relaxed">
              Fields marked <Req /> are required. Everything you tell us is used only to assess this
              application.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input
                type="hidden"
                name="_form"
                value={`Scholarship Application — ${PROGRAMME.name}`}
              />

              {/* ---------- 1. Student ---------- */}
              <Fieldset legend="1. Student details">
                <Grid2>
                  <TextField
                    full
                    name="Full name"
                    label="Full name, exactly as printed on your marksheet"
                    required
                    autoComplete="name"
                  />
                  <TextField name="Date of birth" label="Date of birth" type="date" required />
                  <SelectField
                    name="Gender"
                    label="Gender"
                    required
                    options={['Female', 'Male', 'Other', 'Prefer not to say']}
                  />
                  <SelectField
                    name="Religion"
                    label="Religion"
                    placeholder="Prefer not to say"
                    options={RELIGIONS}
                  />
                  <SelectField
                    name="Category"
                    label="Category"
                    placeholder="Prefer not to say"
                    options={['General', 'OBC', 'SC', 'ST', 'Other']}
                    hint="Only used where a category-specific document is required"
                  />
                  <TextField
                    full
                    name="Aadhaar number"
                    label="Aadhaar number"
                    required
                    numeric
                    maxLength={12}
                    rule="aadhaar"
                    placeholder="12-digit number"
                    hint="Exactly as printed on your Aadhaar card, without spaces"
                  />
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
                    hint="WhatsApp enabled if possible — the interview call comes here"
                  />
                  <TextField
                    name="Email"
                    label="Email address"
                    type="email"
                    required
                    autoComplete="email"
                    hint="Shortlisting and results are emailed here"
                  />
                  <SelectField
                    full
                    name="Karnataka connection"
                    label="Your connection to Karnataka"
                    required
                    hint="For the 2026 cycle, applicants must study in or be domiciled in Karnataka"
                    options={[
                      'I study at an institution in Karnataka',
                      'I hold Karnataka domicile',
                      'Both',
                      'Neither',
                    ]}
                  />
                </Grid2>
              </Fieldset>

              {/* ---------- 2. Address ---------- */}
              <Fieldset legend="2. Address">
                <Grid2>
                  <TextAreaField
                    full
                    name="Address"
                    label="Address — house number, street and area"
                    required
                  />
                  <TextField name="City or town" label="City or town" required />
                  <TextField name="District" label="District" required />
                  <TextField
                    name="State"
                    label="State"
                    required
                    placeholder="e.g. Karnataka"
                  />
                  <TextField
                    name="PIN code"
                    label="PIN code"
                    required
                    numeric
                    maxLength={6}
                    rule="pin"
                    placeholder="e.g. 560001"
                    hint="6-digit postal code"
                  />
                </Grid2>
              </Fieldset>

              {/* ---------- 3. Academic ---------- */}
              <Fieldset
                legend="3. Academic details"
                note="Work backwards from where you are now. Every name, number and percentage should match your marksheets exactly."
              >
                <Grid2>
                  <SelectField
                    full
                    name="Current class"
                    label="Which class are you in now?"
                    required
                    options={['Class 11', 'Class 12']}
                    hint="Both class 11 and class 12 students may apply this cycle"
                  />
                  <TextField
                    full
                    name="Present college"
                    label="Name of your present college"
                    required
                  />
                  <TextField
                    name="Board of class 12"
                    label="Board of your class 12 / present college"
                    required
                    placeholder="e.g. Karnataka PU Board, CBSE, ICSE"
                  />
                  <SelectField
                    name="Stream"
                    label="Stream"
                    required
                    options={['Science', 'Commerce', 'Arts / Humanities', 'Other']}
                  />
                  <TextField
                    full
                    name="Class 11 college"
                    label="Name of the college where you studied class 11"
                    required
                    hint="If it is the same as your present college, write the same name again"
                  />
                  <TextField
                    name="Class 11 percentage"
                    label="Class 11 percentage"
                    type="number"
                    min={0}
                    max={100}
                    step="0.01"
                    rule="percentage"
                    placeholder="e.g. 72"
                    hint="Number only, no % sign. Class 12 applicants: your class 11 result. Class 11 students still in their first year may leave this blank."
                  />
                  <TextField
                    full
                    name="Class 10 school"
                    label="Name of your class 10 school"
                    required
                  />
                  <TextField
                    name="Class 10 year of passing"
                    label="Year of passing class 10"
                    required
                    numeric
                    maxLength={4}
                    rule="year"
                    placeholder="e.g. 2024"
                  />
                  <TextField
                    name="Class 10 register number"
                    label="Class 10 register number"
                    required
                    hint="As printed on your class 10 marksheet"
                  />
                  <TextField
                    name="Class 10 percentage"
                    label="Class 10 percentage"
                    type="number"
                    min={0}
                    max={100}
                    step="0.01"
                    rule="percentage"
                    required
                    placeholder="e.g. 84"
                    hint="Enter the number only, without the % sign"
                  />
                </Grid2>
              </Fieldset>

              {/* ---------- 4. Fees ---------- */}
              <Fieldset
                legend="4. Fees at your present college"
                note="Enter the amounts in rupees, as stated on your latest fee receipt or your college’s fee structure. These tell us what the scholarship would actually have to cover."
              >
                <Grid2>
                  <TextField
                    name="Admission fee"
                    label="Admission fee"
                    type="number"
                    min={0}
                    rule="amount"
                    required
                    placeholder="e.g. 12000"
                  />
                  <TextField
                    name="Tuition fee"
                    label="Tuition fee"
                    type="number"
                    min={0}
                    rule="amount"
                    required
                    placeholder="e.g. 24000"
                    hint="For the full academic year"
                  />
                </Grid2>
              </Fieldset>

              {/* ---------- 5. Family ---------- */}
              <Fieldset
                legend="5. Family and financial details"
                note="This decides eligibility, so please answer accurately. It is verified against the income proof you submit later."
              >
                <Grid2>
                  <TextField
                    full
                    name="Father's name"
                    label="Father’s name"
                    required
                    hint="Enter the full name in BLOCK LETTERS"
                    style={{ textTransform: 'uppercase' }}
                  />
                  <SelectField
                    name="Father's education qualification"
                    label="Father’s education qualification"
                    required
                    options={EDUCATION_LEVELS}
                  />
                  <TextField
                    name="Father's occupation"
                    label="Occupation of father"
                    required
                    placeholder="e.g. Auto driver, farmer, shopkeeper"
                  />
                  <TextField
                    full
                    name="Mother's name"
                    label="Mother’s name"
                    required
                    hint="Enter the full name in BLOCK LETTERS"
                    style={{ textTransform: 'uppercase' }}
                  />
                  <SelectField
                    name="Mother's education qualification"
                    label="Mother’s education qualification"
                    required
                    options={EDUCATION_LEVELS}
                  />
                  <TextField
                    name="Mother's occupation"
                    label="Occupation of mother"
                    required
                    placeholder="e.g. Homemaker, tailor, teacher"
                  />
                  <TextAreaField
                    full
                    name="Guardian name and details"
                    label="Guardian name and details"
                    hint="Only if a guardian other than your parents is responsible for you. Give their name, relationship to you and contact number."
                    placeholder="Optional"
                  />
                  <TextField
                    full
                    name="Annual family income"
                    label="Annual family income"
                    type="number"
                    min={0}
                    rule="amount"
                    required
                    placeholder="e.g. 180000"
                    hint="Enter the amount in rupees, as stated on your income certificate. Applications above ₹8,00,000 cannot be shortlisted for this programme."
                  />
                  <TextField
                    name="Dependents"
                    label="Number of people dependent on this income"
                    type="number"
                    min={1}
                    placeholder="e.g. 5"
                  />
                </Grid2>
              </Fieldset>

              {/* ---------- 6. Bank ---------- */}
              <Fieldset
                legend="6. Bank account details"
                note="A scholarship is paid by bank transfer into the student’s own account. If you do not have an account in your own name yet, leave this blank — we will ask for it if you are selected."
              >
                <Grid2>
                  <TextField
                    name="Bank account number"
                    label="Account number"
                    numeric
                    maxLength={18}
                    rule="account"
                    hint="The account must be in the student’s own name"
                  />
                  <TextField
                    name="IFSC code"
                    label="IFSC code"
                    maxLength={11}
                    rule="ifsc"
                    placeholder="e.g. SBIN0001234"
                    style={{ textTransform: 'uppercase' }}
                  />
                  <TextField name="Bank branch" label="Branch" placeholder="e.g. Jayanagar" />
                  <TextField name="Bank name" label="Name of the bank" placeholder="e.g. State Bank of India" />
                </Grid2>
              </Fieldset>

              {/* ---------- 7. Additional ---------- */}
              <Fieldset legend="7. Additional information">
                <ChoiceGroup
                  name="Disability"
                  label="Do you have a disability?"
                  required
                  inline
                  choices={[
                    { value: 'No', title: 'No' },
                    { value: 'Yes', title: 'Yes' },
                  ]}
                />
                <Grid2>
                  <TextField
                    name="Type of disability"
                    label="Type of disability"
                    hint="Only if you answered yes above"
                  />
                  <TextField
                    name="Percentage of disability"
                    label="Percentage of disability"
                    type="number"
                    min={0}
                    max={100}
                    step="0.01"
                    rule="percentage"
                    placeholder="e.g. 40"
                    hint="Number only, as stated on your disability certificate"
                  />
                </Grid2>
                <TextAreaField
                  name="Co-curricular activities"
                  label="Co-curricular activities and achievements"
                  hint="Sports, arts, NCC, NSS, olympiads, competitions, volunteering. Leave blank if none — it does not count against you."
                  placeholder="Optional"
                />
              </Fieldset>

              {/* ---------- 8. Your situation ---------- */}
              <Fieldset
                legend="8. Your situation"
                note="Read by a person, not scored by a machine. Write plainly — there is no advantage in fine language."
              >
                <TextAreaField
                  name="Why you need this scholarship"
                  label="Why do you need this scholarship?"
                  required
                  placeholder="What the fees mean for your family, and what would happen without support."
                />
                <TextAreaField
                  name="What you want to study"
                  label="What do you want to study, and why?"
                  required
                  placeholder="The course or career you are aiming for, and what drew you to it."
                />
                <ChoiceGroup
                  name="Also interested in"
                  label="Would you also like us to arrange any of these while your application is assessed?"
                  type="checkbox"
                  choices={[
                    { value: 'Education counselling', title: 'Education counselling' },
                    { value: 'Career counselling', title: 'Career counselling' },
                    { value: 'Competitive exam guidance', title: 'Competitive exam guidance' },
                    { value: 'Add-on skill courses', title: 'Add-on skill courses' },
                  ]}
                />
                <p className="-mt-2 mb-5 text-sm text-muted leading-relaxed">
                  These are arranged with partner organisations, which set their own fees. We will
                  tell you the cost before anything is booked, and we can arrange help with it where
                  it is needed. Asking has no effect, positive or negative, on your scholarship
                  application.
                </p>
              </Fieldset>

              {/* ---------- 9. Declaration ---------- */}
              <Fieldset legend="9. Declaration">
                <ChoiceGroup
                  name="Declaration"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Agreed',
                      title: 'I confirm the above details are true',
                      note: 'I understand that applying is free of cost, that my details will be verified against my original documents, that selection is decided on merit and need through a published process, and that any scholarship awarded is to be used for my education. I understand that false information will disqualify my application.',
                    },
                  ]}
                />
              </Fieldset>

              <SubmitRow
                busy={busy}
                label="Submit application"
                note="No fee is payable. We will never ask you for money."
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
