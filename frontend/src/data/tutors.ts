// Prototype-only sample data. Names, rates and bios are placeholders, not real tutors.

export type Category = "academics" | "languages" | "coding" | "test-prep";
export type Tone = "mint" | "peach" | "lavender" | "sky" | "sun";

export type Tutor = {
  id: string;
  name: string;
  subject: string;
  category: Category;
  rate: number; // PHP per hour, sample only
  location: string;
  intro: string;
  bio: string;
  subjects: string[];
  image: { src: string; width: number; height: number };
  tone: Tone;
};

export const categories: { id: Category; label: string; blurb: string; tone: Tone }[] = [
  { id: "academics", label: "Academics", blurb: "Math, science and school subjects from elementary to college.", tone: "peach" },
  { id: "languages", label: "Languages", blurb: "English, Filipino and conversation practice at any level.", tone: "mint" },
  { id: "coding", label: "Coding", blurb: "Python, web development and first steps in programming.", tone: "lavender" },
  { id: "test-prep", label: "Test prep", blurb: "Review for entrance exams, board exams and English tests.", tone: "sun" },
];

export const tutors: Tutor[] = [
  {
    id: "ana-reyes",
    name: "Ana Reyes",
    subject: "English",
    category: "languages",
    rate: 450,
    location: "Quezon City · Online",
    intro: "Conversation, essay writing and IELTS speaking practice for teens and adults.",
    bio: "Ana taught high-school English for six years before tutoring full time. Her sessions mix conversation practice with short writing exercises, and she sends a recap after every lesson.",
    subjects: ["English conversation", "Essay writing", "IELTS speaking"],
    image: { src: "/images/tutors/english-w2.webp", width: 720, height: 792 },
    tone: "mint",
  },
  {
    id: "miguel-dela-cruz",
    name: "Miguel Dela Cruz",
    subject: "Math",
    category: "academics",
    rate: 500,
    location: "Cebu City · Online",
    intro: "Algebra to calculus, explained step by step with worked examples.",
    bio: "Miguel is an engineering graduate who helps students rebuild confidence in math. He starts every new student with a short diagnostic so lessons begin at the right level.",
    subjects: ["Algebra", "Geometry", "Pre-calculus", "Calculus"],
    image: { src: "/images/tutors/math-m2.webp", width: 720, height: 1065 },
    tone: "peach",
  },
  {
    id: "bea-lim",
    name: "Bea Lim",
    subject: "Coding",
    category: "coding",
    rate: 650,
    location: "Makati · Online",
    intro: "Python and web basics for beginners, with small projects you can show.",
    bio: "Bea is a software developer who teaches beginners through small, finished projects: a quiz game, a personal website, a budget tracker. Kids start with Scratch before moving to Python.",
    subjects: ["Python", "HTML & CSS", "JavaScript", "Scratch for kids"],
    image: { src: "/images/tutors/coding-w9.webp", width: 720, height: 863 },
    tone: "lavender",
  },
  {
    id: "carlo-mendoza",
    name: "Carlo Mendoza",
    subject: "Science",
    category: "academics",
    rate: 480,
    location: "Davao City · Online",
    intro: "Chemistry, biology and physics for junior and senior high school.",
    bio: "Carlo makes science concrete with diagrams and everyday examples. He helps senior high students prepare for quarterly exams and science fair projects.",
    subjects: ["Chemistry", "Biology", "Physics"],
    image: { src: "/images/tutors/science-m3.webp", width: 720, height: 912 },
    tone: "sky",
  },
  {
    id: "ramon-villanueva",
    name: "Ramon Villanueva",
    subject: "Filipino & test prep",
    category: "test-prep",
    rate: 400,
    location: "Iloilo City · Online",
    intro: "Filipino grammar, reading comprehension and college entrance exam review.",
    bio: "Ramon is a retired public-school teacher who now tutors Filipino and runs review sessions for college entrance exams, focusing on reading comprehension and timed practice.",
    subjects: ["Filipino grammar", "Reading comprehension", "Entrance exam review"],
    image: { src: "/images/tutors/filipino-m1.webp", width: 720, height: 549 },
    tone: "sun",
  },
];

export function getTutor(id: string) {
  return tutors.find((t) => t.id === id);
}

export const toneClasses: Record<Tone, { solid: string; soft: string; text: string }> = {
  mint: { solid: "bg-mint", soft: "bg-mint-soft", text: "text-[#0d6b50]" },
  peach: { solid: "bg-peach", soft: "bg-peach-soft", text: "text-[#9a4a0c]" },
  lavender: { solid: "bg-lavender", soft: "bg-lavender-soft", text: "text-[#5536b8]" },
  sky: { solid: "bg-sky", soft: "bg-sky-pale", text: "text-[#175f86]" },
  sun: { solid: "bg-sun", soft: "bg-sun-soft", text: "text-[#7a5a06]" },
};

export const peso = (n: number) => `₱${n.toLocaleString("en-PH")}`;
