import React from 'react';
import { Todo } from '../App';
import TodoItem from './TodoItem';
import { Filter, Trash2 } from 'lucide-react';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
  filter: 'all' | 'active' | 'completed';
  onFilterChange: (filter: 'all' | 'active' | 'completed') => void;
  onClearCompleted: () => void;
}

export default function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  filter,
  onFilterChange,
  onClearCompleted
}: TodoListProps) {
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      {/* Filter Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
            </div>
            <div className="flex space-x-1">
              {(['all', 'active', 'completed'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => onFilterChange(f)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    filter === f
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                  {f === 'active' && activeCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-blue-500 text-white text-xs rounded-full">
                      {activeCount}
                    </span>
                  )}
                  {f === 'completed' && completedCount > 0 && (
                    <span className="ml-1 px-1.5 py-0.5 bg-green-500 text-white text-xs rounded-full">
                      {completedCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {completedCount > 0 && (
            <button
              onClick={onClearCompleted}
              className="flex items-center space-x-2 px-3 py-1 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
            >
              <Trash2 className="h-3 w-3" />
              <span>Clear Completed</span>
            </button>
          )}
        </div>
      </div>

      {/* Todo List */}
      <div className="divide-y divide-gray-100">
        {todos.length === 0 ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
            <p className="text-gray-500">
              {filter === 'all' 
                ? 'Add your first task to get started!'
                : `No ${filter} tasks at the moment.`
              }
            </p>
          </div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>

      {/* Summary */}
      {todos.length > 0 && (
        <div className="p-4 bg-gray-50 border-t border-gray-200 rounded-b-xl">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>
              {todos.length} total task{todos.length !== 1 ? 's' : ''}
            </span>
            <div className="flex items-center space-x-4">
              <span className="text-blue-600 font-medium">
                {activeCount} active
              </span>
              <span className="text-green-600 font-medium">
                {completedCount} completed
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}