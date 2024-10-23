"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Header from '@/app/(DashboardLayout)/layout/vertical/header/Header';
import { TournamentProvider, useTournament } from '@/contexts/TournamentContext';
import { useParams } from 'next/navigation';

const LayoutContent = ({ children }) => {
  const [showGlow, setShowGlow] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { fetchTournament, tournament } = useTournament();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      fetchTournament(slug);
     
    }
  }, [slug, fetchTournament]);

  useEffect(() => {
    let timer;
    if (showGlow) {
      timer = setTimeout(() => setShowGlow(false), 1200);
    }

    return () => clearTimeout(timer);
  }, [showGlow]);

  const triggerGlow = () => setShowGlow(true);

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 h-1/3 z-0 overflow-hidden">
      {tournament && (
        <Image
          src={`${tournament.image}`}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      )}
      </div>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gray-900 bg-opacity-70 z-10"></div>

      {/* Glow Effect */}
      {showGlow && (
        <div className="fixed inset-0 z-50 pointer-events-none bg-green-500 opacity-20 transition-opacity duration-1000"></div>
      )}

      {/* Header Section */}
      <div className="relative z-20">
        <Header setIsMobileOpen={setIsMobileOpen} />

        {/* Welcome Message */}
        <div className="mt-40 font-custom  pl-4 sm:pl-8 md:pl-16">
        {tournament && (
          <h2 className="text-5xl font-custom text-white mb-10 ">
         {tournament.nom_des_qualifications}
         </h2>
      )}
              </div>

    

      
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col mt-8 pl-4 sm:pl-8 md:pl-16 z-30 mb-2">
        {children}
      </main>

      {/* You can use tournament data here if needed */}
  
    </div>
  );
};

const Layout = ({ children }) => {
  return (
    <TournamentProvider>
      <LayoutContent>{children}</LayoutContent>
    </TournamentProvider>
  );
};

export default Layout;

