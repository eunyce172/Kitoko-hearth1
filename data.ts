import { Programme, Testimonial, TeamMember, StudentProject, Stat, FaqItem, CoreValue, StoryMilestone } from '@/types';

export const programmes: Programme[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    description: 'From first line of HTML to deployed full-stack apps — teens learn to build the web they use every day.',
    icon: 'Code2',
    duration: '12 weeks',
    level: 'Beginner \u2192 Intermediate',
    skills: ['HTML/CSS/JS', 'React', 'APIs', 'Deployment'],
    overview: 'Students go from a blank text file to a full-stack app deployed on the real internet, learning by building a portfolio site, a small interactive app, and a group capstone project.',
    outcomes: [
      'Build and style responsive, accessible websites from scratch',
      'Understand how the modern web works: requests, APIs, and databases',
      'Ship a full-stack project to a live URL others can visit',
      'Read and debug code confidently, including code you did not write',
    ],
    curriculum: [
      { title: 'Foundations', description: 'HTML, CSS, and JavaScript fundamentals — the building blocks of every website.' },
      { title: 'Interactivity', description: 'DOM manipulation, events, and building your first interactive mini-app.' },
      { title: 'React & Components', description: 'Component-based thinking, state, and reusable UI.' },
      { title: 'APIs & Data', description: 'Fetching and displaying real data, working with third-party APIs.' },
      { title: 'Capstone & Deployment', description: 'Plan, build, and ship a full-stack group project to a live URL.' },
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Design and ship real mobile apps for iOS and Android, from wireframe to app-store ready.',
    icon: 'Smartphone',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['React Native', 'UI Patterns', 'App Store', 'Testing'],
    overview: 'A hands-on path from a napkin sketch to a working, testable mobile app — covering the mobile-specific patterns, testing, and polish that separate a demo from something people would actually use.',
    outcomes: [
      'Design and build native-feeling mobile interfaces',
      'Understand mobile-specific UX patterns and navigation',
      'Test an app on real devices and fix real bugs',
      'Prepare an app for app-store submission',
    ],
    curriculum: [
      { title: 'Mobile UI Foundations', description: 'Navigation patterns, gestures, and mobile-first design thinking.' },
      { title: 'React Native Basics', description: 'Components, styling, and state for mobile screens.' },
      { title: 'Device Features', description: 'Camera, location, notifications, and other native capabilities.' },
      { title: 'Testing on Real Devices', description: 'Debugging across device sizes and operating systems.' },
      { title: 'Ship It', description: 'Prepare app store assets and submit a finished app for review.' },
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research, wireframe, prototype, and test — the full craft of designing products people love to use.',
    icon: 'Palette',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    overview: 'Students learn the full design process — talking to real users, sketching, prototyping in Figma, and testing designs — culminating in a polished, presented case study.',
    outcomes: [
      'Conduct lightweight user research and synthesize findings',
      'Wireframe and prototype in Figma at a professional level',
      'Build and apply a small design system',
      'Present and defend design decisions like a working designer',
    ],
    curriculum: [
      { title: 'Research & Empathy', description: 'Interviewing users and turning findings into design problems worth solving.' },
      { title: 'Wireframing', description: 'Low-fidelity sketches and structuring information before visual polish.' },
      { title: 'Prototyping in Figma', description: 'Interactive, clickable prototypes ready for testing.' },
      { title: 'Design Systems', description: 'Typography, color, and components that scale across a product.' },
      { title: 'Usability Testing & Presentation', description: 'Testing with real users and presenting a polished case study.' },
    ],
  },
  {
    slug: 'robotics',
    title: 'Robotics',
    description: 'Build, wire, and programme physical robots — where code meets circuits meets creativity.',
    icon: 'Bot',
    duration: '14 weeks',
    level: 'Intermediate',
    skills: ['Electronics', 'Arduino', 'Sensors', 'Automation'],
    overview: 'Students wire circuits, program microcontrollers, and bring a physical robot to life — ending with a working machine that senses and responds to its environment.',
    outcomes: [
      'Read basic circuit diagrams and safely wire components',
      'Program a microcontroller (Arduino) to control motors and sensors',
      'Debug hardware issues, not just code',
      'Design and build a working robot from scratch',
    ],
    curriculum: [
      { title: 'Electronics Basics', description: 'Circuits, breadboards, and safely working with components.' },
      { title: 'Programming the Arduino', description: 'Writing code that controls real hardware.' },
      { title: 'Sensors & Feedback', description: 'Reading sensor data and reacting to the physical world.' },
      { title: 'Motors & Movement', description: 'Controlling motion — wheels, arms, or grippers.' },
      { title: 'Final Build', description: 'Design, wire, and program a complete working robot.' },
    ],
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Demystify machine learning by training real models and building intelligent, ethical applications.',
    icon: 'BrainCircuit',
    duration: '14 weeks',
    level: 'Advanced',
    skills: ['Python', 'ML Models', 'Data', 'Ethics in AI'],
    overview: 'Students move past the AI hype to build real understanding — training models on real datasets, and thinking critically about bias, fairness, and responsible use.',
    outcomes: [
      'Write Python for data analysis and model training',
      'Train, evaluate, and improve a machine learning model',
      'Explain how a model reaches its predictions in plain language',
      'Reason critically about bias and ethics in AI systems',
    ],
    curriculum: [
      { title: 'Python & Data Foundations', description: 'Python fundamentals and working with real datasets.' },
      { title: 'How Models Learn', description: 'Core ML concepts: training, testing, and evaluating a model.' },
      { title: 'Building Models', description: 'Training classification and prediction models on real data.' },
      { title: 'Ethics in AI', description: 'Bias, fairness, and the responsibility that comes with building AI.' },
      { title: 'Applied Project', description: 'Build an intelligent application powered by your own trained model.' },
    ],
  },
  {
    slug: 'digital-entrepreneurship',
    title: 'Digital Entrepreneurship',
    description: 'Turn a tech idea into a real venture — pitching, business models, and launching a first product.',
    icon: 'Rocket',
    duration: '10 weeks',
    level: 'All Levels',
    skills: ['Business Models', 'Pitching', 'Marketing', 'Launch'],
    overview: 'Students take a tech idea from napkin sketch to pitch-ready venture, learning the business fundamentals that turn a good idea into something real.',
    outcomes: [
      'Validate a business idea with real potential customers',
      'Build a simple, defensible business model',
      'Pitch an idea clearly and confidently to an audience',
      'Launch a first version of a product or service',
    ],
    curriculum: [
      { title: 'Idea Validation', description: 'Talking to potential customers before building anything.' },
      { title: 'Business Models', description: 'How a venture actually makes money and sustains itself.' },
      { title: 'Marketing Basics', description: 'Telling a compelling story and reaching an audience.' },
      { title: 'Pitching', description: 'Structuring and delivering a pitch that lands.' },
      { title: 'Launch', description: 'Getting a first version in front of real users.' },
    ],
  },
  {
    slug: 'leadership-development',
    title: 'Leadership Development',
    description: 'The soft skills that make technical skills matter — teamwork, communication, and leading with purpose.',
    icon: 'Users',
    duration: '8 weeks',
    level: 'All Levels',
    skills: ['Communication', 'Teamwork', 'Mentorship', 'Public Speaking'],
    overview: 'Runs alongside every technical programme — students practice the communication, collaboration, and leadership skills that turn technical ability into real impact.',
    outcomes: [
      'Communicate clearly in both technical and non-technical settings',
      'Give and receive constructive feedback',
      'Lead a small project team through disagreement and deadlines',
      'Speak confidently in front of a group',
    ],
    curriculum: [
      { title: 'Communication Foundations', description: 'Clear, confident communication in writing and speech.' },
      { title: 'Working in Teams', description: 'Collaboration, conflict, and giving useful feedback.' },
      { title: 'Mentorship', description: 'Learning to teach and support others as you grow.' },
      { title: 'Public Speaking', description: 'Preparing and delivering a talk with confidence.' },
      { title: 'Leading a Project', description: 'Applying it all: leading a small team through a real project.' },
    ],
  },
];

export const stats: Stat[] = [
  { label: 'Teens Trained', value: 1200, suffix: '+' },
  { label: 'Projects Built', value: 340, suffix: '+' },
  { label: 'Partner Schools', value: 28 },
  { label: 'Volunteer Mentors', value: 65, suffix: '+' },
];

// Illustrative placeholder testimonials pending real submissions from students/parents.
export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sample Student A',
    role: 'Student',
    programme: 'Web Development',
    quote: 'I went from never having written code to shipping my own website. The mentors made it feel possible.',
    avatarSeed: 'sample-student-a',
  },
  {
    id: 't2',
    name: 'Sample Parent B',
    role: 'Parent',
    programme: 'Robotics',
    quote: 'Watching my child build a working robot from scratch, and explain how it works, was incredible.',
    avatarSeed: 'sample-parent-b',
  },
  {
    id: 't3',
    name: 'Sample Alumnus C',
    role: 'Alumnus',
    programme: 'AI & Machine Learning',
    quote: 'The programme gave me the confidence and portfolio to pursue computer science at university.',
    avatarSeed: 'sample-alumnus-c',
  },
];

