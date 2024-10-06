import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { participantData } from "../participants/participants";

const Leaderboard = () => {
  // Sort participants by the size of their prLink array in descending order
  const sortedParticipants = [...participantData].sort((a, b) => b.prLink.length - a.prLink.length);

  return (
    <Section id="leaderboard">
      <div className="container">
        <Heading
          title="HacktoberFest'24 GEU x VaunQt Leaderboard"
          text="Make more contributions to climb up the leaderboard!"
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col gap-5 max-h-screen overflow-y-auto">
            {sortedParticipants.map((participant, index) => (
              <div key={participant.id} className="flex items-center space-x-4">
                {/* Rank number on the left */}
                <span className="rank body-2 text-n-3">{index + 1}</span>

                {/* Participant card */}
                <div
                  className={`card relative w-full max-w-[20rem] h-auto border border-n-1/10 rounded-xl p-4 flex items-center space-x-4 overflow-hidden ${
                    index === 0 ? 'hover-gold' :
                    index === 1 ? 'hover-silver' :
                    index === 2 ? 'hover-bronze' :
                    'hover-rainbow'
                  }`}
                >
                  {/* Small image to the left */}
                  <div className="w-12 h-12 overflow-hidden rounded-full">
                    <img
                      src={participant.img}
                      className="h-full w-full object-cover"
                      alt={`Profile picture of ${participant.name}`}
                    />
                  </div>

                  {/* Participant details inline */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="text-lg font-bold">{participant.name}</span>
                      <span className="body-2 text-n-3">{participant.university}</span>
                      <span className="body-2 text-n-3">Contributions: {participant.prLink.length}</span>

                      {participant.prLink.length > 0 && participant.pr.length > 0 && (
                        <a
                          href={participant.prLink[participant.prLink.length - 1]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="body-2 ml-2 text-blue-600 hover:underline"
                        >
                          Latest PR #{participant.pr[participant.pr.length - 1]}
                        </a>
                      )}
                    </div>
                  </div>
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
