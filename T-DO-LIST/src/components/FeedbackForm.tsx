import React, { useState } from 'react';
import { Star, Send, Book, User, MessageSquare } from 'lucide-react';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    course: '',
    faculty: '',
    category: 'course',
    rating: 0,
    feedback: '',
    isAnonymous: false
  });

  const [hoverRating, setHoverRating] = useState(0);

  const courses = [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Web Development',
    'Machine Learning',
    'Software Engineering',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence'
  ];

  const faculty = [
    'Dr. Smith Johnson',
    'Prof. Emily Davis',
    'Dr. Michael Brown',
    'Prof. Sarah Wilson',
    'Dr. James Garcia',
    'Prof. Lisa Anderson'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Feedback submitted:', formData);
    // Reset form or show success message
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Submit Feedback</h2>
                <p className="text-gray-600">Help us improve your learning experience</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Feedback Category</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, category: 'course' }))}
                  className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                    formData.category === 'course'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Book className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Course Feedback</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, category: 'faculty' }))}
                  className={`p-4 border-2 rounded-lg flex items-center space-x-3 transition-all ${
                    formData.category === 'faculty'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <User className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Faculty Feedback</span>
                </button>
              </div>
            </div>

            {/* Course Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Course
              </label>
              <select
                value={formData.course}
                onChange={(e) => setFormData(prev => ({ ...prev, course: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Choose a course...</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
            </div>

            {/* Faculty Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Faculty
              </label>
              <select
                value={formData.faculty}
                onChange={(e) => setFormData(prev => ({ ...prev, faculty: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
              >
                <option value="">Choose faculty...</option>
                {faculty.map((facultyMember, index) => (
                  <option key={index} value={facultyMember}>{facultyMember}</option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Overall Rating
              </label>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (hoverRating || formData.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-sm text-gray-600">
                  {formData.rating > 0 && (
                    <span className="font-medium">
                      {formData.rating}/5 - {
                        formData.rating === 5 ? 'Excellent' :
                        formData.rating === 4 ? 'Good' :
                        formData.rating === 3 ? 'Average' :
                        formData.rating === 2 ? 'Below Average' : 'Poor'
                      }
                    </span>
                  )}
                </span>
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Detailed Feedback
              </label>
              <textarea
                value={formData.feedback}
                onChange={(e) => setFormData(prev => ({ ...prev, feedback: e.target.value }))}
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                placeholder="Please provide detailed feedback about your experience..."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.feedback.length}/500 characters
              </p>
            </div>

            {/* Anonymous Option */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="anonymous"
                checked={formData.isAnonymous}
                onChange={(e) => setFormData(prev => ({ ...prev, isAnonymous: e.target.checked }))}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="ml-2 text-sm text-gray-700">
                Submit feedback anonymously
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-200 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="h-4 w-4" />
                <span>Submit Feedback</span>
              </button>
            </div>
          </form>
        </div>

        {/* Tips Section */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Feedback Tips</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Be specific about what worked well and what could be improved</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Provide constructive suggestions for enhancement</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Your feedback helps improve the learning experience for everyone</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}