
type AuthorInfo = {
  name: string;
  username: string;
  image: string;
  org: string | null;
  org_logo: string | null;
  org_url: string | null;
  words: string[];
};

export function getAuthorData(): AuthorInfo {
 return {
   name: 'Youssef BARNOUKH',
   username: 'chaoslegacy',
   image: 'https://imgur.com/M2EfSLW.jpg',
   org: null,
   org_logo: null,
   org_url: null,
   words: [
     'Hey this is Youssef!',
     'FullStackDeveloper.tsx',
     'Hobbyist-Photographer.jpeg',
     'Enthusiastic Dev 🏀 ',
     'React/React native Dev 📱',
   ],
 };
}
