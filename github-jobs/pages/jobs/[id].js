import React from 'react';
import { useRouter } from 'next/router';

import { Layout } from '../../components/jobs/template/Layout';
import { JobDetails } from '../../components/jobs/Detail/JobDetails';

export default function JobDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <JobDetails id={id} />
    </Layout>
  );
}
