import { GroupBase, StylesConfig } from 'react-select';

let BASE_URL: string;

if (process.env.NEXT_PUBLIC_BASE_URL) {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
} else {
  BASE_URL = 'http://localhost:3000/';
}


export { BASE_URL };
