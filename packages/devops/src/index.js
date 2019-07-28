import * as azdev from 'azure-devops-node-api';

import config from '@eknowles/clio-config';

const { organisation, token } = config.azureDevOps;
const orgUrl = `https://dev.azure.com/${organisation}`;
const authHandler = azdev.getPersonalAccessTokenHandler(token);
const connection = new azdev.WebApi(orgUrl, authHandler);

export default connection;
