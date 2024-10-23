import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { HelpCircle, Link, Shield, UserCircle, Users } from 'lucide-react';

const ParticipantCard = ({ participant }) => (
  <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col w-64">
    <div className="relative h-48">
      {participant.avatar ? (
        <img
          className="w-full h-full object-cover"
          src={participant.avatar}
          alt={`${participant.username}'s avatar`}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-700">
          <UserCircle className="w-24 h-24 text-gray-500" />
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h5 className="text-xl font-semibold text-white truncate">
          {participant.username}{' '}
          {localStorage.getItem('username') === participant.username ? '(You)' : null}
        </h5>
      </div>
    </div>
   
  </div>
);

const ParticipantCardGrid = ({ tournamentId }) => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}get_accepted_participants.php?tournament_id=${tournamentId}`,
        );
        if (response.data) {
          console.log(response.data)
          setParticipants(response.data.participants);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        setError('Failed to fetch participants. Please try again later.');
        console.error('Error fetching participants:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, [tournamentId]);

  if (loading) {
    return <div className="text-white text-center">Loading participants...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }
  

  return (
    <div className=" mx-auto">
    {participants.length === 0 ? (
         <div className="text-center mt-6">
         <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
           <Users className="text-purple-400" size={32} />
         </div>
         <h3 className="text-lg font-semibold text-white mb-2">No Participants Yet</h3>
         <p className="text-sm text-gray-400 mb-4">Start by adding your first team member</p>
        
       </div>
    ) : (
      participants.map((participant) => (
        <ParticipantCard key={participant.registration_id} participant={participant} />
      ))
    )}
  </div>
  );
};

export default ParticipantCardGrid;
