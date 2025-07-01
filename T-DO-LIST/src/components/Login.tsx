import React, { useState } from 'react';
import { LogIn, User, Lock, GraduationCap } from 'lucide-react';

interface LoginProps {
  onLogin: (userRole: 'student' | 'admin') => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [userRole, setUserRole] = useState<'student' | 'admin'>('student');
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(userRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            FeedbackFlow
          </h1>
          <p className="text-gray-600 mt-2">Student Feedback Management System</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Welcome Back</h2>
            <p className="text-gray-600 text-center mt-1">Please sign in to your account</p>
          </div>

          {/* Role Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">Login as</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setUserRole('student')}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  userRole === 'student'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <User className="h-4 w-4 mx-auto mb-1" />
                Student
              </button>
              <button
                type="button"
                onClick={() => setUserRole('admin')}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                  userRole === 'admin'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                }`}
              >
                <Lock className="h-4 w-4 mx-auto mb-1" />
                Admin
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {userRole === 'student' ? 'Student ID' : 'Admin Username'}
              </label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder={userRole === 'student' ? 'Enter your student ID' : 'Enter admin username'}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all flex items-center justify-center space-x-2"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</h4>
            <div className="text-xs text-gray-600 space-y-1">
              <p><strong>Student:</strong> student123 / password</p>
              <p><strong>Admin:</strong> admin / admin123</p>
            </div>
          </div>
        </div>

        {/* DevOps Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Built with modern DevOps practices
          </p>
          <div className="flex justify-center items-center space-x-4 mt-2 text-xs text-gray-400">
            <span>CI/CD Pipeline</span>
            <span>•</span>
            <span>Docker</span>
            <span>•</span>
            <span>Jenkins</span>
            <span>•</span>
            <span>AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
}