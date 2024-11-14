import { Edit2, Camera } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface ProfileHeaderProps {
  profile: ProfileData;
  isEditing: boolean;
  onImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFieldChange: (field: keyof ProfileData, value: string) => void;
}

export default function ProfileHeader({ profile, isEditing, onImageChange, onFieldChange }: ProfileHeaderProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
      
      <div className="p-6">
        <div className="flex flex-col sm:flex-row">
          {/* Profile Image */}
          <div className="relative -mt-20 sm:-mt-16">
            <div className="relative">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-32 w-32 rounded-full border-4 border-white object-cover"
              />
              {isEditing && (
                <label className="absolute bottom-0 right-0 p-2 bg-indigo-600 text-white rounded-full cursor-pointer">
                  <Camera className="h-4 w-4" />
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </label>
              )}
            </div>
          </div>

          {/* Profile Info */}
          <div className="mt-6 sm:mt-0 sm:ml-8 flex-1">
            {isEditing ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => onFieldChange('name', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => onFieldChange('title', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Professional Title"
                />
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => onFieldChange('location', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Location"
                />
                <textarea
                  value={profile.bio}
                  onChange={(e) => onFieldChange('bio', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Professional Bio"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900">{profile.name}</h1>
                <p className="text-xl text-gray-600 mt-1">{profile.title}</p>
                <p className="text-gray-500 mt-1">{profile.location}</p>
                <p className="text-gray-600 mt-4">{profile.bio}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}