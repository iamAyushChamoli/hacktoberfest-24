import { vaunt, vauntSite } from "../assets";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section crosses id="partners">
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            Introducing, the official partners of GDG GEU for HacktoberFest'24
          </h2>

          <div className="max-w-[22rem] mb-10 md:mb-14">
            <h1 className="text-4xl font-bold mb-5">Vaunt</h1>
            <p className="body-2 text-n-4">
              Vaunt builds vibrant open-source communities by rewarding
              developers for engagement, celebrating achievements, and creating
              stronger bonds within your community.
            </p>
            <span>
              <a href="https://vaunt.dev" target="_blank">
                <img
                  src={vaunt}
                  alt="Vaunt"
                  className="mt-5 w-[10vw] cursor-pointer"
                />
                <h2 className="mt-2">Visit Vaunt</h2>
              </a>
            </span>
          </div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-9">
          <img
            src={vauntSite}
            alt="vaunt"
            className="vauntMini w-full max-w-[800px] h-auto"
          />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
