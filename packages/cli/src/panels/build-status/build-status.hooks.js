import React, { useEffect, useState } from 'react';
import Duration from 'duration';

import devOps from '@eknowles/clio-devops';
import config from '@eknowles/clio-config';

const useIssues = (branch) => {
  const [builds, setBuilds] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    async function getBuilds(branch) {
      const api = await devOps.getBuildApi();
      const defs = await api.getDefinitions(config.azureDevOps.project);
      const names = defs.map(({ name }) => name);

      const results = await Promise.all(names.map((name) => api.getLatestBuild(
        config.azureDevOps.project,
        name,
        branch
      )));

      return results
        .map((build) => {
          if (!build) {
            return null;
          }

          return {
            id: build.id,
            buildNumber: build.buildNumber,
            status: build.status,
            result: build.result,
            queueTime: build.queueTime,
            startTime: build.startTime,
            finishTime: build.finishTime,
            definitionName: build.definition.name,
            url: build._links.web.href,
            duration: new Duration(build.startTime, build.finishTime).toString(1, 2)
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.definitionName - b.definitionName);

    }

    setPending(true);
    getBuilds()
      .then((res) => {
        setBuilds(res);
      })
      .finally(() => {
        setPending(false);
      });
  }, [branch]);

  return {
    builds,
    isPending,
  };
};

export default useIssues;
