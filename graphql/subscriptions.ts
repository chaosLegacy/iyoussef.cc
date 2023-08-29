/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onCreateCertificate(filter: $filter) {
      id
      title
      issuedDate
      orgName
      orgLogo
      url
      pinned
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onUpdateCertificate(filter: $filter) {
      id
      title
      issuedDate
      orgName
      orgLogo
      url
      pinned
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate(
    $filter: ModelSubscriptionCertificateFilterInput
  ) {
    onDeleteCertificate(filter: $filter) {
      id
      title
      issuedDate
      orgName
      orgLogo
      url
      pinned
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput) {
    onCreateProject(filter: $filter) {
      id
      name
      coverImage
      description
      githubURL
      previewURL
      tools
      pinned
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput) {
    onUpdateProject(filter: $filter) {
      id
      name
      coverImage
      description
      githubURL
      previewURL
      tools
      pinned
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput) {
    onDeleteProject(filter: $filter) {
      id
      name
      coverImage
      description
      githubURL
      previewURL
      tools
      pinned
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
