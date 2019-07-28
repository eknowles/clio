# clio [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> cli experiment created with Ink.

### Install 📦

Requires Node.js. You can install with npm or yarn.

```bash
$ yarn global add @eknowles/clio-cli
```

### Launch! 🚀

If your `$PATH` is setup correctly, you should be able to run with the `clio` command.

```bash
$ clio
```

To exit clio, press `CTRL+C`.

#### Setup 🔧

The config `.cliorc` file requires you to have some tokens, you can generate them each below.

- [Generate Atlassian Token](https://id.atlassian.com/manage/api-tokens)
- [Generate Azure DevOps Token](https://bcagroup.visualstudio.com/_usersSettings/tokens)

#### Config 📃

Create a `.cliorc` file, you can put this at your home directory or in each project for super cool people.

```json5
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
      "email": "myname@mycompany.com",
      "token": "xxx" // <-- https://id.atlassian.com/manage/api-tokens
    }
  }
}
```

#### Todo ✅

##### Features

- [ ] find pull requests connected with jira issue
- [ ] create dev ops release (push pr to test environment)
- [ ] see status of current builds
- [ ] generate changelog for releases

##### Repository

- [ ] git hooks
- [ ] commitlint
- [ ] typescript
- [ ] tslint/eslint/prettier
