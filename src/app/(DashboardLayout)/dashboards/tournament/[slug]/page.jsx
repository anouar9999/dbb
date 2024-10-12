'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
  ChevronRight,
  CircleUserRound,
  Gamepad2,
  Joystick,
  Plus,
  Shapes,
  Wallet,
  Settings,
  Users,
  Calendar,
  FileText,
  BookmarkCheck,
  MoreVertical,
  Edit,
  Trash2,
  ChevronDown,
} from 'lucide-react';
import PrizeList from '@/app/(DashboardLayout)/PrizeList';
import ProfileCardGrid from '@/app/(DashboardLayout)/components/widgets/cards/ProfileCard';
import ParticipantCardGrid from '@/app/(DashboardLayout)/components/widgets/cards/MusicCard';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const NeonSharpEdgedProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
    <div
      className="h-full bg-gradient-to-r from-orange-500 to-red-500"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const SquadFormatCard = ({ icon, title, subTitle }) => (
  <div className="bg-gray-800 p-4 rounded-lg flex flex-col items-center text-center">
    {typeof icon === 'string' ? (
      <img src={icon} alt={title} className="w-14 h-12 mb-2" />
    ) : (
      React.cloneElement(icon, { size: 24, className: 'mb-2' })
    )}
    <h4 className="font-bold">{title}</h4>
    <p className="text-xs text-gray-400">{subTitle}</p>
  </div>
);



