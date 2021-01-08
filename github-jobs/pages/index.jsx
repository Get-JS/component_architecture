import { Layout } from '../components/jobs/template/Layout';
import { FilterableJobList } from '../components/jobs/Main/FilterableJobList';

export default function Home() {
  return (
    <Layout>
      <FilterableJobList />
    </Layout>
  );
}
