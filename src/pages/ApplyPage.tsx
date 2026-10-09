import { useState } from 'react'
import {
  PageHeader,
  Fieldset,
  Grid2,
  TextField,
  SelectField,
  AcademicSection,
  TextAreaField,
  ChoiceGroup,
  SetupNotice,
  SuccessPanel,
  ApplicationReceipt,
  Stepper,
  WizardNav,
  validateStep,
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

const STEP_LABELS = [
  'Your details',
  'Address',
  'Academics',
  'Fees & family',
  'Bank & extra',
  'Review & submit',
]

export default function ApplyPage() {
  const { formRef, submitted, delivered, busy, reference, submittedData, onSubmit, onInput } =
    useEifForm('apply')
  const [step, setStep] = useState(0)
  const total = STEP_LABELS.length

  const goNext = () => {
    const el = formRef.current?.querySelector(`[data-step="${step}"]`) ?? null
    if (!validateStep(el)) return
    setStep((s) => Math.min(s + 1, total - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show only the current step; the rest stay mounted (and hidden) so their
  // values and the academic section's state survive Back/Continue.
  const stepClass = (n: number) => (n === step ? '' : 'hidden')

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
            intro="Your application for the Shiksha Sarathi Merit Scholarship has been recorded. Here is what happens next:"
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
              data={submittedData}
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
              Fields marked <Req /> are required. Your answers are saved as you move between steps —
              use Back any time to change something. Everything you tell us is used only to assess
              this application.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input
                type="hidden"
                name="_form"
                value={`Scholarship Application — ${PROGRAMME.name}`}
              />

              <Stepper steps={STEP_LABELS} current={step} />

              {/* ---------- Step 1 — Student ---------- */}
              <div data-step={0} className={stepClass(0)}>
                <Fieldset legend="Student details">
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
                    <TextField
                      name="PAN number"
                      label="PAN number"
                      maxLength={10}
                      placeholder="e.g. ABCDE1234F"
                      style={{ textTransform: 'uppercase' }}
                      hint="Optional — leave blank if you do not have a PAN yet"
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
              </div>

              {/* ---------- Step 2 — Address ---------- */}
              <div data-step={1} className={stepClass(1)}>
                <Fieldset legend="Address">
                  <Grid2>
                    <TextAreaField
                      full
                      name="Address"
                      label="Address — house number, street and area"
                      required
                    />
                    <TextField name="City or town" label="City or town" required />
                    <TextField name="District" label="District" required />
                    <TextField name="State" label="State" required placeholder="e.g. Karnataka" />
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
              </div>

              {/* ---------- Step 3 — Academic ---------- */}
              <div data-step={2} className={stepClass(2)}>
                <Fieldset
                  legend="Academic details"
                  note="Tell us the class you are in now, and the rest of the section adjusts to it. Every name, number and percentage should match your marksheets exactly."
                >
                  <AcademicSection />
                </Fieldset>
              </div>

              {/* ---------- Step 4 — Fees + Family ---------- */}
              <div data-step={3} className={stepClass(3)}>
                <Fieldset
                  legend="Fees at your present college"
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

                <Fieldset
                  legend="Family and financial details"
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
              </div>

              {/* ---------- Step 5 — Bank + Additional ---------- */}
              <div data-step={4} className={stepClass(4)}>
                <Fieldset
                  legend="Bank account details"
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
                    <TextField
                      name="Bank name"
                      label="Name of the bank"
                      placeholder="e.g. State Bank of India"
                    />
                  </Grid2>
                </Fieldset>

                <Fieldset legend="Additional information">
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
              </div>

              {/* ---------- Step 6 — Situation + Declaration ---------- */}
              <div data-step={5} className={stepClass(5)}>
                <Fieldset
                  legend="Your situation"
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
                      { value: 'Education mentorship', title: 'Education mentorship' },
                      { value: 'Career mentorship', title: 'Career mentorship' },
                      { value: 'Competitive exam guidance', title: 'Competitive exam guidance' },
                    ]}
                  />
                  <p className="-mt-2 mb-5 text-sm text-muted leading-relaxed">
                    We will tell you the cost before anything is booked, and we can arrange help with
                    it where it is needed. Asking has no effect, positive or negative, on your
                    scholarship application.
                  </p>
                </Fieldset>

                <Fieldset legend="Declaration">
                  <ChoiceGroup
                    name="Declaration"
                    type="checkbox"
                    required
                    choices={[
                      {
                        value: 'Agreed',
                        title: 'I confirm the above details are true',
                        note: 'I understand that applying is free of cost, that my details will be verified against my original documents, that selection is decided on merit and need through a published process, and that any scholarship awarded is to be used for my education. I give Shikshasarathi Foundation irrevocable authorisation to use the data I have submitted, including my Aadhaar and PAN, to process this application. I understand that false information will disqualify my application.',
                      },
                    ]}
                  />
                </Fieldset>
              </div>

              <WizardNav
                step={step}
                total={total}
                busy={busy}
                onBack={goBack}
                onNext={goNext}
              />
            </form>
          </>
        )}
      </div>
    </>
  )
}
