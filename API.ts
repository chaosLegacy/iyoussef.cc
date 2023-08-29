/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCertificateInput = {
  id?: string | null,
  title: string,
  issuedDate: string,
  orgName: string,
  orgLogo: string,
  url: string,
  pinned?: boolean | null,
};

export type ModelCertificateConditionInput = {
  title?: ModelStringInput | null,
  issuedDate?: ModelStringInput | null,
  orgName?: ModelStringInput | null,
  orgLogo?: ModelStringInput | null,
  url?: ModelStringInput | null,
  pinned?: ModelBooleanInput | null,
  and?: Array< ModelCertificateConditionInput | null > | null,
  or?: Array< ModelCertificateConditionInput | null > | null,
  not?: ModelCertificateConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Certificate = {
  __typename: "Certificate",
  id: string,
  title: string,
  issuedDate: string,
  orgName: string,
  orgLogo: string,
  url: string,
  pinned?: boolean | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCertificateInput = {
  id: string,
  title?: string | null,
  issuedDate?: string | null,
  orgName?: string | null,
  orgLogo?: string | null,
  url?: string | null,
  pinned?: boolean | null,
};

export type DeleteCertificateInput = {
  id: string,
};

export type CreateProjectInput = {
  id?: string | null,
  name: string,
  coverImage: string,
  description: string,
  githubURL: string,
  previewURL?: string | null,
  tools?: Array< string | null > | null,
  pinned?: boolean | null,
  type: Type,
  createdAt: string,
};

export enum Type {
  WEB = "WEB",
  MOBILE = "MOBILE",
}


export type ModelProjectConditionInput = {
  name?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  description?: ModelStringInput | null,
  githubURL?: ModelStringInput | null,
  previewURL?: ModelStringInput | null,
  tools?: ModelStringInput | null,
  pinned?: ModelBooleanInput | null,
  type?: ModelTypeInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelProjectConditionInput | null > | null,
  or?: Array< ModelProjectConditionInput | null > | null,
  not?: ModelProjectConditionInput | null,
};

export type ModelTypeInput = {
  eq?: Type | null,
  ne?: Type | null,
};

export type Project = {
  __typename: "Project",
  id: string,
  name: string,
  coverImage: string,
  description: string,
  githubURL: string,
  previewURL?: string | null,
  tools?: Array< string | null > | null,
  pinned?: boolean | null,
  type: Type,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProjectInput = {
  id: string,
  name?: string | null,
  coverImage?: string | null,
  description?: string | null,
  githubURL?: string | null,
  previewURL?: string | null,
  tools?: Array< string | null > | null,
  pinned?: boolean | null,
  type?: Type | null,
  createdAt?: string | null,
};

export type DeleteProjectInput = {
  id: string,
};

export type ModelCertificateFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  issuedDate?: ModelStringInput | null,
  orgName?: ModelStringInput | null,
  orgLogo?: ModelStringInput | null,
  url?: ModelStringInput | null,
  pinned?: ModelBooleanInput | null,
  and?: Array< ModelCertificateFilterInput | null > | null,
  or?: Array< ModelCertificateFilterInput | null > | null,
  not?: ModelCertificateFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelCertificateConnection = {
  __typename: "ModelCertificateConnection",
  items:  Array<Certificate | null >,
  nextToken?: string | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  coverImage?: ModelStringInput | null,
  description?: ModelStringInput | null,
  githubURL?: ModelStringInput | null,
  previewURL?: ModelStringInput | null,
  tools?: ModelStringInput | null,
  pinned?: ModelBooleanInput | null,
  type?: ModelTypeInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection",
  items:  Array<Project | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionCertificateFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  issuedDate?: ModelSubscriptionStringInput | null,
  orgName?: ModelSubscriptionStringInput | null,
  orgLogo?: ModelSubscriptionStringInput | null,
  url?: ModelSubscriptionStringInput | null,
  pinned?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
  or?: Array< ModelSubscriptionCertificateFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  coverImage?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  githubURL?: ModelSubscriptionStringInput | null,
  previewURL?: ModelSubscriptionStringInput | null,
  tools?: ModelSubscriptionStringInput | null,
  pinned?: ModelSubscriptionBooleanInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProjectFilterInput | null > | null,
  or?: Array< ModelSubscriptionProjectFilterInput | null > | null,
};

export type CreateCertificateMutationVariables = {
  input: CreateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type CreateCertificateMutation = {
  createCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCertificateMutationVariables = {
  input: UpdateCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type UpdateCertificateMutation = {
  updateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCertificateMutationVariables = {
  input: DeleteCertificateInput,
  condition?: ModelCertificateConditionInput | null,
};

export type DeleteCertificateMutation = {
  deleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type CreateProjectMutation = {
  createProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type UpdateProjectMutation = {
  updateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
  condition?: ModelProjectConditionInput | null,
};

export type DeleteProjectMutation = {
  deleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCertificateQueryVariables = {
  id: string,
};

export type GetCertificateQuery = {
  getCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCertificatesQueryVariables = {
  filter?: ModelCertificateFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCertificatesQuery = {
  listCertificates?:  {
    __typename: "ModelCertificateConnection",
    items:  Array< {
      __typename: "Certificate",
      id: string,
      title: string,
      issuedDate: string,
      orgName: string,
      orgLogo: string,
      url: string,
      pinned?: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects?:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      name: string,
      coverImage: string,
      description: string,
      githubURL: string,
      previewURL?: string | null,
      tools?: Array< string | null > | null,
      pinned?: boolean | null,
      type: Type,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnCreateCertificateSubscription = {
  onCreateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnUpdateCertificateSubscription = {
  onUpdateCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCertificateSubscriptionVariables = {
  filter?: ModelSubscriptionCertificateFilterInput | null,
};

export type OnDeleteCertificateSubscription = {
  onDeleteCertificate?:  {
    __typename: "Certificate",
    id: string,
    title: string,
    issuedDate: string,
    orgName: string,
    orgLogo: string,
    url: string,
    pinned?: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnCreateProjectSubscription = {
  onCreateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  filter?: ModelSubscriptionProjectFilterInput | null,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject?:  {
    __typename: "Project",
    id: string,
    name: string,
    coverImage: string,
    description: string,
    githubURL: string,
    previewURL?: string | null,
    tools?: Array< string | null > | null,
    pinned?: boolean | null,
    type: Type,
    createdAt: string,
    updatedAt: string,
  } | null,
};
