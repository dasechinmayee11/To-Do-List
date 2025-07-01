import React from 'react';
import { Todo } from '../App';
import { BarChart3, TrendingUp, CheckCircle, Clock, Target, Calendar } from 'lucide-react';

interface StatsProps {
  todos: Todo[];
}

export default function Stats({ todos }: StatsProps) {
  const totalTasks = todos.length;
  const completedTasks = todos.filter(todo => todo.completed).length;
  const activeTasks = totalTasks - completedTasks;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Priority breakdown
  const priorityStats = {
    high: todos.filter(todo => todo.priority === 'high').length,
    medium: todos.filter(todo => todo.priority === 'medium').length,
    low: todos.filter(todo => todo.priority === 'low').length,
  };

  // Category breakdown
  const categoryStats = todos.reduce((acc, todo) => {
    acc[todo.category] = (acc[todo.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Recent activity (last 7 days)
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const recentTasks = todos.filter(todo => todo.createdAt >= sevenDaysAgo).length;

  const stats = [
    {
      label: 'Total Tasks',
      value: totalTasks.toString(),
      icon: BarChart3,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      label: 'Completed',
      value: completedTasks.toString(),
      icon: CheckCircle,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    },
    {
      label: 'Active Tasks',
      value: activeTasks.toString(),
      icon: Clock,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      label: 'Completion Rate',
      value: `${completionRate}%`,
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Task Analytics</h2>
        <p className="text-gray-600">Insights into your productivity and task management</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Priority Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Breakdown</h3>
          <div className="space-y-4">
            {Object.entries(priorityStats).map(([priority, count]) => {
              const percentage = totalTasks > 0 ? (count / totalTasks) * 100 : 0;
              const colors = {
                high: { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-700' },
                medium: { bg: 'bg-yellow-500', light: 'bg-yellow-100', text: 'text-yellow-700' },
                low: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-700' }
              };
              const color = colors[priority as keyof typeof colors];

              return (
                <div key={priority} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${color.bg}`} />
                    <span className="font-medium text-gray-900 capitalize">{priority}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${color.bg}`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-600 w-8">{count}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category Distribution</h3>
          <div className="space-y-3">
            {Object.entries(categoryStats)
              .sort(([,a], [,b]) => b - a)
              .slice(0, 6)
              .map(([category, count]) => {
                const percentage = totalTasks > 0 ? (count / totalTasks) * 100 : 0;
                return (
                  <div key={category} className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{category}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-600 w-6">{count}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Activity Summary</h3>
          <Calendar className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Recent Activity</h4>
            <p className="text-2xl font-bold text-blue-600 mt-1">{recentTasks}</p>
            <p className="text-sm text-gray-500">tasks this week</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Productivity</h4>
            <p className="text-2xl font-bold text-green-600 mt-1">{completionRate}%</p>
            <p className="text-sm text-gray-500">completion rate</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900">Focus Areas</h4>
            <p className="text-2xl font-bold text-purple-600 mt-1">{Object.keys(categoryStats).length}</p>
            <p className="text-sm text-gray-500">categories</p>
          </div>
        </div>
      </div>
    </div>
  );
}