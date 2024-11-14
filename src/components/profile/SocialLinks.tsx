import { Github, Linkedin, Globe, Twitter } from 'lucide-react';
import { ProfileData } from '../../types/profile';

interface SocialLinksProps {
  profile: ProfileData;
  isEditing: boolean;
  onSocialChange: (platform: string, value: string) => void;
}

export default function SocialLinks({ profile, isEditing, onSocialChange }: SocialLinksProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Social Links</h2>
      <div className="space-y-4">
        {isEditing ? (
          <>
            <div className="flex items-center space-x-2">
              <Github className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={profile.social.github}
                onChange={(e) => onSocialChange('github', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                placeholder="GitHub Profile URL"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={profile.social.linkedin}
                onChange={(e) => onSocialChange('linkedin', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                placeholder="LinkedIn Profile URL"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={profile.social.website}
                onChange={(e) => onSocialChange('website', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Personal Website URL"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Twitter className="h-5 w-5 text-gray-500" />
              <input
                type="text"
                value={profile.social.twitter || ''}
                onChange={(e) => onSocialChange('twitter', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Twitter Profile URL"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-wrap gap-4">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            )}
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            )}
            {profile.social.website && (
              <a
                href={profile.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Globe className="h-5 w-5 mr-2" />
                Website
              </a>
            )}
            {profile.social.twitter && (
              <a
                href={profile.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <Twitter className="h-5 w-5 mr-2" />
                Twitter
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}