const TabComponent = ({ activeTab, onTabChange, tournament }) => {
  const tabs = ['Overview',  'Participants', 'Bracket'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const renderTabContent = () => {
    if (tournament.status === 'En cours' && activeTab !== 'Overview' && activeTab !== 'Participants' && activeTab !== 'Bracket') {
      return (
        <div className="text-white p-6 rounded-lg text-center z-[20]">
          <h3 className="text-2xl font-bold mb-4">Tournament In Progress</h3>
          <p className="text-lg">
            The tournament is currently in progress. Some features may be limited until the tournament ends.
          </p>
        </div>
      );
    }

    switch (activeTab) {
      case 'Overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <SquadFormatCard
                icon={<Gamepad2 />}
                title={tournament.type_de_match}
                subTitle="Format of game"
              />
              <SquadFormatCard
                icon={<Shapes />}
                title={tournament.type_de_jeu}
                subTitle="Platform Played"
              />
              <SquadFormatCard
                icon={<CircleUserRound />}
                title={tournament.nombre_maximum_participants}
                subTitle="Number of Players"
              />
              <SquadFormatCard
                icon="/images/backgrounds/LOL_Logo_Rendered_Hi-Res_onblue-4x3-removebg-preview.png"
                subTitle="Game"
              />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Rules</h3>
              <div className="bg-gray-800 p-4 rounded-lg text-sm space-y-4">
                <p>{tournament.description_des_qualifications}</p>
              </div>
            </div>
          </div>
        );
      case 'Participants':
        return <ParticipantCardGrid tournamentId={tournament.id} />;
      case 'Bracket':
        return <p className="text-center text-gray-400">Bracket view is not yet implemented</p>;
      default:
        return <p className="text-center text-gray-400">Content for {activeTab}</p>;
    }
  };

  const TabButton = ({ tab }) => (
    <div className="relative inline-block">
      <svg
        width="100"
        height="32"
        viewBox="0 0 100 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <path
          d="M6 0H87C90.5 0 93.5 1 95.5 3L100 7.5V27.5C100 30 98 32 95.5 32H13C9.5 32 6.5 31 4.5 29L0 24.5V4.5C0 2 2 0 4.5 0H6Z"
          fill={activeTab === tab ? '#AE2085' : 'transparent'}
        />
      </svg>
      <button
        onClick={() => onTabChange(tab)}
        className={`absolute inset-0 flex items-center justify-center text-xs font-semibold 
          ${activeTab === tab ? 'text-white' : 'text-gray-400'}`}
      >
        <span>{tab}</span>
      </button>
    </div>
  );

  return (
    <div className="text-gray-300">
      {/* Desktop view */}
      <div className="hidden md:flex space-x-4 mb-4">
        {tabs.map((tab) => (
          <TabButton key={tab} tab={tab} />
        ))}
      </div>

      {/* Mobile view */}
      <div className="md:hidden mb-4 relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-gray-800 p-2 rounded-lg flex justify-between items-center"
        >
          <span>{activeTab}</span>
          <ChevronDown className={`transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-800 mt-1 rounded-lg overflow-hidden z-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  onTabChange(tab);
                  setIsDropdownOpen(false);
                }}
                className={`w-full p-2 text-left ${activeTab === tab ? 'bg-fe5821 text-white' : 'hover:bg-gray-700'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="bg-gray-900 p-6 rounded-lg">{renderTabContent()}</div>
    </div>
  );
};
const HeroSection = ({ title, backgroundSrc }) => (
  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
    <img
      src={backgroundSrc}
      alt="Tournament background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
    <div className="absolute inset-0 flex items-center p-6">
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <NeonSharpEdgedProgressBar progress={45} />
        </div>
    </div>
  </div>
);
const EsportsTournamentSidebar = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [tournament, setTournament] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasJoined, setHasJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const router = useRouter();
  const [isJoining, setIsJoining] = useState(false);

  const checkJoinStatus = async (TournamentId) => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setIsLoading(false);
        return;
      }

      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}user_check_tournament_join.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tournament_id: TournamentId,
          user_id: userId,
        }),
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
      setIsLoading(false);
    }
  };
  const fetchTournament = async () => {
    try {
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
  };
  useEffect(() => {
   

    fetchTournament();
  }, [slug]);
 
  
const LoadingPage = () => (
  <div className="fixed inset-0 flex flex-col justify-center items-center w-full h-full bg-[#05050f] z-50">
    <div className="mb-6 md:mb-8 flex justify-center">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Logo_inwi.svg/2560px-Logo_inwi.svg.png"
          alt="Brand Logo"
          width={350}
          height={100}
          className="cut-corners"
        />
        <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-purple-500 mt-8"></div>
      </div>
    </div>
  </div>
);
  const joinTournament = async () => {
    try {
      setIsJoining(true);
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error("User not logged in");
      }
  
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}user_join_tournament.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tournament_id: tournament.id,
          user_id: userId,
        }),
      });
  
      let data;
      try {
        data = await response.json();
        fetchTournament();
      } catch (error) {
        console.error('Error parsing JSON:', error);
        toast.error("An unexpected error occurred. Please try again.", { autoClose: 1500 });
        return;
      }
  
      // Log the server-side logs
      if (data.logs && Array.isArray(data.logs)) {
        console.group('Server Logs:');
        data.logs.forEach(log => console.log(log));
        console.groupEnd();
      } else {
        console.log('No server logs available');
      }
  
      if (data.success) {
        toast.success(data.message, { autoClose: 1500 });
        setHasJoined(true);
        setIsJoining(false);

        // Optionally, you can update the UI or fetch updated tournament data here
      } else {
        toast.error(data.message || "Failed to join the tournament", { autoClose: 1500 });
      }
    } catch (error) {
      console.error('Error joining tournament:', error);
      toast.error(error.message || "An error occurred. Please try again.", { autoClose: 1500 });
    }
  };

  const renderStatusBasedContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (tournament.status === 'Ouvert aux inscriptions') {
      if (hasJoined) {
        return (
          <div className=" text-white px-4 py-2 rounded-lg mr-2">
            You have joined this tournament
          </div>
        );
      } else {
        return (
          <button
            onClick={joinTournament}
            className="bg-primary text-white px-4 py-2 rounded-lg flex items-center mr-2"
          >
            <Plus className="w-4 h-4 mr-2" />
            Join Tournament
          </button>
        );
      }
    } else {
      return (
        <div className={`bg-${tournament.status === 'En cours' ? 'blue' : 'gray'}-600 text-white px-4 py-2 rounded-lg mr-2`}>
          Tournament is {tournament.status}
        </div>
      );
    }
  };
  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!tournament) return <div className="text-white">No tournament found.</div>;

  return (
    <>{isJoining && <LoadingPage />}
    <div className="relative flex flex-col lg:flex-row gap-8 bg-gray-900 text-white p-6 rounded-lg">
             <ToastContainer />

      {/* Glow Effect */}
     

      {/* Tournament Content */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          activeTab !== 'Overview'
            ? 'lg:w-0 lg:opacity-0 lg:overflow-hidden'
            : 'lg:w-1/3 lg:opacity-100'
        }`}
      >
        <HeroSection title={tournament.nom_des_qualifications} backgroundSrc={tournament.image} />
        <div className="flex items-center justify-between mb-4">{renderStatusBasedContent()}</div>
        {tournament.status !== 'En cours' && (
          <div>
            <h3 className="font-bold text-lg my-4">About the tournament</h3>
            <p className="text-sm text-gray-400">{tournament.description_des_qualifications}</p>
          </div>
        )}
        {tournament.status !== 'Terminé' && <PrizeList />}
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          activeTab !== 'Overview' ? 'lg:w-full' : 'lg:w-2/3'
        }`}
      >
        <TabComponent activeTab={activeTab} onTabChange={setActiveTab} tournament={tournament} />
      </div>
    </div>
    </>
  );
};

export default EsportsTournamentSidebar;
