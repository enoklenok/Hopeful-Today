import { TopInfo, Character, BottomInfo } from '@layouts';

import '@layouts/index.scss';

const Main = () => {
  return (
    <main className="app-container">
      <section className="section-container">
        <TopInfo />
        <Character />
        <BottomInfo />
      </section>
    </main>
  );
};

export default Main;
