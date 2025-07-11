// * Library
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// * Layouts
import { Layout } from '@layouts';

// * Styles
import '@styles/index.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
};

export default App;
