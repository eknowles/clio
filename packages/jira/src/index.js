import JiraClient from 'jira-connector';

class Jira {
  constructor({ defaultProject, host, email, token }) {
    this.defaultProject = defaultProject;
    this.client = new JiraClient({ host, basic_auth: { email, api_token: token } });
  }

  async getIssues(jql) {
    const results = await this.client.search.search({
      jql,
      fields: ['summary', 'issuetype', 'status'],
      maxResults: 15
    });

    return results.issues.map((issue) => ({
      key: issue.key,
      issuetype: issue.fields.issuetype.name,
      summary: issue.fields.summary,
      status: issue.fields.status.name,
    }));
  }
}

module.exports = Jira;
