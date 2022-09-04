export const faqs = [
  {
    _id: 0,
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! ",
  },
  {
    _id: 1,
    question: "How much does Netflix cost ?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.",
  },
  {
    id: 2,
    question: "Where can i watch ?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.\
       You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere",
  },
  {
    _id: 3,
    question: "How do I cancel my subscription?",
    answer:
      "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
  },
  {
    _id: 4,
    question: "Is Netflix good for kids?",
    answer:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
  },
];

//  data for footer title
export const footerTitle = ["FAQ", "Help center", "Account", "Media center"];

// link for footer title
// instead of using static data we can use dynamic data from data.js which will somehow behave like database :)

export const faqsLinks = [
  {
    _id: 0,
    link: "/faqs",
    title: "Investor Relations",
  },
  {
    _id: 1,
    link: "/privacy",
    title: "privacy",
  },
  {
    _id: 1,
    link: "/test",
    title: "Speed Test",
  },
];

export const helpLinks = [
  {
    _id: 0,
    title: "Jobs",
    link: "/jobs",
  },
  {
    _id: 1,
    title: "cookies preferences",
    link: "/cookies",
  },
  {
    _id: 2,
    title: "Legal Notices",
    link: "/notices",
  },
];

export const accountLinks = [
  {
    _id: 0,
    title: "Ways to Watch",
    link: "/ways-to-watch",
  },
  {
    _id: 1,
    title: "Corporate Information",
    link: "/information",
  },
  {
    _id: 2,
    title: "only netflix",
    link: "/only-ntflix",
  },
];

export const mediaLinks = [
  {
    _id: 0,
    title: "Terms of Use",
    link: "/terms",
  },
  {
    _id: 1,
    title: "contact us",
    link: "/contact",
  },
];
