import { SocialPlatform } from "@lib/types";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/j471n/",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/j471n",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/j471n_",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:me@j471n.in",
  },
];

export default socialMedia;
