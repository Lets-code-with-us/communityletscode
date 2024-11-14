import { useState } from 'react';
import { Save, Edit2 } from 'lucide-react';
import { ProfileData } from '../types/profile';
import ProfileHeader from '../components/profile/ProfileHeader';
import SocialLinks from '../components/profile/SocialLinks';
import CodingProfiles from '../components/profile/CodingProfiles';
import EditableSection from '../components/profile/EditableSection';

const defaultProfile: ProfileData = {
  name: 'Alex Johnson',
  title: 'Senior Full Stack Developer',
  email: 'alex.johnson@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  bio: 'Passionate developer with 8+ years of experience in building scalable web applications. Focused on React, Node.js, and cloud technologies.',
  resumeLink: 'https://drive.google.com/file/resume',
  skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL'],
  languages: ['English (Native)', 'Spanish (Professional)', 'Mandarin (Basic)'],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB',
      link: 'https://github.com/alexj/ecommerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux']
    }
  ],
  experience: [
    {
      company: 'Tech Corp',
      position: 'Senior Full Stack Developer',
      duration: '2020 - Present',
      description: 'Leading development of cloud-native applications',
      technologies: ['React', 'Node.js', 'AWS']
    }
  ],
  education: [
    {
      institution: 'Stanford University',
      degree: 'Master of Science',
      field: 'Computer Science',
      duration: '2016 - 2018',
      gpa: '3.8'
    }
  ],
  certifications: [
    {
      name: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2021',
      link: 'https://aws.amazon.com/certification'
    }
  ],
  codingProfiles: [
    {
      platform: 'LeetCode',
      username: 'alexj',
      rating: '2100',
      link: 'https://leetcode.com/alexj'
    },
    {
      platform: 'CodeChef',
      username: 'alexj_dev',
      rating: '1800',
      link: 'https://codechef.com/users/alexj_dev'
    }
  ],
  achievements: [
    'First place in Regional Hackathon 2022',
    'Published 3 technical articles on Medium'
  ],
  social: {
    github: 'https://github.com/alexj',
    linkedin: 'https://linkedin.com/in/alexj',
    website: 'https://alexj.dev',
    twitter: 'https://twitter.com/alexj_dev'
  }
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    console.log('Saving profile:', profile);
  };

  const handleFieldChange = (field: keyof ProfileData, value: any) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (platform: string, value: string) => {
    setProfile(prev => ({
      ...prev,
      social: {
        ...prev.social,
        [platform]: value
      }
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleFieldChange('image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Edit Toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            {isEditing ? (
              <>
                <Save className="h-5 w-5 mr-2" />
                Save Changes
              </>
            ) : (
              <>
                <Edit2 className="h-5 w-5 mr-2" />
                Edit Profile
              </>
            )}
          </button>
        </div>

        {/* Profile Header */}
        <ProfileHeader
          profile={profile}
          isEditing={isEditing}
          onImageChange={handleImageChange}
          onFieldChange={handleFieldChange}
        />

        {/* Social Links */}
        <SocialLinks
          profile={profile}
          isEditing={isEditing}
          onSocialChange={handleSocialChange}
        />

        {/* Coding Profiles */}
        <div className="mt-6">
          <CodingProfiles
            profiles={profile.codingProfiles}
            isEditing={isEditing}
            onProfilesChange={(profiles) => handleFieldChange('codingProfiles', profiles)}
          />
        </div>

        {/* Skills & Languages */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <EditableSection title="Skills" isEditing={isEditing}>
            {isEditing ? (
              <input
                type="text"
                value={profile.skills.join(', ')}
                onChange={(e) => handleFieldChange('skills', e.target.value.split(',').map(s => s.trim()))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Separate skills with commas"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </EditableSection>

          <EditableSection title="Languages" isEditing={isEditing}>
            {isEditing ? (
              <input
                type="text"
                value={profile.languages.join(', ')}
                onChange={(e) => handleFieldChange('languages', e.target.value.split(',').map(s => s.trim()))}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Separate languages with commas"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.languages.map((language) => (
                  <span
                    key={language}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                  >
                    {language}
                  </span>
                ))}
              </div>
            )}
          </EditableSection>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <EditableSection title="Experience" isEditing={isEditing}>
            <div className="space-y-6">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-indigo-500 pl-4">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const newExp = [...profile.experience];
                          newExp[index] = { ...exp, company: e.target.value };
                          handleFieldChange('experience', newExp);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Company"
                      />
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => {
                          const newExp = [...profile.experience];
                          newExp[index] = { ...exp, position: e.target.value };
                          handleFieldChange('experience', newExp);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Position"
                      />
                      <input
                        type="text"
                        value={exp.duration}
                        onChange={(e) => {
                          const newExp = [...profile.experience];
                          newExp[index] = { ...exp, duration: e.target.value };
                          handleFieldChange('experience', newExp);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Duration"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) => {
                          const newExp = [...profile.experience];
                          newExp[index] = { ...exp, description: e.target.value };
                          handleFieldChange('experience', newExp);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Description"
                        rows={3}
                      />
                      <input
                        type="text"
                        value={exp.technologies.join(', ')}
                        onChange={(e) => {
                          const newExp = [...profile.experience];
                          newExp[index] = { ...exp, technologies: e.target.value.split(',').map(s => s.trim()) };
                          handleFieldChange('experience', newExp);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Technologies (comma separated)"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">{exp.duration}</p>
                      <p className="mt-2 text-gray-700">{exp.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() => {
                    const newExp = [...profile.experience, {
                      company: '',
                      position: '',
                      duration: '',
                      description: '',
                      technologies: []
                    }];
                    handleFieldChange('experience', newExp);
                  }}
                  className="mt-4 px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
                >
                  Add Experience
                </button>
              )}
            </div>
          </EditableSection>
        </div>

        {/* Projects */}
        <div className="mt-6">
          <EditableSection title="Projects" isEditing={isEditing}>
            <div className="grid gap-6 md:grid-cols-2">
              {profile.projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => {
                          const newProjects = [...profile.projects];
                          newProjects[index] = { ...project, name: e.target.value };
                          handleFieldChange('projects', newProjects);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Project Name"
                      />
                      <textarea
                        value={project.description}
                        onChange={(e) => {
                          const newProjects = [...profile.projects];
                          newProjects[index] = { ...project, description: e.target.value };
                          handleFieldChange('projects', newProjects);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Project Description"
                        rows={3}
                      />
                      <input
                        type="text"
                        value={project.link}
                        onChange={(e) => {
                          const newProjects = [...profile.projects];
                          newProjects[index] = { ...project, link: e.target.value };
                          handleFieldChange('projects', newProjects);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Project Link"
                      />
                      <input
                        type="text"
                        value={project.technologies.join(', ')}
                        onChange={(e) => {
                          const newProjects = [...profile.projects];
                          newProjects[index] = { ...project, technologies: e.target.value.split(',').map(s => s.trim()) };
                          handleFieldChange('projects', newProjects);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Technologies (comma separated)"
                      />
                    </div>
                  ) : (
                    <>
                      <h3 className="font-semibold text-lg">{project.name}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                      >
                        View Project →
                      </a>
                    </>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() => {
                    const newProjects = [...profile.projects, {
                      name: '',
                      description: '',
                      link: '',
                      technologies: []
                    }];
                    handleFieldChange('projects', newProjects);
                  }}
                  className="h-full min-h-[200px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                >
                  Add New Project
                </button>
              )}
            </div>
          </EditableSection>
        </div>

        {/* Achievements */}
        <div className="mt-6">
          <EditableSection title="Achievements" isEditing={isEditing}>
            {isEditing ? (
              <textarea
                value={profile.achievements.join('\n')}
                onChange={(e) => handleFieldChange('achievements', e.target.value.split('\n').filter(Boolean))}
                className="block w-full px-3 py- 2 border border-gray-300 rounded-md"
                placeholder="Enter achievements (one per line)"
                rows={4}
              />
            ) : (
              <ul className="list-disc list-inside space-y-2">
                {profile.achievements.map((achievement, index) => (
                  <li key={index} className="text-gray-700">{achievement}</li>
                ))}
              </ul>
            )}
          </EditableSection>
        </div>

        {/* Certifications */}
        <div className="mt-6">
          <EditableSection title="Certifications" isEditing={isEditing}>
            <div className="space-y-4">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-4">
                  {isEditing ? (
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={cert.name}
                        onChange={(e) => {
                          const newCerts = [...profile.certifications];
                          newCerts[index] = { ...cert, name: e.target.value };
                          handleFieldChange('certifications', newCerts);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Certification Name"
                      />
                      <input
                        type="text"
                        value={cert.issuer}
                        onChange={(e) => {
                          const newCerts = [...profile.certifications];
                          newCerts[index] = { ...cert, issuer: e.target.value };
                          handleFieldChange('certifications', newCerts);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Issuing Organization"
                      />
                      <input
                        type="text"
                        value={cert.date}
                        onChange={(e) => {
                          const newCerts = [...profile.certifications];
                          newCerts[index] = { ...cert, date: e.target.value };
                          handleFieldChange('certifications', newCerts);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Date"
                      />
                      <input
                        type="text"
                        value={cert.link || ''}
                        onChange={(e) => {
                          const newCerts = [...profile.certifications];
                          newCerts[index] = { ...cert, link: e.target.value };
                          handleFieldChange('certifications', newCerts);
                        }}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Certification URL (optional)"
                      />
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-semibold text-lg">{cert.name}</h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.date}</p>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center text-indigo-600 hover:text-indigo-500"
                        >
                          View Certificate →
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  onClick={() => {
                    const newCerts = [...profile.certifications, {
                      name: '',
                      issuer: '',
                      date: '',
                      link: ''
                    }];
                    handleFieldChange('certifications', newCerts);
                  }}
                  className="mt-4 px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50"
                >
                  Add Certification
                </button>
              )}
            </div>
          </EditableSection>
        </div>
      </div>
    </div>
  );
}