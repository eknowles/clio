import rc from 'rc';
import Ajv from 'ajv';

import schema from './schema.json';

const APP_NAME = 'clio';
const config = rc(APP_NAME);

const ajv = new Ajv({ allErrors: true });
const validate = ajv.compile(schema);
const valid = validate(config);

if (!valid) {
  throw new Error(validate.errors[0].message);
}

export default config;
