import { activeBadge, participationBadge, masterBadge } from "../../.vaunt/badges";
import {
  discord,
  instagram,
  gdg,
  vaunt,
  explore,
  github,
  podium,
  jigsaw,
  medal,
  networking,
  linkedin,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About",
    url: "#about",
  },
  {
    id: "2",
    title: "Partners",
    url: "#partners",
  },

  {
    id: "3",
    title: "Leaderboard",
    url: "#leaderboard",
  },
  {
    id: "4",
    title: "Guidelines",
    url: "https://github.com/iamAyushChamoli/hacktoberfest-24/blob/main/CONTRIBUTING.md",
  },
  {
    id: "5",
    title: "Repository",
    url: "https://github.com/iamAyushChamoli/hacktoberfest-24",
  },
];


export const companyLogos = [gdg, vaunt];


export const badges = [
  {
    id: "0",
    title: "Participation Badge",
    description:
      "Offered To All Participants who succesfully merge atleast 1 qualifying PR(s)",
    img: participationBadge,
    features: [
    ],
  },
  {
    id: "2",
    title: "Active Contributor",
    description:
      "Offered To All Participants who succesfully merge atleast 5 qualifying PR(s)",
    img: activeBadge,
    features: [
    ],
  },
  {
    id: "1",
    title: "Master Contributor",
    description:
      "Offered To All Participants who succesfully merge atleast 10 qualifying PR(s)",
    img: masterBadge,
    features: [
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Explore Open Source",
    text: "Explore an ever-expanding library of open-source projects and contribute to the community.",
    backgroundUrl: "",
    link: "https://testsigma.medium.com/an-ultimate-guide-to-open-source-contribution-for-beginners-7278952b0b9f",
    iconUrl: explore,
  },
  {
    id: "1",
    title: "Learn Git & Github",
    text: "Version Control, Collaboration, and Code Management with Git & GitHub, If you don't know what these things are, this is the perfect opportunity to learn!",
    backgroundUrl: "",
    link: "https://www.freecodecamp.org/news/introduction-to-git-and-github/",
    iconUrl: github,
    light: true,
  },
  {
    id: "2",
    title: "Compete With Your Peers",
    text: "Crush the competition and ace the leaderboard! The more PRs you get merged, the higher you climb.",
    backgroundUrl: "",
    link: "https://github.com/explore",
    iconUrl: podium,
  },
  {
    id: "3",
    title: "Build Your Github Portfolio",
    text: "Recruiters look for active contributors to open-source projects. Build your portfolio and stand out from the crowd.",
    backgroundUrl: "",
    link: "https://medium.com/@kapil0123/building-your-stunning-github-portfolio-a-step-by-step-guide-a5e8650c5009",
    iconUrl: jigsaw,
    light: true,
  },
  {
    id: "4",
    title: "Limited Edition Badges!",
    text: "Our partners Vaunt.dev have offered to give out limited edition GitHub badges to the ALL contributors of the event.",
    backgroundUrl: "",
    link: "https://github.com/drknzz/GitHub-Achievements",
    iconUrl: medal,
  },
  {
    id: "5",
    title: "Network & Create Memories",
    text: "One of the core values of are fostered by HacktoberFest is community building. Connect with like minded peers and create memories that last a lifetime!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    link: "https://resources.github.com/events/",
    iconUrl: networking,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discord,
    url: "https://discord.gg/BngqfTwE",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/gdg.geu/",
  },

  {
    id: "4",
    title: "LinkedIn",
    iconUrl: linkedin,
    url: "https://www.linkedin.com/company/dscgeu/",
  },
];
