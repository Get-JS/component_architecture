import { QueryClient, QueryClientProvider } from 'react-query';

import '../styles/styles.css';

const queryClient = new QueryClient();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
