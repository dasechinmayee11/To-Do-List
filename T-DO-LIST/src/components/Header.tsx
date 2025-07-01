import React from 'react';
import { CheckSquare, BarChart3, Settings, Github } from 'lucide-react';

interface HeaderProps {
  currentView: 'todos' | 'stats' | 'devops';
  onViewChange: (view: 'todos' | 'stats' | 'devops') => void;
}

export default function Header({ currentView, onViewChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <CheckSquare className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  TaskFlow
                </h1>
                <p className="text-xs text-gray-500 -mt-1">DevOps To-Do App</p>
              </div>
            </div>
          </div>

          <nav className="flex space-x-1">
            <button
              onClick={() => onViewChange('todos')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === 'todos'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <CheckSquare className="h-4 w-4 inline mr-2" />
              Tasks
            </button>
            <button
              onClick={() => onViewChange('stats')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === 'stats'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <BarChart3 className="h-4 w-4 inline mr-2" />
              Analytics
            </button>
            <button
              onClick={() => onViewChange('devops')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                currentView === 'devops'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Github className="h-4 w-4 inline mr-2" />
              DevOps
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}