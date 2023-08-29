import { SocialPlatform } from "@lib/types";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const socialMedia: SocialPlatform[] = [
  {
    title: "LinkedIn",
    Icon: BsLinkedin,
    url: "https://www.linkedin.com/in/youssef.barnoukh/",
  },
  {
    title: "Github",
    Icon: BsGithub,
    url: "https://github.com/chaoslegacy",
  },
  {
    title: "Instagram",
    Icon: AiOutlineInstagram,
    url: "https://www.instagram.com/chaoslegacu",
  },
  {
    title: "Mail",
    Icon: HiMail,
    url: "mailto:youssef.barnoukh@gmail.com",
  },
];

export default socialMedia;
