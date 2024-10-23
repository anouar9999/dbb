'use client';
import React, { useState, useEffect } from 'react';
import { PlusCircle, Search, UserCircle, X, Home, UserPlus, Settings } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import TeamSidebar from './TeamSidebar';
import CreateTeamForm from './CreateTeamForm';

// Fake data for teams
const fakeTeams = [
  { id: 1, name: 'Team Alpha', logo: 'https://img.freepik.com/psd-gratuit/logo-expedition_1409-3836.jpg?t=st=1729599714~exp=1729603314~hmac=4d8c1b83fb00603fa4d53a0d4a5edca3281544a7e282bee5229ee827d9bb0837&w=740' },
  { id: 2, name: 'Beta Squad', logo: 'https://img.freepik.com/psd-premium/maquette-logo-bouclier-metal_1562-516.jpg?w=740' },
  { id: 3, name: 'Gamma Force', logo: 'https://img.freepik.com/psd-premium/rendu-3d-maquette-bouclier-evenement-sportif_25996-769.jpg?w=740' },
  { id: 4, name: 'Delta Dynamos', logo: 'https://img.freepik.com/vecteurs-libre/modele-logo-basket-ball-design-plat_23-2149361782.jpg?t=st=1729600173~exp=1729603773~hmac=9afc61ca1409f3351c515042bae6f12e613b6bf4335db9d36a2bb94c2477ac7c&w=740' },
  { id: 5, name: 'Epsilon Elite', logo: 'https://img.freepik.com/psd-premium/maquette-logo-verre-reflechissant-colore-maquette-logo-esports-mur-beton-poussiereux-rugueux_167120-216.jpg?w=740' },
  { id: 6, name: 'Team Alpha', logo: 'https://img.freepik.com/psd-premium/maquette-logo-verre-reflechissant-colore-maquette-logo-esports-mur-beton-poussiereux-rugueux_167120-218.jpg?w=740' },
  { id: 7, name: 'Beta Squad', logo: 'https://img.freepik.com/vecteurs-premium/modele-logo-equipe-e-sport-chevalier_23-2147834466.jpg?w=740' },
  { id: 8, name: 'Gamma Force', logo: 'https://img.freepik.com/vecteurs-premium/modele-logo-mascotte-jeu-esport-joueur-cyborg-pro-vecteur-premium_176048-273.jpg?w=740' },
  { id: 9, name: 'Delta Dynamos', logo: 'https://img.freepik.com/vecteurs-premium/logo-mascotte-coq-ninja-esport_119810-491.jpg?w=740' },
  { id: 10, name: 'Epsilon Elite', logo: 'https://img.freepik.com/vecteurs-premium/creation-logo-esport-mascotte-assassin_122297-890.jpg?w=740' },



];

const LeagueOfLegendsTeams = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [myTeams, setMyTeams] = useState([]);
  const [allTeams, setAllTeams] = useState([]);
  const [filteredMyTeams, setFilteredMyTeams] = useState([]);
  const [filteredAllTeams, setFilteredAllTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCreateTeamOpen, setIsCreateTeamOpen] = useState(false);

  const [activeSidebarTab, setActiveSidebarTab] = useState('overview');

  useEffect(() => {
    setTimeout(() => {
      setMyTeams(fakeTeams.slice(0, 2));
      setAllTeams(fakeTeams);
      setFilteredMyTeams(fakeTeams.slice(0, 9));
      setFilteredAllTeams(fakeTeams);
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const filtered = allTeams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredAllTeams(filtered);
    setFilteredMyTeams(myTeams.filter((team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [allTeams, myTeams, searchTerm]);

  const handleAddTeam = () => {
    setIsCreateTeamOpen(true);
  };
  const handleTeamSubmit = (teamData) => {
    console.log('New team data:', teamData);
    // Handle team creation logic here
    setIsCreateTeamOpen(false);
  };

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setSelectedTeam(null);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-transparent text-white p-4 rounded-lg shadow-lg relative">
      <ToastContainer />

      <h3 className="text-5xl font-custom my-4">MES EQUIPES</h3>

      {myTeams.length === 0 && searchTerm === '' ? (
        <div className="text-center text-gray-400 mt-8">
          <p>Vous n avez pas encore d équipe. Commencez par en créer une !</p>
        </div>
      ) : myTeams.length === 0 ? (
        <div className="text-center text-gray-400 mt-8">
          <p>Aucune de vos équipes ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-800  rounded-lg shadow-md overflow-hidden flex flex-col w-64 md:w-full hover:scale-105 transition-transform cursor-pointer" onClick={handleAddTeam}>
            <div className="relative h-48">
              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-700 text-gray-500 font-bold">
                <PlusCircle className="w-24 h-24 text-gray-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h5 className="text-xl text-center text-gray-500 font-semibold text-white truncate">
                  Ajouter une équipe
                </h5>
              </div>
            </div>
          </div>
          {myTeams.map((team) => (
            <div key={team.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col  sm:w-full w-64 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleTeamClick(team)}>
              <div className="relative h-48">
                {team.logo ? (
                  <img
                    className="w-full h-full object-cover"
                    src={team.logo}
                    alt={`${team.name} logo`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-500 font-bold">
                    <UserCircle className="w-24 h-24" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h5 className="text-xl font-semibold text-white truncate">{team.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 className="text-5xl font-custom my-12 ">REGOINDRE UN EQUIPES</h3>
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher une équipe..."
            className="bg-gray-700 text-white px-4 py-3 angular-cut pl-10 pr-4 w-72 "
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {filteredAllTeams.length === 0 ? (
        <div className="text-center text-gray-400 mt-8">
          <p>Aucune équipe ne correspond à votre recherche.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredAllTeams.map((team) => (
            <div key={team.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col w-48 		 hover:scale-105 transition-transform cursor-pointer" onClick={() => handleTeamClick(team)}>
              <div className="relative h-48">
                {team.logo ? (
                  <img
                    className="w-full h-full object-cover"
                    src={team.logo}
                    alt={`${team.name} logo`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-700 text-gray-500 font-bold">
                    <img src={team.logo} className="w-16 h-16	 rounded-full" />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h5 className="text-xl font-semibold text-white truncate">{team.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}



<TeamSidebar 
  team={selectedTeam}
  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
  activeTab={activeSidebarTab}
  setActiveTab={setActiveSidebarTab}
/>
<CreateTeamForm 
  isOpen={isCreateTeamOpen}
  onClose={() => setIsCreateTeamOpen(false)}
  onSubmit={handleTeamSubmit}
/>    </div>
  );
};

export default LeagueOfLegendsTeams;