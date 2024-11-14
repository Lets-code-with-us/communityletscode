import { Code2 } from 'lucide-react';
import { ProfileData, CodingProfile } from '../../types/profile';
import EditableSection from './EditableSection';

interface CodingProfilesProps {
  profiles: CodingProfile[];
  isEditing: boolean;
  onProfilesChange: (profiles: CodingProfile[]) => void;
}

export default function CodingProfiles({ profiles, isEditing, onProfilesChange }: CodingProfilesProps) {
  const handleAddProfile = () => {
    onProfilesChange([
      ...profiles,
      { platform: '', username: '', link: '' }
    ]);
  };

  const handleProfileChange = (index: number, field: keyof CodingProfile, value: string) => {
    const updatedProfiles = [...profiles];
    updatedProfiles[index] = { ...updatedProfiles[index], [field]: value };
    onProfilesChange(updatedProfiles);
  };

  return (
    <EditableSection title="Coding Profiles" isEditing={isEditing}>
      <div className="space-y-4">
        {isEditing ? (
          <>
            {profiles.map((profile, index) => (
              <div key={index} className="space-y-2">
                <input
                  type="text"
                  value={profile.platform}
                  onChange={(e) => handleProfileChange(index, 'platform', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Platform (e.g., LeetCode, CodeChef)"
                />
                <input
                  type="text"
                  value={profile.username}
                  onChange={(e) => handleProfileChange(index, 'username', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Username"
                />
                <input
                  type="text"
                  value={profile.rating || ''}
                  onChange={(e) => handleProfileChange(index, 'rating', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Rating (optional)"
                />
                <input
                  type="text"
                  value={profile.link}
                  onChange={(e) => handleProfileChange(index, 'link', e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Profile URL"
                />
              </div>
            ))}
            <button
              onClick={handleAddProfile}
              className="mt-4 px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
            >
              Add Coding Profile
            </button>
          </>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start p-4 border rounded-lg hover:border-indigo-500 transition-colors"
              >
                <Code2 className="h-6 w-6 text-indigo-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">{profile.platform}</h3>
                  <p className="text-sm text-gray-600">@{profile.username}</p>
                  {profile.rating && (
                    <p className="text-sm text-indigo-600 mt-1">Rating: {profile.rating}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </EditableSection>
  );
}