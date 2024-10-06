import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { participantData } from "../participants/participant";


const Leaderboard = () => {
  // Sort participants by the size of their prLink array in descending order
  const sortedParticipants = participantData.sort((a, b) => b.prLink.length - a.prLink.length);

  return (
    <Section id="leaderboard">
      <div className="container">
        <Heading
          title="HacktoberFest'24 GEU x Vaunt Leaderboard"
          text="Make more contributions to climb up the leaderboard!"
        />

        <div className="relative">
          <div className="relative z-1 grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-h-screen overflow-y-auto">
            {sortedParticipants.map((participant, index) => (
              <div
                key={participant.id}
                className={`card relative w-[20rem] h-[20rem] border border-n-1/10 rounded-xl overflow-hidden ${
                  index === 0 ? 'hover-gold' :
                  index === 1 ? 'hover-silver' :
                  index === 2 ? 'hover-bronze' :
                  'hover-rainbow'
                }`}
              >
                <div className="absolute inset-0">
                  <img
                    src={participant.img}
                    className="h-full w-full object-cover"
                    alt={participant.name}
                  />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-4">
                  <h4 className="text-lg mb-1">{participant.name}</h4>
                  <p className="body-2 mb-1 text-n-3">
                    {participant.university}
                  </p>
                  <p className="body-2 mb-1 text-n-3">
                    Total Contributions: {participant.prLink.length}
                  </p>
                  <p className="body-2 mb-1 text-n-3">
                    Current Rank: {index + 1}
                  </p>
                  <ul className="body-2">
                    <li className="flex items-start py-1 border-t border-n-6">
                      <a 
                        href={participant.prLink[participant.prLink.length - 1]} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 cursor-pointer hover:underline hover:text-blue-600"
                      >
                        Latest PR #{participant.pr[participant.pr.length - 1]}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Leaderboard;