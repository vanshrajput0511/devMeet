export type Event = {
  title: string;
  slug: string;
  image: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "React Summit 2026",
    slug: "react-summit-2026",
    image: "/images/event1.png",
    location: "Bengaluru, India",
    date: "October 18, 2026",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Next.js Global Conference",
    slug: "nextjs-global-conference",
    image: "/images/event2.png",
    location: "Mumbai, India",
    date: "October 24, 2026",
    time: "9:30 AM - 4:30 PM",
  },
  {
    title: "JavaScript Developers Meetup",
    slug: "javascript-developers-meetup",
    image: "/images/event3.png",
    location: "Pune, India",
    date: "November 7, 2026",
    time: "2:00 PM - 5:00 PM",
  },
  {
    title: "AI & Web Development Summit",
    slug: "ai-web-development-summit",
    image: "/images/event4.png",
    location: "Gurugram, India",
    date: "November 14, 2026",
    time: "10:00 AM - 4:00 PM",
  },
  {
    title: "Open Source Community Meetup",
    slug: "open-source-community-meetup",
    image: "/images/event5.png",
    location: "Hyderabad, India",
    date: "November 21, 2026",
    time: "11:00 AM - 3:00 PM",
  },
  {
    title: "Global Web Hackathon 2026",
    slug: "global-web-hackathon-2026",
    image: "/images/event6.png",
    location: "Noida, India",
    date: "November 28, 2026",
    time: "9:00 AM - 8:00 PM",
  },
//   {
//     title: "Frontend Engineering Conference",
//     slug: "frontend-engineering-conference",
//     image: "/images/frontend-conference.jpg",
//     location: "Delhi, India",
//     date: "December 5, 2026",
//     time: "10:00 AM - 5:00 PM",
//   },
//   {
//     title: "Modern Full Stack Development",
//     slug: "modern-full-stack-development",
//     image: "/images/fullstack-event.jpg",
//     location: "Chennai, India",
//     date: "December 12, 2026",
//     time: "10:30 AM - 4:30 PM",
//   },
//   {
//     title: "Generative AI for Developers",
//     slug: "generative-ai-for-developers",
//     image: "/images/genai-developers.jpg",
//     location: "Bengaluru, India",
//     date: "December 19, 2026",
//     time: "10:00 AM - 3:00 PM",
//   },
];