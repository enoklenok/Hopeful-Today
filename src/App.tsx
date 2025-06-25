// * Layouts
import { Header, Main, Footer } from '@layouts';

const App = () => {
  return (
    <div id="container" className="flex justify-center">
      <div className="flex flex-col w-screen max-w-[500px] min-h-[100dvh] bg-amber-50">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
