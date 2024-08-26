import { Alarm } from '@mui/icons-material';
import { PanelRightDashedIcon, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const TournamentCard = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <div className="relative h-32 sm:h-36 md:h-40">
        <Image
          src="https://img.freepik.com/photos-premium/image-haute-resolution-trophee-decerne-aux-champions-tournoi-esports_1039156-3308.jpg?w=826"
          alt="Valorant Championship"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-2 left-3 text-white">
          <p className="text-xs sm:text-sm font-medium text-gray-400">SEP 10 Starting at 12:00 AM</p>
        <Link href={"dashboards/tournament/2"}>  <h2 className="text-sm sm:text-base md:text-lg font-bold leading-tight">Valorant Championship</h2></Link> 
        </div>
      </div>
      
      <div className="p-3 sm:p-4 space-y-3 text-green-900">
        <div className="flex justify-between text-gray-300 text-xs sm:text-sm">
          <div>
            <p className="text-xs">Prize pool</p>
            <p className="font-bold">$10,000</p>
          </div>
          <div>
            <p className="text-xs">Players</p>
            <p className="font-bold">108</p>
          </div>
          <div>
            <p className="text-xs">Team Size</p>
            <p className="font-bold">36</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white text-xs space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-1">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGvRhdg1vaZyhkn5zzE7p35e70SUgv0TVCw&s"
              alt="Riot Games"
              width={20}
              height={20}
              className="rounded"
            />
            <span>Host by</span>
            <span className="font-semibold">Riot Games</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-col items-center">
              <h4 className="text-gray-400 mb-1">Signed</h4>
              <span className="text-blue-400 font-medium">56/108</span>
            </div>
            <div className="flex -space-x-1">
              {['https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671142.jpg?t=st=1724333045~exp=1724336645~hmac=e38467a7e8781befc02686067c08ff2c9daaf2213e9c84d7c7fbb06affbe1406&w=740', 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671134.jpg?t=st=1724333114~exp=1724336714~hmac=9974ae5806fc28ade8ed826dcafb6e8510371eec42dc8476b693fe89bcdf67ef&w=740', 'https://img.freepik.com/psd-gratuit/illustration-3d-avatar-profil-humain_23-2150671165.jpg?t=st=1724333134~exp=1724336734~hmac=4a4ce32354e3096ef07ef1cac9e8605a03742b2d678c854f854fe65813537e93&w=740'].map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt={`User ${index + 1}`}
                  width={24}
                  height={24}
                  className="rounded-full border-2 border-gray-800"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;