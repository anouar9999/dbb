import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const TournamentCard = ({ 
  id, 
  name, 
  startDate, 
  endDate, 
  status, 
  description, 
  maxParticipants, 
  prizePool, 
  tournamentType, 
  image,
  slug
}) => {
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);
  const now = new Date();
  const hoursUntilStart = Math.floor((startDateObj - now) / (1000 * 60 * 60));

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
  };

  return (
    <Link href={`/dashboards/tournament/${slug}`}>
      <div className="w-full max-w-sm bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:border hover:border-gray-800">
        <div className="relative h-48">
          <Image
            src={image || "https://via.placeholder.com/400x200"}
            alt={name}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent h-1/2"></div>
        </div>
        <div className="p-4">
          <h2 className="text-white text-lg font-semibold mb-2">{name}</h2>
          <div className="flex items-center mb-3">
            <span className={`text-xs text-gray-900 px-2 py-1 rounded-full font-medium ${
              status === 'Ouvert aux inscriptions' ? 'bg-yellow-500' : status === 'En cours' ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {status}
            </span>
          </div>

          <div className="flex justify-start text-white text-sm mb-4">
            <div className="px-2 first:pl-0">
              <p className="font-semibold">{formatDate(startDateObj)}</p>
              <p className="text-xs text-gray-400">Start Date</p>
            </div>
            <div className="px-2">
              <p className="font-semibold">{formatDate(endDateObj)}</p>
              <p className="text-xs text-gray-400">End Date</p>
            </div>
            <div className="px-2">
              <p className="font-semibold">{maxParticipants}</p>
              <p className="text-xs text-gray-400">Max Participants</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-white">{prizePool}DH</p>
              <p className="text-xs text-gray-400">Prize Pool</p>
            </div>

            {status === 'Ouvert aux inscriptions' ? (
              <button 
                className="flex items-center space-x-2 bg-[#aa2180] hover:bg-blue-600 text-white text-xs font-semibold px-4 py-2 rounded transition duration-300"
              >
                <span>Join</span>
                <ArrowRight size={16} />
              </button>
            ) : (
             <div></div>
            )}
          </div>  
        </div>
      </div>
    </Link>
  );
};

export default TournamentCard;