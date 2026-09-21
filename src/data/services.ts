import type { ServiceKey } from '../lib/useHashRoute'

export type Service = {
  key: ServiceKey
  /** Short name for cards and navigation. */
  name: string
  /** Number shown on the home-page overview. */
  index: string
  /** One line for the home-page card. */
  teaser: string
  /* --- page content --- */
  label: string
  title: string
  intro: string
  /** Why the service exists. */
  problem: string[]
  who: string[]
  covers: { title: string; body: string }[]
  steps: { title: string; body: string }[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  /* ============================================================ */
  {
    key: 'education-counselling',
    name: 'Education Counselling',
    index: '02',
    teaser:
      'Which stream, which course and which college — and what each one actually leads to.',
    label: 'Arranged with partner counsellors',
    title: 'Education counselling',
    intro:
      'Choosing what to study is the biggest decision most families make with the least information. A counsellor goes through it properly with the student and the parents: the options, what each one costs, what each one leads to, and what has to be done by when.',
    problem: [
      'Most students choose a stream because a cousin chose it, a neighbour recommended it, or it was the only subject the nearest college offered. Very few choose it because somebody explained where it leads.',
      'A great deal of help already exists — government seats, fee concessions, state and central scholarships, hostels for students from outside the city. Much of it goes unclaimed every year, not because families were refused, but because nobody told them it was there, or told them three weeks after the form had closed.',
      'One properly informed conversation, held early enough, changes what a student is able to do next.',
    ],
    who: [
      'Students in classes 9 to 12 who are deciding what to take next',
      'Students who have just received their results and are unsure what they qualify for',
      'Parents who want to understand the options before committing money',
      'First-generation learners — the first in the family to reach college',
      'Students whose marks came in lower than expected, and who believe their options have closed',
    ],
    covers: [
      {
        title: 'Choosing a stream after class 10',
        body: 'Science, Commerce or Arts — what each one opens, what each one closes, and an honest answer on whether a stream can realistically be changed later.',
      },
      {
        title: 'Choosing a course after class 12',
        body: 'Degree, professional course, diploma or vocational programme, weighed against the student’s marks, interests and what the family can afford over three or four years.',
      },
      {
        title: 'Shortlisting colleges',
        body: 'Government, aided and private colleges within reach, compared on fees, distance, hostel facilities and outcomes rather than on reputation alone.',
      },
      {
        title: 'Admission timelines and documents',
        body: 'What falls due when, which certificates to obtain in advance, and how long each one takes to come through. Most admission crises turn out to be document crises.',
      },
      {
        title: 'Schemes the student may qualify for',
        body: 'Government scholarships, fee reimbursement and reserved or supernumerary seats that apply to the student’s situation, together with the deadlines that govern them.',
      },
      {
        title: 'When the marks fall short',
        body: 'Supplementary examinations, alternative courses, bridge and diploma routes, and ways back in. A disappointing result is rarely the end of the road, though it is very often treated as one.',
      },
    ],
    steps: [
      {
        title: 'Send us a request',
        body: 'Fill in the short form on this website, or call us. Telling us what you need costs nothing and commits you to nothing.',
      },
      {
        title: 'We call you back',
        body: 'Somebody from the Foundation calls within three working days to understand the situation — marks, interests, family circumstances and constraints — before suggesting anything.',
      },
      {
        title: 'We match you with a counsellor, and tell you the cost',
        body: 'We identify the partner best suited to your case and tell you plainly what they charge. If the cost is beyond what your family can manage, we discuss a concession or sponsorship at this stage, before anything is booked.',
      },
      {
        title: 'The session',
        body: 'Forty-five minutes to an hour, by phone, by video or in person in Bangalore. Parents are welcome, and for younger students we prefer that they attend.',
      },
      {
        title: 'A written summary',
        body: 'You receive the options discussed in writing, with the deadlines and documents listed, so that the conversation can be shown to family members who were not in the room.',
      },
      {
        title: 'A follow-up before admissions close',
        body: 'We check whether the applications actually went in. This is the step that matters most, and the one most often missed.',
      },
    ],
    faqs: [
      {
        q: 'Does Shikshasarathi Foundation conduct the counselling itself?',
        a: 'No. We arrange it with partner counsellors and organisations who specialise in this work, and we match you with the one that suits your situation. What we do ourselves is understand your case, find the right person for it, arrange support with the cost where it is needed, and follow up afterwards.',
      },
      {
        q: 'What does a session cost?',
        a: 'The fee is set by the partner, not by us, and it varies with the kind of session and how long it runs. We tell you the exact amount before anything is booked, so you are never committed to a cost you have not agreed to.',
      },
      {
        q: 'What if my family cannot afford it?',
        a: 'Tell us. Where a student genuinely needs a service and cannot meet its cost, we arrange a concession, a discount or full sponsorship. Each case is decided individually, on family income and on how much difference the service is likely to make. Please ask rather than assuming the answer is no.',
      },
      {
        q: 'Do I have to be a scholarship applicant to ask for counselling?',
        a: 'No. The two are entirely separate. You may use these services without ever applying for a scholarship, and asking for counselling gives you no advantage in scholarship selection.',
      },
      {
        q: 'Which languages are sessions available in?',
        a: 'English, Kannada, Hindi and Urdu. Tell us your preference when you send the request and we will match you with a counsellor accordingly.',
      },
    ],
  },

  /* ============================================================ */
  {
    key: 'career-counselling',
    name: 'Career Counselling',
    index: '03',
    teaser:
      'What a job actually involves, what it pays and what it demands — before you spend three years preparing for it.',
    label: 'Arranged with partner counsellors',
    title: 'Career counselling',
    intro:
      'Most career advice a student receives amounts to a list of job titles. These sessions aim at something more useful: what the work is like day to day, what it pays at the start, what qualifications it genuinely requires, and what to do if the first plan does not work.',
    problem: [
      'Ask a class 12 student what an engineer does and you will usually get a job title back rather than a description of the work. That is not the student’s failing. Very few of them have ever met one, and nobody has walked them through it.',
      'So careers get chosen by reputation — the ones that sound respectable at a wedding — rather than by fit. Three years and a great deal of family money later, the mismatch surfaces, and by then it is expensive to correct.',
      'A single honest conversation, held early, prevents a surprising number of those years from being wasted.',
    ],
    who: [
      'Students in classes 11 and 12 who are choosing a direction',
      'Degree students who suspect they have chosen wrongly',
      'Students under pressure to enter a career they have no interest in',
      'Graduates who are unsure how to turn a degree into a first job',
      'Anyone who has been told there is only one respectable option and would like a second opinion',
    ],
    covers: [
      {
        title: 'Interest and aptitude profiling',
        body: 'A structured conversation, supported by a written exercise, to establish where the student’s strengths and interests actually lie rather than where they have been told they lie.',
      },
      {
        title: 'A map of what is reachable',
        body: 'The careers genuinely open from the student’s present stream and marks, including the ones nobody mentions: allied health, logistics, design, agriculture, skilled trades and public service.',
      },
      {
        title: 'What the work is really like',
        body: 'Daily tasks, working hours, starting pay in this region, how progression works and how long it takes. The unglamorous detail that decides whether somebody lasts in a job.',
      },
      {
        title: 'The qualifications required',
        body: 'The degrees, entrance examinations, licences and certifications each path needs, in the order they must be obtained, and what each stage costs.',
      },
      {
        title: 'A second plan, written down in advance',
        body: 'Every competitive path has more entrants than places. Planning the alternative before it is needed stops a setback from becoming a crisis.',
      },
      {
        title: 'The conversation with parents',
        body: 'Where a student and their family want different things, a counsellor helps both sides hear each other — often by supplying the facts about pay and prospects that the argument was missing.',
      },
    ],
    steps: [
      {
        title: 'Send us a request',
        body: 'Use the form on this website or call us. Asking costs nothing and commits you to nothing.',
      },
      {
        title: 'We understand your case',
        body: 'Somebody from the Foundation calls to learn where you are, what you are weighing up and what your constraints are.',
      },
      {
        title: 'We match you with a counsellor, and tell you the cost',
        body: 'We identify the partner best suited to your case and tell you exactly what they charge. Where the cost is beyond a family’s means, we discuss a concession or sponsorship before anything is booked.',
      },
      {
        title: 'A short profiling exercise',
        body: 'You receive a questionnaire on interests, subjects and working preferences. It takes about twenty minutes and makes the session considerably more useful.',
      },
      {
        title: 'The one-to-one session',
        body: 'About an hour with the counsellor, going through the profile and mapping realistic options against it.',
      },
      {
        title: 'Your career map, and a check-in later',
        body: 'A written document setting out the three or four paths that fit best, what each requires, what each pays to begin with, and the first concrete step for each. We check back some months later to see how the plan is holding up.',
      },
    ],
    faqs: [
      {
        q: 'How is this different from education counselling?',
        a: 'Education counselling is about what to study next and how to get in. Career counselling looks further ahead, at the work itself and whether it suits you. Many students use both, usually education counselling first.',
      },
      {
        q: 'What does a session cost?',
        a: 'The fee is set by the partner counsellor rather than by the Foundation, and it varies with the format and length of the session. We tell you the amount before anything is booked. Where a family cannot meet it, ask us about a concession or sponsorship.',
      },
      {
        q: 'Do you guarantee a job or a placement?',
        a: 'No, and you should be wary of anybody who does. What you get is information, an honest assessment and a plan. Finding the job remains work you will have to do, though you will know exactly where to start.',
      },
      {
        q: 'My family wants me to take a career I am not interested in. Can this help?',
        a: 'It can help both of you look at the same facts together — what the work involves, what it pays and what the alternatives offer. A counsellor does not take sides against your family and does not make the decision for you. Very often the disagreement turns out to be about security rather than about the subject, and that is a solvable conversation.',
      },
    ],
  },

  /* ============================================================ */
  {
    key: 'exam-guidance',
    name: 'Competitive Exam Guidance',
    index: '04',
    teaser:
      'CET, NEET, JEE, banking, SSC, railways and state services — which examination suits you, and how to prepare without wasting money.',
    label: 'Arranged with partner mentors',
    title: 'Competitive exam counselling and guidance',
    intro:
      'Competitive examinations are among the fairest doors India offers, because an entrance test does not ask what your father does. But they are surrounded by an industry that profits from confusion. This service gives a student a clear reading of which examination suits them and how to prepare sensibly, including how much of the preparation can be done at no cost.',
    problem: [
      'A student who is short of money is often the one who pays most for preparation, because they have no way to judge what is worth buying. Coaching centres promise ranks. Study material is sold at three times its worth. Application deadlines pass unnoticed.',
      'Meanwhile the genuinely free resources — previous years’ papers, government portals, public libraries and good material given away by good teachers — sit unused, because nobody pointed at them.',
      'What most aspirants need is not another course. It is somebody independent to tell them which examination to sit, what to study, and what not to pay for.',
    ],
    who: [
      'Students in classes 11 and 12 preparing for CET, NEET or JEE alongside their board examinations',
      'Graduates preparing for banking, SSC, railway or state service examinations',
      'Students considering NDA, CDS or other defence entrance examinations',
      'Anyone who has attempted an examination once and is deciding whether to try again',
      'Students whose families cannot afford coaching fees and want to know what is possible without them',
    ],
    covers: [
      {
        title: 'Which examination actually suits you',
        body: 'Matching the student to the examination by eligibility, by subject strength, and by how many attempts and years the family can realistically support.',
      },
      {
        title: 'The pattern, honestly explained',
        body: 'Syllabus, marking scheme, negative marking, recent cut-offs and the number of seats genuinely available — so that the real odds are stated plainly rather than implied.',
      },
      {
        title: 'A study plan that fits your life',
        body: 'A weekly plan built around school, college or work, rather than a timetable that assumes twelve free hours a day and collapses within a fortnight.',
      },
      {
        title: 'Material that costs little or nothing',
        body: 'Previous papers, official syllabi, public libraries, free online courses and reputable low-cost books. A serious preparation shelf can be assembled for very little.',
      },
      {
        title: 'Coaching — when it is worth paying for',
        body: 'An honest view of when paid coaching adds real value and when it does not, how to judge an institute, and which claims in their advertising to disregard entirely.',
      },
      {
        title: 'Forms, deadlines and documents',
        body: 'Keeping track of notification and application dates for the major examinations. Every year, capable candidates miss examinations purely on paperwork.',
      },
      {
        title: 'Mock tests and review',
        body: 'How to sit mock tests under real conditions and, more importantly, how to analyse the result afterwards — which is where nearly all of the improvement comes from.',
      },
      {
        title: 'After an unsuccessful attempt',
        body: 'Whether to attempt again, what to change, and how to hold a life together during a repeat year. This is the conversation students most need and least often get.',
      },
    ],
    steps: [
      {
        title: 'Send us a request',
        body: 'Tell us which examination you are considering, or that you have not decided yet — that is a perfectly good starting point.',
      },
      {
        title: 'An assessment call',
        body: 'We look at your academic record, your subjects and your circumstances, and form a view on which examinations are worth your time.',
      },
      {
        title: 'We match you with a mentor, and tell you the cost',
        body: 'We identify the partner best suited to your examination and tell you what they charge. Where the cost is beyond a family’s means, we discuss a concession or sponsorship before anything is booked.',
      },
      {
        title: 'Your preparation plan',
        body: 'A written plan covering syllabus priorities, a weekly schedule, the material to obtain and target dates for mock tests.',
      },
      {
        title: 'Reviews as you go',
        body: 'Periodic sessions on examination strategy, time management and paper analysis, and reminders when application windows for your chosen examinations open and close.',
      },
    ],
    faqs: [
      {
        q: 'Do you run coaching classes?',
        a: 'No. Neither the Foundation nor this service teaches the syllabus. The work here is choosing the right examination, planning the preparation, finding good material and avoiding wasted money — and then pointing you towards teaching, paid or otherwise, only where you genuinely need it.',
      },
      {
        q: 'What does this cost?',
        a: 'Guidance is provided by partner mentors who set their own fees, which we tell you before anything is booked. Where a student needs the guidance and the family cannot meet the cost, ask us about a concession or sponsorship — this is exactly the situation those are meant for.',
      },
      {
        q: 'Can I clear these examinations without paid coaching?',
        a: 'Many students do, every year. It demands more discipline and better selection of material, and it is harder without a peer group. You will be given a straight answer about your particular examination rather than a comfortable one.',
      },
      {
        q: 'I did not clear my first attempt. Is it worth trying again?',
        a: 'Sometimes yes and sometimes no. The honest answer depends on your score, on what went wrong, and on what a repeat year would cost your family — which is precisely the conversation to have with a mentor rather than alone.',
      },
    ],
  },

  /* ============================================================ */
  {
    key: 'skill-courses',
    name: 'Add-on Skill Courses',
    index: '05',
    teaser:
      'Short courses that lead to real work, alongside a degree or instead of waiting for one.',
    label: 'Arranged with partner institutes',
    title: 'Add-on skill courses',
    intro:
      'A short, well-chosen course can put someone into work within months, or make a degree far more employable than it would otherwise be. A badly chosen one takes a family’s savings and returns a certificate no employer recognises. This service helps students tell the two apart, and arranges the course once the choice is made.',
    problem: [
      'The skills market is where families with the least money are most likely to lose it. A course is advertised outside a bus stand, a fee is quoted with a promise of placement, and a year later the certificate turns out to be worth nothing to any employer.',
      'At the same time, government skill programmes running comparable training at a fraction of the cost go under-enrolled, because families have never heard of them.',
      'The difference between those two outcomes is usually one conversation with somebody who knows the landscape and has no stake in the sale.',
    ],
    who: [
      'Students who want to start earning soon, while continuing to study',
      'Degree students who want a practical skill alongside their qualification',
      'Class 12 students and graduates looking to become employable quickly',
      'Students who have discontinued formal education and want a route back to work',
      'Anyone approached by an institute promising a job, who would like it checked first',
    ],
    covers: [
      {
        title: 'Matching a course to real work',
        body: 'Starting from the jobs actually available in and around where the student lives and working backwards to the training that leads to them, rather than starting from whichever course is being sold nearby.',
      },
      {
        title: 'Government and subsidised programmes',
        body: 'Training through national and Karnataka state skill schemes, ITIs, polytechnics and community colleges — recognised, inexpensive and consistently under-used.',
      },
      {
        title: 'Checking whether an institute is genuine',
        body: 'How to verify affiliation and recognition, what to ask before paying, which placement promises are unenforceable, and the warning signs that mean walk away.',
      },
      {
        title: 'What a certificate is actually worth',
        body: 'Which certifications employers in this region recognise, which are decorative, and which need to be paired with something else before they count.',
      },
      {
        title: 'The practical shortlist',
        body: 'Spoken English and communication, computer fundamentals, Tally and accounting, data entry, digital marketing, retail and customer service, healthcare assistance, electrical and automotive trades, tailoring and beauty — assessed on their honest job prospects.',
      },
      {
        title: 'Apprenticeships and internships',
        body: 'Paid apprenticeship schemes and on-the-job training, which frequently beat a classroom course on both cost and outcome.',
      },
      {
        title: 'Studying and earning together',
        body: 'How to fit a course or a part-time job around a degree without either one collapsing, including the combinations we have seen fail.',
      },
    ],
    steps: [
      {
        title: 'Send us a request',
        body: 'Tell us where you are academically and what kind of work you are hoping for.',
      },
      {
        title: 'We understand the constraints',
        body: 'Time available, money available, travel distance, family responsibilities and how soon an income is needed. These decide what is realistic far more than interest does.',
      },
      {
        title: 'A shortlist with the numbers',
        body: 'Three or four courses with honest fees, duration, content and the kind of job each typically leads to, with government and subsidised options listed first.',
      },
      {
        title: 'We arrange the course, and tell you the cost',
        body: 'Once you have chosen, we arrange your place with the partner institute and tell you exactly what it charges. Where the fee is beyond a family’s means, we discuss a concession or sponsorship before you commit to anything.',
      },
      {
        title: 'A check before you pay anyone else',
        body: 'If you are considering an institute you found yourself, send us the details first. We will check what we can and tell you plainly what we find.',
      },
      {
        title: 'A follow-up after you enrol',
        body: 'We check whether the course is delivering what was promised, and if it is not, we help you act while the money can still be recovered.',
      },
    ],
    faqs: [
      {
        q: 'Do you run these courses yourselves?',
        a: 'No. The training is delivered by partner institutes, and we take no commission from any of them. That independence is the point — it lets us tell you not to pay for something, which an institute selling it never will.',
      },
      {
        q: 'What do these courses cost?',
        a: 'Fees are set by the institute and vary widely with the trade and the duration. We tell you the figure before you commit. Where a student needs the course and the family cannot meet the fee, we arrange a concession, a discount or sponsorship, decided case by case.',
      },
      {
        q: 'An institute is asking for a fee and promising a job. Should I pay?',
        a: 'Send us the details before you pay. A guaranteed job is almost never enforceable, and a large fee taken upfront against a verbal placement promise is the most common pattern in this market. We will check what we can and give you a straight answer.',
      },
      {
        q: 'Can I take a course while I am still in college?',
        a: 'Often yes. Many run in the evenings or at weekends and some are entirely online. Whether it is wise depends on your course load and your travel time, which is what we will work through with you.',
      },
      {
        q: 'Do you help with finding the job afterwards?',
        a: 'You will be helped to prepare — how to approach employers, what a basic CV should contain and what to expect in an interview. We do not place candidates and we make no employment promises.',
      },
    ],
  },
]

export function getService(key: string): Service | undefined {
  return SERVICES.find((s) => s.key === key)
}
