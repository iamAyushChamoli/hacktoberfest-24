import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        In Collaboration with Google Developer Groups, GEU X Vaunt.dev
      </h5>
      <ul className="flex justify-center space-x-8">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={234} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;