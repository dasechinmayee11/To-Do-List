import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Stats from './components/Stats';
import DevOpsInfo from './components/DevOpsInfo';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
  category: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');
  const [currentView, setCurrentView] = useState<'todos' | 'stats' | 'devops'>('todos');

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).map((todo: any) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }));
      setTodos(parsedTodos);
    } else {
      // Add some demo todos for presentation
      const demoTodos: Todo[] = [
        {
          id: '1',
          text: 'Set up GitHub repository for DevOps project',
          completed: true,
          createdAt: new Date(Date.now() - 86400000),
          priority: 'high',
          category: 'DevOps'
        },
        {
          id: '2',
          text: 'Configure Jenkins CI/CD pipeline',
          completed: true,
          createdAt: new Date(Date.now() - 43200000),
          priority: 'high',
          category: 'DevOps'
        },
        {
          id: '3',
          text: 'Create Dockerfile for containerization',
          completed: false,
          createdAt: new Date(Date.now() - 21600000),
          priority: 'medium',
          category: 'DevOps'
        },
        {
          id: '4',
          text: 'Deploy application to AWS/Heroku',
          completed: false,
          createdAt: new Date(),
          priority: 'high',
          category: 'Deployment'
        }
      ];
      setTodos(demoTodos);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string, priority: 'low' | 'medium' | 'high', category: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
      priority,
      category
    };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const renderCurrentView = () => {
    switch (currentView) {
      case 'stats':
        return <Stats todos={todos} />;
      case 'devops':
        return <DevOpsInfo />;
      default:
        return (
          <div className="space-y-6">
            <AddTodo onAdd={addTodo} />
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onEdit={editTodo}
              filter={filter}
              onFilterChange={setFilter}
              onClearCompleted={clearCompleted}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {renderCurrentView()}
      </main>
    </div>
  );
}

export default App;