// Clearly labelled placeholder team profiles until official bios/photos are provided.
export const team: TeamMember[] = [
  {
    id: 'p1',
    name: 'Team Member — Name Pending',
    role: 'Founder & Executive Director (Placeholder)',
    bio: 'Placeholder bio. Replace with the real founder biography once provided.',
    avatarSeed: 'placeholder-1',
    isPlaceholder: true,
  },
  {
    id: 'p2',
    name: 'Team Member — Name Pending',
    role: 'Head of Programmes (Placeholder)',
    bio: 'Placeholder bio. Replace with the real staff biography once provided.',
    avatarSeed: 'placeholder-2',
    isPlaceholder: true,
  },
  {
    id: 'p3',
    name: 'Team Member — Name Pending',
    role: 'Lead Mentor, Engineering (Placeholder)',
    bio: 'Placeholder bio. Replace with the real staff biography once provided.',
    avatarSeed: 'placeholder-3',
    isPlaceholder: true,
  },
  {
    id: 'p4',
    name: 'Team Member — Name Pending',
    role: 'Community & Partnerships Lead (Placeholder)',
    bio: 'Placeholder bio. Replace with the real staff biography once provided.',
    avatarSeed: 'placeholder-4',
    isPlaceholder: true,
  },
];

export const studentProjects: StudentProject[] = [
  {
    id: 'sp1',
    title: 'Harvest Tracker',
    student: 'Cohort Project',
    programme: 'Web Development',
    description: 'A web app helping smallholder farmers log yields and track market prices.',
    tags: ['React', 'Charts', 'PWA'],
    imageSeed: 'harvest-tracker',
  },
  {
    id: 'sp2',
    title: 'PillPal',
    student: 'Cohort Project',
    programme: 'Mobile App Development',
    description: 'A medication-reminder app designed with accessibility for elderly users in mind.',
    tags: ['React Native', 'Accessibility'],
    imageSeed: 'pillpal',
  },
  {
    id: 'sp3',
    title: 'Campus Compass',
    student: 'Cohort Project',
    programme: 'UI/UX Design',
    description: 'A wayfinding app prototype for first-year students navigating a large campus.',
    tags: ['Figma', 'Prototyping'],
    imageSeed: 'campus-compass',
  },
  {
    id: 'sp4',
    title: 'SortBot',
    student: 'Cohort Project',
    programme: 'Robotics',
    description: 'An arm that sorts recyclables by material using a simple camera and sensors.',
    tags: ['Arduino', 'Computer Vision'],
    imageSeed: 'sortbot',
  },
  {
    id: 'sp5',
    title: 'StudyWise',
    student: 'Cohort Project',
    programme: 'AI & Machine Learning',
    description: 'A model that recommends personalised study schedules based on exam performance.',
    tags: ['Python', 'ML'],
    imageSeed: 'studywise',
  },
  {
    id: 'sp6',
    title: 'MarketLink',
    student: 'Cohort Project',
    programme: 'Digital Entrepreneurship',
    description: 'A pitched micro-marketplace connecting young makers with local buyers.',
    tags: ['Business Model', 'Branding'],
    imageSeed: 'marketlink',
  },
];

