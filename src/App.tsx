// * Library
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// * Layouts
import { Header, Main, Footer } from '@layouts';

// * Styles
import '@styles/index.css';

// * Stores
import { useSunTimeStore } from '@stores/useSunTimeStore';

const queryClient = new QueryClient();

const App = () => {
  const { isDayTime } = useSunTimeStore();

  const bgImage = isDayTime
    ? `url('/assets/bg-day.svg')`
    : `url('/assets/bg-night-items.svg'), url('/assets/bg-night-overlay.png')`;
  return (
    <QueryClientProvider client={queryClient}>
      <div id="container" className="flex justify-center">
        <div
          className="flex flex-col w-screen max-w-[500px] min-h-[100dvh] bg-cover bg-top"
          style={{ backgroundImage: bgImage }}
        >
          <Header />
          <Main />
          {/* <Footer /> */}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
