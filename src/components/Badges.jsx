import Section from "./Section";
import Heading from "./Heading";
import BadgeList from "./BadgeList";

const Badges = () => {
  return (
    <Section className="overflow-hidden" id="badges">
      <div className="container relative">
        <Heading
          title="Free GitHub Badges at Stake! Contribute More To Win More!"
          tag="Special Thanks To Our Partners Vaunt.dev"
        />

        <div className="relative">
          <BadgeList />
        </div>

        <div className="flex justify-center mt-10">
          <h3 className="text-xs font-code font-bold tracking-wider uppercase ">
            Check out the{" "}
            <a
              className="text-xs font-code font-bold tracking-wider uppercase border-b breathing-animation"
              href="https://github.com/iamAyushChamoli/hacktoberfest-24/blob/main/CONTRIBUTING.md"
            >
              Contribution Guidelines
            </a>{" "}
            To Learn More
          </h3>
        </div>
      </div>
    </Section>
  );
};

export default Badges;