export const faqs: FaqItem[] = [
  {
    question: 'Who can join Kitoko Hearth programmes?',
    answer: 'Our programmes are designed for teenagers roughly 13-19, with no prior experience required for beginner tracks.',
  },
  {
    question: 'Is there a cost to join?',
    answer: 'Kitoko Hearth is a non-profit; most programmes are offered free or at low cost thanks to partners and donors. Check the programme page or contact us for details.',
  },
  {
    question: 'Do I need my own laptop?',
    answer: 'It helps, but it is not required — limited loaner devices are available for programmes that need one.',
  },
  {
    question: 'How do parents stay involved?',
    answer: 'Parents receive progress updates and are invited to our showcase events at the end of each cohort.',
  },
];

export const coreValues: CoreValue[] = [
  {
    title: 'Curiosity First',
    description: 'We meet every question with respect — curiosity is the raw material every builder starts with.',
    icon: 'Sparkles',
  },
  {
    title: 'Build, Don\u2019t Just Learn',
    description: 'Every concept is paired with a real project. Understanding sticks when hands are on the keyboard.',
    icon: 'Hammer',
  },
  {
    title: 'Mentorship Over Instruction',
    description: 'We pair teens with mentors who guide, not lecture — learning through relationship, not just content.',
    icon: 'Users',
  },
  {
    title: 'Excellence Is Accessible',
    description: 'Great tools and great teaching should not depend on zip code. We remove cost and access barriers.',
    icon: 'Gem',
  },
  {
    title: 'Hope as a Discipline',
    description: 'We treat hope as something built through small, repeated wins, not a feeling to wait for.',
    icon: 'Flame',
  },
];

export const storyMilestones: StoryMilestone[] = [
  {
    year: '2021',
    title: 'The first spark',
    description: 'Kitoko Hearth began as a weekend coding circle for a handful of teenagers meeting in a community room.',
  },
  {
    year: '2022',
    title: 'First cohort, first mentors',
    description: 'We formalised our first structured programme and welcomed our first volunteer mentors.',
  },
  {
    year: '2023',
    title: 'Beyond web development',
    description: 'Robotics, UI/UX, and AI & Machine Learning joined the programme catalogue as demand grew.',
  },
  {
    year: '2024',
    title: 'Partner schools',
    description: 'We began partnering directly with schools to bring project-based tech learning into classrooms.',
  },
  {
    year: 'Today',
    title: 'A growing hearth',
    description: 'Hundreds of teens and dozens of mentors later, we\u2019re still building around the same idea: a spark, given the right conditions, grows.',
  },
];
