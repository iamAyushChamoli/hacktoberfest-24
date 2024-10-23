import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { participantData } from "../participants/participants";


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
          <div className="relative z-1 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-white ">
              <thead className="text-xs uppercase bg-gray-700">
                <tr className='card'>
                  <th scope="col" className="px-6 py-3">Rank</th>
                  <th scope="col" className="px-6 py-3">Participant</th>
                  <th scope="col" className="px-6 py-3">University</th>
                  <th scope="col" className="px-6 py-3">Contributions</th>
                  <th scope="col" className="px-6 py-3">Latest PRs</th>
                </tr>
              </thead>
              <tbody>
                {sortedParticipants.map((participant, index) => (
                  <tr key={participant.id}  className={`card relative border border-n-1/10 rounded-xl overflow-hidden ${
                    index === 0 ? 'hover-gold' :
                    index === 1 ? 'hover-silver' :
                    index === 2 ? 'hover-bronze' :
                    'hover-rainbow'
                  }`}>
                    <td className="px-6 py-4">
                      {index < 3 ? (
                        <>
                          {index === 0 && <span className="text-yellow-400 mr-1 text-2xl">🥇</span>}
                          {index === 1 && <span className="text-gray-300 mr-1 text-2xl">🥈</span>}
                          {index === 2 && <span className="text-amber-600 mr-1 text-2xl">🥉</span>}
                        </>
                      ) : (
                        `#${index + 1}`
                      )}
                    </td>
                    <td className="px-6 py-4 flex items-center">
                      <img
                        src={participant.img}
                        className="h-10 w-10 rounded-full mr-3 object-cover"
                        alt={participant.name}
                      />
                      {participant.name}
                    </td>
                    <td className="px-6 py-4">{participant.university}</td>
                    <td className="px-15 py-4">{participant.prLink.length}</td>
                    <td className="px-6 py-4">
               {participant.prLink.length > 0 && (
                 <a 
                   href={participant.prLink[participant.prLink.length - 1]} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-blue-400 hover:underline"
                 >
                   PR #{participant.pr[participant.pr.length - 1]}
                 </a>
               )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Leaderboard;