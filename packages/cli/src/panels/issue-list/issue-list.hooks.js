import React, { useState, useEffect } from 'react';

const useIssues = (jira, jql) => {
  const [issues, setIssues] = useState([]);
  const [isPending, setPending] = useState(false);

  useEffect(() => {
    setPending(true);
    jira
      .getIssues(jql)
      .then((res) => {
        setIssues(res)
      })
      .finally(() => {
        setPending(false);
      });
  }, []);

  return {
    issues,
    isPending,
  }
};

export default useIssues;
