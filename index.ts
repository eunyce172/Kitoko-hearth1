export interface Programme {
  slug: string;
  title: string;
  description: string;
  icon: string; // lucide-react icon name
  duration: string;
  level: string;
  skills: string[];
  overview: string;
  outcomes: string[];
  curriculum: { title: string; description: string }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Student' | 'Parent' | 'Alumnus';
  programme: string;
  quote: string;
  avatarSeed: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatarSeed: string;
  linkedin?: string;
  x?: string;
  email?: string;
  isPlaceholder: true;
}

export interface StudentProject {
  id: string;
  title: string;
  student: string;
  programme: string;
  description: string;
  tags: string[];
  imageSeed: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
}
