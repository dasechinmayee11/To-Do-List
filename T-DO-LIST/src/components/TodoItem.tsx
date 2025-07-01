import React, { useState } from 'react';
import { Todo } from '../App';
import { Check, X, Edit2, Trash2, ArrowUp, AlertCircle, Circle, Calendar, Tag } from 'lucide-react';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const getPriorityIcon = () => {
    switch (todo.priority) {
      case 'high':
        return <ArrowUp className="h-3 w-3 text-red-500" />;
      case 'medium':
        return <AlertCircle className="h-3 w-3 text-yellow-500" />;
      default:
        return <Circle className="h-3 w-3 text-green-500" />;
    }
  };

  const getPriorityBorder = () => {
    switch (todo.priority) {
      case 'high':
        return 'border-l-red-400';
      case 'medium':
        return 'border-l-yellow-400';
      default:
        return 'border-l-green-400';
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className={`p-4 border-l-4 ${getPriorityBorder()} hover:bg-gray-50 transition-colors`}>
      <div className="flex items-start space-x-3">
        {/* Checkbox */}
        <button
          onClick={() => onToggle(todo.id)}
          className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
            todo.completed
              ? 'bg-green-500 border-green-500 text-white'
              : 'border-gray-300 hover:border-green-400'
          }`}
        >
          {todo.completed && <Check className="h-3 w-3" />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <div className="space-y-3">
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleEdit();
                  if (e.key === 'Escape') handleCancel();
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
              <div className="flex space-x-2">
                <button
                  onClick={handleEdit}
                  className="px-3 py-1 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 transition-colors"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <p className={`text-gray-900 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.text}
                </p>
                <div className="flex items-center space-x-1 ml-4">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                    title="Edit task"
                  >
                    <Edit2 className="h-3 w-3" />
                  </button>
                  <button
                    onClick={() => onDelete(todo.id)}
                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                    title="Delete task"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  {getPriorityIcon()}
                  <span className="capitalize">{todo.priority}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Tag className="h-3 w-3" />
                  <span>{todo.category}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(todo.createdAt)}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}