import type { ReactNode } from 'react'
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
import CopyButton from '../components/CopyButton'
import { CONTACT_EMAIL } from '../config'

/* ============================================================
   PAYMENT DETAILS — replace every value in this block before
   publishing, and swap the QR placeholder for your UPI QR image.
   ============================================================ */
const UPI_ID = 'shikshasarathi@upi'
const PAYEE_NAME = 'Shikshasarathi Foundation'
const BANK_ROWS: { k: string; v: string; copy?: string }[] = [
  { k: 'Account name', v: 'Shikshasarathi Foundation', copy: 'Shikshasarathi Foundation' },
  { k: 'Account number', v: '0000 0000 0000', copy: '000000000000' },
  { k: 'IFSC code', v: 'XXXX0000000', copy: 'XXXX0000000' },
  { k: 'Bank & branch', v: 'Bank name, branch, Karnataka' },
  { k: 'Account type', v: 'Current — Savings' },
]

const TIERS = [
  {
    amount: '₹2,500',
    funds: 'Sponsored counselling sessions',
    detail: 'Covers the partner’s fee for students whose families cannot meet it',
  },
  {
    amount: '₹10,000',
    funds: 'Part of a scholarship',
    detail: "A term’s fees, books and travel for one student who would otherwise drop out",
  },
  {
    amount: '₹25,000',
    funds: 'One scholar for a year',
    detail: 'A full year of support for one selected scholar, paid as the fees fall due',
  },
  {
    amount: '₹500/month',
    funds: 'Giving circle member',
    detail: 'A steady monthly amount — the kind of funding that lets us plan a year ahead',
  },
]

