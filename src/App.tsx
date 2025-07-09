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

// * Utils
import { getBgImageByTimeAndTemperature } from '@utils/weather/weatherUtils';

const queryClient = new QueryClient();

const App = () => {
  const { timeOfDay } = useTimeOfDayStore();
  const { currentTemperature, isCurrentRaining, isCurrentSnowing } = useWeatherStore();

  const bgImage = getBgImageByTimeAndTemperature(timeOfDay, currentTemperature);
  console.log(bgImage);
  return (
    <QueryClientProvider client={queryClient}>
      <div id="container" className="flex justify-center">
        <div
          className="flex flex-col w-screen max-w-[500px] min-h-[100dvh] bg-cover bg-left"
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
