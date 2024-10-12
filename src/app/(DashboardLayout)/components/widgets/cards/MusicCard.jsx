import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParticipantCard = ({ participant }) => (
  <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex">
    <div className="flex flex-col flex-grow p-4">
      <div className="flex-grow">
        <h5 className="text-xl font-semibold mb-1 text-white">{participant.username}</h5>
        <p className="text-gray-400">{participant.email}</p>
      </div>
      <div className="mt-2 text-sm text-gray-500">
        Registered: {new Date(participant.registration_date).toLocaleDateString()}
      </div>
    </div>
    <img
      className="w-2/5 h-32 object-cover"
      src={participant.avatar || "/images/default-avatar.jpg"}
      alt={`${participant.username}'s avatar`}
    />
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
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}get_accepted_participants.php?tournament_id=${tournamentId}`);
        if (response.data.success) {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {participants.map((participant) => (
        <ParticipantCard key={participant.registration_id} participant={participant} />
      ))}
    </div>
  );
};

export default ParticipantCardGrid;