function PayPanel({ head, children }: { head: string; children: ReactNode }) {
  return (
    <div className="bg-cream border-[1.5px] border-ink rounded-sm overflow-hidden">
      <div className="bg-ink text-cream px-4 py-3.5 font-serif text-[1.08rem]">{head}</div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}

function PayRow({ k, v, copy }: { k: string; v: string; copy?: string }) {
  return (
    <div className="flex flex-col min-[520px]:flex-row min-[520px]:items-center justify-between gap-3 py-3 border-b border-line last:border-b-0">
      <div className="min-w-0 flex-1">
        <div className="text-[0.7rem] uppercase tracking-[0.12em] text-muted">{k}</div>
        <div className="font-serif text-[1.05rem] text-ink-deep break-words">{v}</div>
      </div>
      {copy && <CopyButton value={copy} />}
    </div>
  )
}

export default function SponsorPage() {
  const { formRef, submitted, delivered, busy, onSubmit, onInput } = useEifForm('sponsor')

  return (
    <>
      <PageHeader
        crumb="Donate"
        label="For donors & CSR partners"
        title="Put one more student through college"
        intro="A contribution does two things at once. It funds a merit scholarship for a student who cannot pay the fees, and it pays for the guidance and skill courses we arrange for students whose families cannot meet the cost themselves."
      />

      {!submitted && (
        <>
          {/* ---------- Tiers ---------- */}
          <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14 py-12 sm:py-16">
            <Label>What a contribution funds</Label>
            <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
              The cheapest thing we do is often the most decisive
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted leading-relaxed">
              A scholarship changes one student’s year. A sponsored counselling session costs a
              small fraction of that and, often enough, changes a student’s direction entirely —
              because what stopped them was never money in the first place. We fund both, and we
              would rather you knew exactly which one your contribution goes to.
            </p>

            <table className="eif-table mt-8">
              <thead>
                <tr>
                  <th>Sponsorship</th>
                  <th>Funds</th>
                  <th>The student receives</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr key={t.amount}>
                    <td
                      data-label="Sponsorship"
                      className="font-serif text-2xl text-marigold whitespace-nowrap"
                    >
                      {t.amount}
                    </td>
                    <td data-label="Funds" className="font-serif text-lg text-ink-deep">
                      {t.funds}
                    </td>
                    <td data-label="The student receives" className="text-[15px] text-muted">
                      {t.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-11">
              <div>
                <h3 className="inline-block font-serif text-lg text-ink-deep border-b-2 border-marigold pb-2.5">
                  What sponsors receive
                </h3>
                <ul className="mt-4">
                  {[
                    'The anonymised profile and progress of the student your contribution supported',
                    'An annual impact report with our accounts',
                    'An invitation to the annual awards ceremony',
                    'Named recognition, if you would like it — or complete anonymity if you prefer',
                  ].map((t) => (
                    <li
                      key={t}
                      className="relative pl-6 py-2.5 border-b border-line last:border-b-0 text-[15px] text-muted leading-relaxed"
                    >
                      <span className="absolute left-0 top-2.5 font-bold text-marigold">—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="inline-block font-serif text-lg text-ink-deep border-b-2 border-marigold pb-2.5">
                  Where your money goes
                </h3>
                <p className="mt-4 text-[15px] text-muted leading-relaxed">
                  The large majority of the Foundation’s budget reaches students directly — as
                  scholarships paid into their own bank accounts, and as sponsored places on the
                  counselling, exam guidance and skill courses we arrange for those who cannot
                  otherwise afford them.
                </p>
                <p className="mt-3 text-[15px] text-muted leading-relaxed">
                  Those services are delivered by partner organisations, which set their own fees.
                  We accept no commission or referral fee from any of them, from any college, or from
                  any coaching centre — and we publish our accounts every year.
                </p>
              </div>
            </div>
          </section>

          {/* ---------- Payment details ---------- */}
          <section id="payment" className="bg-sand py-12 sm:py-16">
            <div className="max-w-5xl mx-auto px-6 sm:px-10 md:px-14">
              <Label>Payment details</Label>
              <h2 className="mt-4 font-serif font-normal text-2xl sm:text-3xl text-ink-deep">
                How to send your contribution
              </h2>
              <p className="mt-4 max-w-3xl text-base text-muted leading-relaxed">
                Pay by UPI or bank transfer using the details below, then fill in the form underneath
                so we can record your contribution, send your receipt, and tell you what it funded.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2 items-start">
                <PayPanel head="UPI — the quickest way">
                  <PayRow k="UPI ID" v={UPI_ID} copy={UPI_ID} />
                  <PayRow k="Payee name" v={PAYEE_NAME} />
                  <div className="mt-4 border-[1.5px] border-dashed border-line bg-sand px-4 py-6 text-center text-[0.87rem] text-muted rounded-sm">
                    QR code goes here
                    <br />
                    <span className="text-[0.8rem]">
                      Replace this block with your UPI QR image once your account is open
                    </span>
                  </div>
                </PayPanel>

                <PayPanel head="Bank transfer — NEFT / IMPS / RTGS">
                  {BANK_ROWS.map((r) => (
                    <PayRow key={r.k} {...r} />
                  ))}
                </PayPanel>
              </div>

              <div className="mt-8 bg-[#FDF3DC] border-[1.5px] border-l-[5px] border-[#E0B95E] px-4 py-3.5 rounded-sm text-sm text-[#5C4409] leading-relaxed">
                <strong className="block mb-1">
                  ⚙ Replace the payment details above before publishing
                </strong>
                The UPI ID, account number, IFSC and bank name shown are placeholders. Search{' '}
                <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px]">PAYMENT DETAILS</code> in{' '}
                <code className="bg-[#F5E4BC] px-1.5 py-0.5 rounded-[2px]">
                  src/pages/SponsorPage.tsx
                </code>{' '}
                to find them, and swap the QR placeholder for your account’s UPI QR image. Add your
                80G registration number in the same section once you have it.
              </div>

              <p className="mt-6 text-[15px] text-muted leading-relaxed">
                <strong className="text-ink">On tax exemption:</strong> the Foundation’s 12A and 80G
                registrations are in progress. Once granted, donations become eligible for deduction
                under Section 80G and we will issue the appropriate receipt. Corporate CSR
                contributions additionally require our CSR-1 registration, which follows. We are
                unable to accept foreign or NRI donations until FCRA registration is granted.
              </p>
            </div>
          </section>
        </>
      )}

      {/* ---------- Form ---------- */}
      <div className="max-w-3xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        {submitted ? (
          <SuccessPanel
            label="Sponsorship recorded"
            title="Thank you."
            intro="Your sponsorship has been recorded. Someone from the Foundation will confirm it personally within two working days."
            steps={[
              'We match your payment against the reference you gave and confirm receipt',
              'You receive a formal receipt — and an 80G receipt once our registration is granted',
              'We tell you what your contribution funded, with the anonymised profile of the student or students it reached',
              'You are invited to the annual awards ceremony where the scholars are felicitated',
            ]}
            delivered={delivered}
          >
            <p className="mt-5 text-[15px] text-muted leading-relaxed">
              For anything else, write to{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-forest2 underline break-all">
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </SuccessPanel>
        ) : (
          <>
            <SetupNotice formKey="sponsor" />

            <h2 className="font-serif font-normal text-2xl text-ink-deep">
              Record your sponsorship
            </h2>
            <p className="mt-2 mb-8 text-sm text-muted leading-relaxed">
              Fields marked <Req /> are required. You can fill this in before or after transferring —
              we will reconcile it either way and send your receipt.
            </p>

            <form ref={formRef} onSubmit={onSubmit} onInput={onInput} onChange={onInput} noValidate>
              <input type="hidden" name="_form" value="Sponsorship — Sponsor a Scholar" />

              <Fieldset legend="1. What you would like to sponsor">
                <ChoiceGroup
                  name="Sponsorship type"
                  label="Choose your contribution"
                  required
                  choices={[
                    {
                      value: '₹2,500 — sponsored counselling sessions',
                      title: '₹2,500 — sponsored counselling sessions',
                      note: 'Covers the fee for students who cannot meet it themselves',
                    },
                    {
                      value: '₹10,000 — part of a scholarship',
                      title: '₹10,000 — part of a scholarship',
                      note: "A term’s fees, books and travel for one student",
                    },
                    {
                      value: '₹25,000 — one scholar for a year',
                      title: '₹25,000 — one scholar for a year',
                      note: 'Full support for one selected scholar',
                    },
                    {
                      value: 'Monthly giving circle',
                      title: 'Monthly giving circle',
                      note: 'A recurring amount each month, from ₹500',
                    },
                    {
                      value: 'Other amount',
                      title: 'Another amount',
                      note: 'Any contribution helps — tell us below',
                    },
                    {
                      value: 'In-kind support',
                      title: 'In-kind support',
                      note: 'Venue, printing, media space, or professional services',
                    },
                    {
                      value: 'Volunteer as a counsellor',
                      title: 'I would rather give time',
                      note: 'Counselling students in your own field of work',
                    },
                  ]}
                />
                <Grid2>
                  <TextField
                    name="Amount"
                    label="Amount in ₹"
                    type="number"
                    min={1}
                    placeholder="e.g. 10000"
                    hint="For monthly giving, the amount per month"
                  />
                  <SelectField
                    name="Payment status"
                    label="Payment status"
                    required
                    options={[
                      'Already transferred',
                      'Will transfer within a few days',
                      'I would like to discuss first',
                    ]}
                  />
                  <TextField
                    full
                    name="Payment reference"
                    label="Payment reference or UTR number"
                    hint="If you have already transferred — it helps us match your payment quickly"
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="2. About you">
                <ChoiceGroup
                  name="Donor type"
                  label="You are giving as"
                  required
                  inline
                  choices={[
                    { value: 'An individual', title: 'An individual' },
                    { value: 'A company (CSR)', title: 'A company (CSR)' },
                    { value: 'A trust, club or association', title: 'A trust or club' },
                  ]}
                />
                <Grid2>
                  <TextField name="Donor name" label="Your name" required autoComplete="name" />
                  <TextField
                    name="Organisation"
                    label="Organisation"
                    hint="Company, trust, club or association, if applicable"
                  />
                  <TextField
                    name="Donor email"
                    label="Email"
                    type="email"
                    required
                    autoComplete="email"
                    hint="Your receipt and scholar update go here"
                  />
                  <TextField
                    name="Donor mobile"
                    label="Mobile number"
                    type="tel"
                    required
                    autoComplete="tel"
                  />
                  <TextField
                    full
                    name="PAN"
                    label="PAN"
                    placeholder="ABCDE1234F"
                    style={{ textTransform: 'uppercase' }}
                    hint="Needed to issue an 80G receipt once our registration is granted. Optional otherwise."
                  />
                  <TextAreaField
                    full
                    name="Donor address"
                    label="Address"
                    hint="Required for an 80G receipt"
                  />
                </Grid2>
              </Fieldset>

              <Fieldset legend="3. Recognition & preferences">
                <ChoiceGroup
                  name="Recognition"
                  label="How would you like to be acknowledged?"
                  required
                  choices={[
                    {
                      value: 'Name me publicly',
                      title: 'Name me publicly',
                      note: 'On our website and in the annual report',
                    },
                    {
                      value: 'Anonymous',
                      title: 'Keep me anonymous',
                      note: 'No public mention at all',
                    },
                    {
                      value: 'In memory / honour of someone',
                      title: 'In memory or honour of someone',
                      note: 'Tell us the name below and we will dedicate the scholarship',
                    },
                  ]}
                />
                <TextField name="Dedication" label="Dedication name, if any" />
                <ChoiceGroup
                  name="Also interested in"
                  label="Would you also like to help in other ways?"
                  type="checkbox"
                  choices={[
                    {
                      value: 'Introducing us to other donors',
                      title: 'Introducing us to other donors or companies',
                    },
                    {
                      value: 'Introducing us to schools and colleges',
                      title: 'Introducing us to schools and colleges',
                    },
                    { value: 'Mentoring a scholar', title: 'Mentoring a scholar' },
                    {
                      value: 'Volunteering time or skills',
                      title: 'Volunteering time or professional skills',
                    },
                  ]}
                />
                <TextAreaField
                  name="Notes"
                  label="Anything you’d like to tell us"
                  placeholder="Optional"
                />
                <ChoiceGroup
                  name="Consent"
                  type="checkbox"
                  required
                  choices={[
                    {
                      value: 'Agreed',
                      title: 'I confirm these details and this contribution',
                      note: 'I understand that my contribution funds merit scholarships and sponsored places on guidance and skill courses for students selected on merit and need, that the Foundation publishes its accounts annually, and that I may be contacted about my contribution.',
                    },
                  ]}
                />
              </Fieldset>

              <SubmitRow busy={busy} label="Submit sponsorship" />
            </form>
          </>
        )}
      </div>
    </>
  )
}
