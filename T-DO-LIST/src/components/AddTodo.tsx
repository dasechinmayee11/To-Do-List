import React, { useState } from 'react';
import { Plus, AlertCircle, Circle, ArrowUp } from 'lucide-react';

interface AddTodoProps {
  onAdd: (text: string, priority: 'low' | 'medium' | 'high', category: string) => void;
}

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium');
  const [category, setCategory] = useState('General');
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ['General', 'DevOps', 'Development', 'Testing', 'Deployment', 'Documentation'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim(), priority, category);
      setText('');
      setPriority('medium');
      setCategory('General');
      setIsExpanded(false);
    }
  };

  const getPriorityIcon = (p: 'low' | 'medium' | 'high') => {
    switch (p) {
      case 'high':
        return <ArrowUp className="h-4 w-4 text-red-500" />;
      case 'medium':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Circle className="h-4 w-4 text-green-500" />;
    }
  };

  const getPriorityColor = (p: 'low' | 'medium' | 'high') => {
    switch (p) {
      case 'high':
        return 'border-red-200 bg-red-50 text-red-700';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50 text-yellow-700';
      default:
        return 'border-green-200 bg-green-50 text-green-700';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex space-x-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setIsExpanded(true)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={!text.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>

        {isExpanded && (
          <div className="grid md:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPriority(p)}
                    className={`px-3 py-2 rounded-lg border text-sm font-medium transition-all flex items-center justify-center space-x-1 ${
                      priority === p
                        ? getPriorityColor(p)
                        : 'border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {getPriorityIcon(p)}
                    <span className="capitalize">{p}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}