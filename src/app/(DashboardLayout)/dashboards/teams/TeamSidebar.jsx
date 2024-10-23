import React, { useEffect } from 'react';
import { X, Home, UserPlus, Settings, Trophy, Users, Calendar, Shield, Star, ChevronRight, BarChart2, BarChart, Target, Medal, Award, Zap, ChevronLeft, Plus, Swords, Clock, MoreVertical, Search, CheckCircle, SwitchCamera, Trash, Save, Link, Eye } from 'lucide-react';

const TeamSidebar = ({ team, isOpen, onClose, activeTab, setActiveTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Hero Stats Section */}
            <div className="relative  overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
              <img 
                src="/api/placeholder/1200/300"
                alt="Team Banner"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <div className="relative p-8 angular-cut">
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <Shield className="text-purple-400 mb-2" size={28} />
                    <span className="text-2xl font-bold text-white">Diamond I</span>
                    <span className="text-sm text-gray-400">Division</span>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <Star className="text-yellow-400 mb-2" size={28} />
                    <span className="text-2xl font-bold text-white">2150</span>
                    <span className="text-sm text-gray-400">MMR</span>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <Trophy className="text-emerald-400 mb-2" size={28} />
                    <span className="text-2xl font-bold text-white">75%</span>
                    <span className="text-sm text-gray-400">Win Rate</span>
                  </div>
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <Users className="text-blue-400 mb-2" size={28} />
                    <span className="text-2xl font-bold text-white">#5</span>
                    <span className="text-sm text-gray-400">Regional Rank</span>
                  </div>
                </div>
              </div>
            </div>
      
            {/* Performance Overview */}
            <div className="grid grid-cols-3 gap-6">
              {/* Recent Performance */}
              <div className="col-span-2 bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 angular-cut">
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <div className="mr-3 p-2 bg-purple-500/10 rounded-lg">
                    <ChevronRight className="text-purple-400" size={20} />
                  </div>
                  Recent Performance
                </h3>
                <div className="space-y-4 ">
                  {[
                    { result: 'W', enemy: 'Team Alpha', score: '15-8', date: 'Today', map: 'Summoner\'s Rift', mvp: 'DragonSlayer' },
                    { result: 'W', enemy: 'Beta Squad', score: '12-10', date: 'Yesterday', map: 'Howling Abyss', mvp: 'MidOrFeed' },
                    { result: 'L', enemy: 'Team Gamma', score: '9-15', date: '2 days ago', map: 'Summoner\'s Rift', mvp: 'ADCMain' },
                  ].map((match, i) => (
                    <div key={i} className="group relative angular-cut overflow-hidden bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all duration-300">
                      <div className="absolute angular-cut inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center p-4">
                        <div className={`min-w-[4rem] angular-cut h-16 ${
                          match.result === 'W' ? 'bg-green-500/20' : 'bg-red-500/20'
                        } rounded-lg flex flex-col items-center justify-center mr-4`}>
                          <span className={`text-2xl font-bold ${
                            match.result === 'W' ? 'text-green-400' : 'text-red-400'
                          }`}>{match.result}</span>
                          <span className="text-xs text-gray-400">{match.date}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="font-semibold text-white group-hover:text-purple-400 transition-colors">
                                vs {match.enemy}
                              </div>
                              <div className="text-sm text-gray-400">{match.map}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-white">{match.score}</div>
                              <div className="text-sm text-gray-400">MVP: {match.mvp}</div>
                            </div>
                          </div>
                          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                match.result === 'W' ? 'bg-green-500' : 'bg-red-500'
                              }`}
                              style={{ width: `${(parseInt(match.score.split('-')[0]) / (parseInt(match.score.split('-')[0]) + parseInt(match.score.split('-')[1]))) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Weekly Stats */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6 flex items-center">
                  <div className="mr-3 p-2 bg-purple-500/10 rounded-lg">
                    <BarChart2 className="text-purple-400" size={20} />
                  </div>
                  Weekly Stats
                </h3>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Matches Played</span>
                      <span className="font-medium text-white">15</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Win Rate</span>
                      <span className="font-medium text-green-400">75%</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Average KDA</span>
                      <span className="font-medium text-purple-400">3.5</span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>MVP Awards</span>
                      <span className="font-medium text-yellow-400">5</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-6">
                    <div className="text-sm font-medium text-gray-400 mb-3">Performance Trend</div>
                    <div className="h-24 flex items-end space-x-2">
                      {[65, 78, 45, 89, 92, 68, 75].map((value, i) => (
                        <div key={i} className="flex-1 bg-purple-500/20 rounded-t-sm hover:bg-purple-500/30 transition-colors" 
                          style={{ height: `${value}%` }}>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        case 'roster':
          return (
            <div className="space-y-8">
              {/* Team Stats Banner */}
              <div className="relative overflow-hidden angular-cut rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-md p-6">
                <div className="absolute inset-0 angular-cut bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                <div className="relative flex justify-between items-center ">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Team Roster</h3>
                    <p className="text-gray-400">Season 2024 • Split 2</p>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">5/5</div>
                      <div className="text-sm text-gray-400">Active Players</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">2</div>
                      <div className="text-sm text-gray-400">Substitutes</div>
                    </div>
                  </div>
                </div>
              </div>
        
              {/* Main Roster */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Active Players */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Users className="text-green-400" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold">Active Lineup</h3>
                  </div>
                  {[
                    { 
                      name: 'DragonSlayer', 
                      role: 'Top', 
                      rank: 'Diamond II',
                      winRate: '68%',
                      kda: '3.2',
                      mainChamps: ['Darius', 'Garen', 'Sett'],
                      status: 'online',
                      avatar: "https://img.freepik.com/vecteurs-premium/logo-jeu-esport-detaille_52683-63797.jpg?w=740"
                    },
                    { 
                      name: 'JungleKing', 
                      role: 'Jungle', 
                      rank: 'Diamond I',
                      winRate: '72%',
                      kda: '4.1',
                      mainChamps: ['Lee Sin', 'Elise', 'Graves'],
                      status: 'offline',
                      avatar: "https://img.freepik.com/vecteurs-libre/logo-jeu-esport-detaille_52683-63632.jpg?t=st=1729694599~exp=1729698199~hmac=f0dd33d3a5e7f5d90962e95f0089ef30bed179b97e5c4c00d681c556f5a99d22&w=740"
                    },
                    { 
                      name: 'MidOrFeed', 
                      role: 'Mid', 
                      rank: 'Diamond II',
                      winRate: '65%',
                      kda: '3.8',
                      mainChamps: ['Ahri', 'Zed', 'Syndra'],
                      status: 'in-game',
                      avatar: "https://img.freepik.com/vecteurs-libre/logo-ninja-colore-detaille_52683-65666.jpg?t=st=1729694616~exp=1729698216~hmac=6dedb3946f496670c5499116a7c9decf07402747bddb413c66445371dcb7ef48&w=740"
                    },
                    { 
                      name: 'ADCMain', 
                      role: 'ADC', 
                      rank: 'Diamond I',
                      winRate: '70%',
                      kda: '4.5',
                      mainChamps: ['Jinx', 'Caitlyn', 'Kai\'Sa'],
                      status: 'online',
                      avatar: "https://img.freepik.com/vecteurs-libre/logo-ninja-colore-detaille_52683-65666.jpg?t=st=1729694616~exp=1729698216~hmac=6dedb3946f496670c5499116a7c9decf07402747bddb413c66445371dcb7ef48&w=740"
                    },
                    { 
                      name: 'SupportLife', 
                      role: 'Support', 
                      rank: 'Diamond III',
                      winRate: '66%',
                      kda: '3.9',
                      mainChamps: ['Thresh', 'Lulu', 'Nami'],
                      status: 'online',
                      avatar: "https://img.freepik.com/vecteurs-premium/modele-logo-ninja-detaille_52683-65274.jpg?w=740"
                    },
                  ].map((player, i) => (
                    <div 
                      key={i} 
                      className="group relative overflow-hidden angular-cut bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative p-4">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="relative">
                            <img 
                              src={player.avatar}
                              alt={player.name}
                              className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
                              player.status === 'online' ? 'bg-green-500' :
                              player.status === 'offline' ? 'bg-gray-500' :
                              'bg-yellow-500'
                            }`}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start">
                              <div>
                                <div className="font-semibold text-lg group-hover:text-purple-400 transition-colors">
                                  {player.name}
                                </div>
                                <div className="text-sm text-gray-400">
                                  {player.role} • {player.rank}
                                </div>
                              </div>
                              <div className="bg-purple-500/10 px-3 py-1 rounded-full">
                                <span className="text-purple-400 font-medium">{player.winRate} WR</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      
                      </div>
                    </div>
                  ))}
                </div>
        
                {/* Team Analysis & Substitutes */}
                <div className="space-y-6">
                  {/* Team Synergy */}
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 angular-cut">
                    <div className="flex items-center space-x-2 mb-6">
                      <div className="p-2 bg-blue-500/10 rounded-lg">
                        <BarChart className="text-blue-400" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold">Team Synergy</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4 angular-cut">
                        <div className="text-sm text-gray-400 mb-2">Team Coordination</div>
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-white">8.5</div>
                          <div className="text-green-400 text-sm">+0.5</div>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 angular-cut">
                        <div className="text-sm text-gray-400 mb-2">Objective Control</div>
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-white">7.8</div>
                          <div className="text-green-400 text-sm">+0.3</div>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 angular-cut">
                        <div className="text-sm text-gray-400 mb-2">Lane Pressure</div>
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-white">8.2</div>
                          <div className="text-red-400 text-sm">-0.2</div>
                        </div>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 angular-cut">
                        <div className="text-sm text-gray-400 mb-2">Teamfight</div>
                        <div className="flex items-center space-x-2">
                          <div className="text-2xl font-bold text-white">8.7</div>
                          <div className="text-green-400 text-sm">+0.7</div>
                        </div>
                      </div>
                    </div>
                  </div>
        
                 
                </div>
              </div>
            </div>
          );
          case 'achievements':
            return (
              <div className="space-y-8">
                {/* Achievement Stats Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-600/10 to-purple-600/10 backdrop-blur-md p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-purple-600/20"></div>
                  <div className="relative grid grid-cols-4 gap-6">
                    <div className="text-center angular-cut">
                      <div className="w-16 h-16 angular-cut bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Trophy className="text-yellow-400" size={32} />
                      </div>
                      <div className="text-2xl font-bold text-white">12</div>
                      <div className="text-sm text-gray-400">Total Trophies</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Medal className="text-purple-400" size={32} />
                      </div>
                      <div className="text-2xl font-bold text-white">3</div>
                      <div className="text-sm text-gray-400">Tournaments Won</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Award className="text-blue-400" size={32} />
                      </div>
                      <div className="text-2xl font-bold text-white">8</div>
                      <div className="text-sm text-gray-400">Special Awards</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <Star className="text-green-400" size={32} />
                      </div>
                      <div className="text-2xl font-bold text-white">85%</div>
                      <div className="text-sm text-gray-400">Achievement Rate</div>
                    </div>
                  </div>
                </div>
          
                <div className="grid grid-cols-3 gap-6">
                  {/* Recent Achievements */}
                  <div className="col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Recent Achievements</h3>
                      <select className="bg-gray-800 angular-cut rounded-lg px-4 py-3 text-sm">
                        <option>All Time</option>
                        <option>This Season</option>
                        <option>This Month</option>
                      </select>
                    </div>
          
                    <div className="space-y-4">
                      {[
                        {
                          name: 'Tournament Champion',
                          description: 'Won the Regional Spring Championship 2024',
                          date: 'June 2024',
                          tier: 'Gold',
                          points: 1500,
                          icon: Trophy,
                          color: 'yellow',
                          stats: {
                            matches: 12,
                            wins: 10,
                            mvps: 5
                          }
                        },
                        {
                          name: 'Perfect Game',
                          description: 'Completed a game without any deaths across the team',
                          date: 'May 2024',
                          tier: 'Silver',
                          points: 1000,
                          icon: Target,
                          color: 'blue',
                          stats: {
                            kills: 25,
                            deaths: 0,
                            assists: 40
                          }
                        },
                        {
                          name: 'Winning Streak',
                          description: 'Won 10 consecutive matches in ranked play',
                          date: 'April 2024',
                          tier: 'Bronze',
                          points: 750,
                          icon: Zap,
                          color: 'purple',
                          stats: {
                            streak: 10,
                            avgKDA: '4.2',
                            timespan: '3 days'
                          }
                        },
                      ].map((achievement, i) => (
                        <div 
                          key={i} 
                          className="group relative overflow-hidden angular-cut bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative p-6">
                            <div className="flex items-start space-x-4">
                              <div className={`w-16 h-16 bg-${achievement.color}-500/10 rounded-2xl flex items-center justify-center`}>
                                <achievement.icon size={32} className={`text-${achievement.color}-400`} />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                  <div>
                                    <h4 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                                      {achievement.name}
                                    </h4>
                                    <p className="text-gray-400">{achievement.description}</p>
                                  </div>
                                  <div className={`px-4 py-1 rounded-full bg-${achievement.color}-500/10 text-${achievement.color}-400`}>
                                    {achievement.tier}
                                  </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                  <div className="flex space-x-4">
                                    {Object.entries(achievement.stats).map(([key, value], index) => (
                                      <div key={index} className="text-sm">
                                        <span className="text-gray-400">{key}: </span>
                                        <span className="text-white font-medium">{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Star size={16} className="text-yellow-400" />
                                    <span className="text-white font-medium">{achievement.points} pts</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
          
                  {/* Achievement Categories & Progress */}
                  <div className="space-y-6">
                    {/* Achievement Progress */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 angular-cut">
                      <h3 className="text-lg font-semibold mb-4">Season Progress</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-gray-400">Total Points</span>
                            <span className="text-white">3,250 / 5,000</span>
                          </div>
                          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center text-sm angular-cut">
                          <div className="bg-gray-800/50 rounded-lg p-2 ">
                            <div className="text-purple-400 font-medium">Gold</div>
                            <div className="text-gray-400">2/5</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-2 angular-cut">
                            <div className="text-purple-400 font-medium">Silver</div>
                            <div className="text-gray-400">4/8</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-lg p-2 angular-cut">
                            <div className="text-purple-400 font-medium">Bronze</div>
                            <div className="text-gray-400">6/10</div>
                          </div>
                        </div>
                      </div>
                    </div>
          
           
          
            
                  </div>
                </div>
              </div>
            );
            case 'schedule':
              return (
                <div className="space-y-8">
                  {/* Schedule Overview Banner */}
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-md p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                    <div className="relative grid grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <Calendar className="text-blue-400" size={32} />
                        </div>
                        <div className="text-2xl font-bold text-white">8</div>
                        <div className="text-sm text-gray-400">Upcoming Matches</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <Trophy className="text-purple-400" size={32} />
                        </div>
                        <div className="text-2xl font-bold text-white">3</div>
                        <div className="text-sm text-gray-400">Tournaments</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <Swords className="text-green-400" size={32} />
                        </div>
                        <div className="text-2xl font-bold text-white">4</div>
                        <div className="text-sm text-gray-400">Scrimmages</div>
                      </div>
                      <div className="text-center">
                        <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <Medal className="text-yellow-400" size={32} />
                        </div>
                        <div className="text-2xl font-bold text-white">1</div>
                        <div className="text-sm text-gray-400">League Matches</div>
                      </div>
                    </div>
                  </div>
            
                  <div className="grid grid-cols-3 gap-6">
                    {/* Upcoming Matches */}
                    <div className="col-span-2 space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold">Upcoming Matches</h3>
                        <div className="flex space-x-2">
                          <button className="px-4 py-3 angular-cut bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors">
                            Week
                          </button>
                          <button className="px-4 py-3 angular-cut bg-purple-500 rounded-lg text-sm hover:bg-purple-600 transition-colors">
                            Month
                          </button>
                        </div>
                      </div>
            
                      <div className="space-y-4">
                        {[
                          {
                            opponent: 'Team Alpha',
                            date: 'Tomorrow, 18:00',
                            type: 'Tournament',
                            logo: 'https://img.freepik.com/vecteurs-libre/vecteur-equipe-jeu-logo-wolf-esport_343694-1210.jpg?t=st=1729694457~exp=1729698057~hmac=b31dabbcf0eb47af9bccd4b6e0cb8e7a3800a2891d096af069f57a4c6bced479&w=740',
                            map: 'Summoner\'s Rift',
                            importance: 'high',
                            stats: {
                              previousMatches: 5,
                              wins: 3,
                              losses: 2
                            }
                          },
                          {
                            opponent: 'Beta Squad',
                            date: 'Friday, 20:00',
                            type: 'Scrimmage',
                            logo: 'https://img.freepik.com/vecteurs-libre/creation-vectorielle-logo-jeu-esport-mascotte-loup_343694-1345.jpg?t=st=1729694443~exp=1729698043~hmac=ba67b97ca80cb12034a9f5e8abdcfa687d4e13ad8c96670e61cf7225b69bffdc&w=360',
                            map: 'Howling Abyss',
                            importance: 'medium',
                            stats: {
                              previousMatches: 2,
                              wins: 1,
                              losses: 1
                            }
                          },
                          {
                            opponent: 'Team Gamma',
                            date: 'Sunday, 19:00',
                            type: 'League Match',
                            logo: 'https://img.freepik.com/vecteurs-libre/logo-conception-illustration-mascotte-panda-esport_343694-2066.jpg?t=st=1729694400~exp=1729698000~hmac=3cae13f654d5b5cb29be58b5ce6603a88d917cce7e092e129658e2578634d2cf&w=740',
                            map: 'Summoner\'s Rift',
                            importance: 'high',
                            stats: {
                              previousMatches: 3,
                              wins: 2,
                              losses: 1
                            }
                          },
                        ].map((match, i) => (
                          <div 
                            key={i} 
                            className="group relative overflow-hidden angular-cut bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
                          >
                            <div className={`absolute top-0 left-0 w-1 h-full ${
                              match.importance === 'high' ? 'bg-red-500' :
                              match.importance === 'medium' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}></div>
                            <div className="relative p-6">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                  <div className="w-16 h-16 rounded-xl overflow-hidden">
                                    <img 
                                      src={match.logo} 
                                      alt={match.opponent}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <div>
                                    <div className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                                      vs {match.opponent}
                                    </div>
                                    <div className="text-sm text-gray-400">
                                      {match.date} • {match.map}
                                    </div>
                                  </div>
                                </div>
                                <div className={`px-4 py-2 rounded-lg ${
                                  match.type === 'Tournament' ? 'bg-purple-500/10 text-purple-400' :
                                  match.type === 'Scrimmage' ? 'bg-green-500/10 text-green-400' :
                                  'bg-yellow-500/10 text-yellow-400'
                                }`}>
                                  {match.type}
                                </div>
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex space-x-4">
                                  <div className="text-sm">
                                    <span className="text-gray-400">Previous Matches: </span>
                                    <span className="text-white">{match.stats.previousMatches}</span>
                                  </div>
                                  <div className="text-sm">
                                    <span className="text-green-400">{match.stats.wins}W </span>
                                    <span className="text-red-400">{match.stats.losses}L</span>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <button className="px-4 py-2 angular-cut bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors text-sm">
                                    Match Details
                                  </button>
                                  <button className="px-4 py-2 angular-cut bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors text-sm">
                                    Confirm Lineup
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
            
                    {/* Schedule Management */}
                    <div className="space-y-6">
                      {/* Mini Calendar */}
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 angular-cut">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">October 2024</h3>
                          <div className="flex space-x-2">
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                              <ChevronLeft size={20} className="text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                              <ChevronRight size={20} className="text-gray-400" />
                            </button>
                          </div>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
                          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                            <div key={i} className="text-gray-400">{day}</div>
                          ))}
                        </div>
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: 31 }, (_, i) => (
                            <button 
                              key={i}
                              className={`aspect-square rounded-lg flex items-center justify-center text-sm
                                ${i + 1 === 15 ? 'bg-purple-500 text-white' : 
                                [8, 12, 20].includes(i + 1) ? 'bg-gray-800 text-white' : 
                                'hover:bg-gray-800 text-gray-400'}`}
                            >
                              {i + 1}
                            </button>
                          ))}
                        </div>
                      </div>
            
                      {/* Quick Stats */}
                      <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 angular-cut">
                        <h3 className="text-lg font-semibold mb-4">Schedule Stats</h3>
                        <div className="space-y-4">
                          <div>
                            <div className="flex justify-between text-sm mb-2">
                              <span className="text-gray-400">Schedule Load</span>
                              <span className="text-white">75%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-purple-500" style={{ width: '75%' }}></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-gray-800/50 rounded-lg p-3 angular-cut">
                              <div className="text-gray-400 text-sm">Matches/Week</div>
                              <div className="text-xl font-semibold">2.5</div>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-3 angular-cut">
                              <div className="text-gray-400 text-sm">Rest Days</div>
                              <div className="text-xl font-semibold">3</div>
                            </div>
                          </div>
                        </div>
                      </div>
            
                    
                    </div>
                  </div>
                </div>
              );
              case 'requests':
                return (
                  <div className="space-y-8">
                    {/* Requests Overview Banner */}
                    {/* <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur-md p-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20"></div>
                      <div className="relative grid grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                            <UserPlus className="text-purple-400" size={32} />
                          </div>
                          <div className="text-2xl font-bold text-white">12</div>
                          <div className="text-sm text-gray-400">Open Requests</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                            <Users className="text-green-400" size={32} />
                          </div>
                          <div className="text-2xl font-bold text-white">3</div>
                          <div className="text-sm text-gray-400">Positions Open</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="text-blue-400" size={32} />
                          </div>
                          <div className="text-2xl font-bold text-white">45</div>
                          <div className="text-sm text-gray-400">Total Processed</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center mx-auto mb-2">
                            <Clock className="text-yellow-400" size={32} />
                          </div>
                          <div className="text-2xl font-bold text-white">2.5h</div>
                          <div className="text-sm text-gray-400">Avg. Response</div>
                        </div>
                      </div>
                    </div> */}
              
                    <div className="grid grid-cols-3 gap-6">
                      {/* Main Requests List */}
                      <div className="col-span-2 space-y-6">
                     
              
                        {/* Requests List */}
                        <div className="space-y-4">
                          {[
                            {
                              name: 'ProPlayer123',
                              role: 'Mid',
                              rank: 'Diamond II',
                              status: 'online',
                              winRate: '65%',
                              kda: '3.2',
                              playTime: '1200h',
                              mainChamps: ['Ahri', 'Zed', 'Syndra'],
                              requestDate: '2h ago',
                              experience: {
                                tournaments: 5,
                                teams: 2,
                                achievements: 8
                              },
                              availability: 'Weekdays evening, full weekend'
                            },
                            {
                              name: 'TopDiff',
                              role: 'Top',
                              rank: 'Diamond III',
                              status: 'offline',
                              winRate: '58%',
                              kda: '2.8',
                              playTime: '800h',
                              mainChamps: ['Darius', 'Jax', 'Garen'],
                              requestDate: '5h ago',
                              experience: {
                                tournaments: 3,
                                teams: 1,
                                achievements: 5
                              },
                              availability: 'Weekend only'
                            },
                            {
                              name: 'JungleGap',
                              role: 'Jungle',
                              rank: 'Diamond I',
                              status: 'in-game',
                              winRate: '71%',
                              kda: '4.1',
                              playTime: '1500h',
                              mainChamps: ['Lee Sin', 'Elise', 'Kha\'Zix'],
                              requestDate: '1d ago',
                              experience: {
                                tournaments: 8,
                                teams: 3,
                                achievements: 12
                              },
                              availability: 'Flexible schedule'
                            },
                          ].map((request, i) => (
                            <div
                              key={i}
                              className="group relative angular-cut overflow-hidden bg-gray-900/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                              <div className="relative p-6">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                  <div className="flex items-center space-x-4">
                                    <div className="relative">
                                      <img
                                        src="https://img.freepik.com/vecteurs-libre/homme-mafieux-mysterieux-fumant-cigarette_52683-34828.jpg?t=st=1729694328~exp=1729697928~hmac=30ff96744bab527ea2914f2c983666daed599826ea45c4fe8316eca62f80e655&w=740"
                                        alt={request.name}
                                        className="w-16 h-16 rounded-xl object-cover"
                                      />
                                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-gray-900 ${
                                        request.status === 'online' ? 'bg-green-500' :
                                        request.status === 'offline' ? 'bg-gray-500' :
                                        'bg-yellow-500'
                                      }`}></div>
                                    </div>
                                    <div>
                                      <div className="flex items-center space-x-2">
                                        <span className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                                          {request.name}
                                        </span>
                                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md text-sm">
                                          {request.rank}
                                        </span>
                                      </div>
                                      <div className="text-sm text-gray-400">
                                        {request.role} • Requested {request.requestDate}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex space-x-2">
                                    <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm">
                                      {request.winRate} WR
                                    </span>
                                    <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">
                                      {request.kda} KDA
                                    </span>
                                  </div>
                                </div>
              
                           
              
                                {/* Actions */}
                                <div className="flex items-center justify-end">
                                 
                                  <div className="flex space-x-2">
                                    <button className="px-6 py-2 angular-cut bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors">
                                      Accept
                                    </button>
                                    <button className="px-6 py-2 angular-cut bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors">
                                      Decline
                                    </button>
                                    <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                                      <MoreVertical size={20} className="text-gray-400" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
              
                      {/* Sidebar */}
                      <div className="space-y-6">
                        {/* Requirements */}
                        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                          <h3 className="text-lg font-semibold mb-4">Team Requirements</h3>
                          <div className="space-y-4">
                            <div>
                              <div className="text-sm text-gray-400 mb-2">Rank Range</div>
                              <div className="flex items-center space-x-2">
                                <Shield className="text-purple-400" size={20} />
                                <span className="font-medium">Diamond III - Master</span>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 mb-2">Roles Needed</div>
                              <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">Top</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-sm">Jungle</span>
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-sm">Mid</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-sm">ADC</span>
                                <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-lg text-sm">Support</span>
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-gray-400 mb-2">Required Availability</div>
                              <div className="space-y-1">
                                <div className="flex items-center text-sm">
                                  <Clock size={16} className="text-gray-400 mr-2" />
                                  <span>Min. 20h/week</span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <Calendar size={16} className="text-gray-400 mr-2" />
                                  <span>Weekend tournaments</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
              
                   
              
                       
                      </div>
                      </div>
                      </div>)
    case 'settings':
      return (
        <div className="space-y-8">
          {/* Settings Navigation */}
          
    
          <div className="grid grid-cols-3 gap-6">
            {/* Main Settings */}
            <div className="col-span-2 space-y-6">
              {/* Basic Information */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-6">Basic Information</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Team Name</label>
                    <input
                      type="text"
                      defaultValue={team?.name}
                      className="w-full bg-gray-800  angular-cut  rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Enter team name"
                    />
                  </div>
    
              
    
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Team Description</label>
                    <textarea
                      rows="4"
                      className="w-full angular-cut  bg-gray-800  rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      placeholder="Describe your team's goals and philosophy..."
                      defaultValue="Our team is focused on competitive play and continuous improvement..."
                    />
                  </div>
    
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Team Logo</label>
                    <div className="flex items-start space-x-4">
                      <div className="relative group">
                        <img
                          src="/api/placeholder/128/128"
                          alt="Team Logo"
                          className="w-32 h-32 rounded-xl object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                          <button className="px-4 py-2 bg-white/20 angular-cut  rounded-lg text-sm backdrop-blur-sm">
                            Change Logo
                          </button>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400 mb-2">
                          Upload a square image, minimum 256x256px.
                        </div>
                        <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">
                          Upload New Logo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Team Configuration */}
           
            </div>
    
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center angular-cut  p-3 bg-purple-500/10 text-purple-400 rounded-lg hover:bg-purple-500/20 transition-colors">
                     <Eye size={20} className='mr-2' /> <span>Preview Team Profile</span>
                  
                  </button>
                  <button className="w-full flex items-center angular-cut   p-3 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors">
                      <Link size={20}  className='mr-2'  /><span>Generate Team Invite</span>
                  
                  </button>
                  <button className="w-full flex items-center angular-cut  p-3 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors">
                   <Trash size={20}  className='mr-2'/>  <span>Delete Team</span>
                   
                  </button>
                </div>
              </div>
    
              {/* Save Changes */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                <div className="space-y-4">
                  <div className="text-sm text-gray-400">
                    Dont forget to save your changes. All members will be notified of any updates.
                  </div>
                  <button className="w-full bg-purple-500 angular-cut  hover:bg-purple-600 text-white py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <Save size={20} />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
    
              
            </div>
          </div>
        </div>
      );
      default:
        return null;
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <div className={`fixed inset-0 z-50 flex transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <div className="flex w-full max-w-screen-2xl mx-auto h-screen">
        {/* Enhanced Sidebar Navigation */}
        <div className="w-80 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex flex-col border-r border-gray-800/50">
          {/* Enhanced Header - Fixed */}
          <div className="p-6 border-b border-gray-800/50 backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              {team ? (
                <>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative h-12 w-12 rounded-lg overflow-hidden ring-2 ring-gray-800/50 group-hover:ring-purple-500/50 transition-all">
                      <img 
                        src={team.logo} 
                        alt={team.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{team.name}</h2>
                    <p className="text-sm text-gray-400">Valorant Team</p>
                  </div>
                </>
              ) : (
                <div className="animate-pulse flex space-x-4">
                  <div className="h-12 w-12 bg-gray-800 rounded-lg"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-24 bg-gray-800 rounded"></div>
                    <div className="h-3 w-32 bg-gray-800 rounded"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
  
          {/* Enhanced Navigation - Scrollable */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            <nav className="py-4">
              <div className="px-3 space-y-1">
                {[
                  { id: 'overview', icon: Home, label: 'Overview' },
                  { id: 'roster', icon: Users, label: 'Team Roster' },
                  { id: 'achievements', icon: Trophy, label: 'Achievements' },
                  { id: 'schedule', icon: Calendar, label: 'Schedule' },
                  { id: 'requests', icon: UserPlus, label: 'Requests' },
                ].map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center angular-cut space-x-3 px-3 py-3 rounded-lg transition-all duration-200 group
                      ${activeTab === item.id 
                        ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/20' 
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                  >
                    <item.icon size={20} className={`${
                      activeTab === item.id ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'
                    }`} />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
  
              <div className="px-3 mt-6">
                <div className="border-t border-gray-800/50 mb-6"></div>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                    ${activeTab === 'settings' 
                      ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/20' 
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                    }`}
                >
                  <Settings size={20} className={`${
                    activeTab === 'settings' ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'
                  }`} />
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            </nav>
  
            {/* Team Status - Part of scrollable area */}
            <div className="p-4 mt-auto">
              <div className="bg-gray-800/50 rounded-xl p-3 angular-cut ">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Team Status</span>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs text-gray-400">Online</span>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  Last active: Just now
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Enhanced Content Area - Single Scroll */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-900 to-gray-800/95 backdrop-blur-md">
          {/* Enhanced Content Header - Fixed */}
          <div className="h-16 border-b border-gray-800/50 bg-gray-900/50 backdrop-blur-sm flex items-center justify-between px-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-lg font-semibold capitalize text-white">{activeTab}</h2>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
              <span className="text-sm text-gray-400">Team Management</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
            >
              <X size={20} className="text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all" />
            </button>
          </div>
  
          {/* Content Body - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {renderContent()}
            </div>
          </div>
        </div>
  
        {/* Enhanced Mobile Overlay */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10 lg:hidden" 
          onClick={onClose}
        ></div>
      </div>
    </div>
  );
      };
      
      export default TeamSidebar;