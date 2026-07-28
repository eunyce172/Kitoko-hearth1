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
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Design and ship real mobile apps for iOS and Android, from wireframe to app-store ready.',
    icon: 'Smartphone',
    duration: '12 weeks',
    level: 'Intermediate',
    skills: ['React Native', 'UI Patterns', 'App Store', 'Testing'],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research, wireframe, prototype, and test — the full craft of designing products people love to use.',
    icon: 'Palette',
    duration: '8 weeks',
    level: 'Beginner',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    slug: 'robotics',
    title: 'Robotics',
    description: 'Build, wire, and programme physical robots — where code meets circuits meets creativity.',
    icon: 'Bot',
    duration: '14 weeks',
    level: 'Intermediate',
    skills: ['Electronics', 'Arduino', 'Sensors', 'Automation'],
  },
  {
    slug: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    description: 'Demystify machine learning by training real models and building intelligent, ethical applications.',
    icon: 'BrainCircuit',
    duration: '14 weeks',
    level: 'Advanced',
    skills: ['Python', 'ML Models', 'Data', 'Ethics in AI'],
  },
  {
    slug: 'digital-entrepreneurship',
    title: 'Digital Entrepreneurship',
    description: 'Turn a tech idea into a real venture — pitching, business models, and launching a first product.',
    icon: 'Rocket',
    duration: '10 weeks',
    level: 'All Levels',
    skills: ['Business Models', 'Pitching', 'Marketing', 'Launch'],
  },
  {
    slug: 'leadership-development',
    title: 'Leadership Development',
    description: 'The soft skills that make technical skills matter — teamwork, communication, and leading with purpose.',
    icon: 'Users',
    duration: '8 weeks',
    level: 'All Levels',
    skills: ['Communication', 'Teamwork', 'Mentorship', 'Public Speaking'],
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
