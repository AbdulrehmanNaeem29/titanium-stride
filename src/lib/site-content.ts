import { Award, Compass, Flag, HeartHandshake, Medal, Mountain, ShieldCheck, Target } from "lucide-react";

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/training-programs", label: "Training Programs" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
] as const;

export const pillars = [
  { number: "01", title: "Partnership", text: "Trust, clarity, and communication create the foundation for every horse-and-rider pair.", icon: HeartHandshake },
  { number: "02", title: "Progress", text: "Purposeful sessions turn ambitious goals into repeatable skills and measurable milestones.", icon: Target },
  { number: "03", title: "Performance", text: "Correct fundamentals build confidence that holds under pressure—at home or in competition.", icon: Medal },
];

export const programs = [
  {
    id: "private-lessons",
    number: "01",
    title: "Private Riding Lessons",
    category: "Individual coaching",
    forWho: "Riders seeking focused, one-to-one development—from first foundations to recognized competition goals.",
    includes: ["Individual goal setting", "Flatwork and jumping development", "Clear between-session priorities", "School-horse availability by enquiry"],
    approach: "Balance and communication begin on the flat, then transfer into poles, gymnastic exercises, and course work as the partnership is ready.",
    price: "Professional lesson rates · Enquire for availability",
    icon: Target,
  },
  {
    id: "group-lessons",
    number: "02",
    title: "Group Lessons",
    category: "Shared development",
    forWho: "Compatible riders who benefit from a social, focused environment and learning by watching others ride.",
    includes: ["Small, level-matched groups", "Structured arena exercises", "Individual feedback within the group", "Flatwork, poles, or jumping focus"],
    approach: "Sessions use progressive eventing exercises that develop rhythm, adjustability, line, and confident decision-making.",
    price: "Group rates · Contact for current schedule",
    icon: HeartHandshake,
  },
  {
    id: "horse-training",
    number: "03",
    title: "Horse Training & Starting",
    category: "Professional horse development",
    forWho: "Owners of young horses, horses returning to work, or horses needing thoughtful reschooling and clearer foundations.",
    includes: ["Initial horse-and-goals assessment", "Consistent professional rides", "Owner progress updates", "Handover lessons and next-step plan"],
    approach: "Patient, systematic work develops responses, balance, confidence, and adaptability without rushing the horse’s understanding.",
    price: "Custom training packages · Contact for pricing",
    icon: ShieldCheck,
  },
  {
    id: "competition-coaching",
    number: "04",
    title: "Competition Coaching",
    category: "Event preparation",
    forWho: "Riders building toward schooling shows, recognized events, or more consistent performance under pressure.",
    includes: ["Preparation plan", "Course and warm-up strategy", "On-site coaching by arrangement", "Post-event review"],
    approach: "Preparation connects all three phases: rideable flatwork, efficient jumping, and confident cross-country decisions.",
    price: "Day and travel rates · Enquire for a plan",
    icon: Flag,
  },
  {
    id: "clinics",
    number: "05",
    title: "Clinics & Camps",
    category: "Immersive learning",
    forWho: "Barns, riding clubs, and groups looking for a focused day or multi-session progression with a clear theme.",
    includes: ["Custom clinic format", "Level-matched sessions", "Host coordination", "Take-home development priorities"],
    approach: "Topics can connect flatwork to jumping, build cross-country confidence, or sharpen a specific performance skill.",
    price: "Custom host proposal · Travel considered",
    icon: Mountain,
  },
];

export const audiences = [
  { title: "Building confidence", text: "Create calm, repeatable skills and a clearer partnership." },
  { title: "New to eventing", text: "Learn the foundations of all three phases in the right order." },
  { title: "Competition focused", text: "Turn preparation into composed, consistent performance." },
  { title: "Developing a horse", text: "Give your horse patient, correct, professional education." },
];

export const sampleTestimonials = [
  { quote: "The program gave us a clear path instead of just another lesson. Every session connected to the goal we were working toward.", name: "Sample client", detail: "Adult amateur · confidence development" },
  { quote: "My horse became more rideable and I became more decisive. The difference was the attention to both sides of the partnership.", name: "Sample horse owner", detail: "Horse training · rider coaching" },
  { quote: "We arrived at our first event feeling prepared, not overwhelmed. I understood what to do and why it mattered.", name: "Sample student", detail: "Junior rider · eventing foundations" },
];

export const resultTypes = [
  { icon: Compass, value: "Clearer", label: "communication" },
  { icon: Award, value: "Stronger", label: "fundamentals" },
  { icon: Medal, value: "Calmer", label: "performance" },
];