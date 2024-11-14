import { ReactNode } from 'react';
import { Edit2 } from 'lucide-react';

interface EditableSectionProps {
  title: string;
  isEditing: boolean;
  onEdit?: () => void;
  children: ReactNode;
}

export default function EditableSection({ title, isEditing, onEdit, children }: EditableSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        {onEdit && !isEditing && (
          <button
            onClick={onEdit}
            className="p-2 text-gray-600 hover:text-indigo-600"
          >
            <Edit2 className="h-5 w-5" />
          </button>
        )}
      </div>
      {children}
    </div>
  );
}