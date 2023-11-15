import { Package } from './Package';
import { Lead } from './Lead';
import { UserCredential } from "firebase/auth";

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
  Lead,
  Package,
};