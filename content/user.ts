import { homeProfileImage } from "@utils/utils";

type AuthorInfo = {
  name: string;
  image: string;
  org: string | null;
  org_logo: string | null;
  org_url: string | null;
  words: string[];
};

export function getAuthorData(org: string | null = null): AuthorInfo {
  switch (org) {
    case "documatic":
      return {
        name: "Youssef BARNOUKH",
        image: homeProfileImage,
        org: "Documatic",
        org_logo: "https://i.imgur.com/ZqBFtg1.png",
        org_url: "https://www.documatic.com/",
        words: [],
      };

    default:
      return {
        name: "Youssef BARNOUKH",
        image: homeProfileImage,
        org: null,
        org_logo: null,
        org_url: null,
        words: [
            "Hey this is Youssef!",
            "FullStackDeveloper.tsx",
            "Hobbyist-Photographer.jpeg",
            "Enthusiastic Dev 🏀 ",
            "React/React native Dev 📱"
        ],
      };
  }
}
