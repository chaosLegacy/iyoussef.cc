// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Type = {
  "WEB": "WEB",
  "MOBILE": "MOBILE"
};

const { Certificate, Project } = initSchema(schema);

export {
  Certificate,
  Project,
  Type
};