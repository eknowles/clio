# clio

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

#### Setup

- [Generate Atlassian Token](https://id.atlassian.com/manage/api-tokens)
- [Generate Azure DevOps Token](https://bcagroup.visualstudio.com/_usersSettings/tokens)

#### Config

Create a `.cliorc` file

```json
{
  "azureDevOps": {
    "organisation": "mycompany",
    "project": "myproject",
    "token": "xxx" // <-- https://mycompany.visualstudio.com/_usersSettings/tokens
  },
  "atlassian": {
    "jira": {
      "host": "mycompany.atlassian.net",
      "defaultProject": "ABC",
      "email": "ed.knowles@mycompany.com",
      "token": "xxx" // <-- https://id.atlassian.com/manage/api-tokens
    }
  }
}
```
