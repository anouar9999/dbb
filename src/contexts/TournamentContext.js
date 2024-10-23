import React, { createContext, useContext, useState, useCallback } from 'react';

const TournamentContext = createContext();

export const useTournament = () => useContext(TournamentContext);

export const TournamentProvider = ({ children }) => {
  const [tournament, setTournament] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const checkJoinStatus = useCallback(async (tournamentId) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setLoading(false);
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}user_check_tournament_join.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tournament_id: tournamentId, user_id: userId }),
      });

      const data = await response.json();
      if (data.success) {
        setHasJoined(data.hasJoined);
      } else {
        console.error('Error checking join status:', data.message);
      }
    } catch (error) {
      console.error('Error checking join status:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchTournament = useCallback(async (slug) => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}single_tournament.php?slug=${slug}`);
      const data = await response.json();

      if (data.success) {
        setTournament(data.tournament);
        checkJoinStatus(data.tournament.id);
      } else {
        setError(data.error || 'Failed to fetch tournament data');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while fetching tournament data');
    } finally {
      setLoading(false);
    }
  }, [checkJoinStatus]);

  const value = {
    tournament,
    hasJoined,
    loading,
    error,
    checkJoinStatus,
    fetchTournament,
    setHasJoined,
  };

  return <TournamentContext.Provider value={value}>{children}</TournamentContext.Provider>;
};