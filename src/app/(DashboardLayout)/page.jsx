import React from 'react';
import TournamentCard from './TournamentCard';
import { Hexagon, Zap, Coins, Users } from 'lucide-react';
import Link from 'next/link';



const EsportsTournamentCreator = () => {
  return (
    <section className="mb-8 rounded-lg overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 object-cover z-0"
        style={{
          backgroundImage: `url('https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/af983126429333a63d74450c5bd9bdcdf74463af-1920x1080.jpg?auto=format&fit=fill&q=80&w=1082')`,
        }}
      />
      
      {/* Overlay for better text readability (left side only) */}
      <div className="absolute inset-y-0 left-0 w-full md:w-1/2 bg-gradient-to-r from-black to-transparent z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 p-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-6">
          <h2 className="text-3xl font-bold text-white mb-4">
            Launch Your Esports Tournament
          </h2>
          <p className="text-gray-200 mb-4">
            Create and manage professional-grade tournaments for any game. Engage players worldwide and build your esports community.
          </p>
          <div className="mb-4">
            <div className="text-sm text-gray-200 mb-2">
              <span className="font-semibold text-[#ff4700]">✓</span> Multi-game support
            </div>
            <div className="text-sm text-gray-200 mb-2">
              <span className="font-semibold text-[#ff4700]">✓</span> Real-time match tracking
            </div>
            <div className="text-sm text-gray-200">
              <span className="font-semibold text-[#ff4700]">✓</span> Automated bracket generation
            </div>
          </div>
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition duration-300">
            Start Tournament
          </button> */}
          <CustomButton title={'     Start Tournament'} />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          {/* This space is intentionally left empty to showcase the background image */}
        </div>
      </div>
    </section>
  );
};


const CustomButton = ({ title, icon: Icon }) => {
  return (
    <Link href={'/dashboards/new-tournament'} >
    <div className="relative inline-block">
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.6 0H139.2C144.8 0 149.6 1.25 152.8 3.75L160 9.375V34.375C160 37.5 156.8 40 152.8 40H20.8C15.2 40 10.4 38.75 7.2 36.25L0 30.625V5.625C0 2.5 3.2 0 7.2 0H9.6Z"
          fill="#ff4700"
        />
      </svg>
      <button className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
        <span>{title}</span>
      </button>
    </div>
    </Link>
  );
};

const GameCard = ({ imageUrl, title }) => (
  <div className="relative overflow-hidden rounded-xl">
    <img className='w-full h-48 object-cover' src={imageUrl} alt={title} />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
      <h3 className="text-white text-sm font-semibold">{title}</h3>
    </div>
  </div>
);

const EsportsPlatform = () => {
  return (
    <div className="bg-gray-900 text-white p-6">
     <EsportsTournamentCreator/>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Popular tournaments</h2>
          <button className="text-blue-400">View all &gt;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TournamentCard 
        
          />
          <TournamentCard 
  
          />
          <TournamentCard 
         
          />
        </div>
      </section>
      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Explore games</h2>
          <button className="text-blue-400">View all &gt;</button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <GameCard 
            imageUrl="https://assets.xboxservices.com/assets/36/b5/36b52fa8-e71b-4435-888a-cecb98d3876a.jpg?n=153142244433_GLP-Page-Hero-0_1083x1222_02.jpg" 
            title="Call of Duty: WARZONE" 
          />
          <GameCard 
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS3jTJef0vJdpVg4ddVrPXaer-lEvVaBHJdQ&s" 
            title="TEAMFIGHT TACTICS" 
          />
          <GameCard 
            imageUrl="https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Overwatch_cover_art.jpg/220px-Overwatch_cover_art.jpg" 
            title="Genshin Impact" 
          />
          <GameCard 
            imageUrl="https://upload.wikimedia.org/wikipedia/en/6/65/COD_Warzone_Cover_Art.jpg" 
            title="OVERWATCH 2" 
          />
          <GameCard 
            imageUrl="https://play-lh.googleusercontent.com/wD3nE-orQx4ZEYFzzyhanH6yHLjCDO7w3aE5DTvDbWKBeHKY3UGrt5P-w4YyhOIcRiM" 
            title="NBA 2K24" 
          />
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Tournaments by your games</h2>
          <button className="text-blue-400">View all &gt;</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TournamentCard 
     
          />
          <TournamentCard 
        
          />
          <TournamentCard 
           
          />
        </div>
      </section>
    </div>
  );
};

export default EsportsPlatform;