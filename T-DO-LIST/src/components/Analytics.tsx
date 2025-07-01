import React from 'react';
import { BarChart3, TrendingUp, Users, Download, Filter } from 'lucide-react';

export default function Analytics() {
  const feedbackData = [
    { course: 'Data Structures', rating: 4.2, responses: 45, trend: '+0.3' },
    { course: 'Machine Learning', rating: 4.5, responses: 38, trend: '+0.1' },
    { course: 'Web Development', rating: 4.0, responses: 52, trend: '-0.2' },
    { course: 'Database Systems', rating: 4.3, responses: 41, trend: '+0.4' },
    { course: 'Software Engineering', rating: 3.9, responses: 35, trend: '-0.1' },
  ];

  const monthlyData = [
    { month: 'Jan', feedback: 120, rating: 4.1 },
    { month: 'Feb', feedback: 135, rating: 4.2 },
    { month: 'Mar', feedback: 148, rating: 4.0 },
    { month: 'Apr', feedback: 162, rating: 4.3 },
    { month: 'May', feedback: 155, rating: 4.2 },
    { month: 'Jun', feedback: 171, rating: 4.4 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h2>
            <p className="text-gray-600 mt-1">Comprehensive feedback analytics and insights</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Responses</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">1,248</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Average Rating</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">4.2</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +0.2 from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Response Rate</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">87%</p>
                <p className="text-sm text-green-600 mt-1 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +5% from last month
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">24</p>
                <p className="text-sm text-blue-600 mt-1">8 departments</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Course Performance */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Course Performance</h3>
              <p className="text-sm text-gray-600">Ratings and feedback by course</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {feedbackData.map((course, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{course.course}</h4>
                      <p className="text-sm text-gray-500">{course.responses} responses</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">{course.rating}</p>
                        <p className={`text-xs ${
                          course.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {course.trend}
                        </p>
                      </div>
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(course.rating / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Monthly Trends */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Monthly Trends</h3>
              <p className="text-sm text-gray-600">Feedback volume and ratings over time</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {monthlyData.map((month, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-semibold text-blue-600">{month.month}</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{month.feedback} feedback</p>
                        <p className="text-sm text-gray-500">Avg rating: {month.rating}</p>
                      </div>
                    </div>
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                        style={{ width: `${(month.feedback / 180) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sentiment Analysis */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Feedback Sentiment Analysis</h3>
            <p className="text-sm text-gray-600">AI-powered sentiment analysis of feedback comments</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">😊</span>
                </div>
                <h4 className="font-semibold text-gray-900">Positive</h4>
                <p className="text-3xl font-bold text-green-600 mt-1">72%</p>
                <p className="text-sm text-gray-500">899 responses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">😐</span>
                </div>
                <h4 className="font-semibold text-gray-900">Neutral</h4>
                <p className="text-3xl font-bold text-yellow-600 mt-1">18%</p>
                <p className="text-sm text-gray-500">225 responses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">😟</span>
                </div>
                <h4 className="font-semibold text-gray-900">Negative</h4>
                <p className="text-3xl font-bold text-red-600 mt-1">10%</p>
                <p className="text-sm text-gray-500">124 responses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}