import React from 'react';
import { Box, Color } from 'ink';
import Spinner from 'ink-spinner';
import Divider from 'ink-divider';

import useIssues from './issue-list.hooks';

const IssueListPanel = ({ client, title, jql }) => {
  const { issues, isPending } = useIssues(client, jql);

  const loadingBar = (
    <Box marginLeft={1}>
      <Spinner type="dots" />
      {' '}
      Loading JIRA Issues
    </Box>
  );

  const table = (
    <Box flexDirection={'column'}>
      <Box>
        <Box width={10} marginLeft={1} textWrap={'truncate-start'}><Color bold underline>Key</Color></Box>
        <Box width={8} marginLeft={1} textWrap={'truncate'}><Color bold underline>Type</Color></Box>
        <Box width={80} marginLeft={1} textWrap={'truncate'}><Color bold underline>Summary</Color></Box>
        <Box width={12} marginLeft={1} textWrap={'truncate'}><Color bold underline>Status</Color></Box>
      </Box>
      {issues.map((issue) => (
        <Box key={issue.key}>
          <Box width={10} marginLeft={1} textWrap={'truncate-start'}>{issue.key}</Box>
          <Box width={8} marginLeft={1} textWrap={'truncate'}>{issue.issuetype}</Box>
          <Box width={80} marginLeft={1} textWrap={'truncate'}>{issue.summary}</Box>
          <Box width={12} marginLeft={1} textWrap={'truncate'}>{issue.status}</Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box flexDirection={'column'} margin={1}>
      <Divider title={title} width={114} />
      {isPending && loadingBar}
      {!isPending && issues && table}
    </Box>
  );
};

export default IssueListPanel;
