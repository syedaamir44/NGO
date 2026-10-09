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

                <Fieldset
                  legend="Notice and parent/guardian consent"
                  note="Because almost every applicant is under eighteen, a parent or legal guardian gives consent here. The law requires this before we can process the application."
                >
                  <div className="mb-5 border-[1.5px] border-line bg-[#F8F5EE] px-4 py-4 rounded-sm text-[0.9rem] text-ink-deep leading-relaxed max-h-64 overflow-y-auto">
                    <strong className="block mb-2 text-[0.72rem] uppercase tracking-[0.12em] text-muted">
                      Notice — personal data
                    </strong>
                    Shiksha Sarathi Foundation will process the following personal data about the
                    applicant for the purpose of administering the SSF Scholarship Scheme 2026–27:
                    name, date of birth, gender, mobile number, email address, residential address,
                    college name, district, college type, stream and combination, marks in the
                    qualifying examination, responses and score in the SSF Scholarship Examination,
                    photograph, proof of identity and date of birth, proof of admission, and, where a
                    relaxation is claimed, a disability certificate. We also process the parent or
                    guardian’s name, occupation and annual income, and, on selection, the scholar’s
                    bank account number and IFSC code. We use this data only to check eligibility,
                    conduct the examination, prepare and publish the merit list, verify documents, pay
                    the scholarship into the scholar’s own bank account, communicate about the scheme,
                    and keep the records audit and law require. You may withdraw consent at any time,
                    as easily as it was given, by writing to{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
                      {CONTACT_EMAIL}
                    </a>
                    . You may ask for a summary of the data held, have it corrected, or have it
                    erased, and may complain to us and to the Data Protection Board of India. Full
                    details are in our{' '}
                    <a href="/privacy" className="underline">
                      Privacy Policy
                    </a>
                    .
                  </div>

                  <Grid2>
                    <TextField
                      name="Parent/guardian name"
                      label="Parent or guardian’s full name"
                      required
                      style={{ textTransform: 'uppercase' }}
                    />
                    <TextField
                      name="Relationship to applicant"
                      label="Relationship to the applicant"
                      required
                      placeholder="e.g. Father, Mother, Guardian"
                    />
                    <TextField
                      name="Parent/guardian mobile"
                      label="Parent or guardian’s mobile number"
                      type="tel"
                      required
                      numeric
                      maxLength={10}
                      rule="mobile"
                      placeholder="10-digit number"
                      hint="Separate from the applicant’s number, where possible"
                    />
                    <TextField
                      name="Parent/guardian email"
                      label="Parent or guardian’s email address"
                      type="email"
                      placeholder="Optional"
                    />
                  </Grid2>

                  <ChoiceGroup
                    name="Parent consent"
                    type="checkbox"
                    required
                    choices={[
                      {
                        value: 'Agreed',
                        title: 'I give my consent as parent or legal guardian',
                        note: 'I am the parent or legal guardian of the applicant. I have read the notice above and the Privacy Policy. I consent to the Foundation collecting and processing my child’s personal data, and my own, for the purposes set out and no other. I understand the final merit list (name, rank and college) is published if my child is selected; that I may withdraw this consent at any time; that the Foundation charges nothing and any demand for money in its name is fraudulent; and that renewal into a second year is subject to funds and is not guaranteed.',
                      },
                    ]}
                  />
                </Fieldset>

                <Fieldset legend="Applicant declaration">
                  <ChoiceGroup
                    name="Declaration"
                    type="checkbox"
                    required
                    choices={[
                      {
                        value: 'Agreed',
                        title: 'I confirm the above and accept the scheme terms',
                        note: 'The information I have given is true and complete. I am studying in Class 11 or Class 12 (First or Second PUC) at a recognised institution in Karnataka in 2026–27, as a regular full-time student. I have read the SSF Scholarship Scheme 2026–27 and accept its terms. I will appear for the SSF Scholarship Examination personally and will not let anyone appear in my place. I understand selection is purely on merit through a published rank list, that registration and the examination are free and the Foundation will never ask me for money, and that a scholarship obtained through a false statement will be cancelled and the amount recovered. My parent or guardian has given consent above.',
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
