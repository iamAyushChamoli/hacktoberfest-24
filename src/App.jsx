import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Leaderboard from "./components/Leaderboard";
import Badges from "./components/Badges";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Leaderboard />
        <Badges />
        <Footer />
      </div>

    </>
  );
};

export default App;
