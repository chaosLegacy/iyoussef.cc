
import { UserCredential } from "firebase/auth";

import { IconType } from 'react-icons/lib';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import React from 'react';
import { ReadTimeResults } from 'reading-time';
import { Variants } from 'framer-motion';

/* Custom Animated Components types */
export type AnimatedTAGProps = {
  variants: Variants;
  className?: string;
  children: React.ReactNode;
  infinity?: boolean;
};

/* Spotify Track  */
export type SpotifyTrack = {
  id: number;
  title: string;
  url: string;
  coverImage: {
    url: string;
  };
  artist: string;
};

/* Spotify Artist  */
export type SpotifyArtist = {
  id: number;
  name: string;
  url: string;
  coverImage: {
    url: string;
  };
  popularity: number;
};

export type ProjectType = {
  id: string;
  name: string;
  coverImage: string;
  description: string;
  githubURL: string;
  previewURL?: string;
  tools?: string[];
  pinned?: boolean;
};

export type SkillType = {
  name: string;
  Icon: IconType;
};

export type CertificateType = {
  id: string;
  title: string;
  issuedDate: string;
  orgName: string;
  orgLogo: string;
  url: string;
  pinned: boolean;
};

export type SocialPlatform = {
  title: string;
  Icon: IconType;
  url: string;
};

export type UtilityType = {
  title: string;
  data: {
    name: string;
    description: string;
    Icon: IconType | JSX.Element;
    link: string;
  }[];
};

export type Utilities = {
  title: string;
  description: string;
  lastUpdate: string;
  data: UtilityType[];
};

export type FrontMatter = {
  slug: string;
  readingTime: ReadTimeResults;
  excerpt: string;
  title: string;
  date: string;
  keywords: string;
  image: string;
  org?: string | null;
};

export type PostType = {
  meta: FrontMatter;
  source: MDXRemoteSerializeResult;
  tableOfContents: TableOfContents[];
};

export type TableOfContents = {
  level: number;
  id: string;
  heading: string;
};

export type SupportMe = {
  name: string;
  url: string;
  Icon: IconType;
};

export type Song = {
  album: string;
  artist: string;
  albumImageUrl: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type FormInput = {
  to_name: string;
  first_name: string;
  last_name: string;
  email: string;
  subject: string;
  message: string;
};

export type SpotifyAccessToken = {
  access_token: string;
};

export type GithubRepo = {
  stargazers_count: number;
  fork: boolean;
  forks_count: number;
};

export type PageData = {
  title: string;
  description: string;
  image: string;
  keywords: string;
};

export type PageMeta = {
  home: PageData;
  stats: PageData;
  utilities: PageData;
  blogs: PageData;
  bookmark: PageData;
  certificates: PageData;
  projects: PageData;
  about: PageData;
  privacy: PageData;
  snippets: PageData;
};

export type Snippet = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

export type MovieType = {
  id: number;
  name: string;
  image: string;
  url: string;
  year: number;
  watched: boolean;
  rating: number;
};

type Handler = () => void;
type SelectOption = {
  label: string;
  value: string;
}
type AuthUser = {
    uid: string;
    email: string;
} | null

type AuthContextType = {
  authUser: AuthUser;
  loading: boolean;
  onSignInWithGoogle: () => Promise<void>;
  onSignInWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<UserCredential>;
  onCreateUserWithEmailAndPassword: (
    email: string,
    password: string,
  ) => Promise<UserCredential>;
  onSignOut: () => Promise<void>;
};

type ApiDataResponse<T> = {
  status?: number;
  message?: string;
  data: T | null;
};
type FetchErrorType = {
  status: number;
  data: any;
  message?: string;
};

export type {
  Handler,
  SelectOption,
  AuthUser,
  AuthContextType,
  ApiDataResponse,
  FetchErrorType,
};