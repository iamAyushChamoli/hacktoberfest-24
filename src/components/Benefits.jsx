import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { Link } from "react-router-dom";

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
<div class="relative inline-block group">
 
  <div class="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-green-900 rounded-xl border-2 border-transparent"></div>
  <button class="bg-transparent text-white font-medium text-[10px] leading-none px-5 py-1.5 pl-6 rounded-xl border-none tracking-wide flex items-center shadow-inner relative h-11 pr-14 cursor-pointer z-10 transition-all duration-300">
    Learn more
    <div class="bg-gray-800 flex items-center justify-center h-9 w-9 rounded-lg shadow-[2px_2px_8px_2px_rgba(0,0,0,0.4)] absolute right-1 transition-all duration-300 group-hover:w-[calc(100%-0.75rem)]">
      <svg
        class="w-4 text-white transition-transform duration-300 group-hover:translate-x-1"
        height="24"
        width="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path
          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  </button>
</div>


                     
        
                  </Link>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8 transition-opacity duration-300 ease-in-out hover:bg-opacity-80"
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