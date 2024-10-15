import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from "react-router-dom";
import Button from "./design/Button";
// Function to generate a unique gradient for each item
const generateGradient = (index) => {
  const gradients = [
    "linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
    "linear-gradient(45deg, violet, indigo, blue, green, yellow, orange, red)",
    "linear-gradient(45deg, orange, yellow, green, blue, indigo, violet, red)",
    // Add more gradients if needed
  ];
  return gradients[index % gradients.length];
};

const Benefits = () => {
  return (
    <Section id="about">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What is HacktoberFest'24 and Why Should You Participate?"
        />

        <div className="flex flex-wrap justify-center gap-15 mb-10">
          {benefits.map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                background: generateGradient(index),
                borderImageSlice: 1,
                borderRadius: "80px",
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />

                  <Link to={item.url} className="flex items-center ml-auto">
                    {/* <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider transition-transform duration-300 hover:scale-110">
                      Learn more
                    </p> */}
                    {/* <Arrow /> */}
                 <Button/>
                  </Link>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 transition-opacity duration-300 ease-in-out hover:bg-opacity-80"
                style={{ clipPath: "url(#benefits)", borderRadius: "22%" }} // Add borderRadius here as well
              ></div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;