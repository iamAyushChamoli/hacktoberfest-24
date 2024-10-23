import { badges } from "../constants";

const BadgeList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap max-lg:justify-center">
      {badges.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-1 [&>h4]:even:text-color-3 [&>h4]:last:text-color-2 max-lg:mx-auto"
        >
          <h4 className="h4 mb-4 text-center">{item.title}</h4> {/* Centering title */}

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50 text-center"> {/* Centering text */}
            {item.description}
          </p>

          <div className="flex justify-center text-[5.5rem] leading-none font-bold"> {/* Centering image */}
            <img src={item.img} alt="badge" />
          </div>
        </div>
      ))}
    </div>
  );
};



export default BadgeList;
