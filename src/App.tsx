// * Library
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// * Components
import ApiTest from '@components/ApiTest';

// * Layouts
import { Header, Main, Footer } from '@layouts';

// * Styles
import '@styles/index.css';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div id="container" className="flex justify-center">
        <div className="flex flex-col w-screen max-w-[500px] min-h-[100dvh] bg-amber-50">
          <Header />
          <Main />
          <Footer />
          {/* <ApiTest /> */}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
