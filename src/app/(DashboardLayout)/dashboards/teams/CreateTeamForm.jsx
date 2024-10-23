import React, { useState, useEffect } from 'react';
import { PlusCircle, Upload, X, Shield, Users, Star, Lock } from 'lucide-react';

const CreateTeamForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    tag: '',
    description: '',
    privacy: 'public',
    requirements: {
      minRank: 'any',
      region: 'euw',
      playStyle: 'casual'
    },
    logo: null
  });

  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, logo: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative h-full">
        <div className="w-full h-full max-w-screen-2xl mx-auto bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 flex flex-col">
          {/* Fixed Header */}
          <div className="flex-none h-16 border-b border-gray-800/50 bg-gray-900/50 backdrop-blur-sm flex items-center justify-between px-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-lg font-semibold text-white">Create New Team</h2>
              <div className="h-1.5 w-1.5 rounded-full bg-gray-600"></div>
              <span className="text-sm text-gray-400">Team Setup</span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors group"
            >
              <X size={20} className="text-gray-400 group-hover:text-white group-hover:rotate-90 transition-all" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Main Info - Left Side */}
                  <div className="lg:col-span-2 space-y-6 ">
                    {/* Basic Information */}
                    <div className="bg-gray-900 backdrop-blur-sm rounded-xl p-6 angular-cut">
                      <h3 className="text-lg font-semibold mb-6 flex items-center">
                        <Shield className="mr-2 text-purple-400" size={20} />
                        Basic Information
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Team Name</label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-gray-800/50 angular-cut  rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="Enter team name"
                          />
                        </div>

                    

                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                          <textarea
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            rows="4"
                            className="w-full bg-gray-800/50 angular-cut  rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                            placeholder="Tell us about your team's goals and philosophy..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Team Requirements */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-6 flex items-center">
                        <Users className="mr-2 text-purple-400" size={20} />
                        Team Requirements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Minimum Rank</label>
                          <select
                            value={formData.requirements.minRank}
                            onChange={(e) => setFormData({
                              ...formData,
                              requirements: { ...formData.requirements, minRank: e.target.value }
                            })}
                            className="w-full bg-gray-800/50  angular-cut  rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          >
                            <option value="any">Any Rank</option>
                            <option value="gold">Gold+</option>
                            <option value="platinum">Platinum+</option>
                            <option value="diamond">Diamond+</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Region</label>
                          <select
                            value={formData.requirements.region}
                            onChange={(e) => setFormData({
                              ...formData,
                              requirements: { ...formData.requirements, region: e.target.value }
                            })}
                            className="w-full bg-gray-800/50 angular-cut rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          >
                            <option value="euw">EUW</option>
                            <option value="na">NA</option>
                            <option value="eune">EUNE</option>
                            <option value="kr">KR</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Play Style</label>
                          <select
                            value={formData.requirements.playStyle}
                            onChange={(e) => setFormData({
                              ...formData,
                              requirements: { ...formData.requirements, playStyle: e.target.value }
                            })}
                            className="w-full bg-gray-800/50 angular-cut rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                          >
                            <option value="casual">Casual</option>
                            <option value="competitive">Competitive</option>
                            <option value="professional">Professional</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sidebar - Right Side */}
                  <div className="space-y-6">
                    {/* Logo Upload */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-6 flex items-center">
                        <Upload className="mr-2 text-purple-400" size={20} />
                        Team Logo
                      </h3>
                      <div className="relative group">
                        <div className="w-full h-48 bg-gray-800/50 border-2 angular-cut border-dashed border-gray-700 rounded-xl overflow-hidden group-hover:border-purple-500 transition-colors">
                          {imagePreview ? (
                            <img 
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-full object-cover angular-cut"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col angular-cut items-center justify-center text-gray-400">
                              <Upload size={32} className="mb-2" />
                              <span className="text-sm">Drop your logo here</span>
                              <span className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</span>
                            </div>
                          )}
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Privacy Settings */}
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-6 flex items-center">
                        <Lock className="mr-2 text-purple-400" size={20} />
                        Privacy
                      </h3>
                      <div className="space-y-2">
                        <label className="flex items-center angular-cut p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                          <input
                            type="radio"
                            name="privacy"
                            value="public"
                            checked={formData.privacy === 'public'}
                            onChange={(e) => setFormData({ ...formData, privacy: e.target.value })}
                            className="text-purple-500 "
                          />
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">Public</div>
                            <div className="text-xs text-gray-400">Anyone can view and request to join</div>
                          </div>
                        </label>

                        <label className="flex items-center angular-cut p-3 bg-gray-800/50 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">
                          <input
                            type="radio"
                            name="privacy"
                            value="private"
                            checked={formData.privacy === 'private'}
                            onChange={(e) => setFormData({ ...formData, privacy: e.target.value })}
                            className="text-purple-500"
                          />
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">Private</div>
                            <div className="text-xs text-gray-400">Only members can view team details</div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex justify-end space-x-3 pt-4 border-t border-gray-800">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-3 angular-cut bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-3 angular-cut bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center space-x-2"
                  >
                    <PlusCircle size={20} />
                    <span>Create Team</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeamForm;