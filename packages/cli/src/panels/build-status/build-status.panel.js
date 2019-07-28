import React from 'react';
import { Box, Color } from 'ink';
import Spinner from 'ink-spinner';
import Divider from 'ink-divider';

import useBuilds from './build-status.hooks';

const BuildStatusPanel = ({ title, branch }) => {
  const { builds, isPending } = useBuilds(branch);

  const loadingBar = (
    <Box marginLeft={1}>
      <Spinner type="dots" />
      {' '}
      Loading Azure DevOps Builds
    </Box>
  );

  const result = (code) => {
    switch (code) {
      case 0:
        return <Color cyan>None</Color>;
      case 2:
        return <Color greenBright>OK</Color>;
      case 4:
        return <Color green>OK*</Color>;
      case 8:
        return <Color red bold>Failed</Color>;
      case 32:
        return <Color red>Canceled</Color>;
    }
  };

  const table = (
    <Box flexDirection={'column'}>
      <Box>
        <Box width={6} marginLeft={1} textWrap={'truncate'}><Color bold underline>Result</Color></Box>
        <Box width={35} marginLeft={1} textWrap={'truncate'}><Color bold underline>Name</Color></Box>
        <Box width={8} marginLeft={1} textWrap={'truncate'}><Color bold underline>Duration</Color></Box>
        <Box width={7} marginLeft={1} textWrap={'truncate-start'}><Color bold underline>Build</Color></Box>
      </Box>
      {builds.map((build) => (
        <Box key={build.id}>
          <Box width={6} marginLeft={1} textWrap={'truncate'} justifyContent={'center'} alignItems={'center'}><Box>{result(build.result)}</Box></Box>
          <Box width={35} marginLeft={1} textWrap={'truncate-middle'}>{build.definitionName}</Box>
          <Box width={8} marginLeft={1} textWrap={'truncate'}>{build.duration}</Box>
          <Box width={7} marginLeft={1} textWrap={'truncate-start'}>{build.buildNumber}</Box>
        </Box>
      ))}
    </Box>
  );

  return (
    <Box flexDirection={'column'} margin={1}>
      <Divider title={title} width={60} />
      {isPending && loadingBar}
      {!isPending && builds && table}
    </Box>
  );
};

export default BuildStatusPanel;
