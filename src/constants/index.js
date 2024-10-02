import {
  activeBadge,
  participationBadge,
  masterBadge,
} from "../../.vaunt/badges";
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

const base_repo =
  "https://github.com/iamAyushChamoli/hacktoberfest-24/blob/main";

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
    features: [],
  },
  {
    id: "2",
    title: "Active Contributor",
    description:
      "Offered To All Participants who succesfully merge atleast 5 qualifying PR(s)",
    img: activeBadge,
    features: [],
  },
  {
    id: "1",
    title: "Master Contributor",
    description:
      "Offered To All Participants who succesfully merge atleast 10 qualifying PR(s)",
    img: masterBadge,
    features: [],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Explore Open Source",
    text: "Explore an ever-expanding library of open-source projects and contribute to the community.",
    backgroundUrl: "https://testsigma.medium.com/an-ultimate-guide-to-open-source-contribution-for-beginners-7278952b0b9f",
    iconUrl: explore,
    url: `${base_repo}/abt/Explore.md`,
  },
  {
    id: "1",
    title: "Learn Git & Github",
    text: "Version Control, Collaboration, and Code Management with Git & GitHub, If you don't know what these things are, this is the perfect opportunity to learn!",
    backgroundUrl: "https://www.freecodecamp.org/news/introduction-to-git-and-github/",
    iconUrl: github,
    light: true,
    url: `${base_repo}/abt/GithHub_Git.md`,
  },
  {
    id: "2",
    title: "Compete With Your Peers",
    text: "Crush the competition and ace the leaderboard! The more PRs you get merged, the higher you climb.",
    backgroundUrl: "https://github.com/explore",
    iconUrl: podium,
    url: `${base_repo}/abt/Compete.md`,
  },
  {
    id: "3",
    title: "Build Your Github Portfolio",
    text: "Recruiters look for active contributors to open-source projects. Build your portfolio and stand out from the crowd.",
    backgroundUrl: "https://medium.com/@kapil0123/building-your-stunning-github-portfolio-a-step-by-step-guide-a5e8650c5009",
    iconUrl: jigsaw,
    light: true,
    url: `${base_repo}/abt/Portfolio.md`,
  },
  {
    id: "4",
    title: "Limited Edition Badges!",
    text: "Our partners Vaunt.dev have offered to give out limited edition GitHub badges to the ALL contributors of the event.",
    backgroundUrl: "",
    iconUrl: medal,
    url: `${base_repo}/abt/Badge.md`,
  },
  {
    id: "5",
    title: "Network & Create Memories",
    text: "One of the core values of are fostered by HacktoberFest is community building. Connect with like minded peers and create memories that last a lifetime!",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: networking,
    url: `${base_repo}/abt/Network.md`,
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
