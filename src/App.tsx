// * Library
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// * Constants
import { DEFAULT_TIME_OF_DAY } from '@constants/constants';

// * Components
import { Rain, Snow } from '@components/lottie';

// * Layouts
import { Header, Main } from '@layouts';

// * Styles
import '@styles/index.css';

// * Stores
import { useTimeOfDayStore } from '@stores/useTimeOfDay';
import { useWeatherStore } from '@stores/useWeatherStore';

const queryClient = new QueryClient();

const App = () => {
  const { timeOfDay } = useTimeOfDayStore();
  const { isCurrentRaining, isCurrentSnowing } = useWeatherStore();

  const bgImage =
    timeOfDay === DEFAULT_TIME_OF_DAY
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
          {isCurrentRaining && <Rain />}
          {isCurrentSnowing && <Snow />}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
