import React, { Fragment } from 'react';
import { Box } from 'ink';

import Jira from '@eknowles/clio-jira';
import config from '@eknowles/clio-config';

import BuildStatusPanel from '../../panels/build-status/build-status.panel';
import IssueListPanel from '../../panels/issue-list/issue-list.panel';

const { jira } = config.atlassian;
const { defaultProject } = jira;
const jiraClient = new Jira(jira);
const queries = {
  myIssues: `project = "${defaultProject}" AND assignee = currentUser() AND resolution = Unresolved ORDER BY status ASC`,
  qaRead: `project = "${defaultProject}" AND status = "Ready for QA"`,
  inQa: `project = "${defaultProject}" AND status = "QA In Progress"`,
};

const DashboardPage = () => (
  <Fragment>
    <Box flexDirection={'column'}>
      <BuildStatusPanel title={'Azure DevOps Builds (develop)'} branch={'develop'} />
    </Box>
    <Box flexDirection={'column'}>
      <IssueListPanel
        title={'Ready for QA'}
        jql={queries.qaRead}
        client={jiraClient}
      />
      <IssueListPanel
        title={'My Unresolved Issues'}
        jql={queries.myIssues}
        client={jiraClient}
      />
    </Box>
  </Fragment>
);

export default DashboardPage;
