import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Type {
  WEB = "WEB",
  MOBILE = "MOBILE"
}



type EagerCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly issuedDate: string;
  readonly orgName: string;
  readonly orgLogo: string;
  readonly url: string;
  readonly pinned?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCertificate = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Certificate, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly issuedDate: string;
  readonly orgName: string;
  readonly orgLogo: string;
  readonly url: string;
  readonly pinned?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Certificate = LazyLoading extends LazyLoadingDisabled ? EagerCertificate : LazyCertificate

export declare const Certificate: (new (init: ModelInit<Certificate>) => Certificate) & {
  copyOf(source: Certificate, mutator: (draft: MutableModel<Certificate>) => MutableModel<Certificate> | void): Certificate;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly coverImage: string;
  readonly description: string;
  readonly githubURL: string;
  readonly previewURL?: string | null;
  readonly tools?: (string | null)[] | null;
  readonly pinned?: boolean | null;
  readonly type: Type | keyof typeof Type;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly coverImage: string;
  readonly description: string;
  readonly githubURL: string;
  readonly previewURL?: string | null;
  readonly tools?: (string | null)[] | null;
  readonly pinned?: boolean | null;
  readonly type: Type | keyof typeof Type;
  readonly createdAt: string;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}