import { FaGithub, FaLinkedin } from "react-icons/fa6";

import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import { link, title } from "framer-motion/client";

export const LINKS = [
  { id: "projects", name: "projecten" },
  { id: "about", name: "over mij" },
  { id: "study", name: "opleidingen" },
  { id: "contact", name: "contact" },
];

export const MARQUEE_TEXT =
  "HTML/ CSS/ React/ Javascript/ HTML/ CSS/ React/ Javascript/ HTML/ CSS/ React/ Javascript";

export const PROJECTS = [
  {
    id: 1,
    title: "som-som-magie",
    description: "som-som-magie gemaakt met html, css en js.",
    imgSrc: project1,
    link: "https://github.com/ParzivalOO7/somsommagie",
  },
  {
    id: 2,
    title: "Word Scramble",
    description: "Mijn eerste webgame gemaakt met js.",
    imgSrc: project2,
    link: "https://github.com/ParzivalOO7/eerste-webgame",
  },
  {
    id: 3,
    title: "Guess-My-Number",
    description: "Cool webgame.",
    imgSrc: project3,
    link: "https://github.com/ParzivalOO7/Guess-My-Number",
  },
];

export const ABOUT =
  "Ik ben een enthousiaste webontwikkelaar met een sterke basis in HTML en CSS, gecombineerd met de basiskennis van JavaScript en wordpress. Ik werk graag met React voor dynamische en interactieve gebruikersinterfaces. Mijn doel is om gebruiksvriendelijke, efficiënte en aantrekkelijke websites te bouwen die naadloos werken op alle apparaten. Ik blijf mijn vaardigheden verbeteren en ben altijd op zoek naar nieuwe uitdagingen in de wereld van webontwikkeling.";

export const SCHOOLS = [
  {
    school: "Alfa College",
    role: "Student",
    year: "augustus 2023 - Heden",
    description: "MBO-4 ICT - Software Developer - Alfa College, Groningen",
  },
  {
    school: "Firda",
    role: "Student",
    year: "augustus 2022 - juni 2023",
    description: (
      <>
        MBO-4 - Technicus engineering - Firda, Leeuwarden
        <br /> Niet afgerond
      </>
    ),
  },
  {
    school: "Alfa College",
    role: "Student",
    year: "augustus 2021 - juni 2022",
    description: (
      <>
        Schakeljaar - Alfa College, Groningen
        <br /> Diploma: behaald
      </>
    ),
  },
  {
    school: "Allowdin high school",
    role: "Student",
    description: (
      <>
        Jaar 1 tot 8 - Allowdin high school, Kabul, Afghanistan
        <br /> Afgestudeerd in 2018
      </>
    ),
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://github.com/ParzivalOO7",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "Hier onder kan je mijn email en telefoon nummer vinden om contact met mij op te nemen.",
  email: "aliamiri808@yahoo.com",
  phone: "+31639658299",
};
