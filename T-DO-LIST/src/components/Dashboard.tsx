import React from 'react';
import { BarChart3, Users, MessageSquare, TrendingUp, Clock, CheckCircle } from 'lucide-react';

interface DashboardProps {
  userRole: 'student' | 'admin';
}

export default function Dashboard({ userRole }: DashboardProps) {
  const studentStats = [
    { label: 'Feedback Submitted', value: '12', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
    { label: 'Courses Evaluated', value: '8', icon: CheckCircle, color: 'from-green-500 to-green-600' },
    { label: 'Pending Reviews', value: '3', icon: Clock, color: 'from-orange-500 to-orange-600' },
  ];

  const adminStats = [
    { label: 'Total Feedback', value: '1,248', icon: MessageSquare, color: 'from-blue-500 to-blue-600' },
    { label: 'Active Students', value: '342', icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Response Rate', value: '87%', icon: TrendingUp, color: 'from-purple-500 to-purple-600' },
    { label: 'Avg Rating', value: '4.2', icon: BarChart3, color: 'from-orange-500 to-orange-600' },
  ];

  const stats = userRole === 'admin' ? adminStats : studentStats;

  const recentActivity = userRole === 'admin' ? [
    { action: 'New feedback received', course: 'Data Structures', time: '2 hours ago', type: 'feedback' },
    { action: 'Course evaluation completed', course: 'Machine Learning', time: '4 hours ago', type: 'evaluation' },
    { action: 'Monthly report generated', course: 'System Report', time: '1 day ago', type: 'report' },
    { action: 'Faculty rating updated', course: 'Database Systems', time: '2 days ago', type: 'rating' },
  ] : [
    { action: 'Feedback submitted', course: 'Data Structures', time: '1 day ago', type: 'feedback' },
    { action: 'Course evaluation completed', course: 'Web Development', time: '3 days ago', type: 'evaluation' },
    { action: 'Feedback submitted', course: 'Machine Learning', time: '1 week ago', type: 'feedback' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {userRole === 'admin' ? 'Admin Dashboard' : 'Student Dashboard'}
          </h2>
          <p className="text-gray-600 mt-1">
            {userRole === 'admin' ? 'Monitor feedback and system analytics' : 'Track your feedback submissions and course evaluations'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className={`grid gap-6 mb-8 ${userRole === 'admin' ? 'md:grid-cols-4' : 'md:grid-cols-3'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'feedback' ? 'bg-blue-500' :
                      activity.type === 'evaluation' ? 'bg-green-500' :
                      activity.type === 'report' ? 'bg-purple-500' : 'bg-orange-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.course}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {userRole === 'admin' ? (
                  <>
                    <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
                      <BarChart3 className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-blue-900">Generate Report</span>
                    </button>
                    <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center">
                      <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-green-900">Manage Users</span>
                    </button>
                    <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center">
                      <MessageSquare className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-purple-900">View Feedback</span>
                    </button>
                    <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-center">
                      <TrendingUp className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-orange-900">Analytics</span>
                    </button>
                  </>
                ) : (
                  <>
                    <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center">
                      <MessageSquare className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-blue-900">New Feedback</span>
                    </button>
                    <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-center">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-green-900">View History</span>
                    </button>
                    <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-center">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-purple-900">Pending</span>
                    </button>
                    <button className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-center">
                      <BarChart3 className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                      <span className="text-sm font-medium text-orange-900">My Stats</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}