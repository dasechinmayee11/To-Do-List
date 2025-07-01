import React from 'react';
import { Github, GitBranch, Package, Cloud, Zap, Shield, Monitor, Users } from 'lucide-react';

export default function DevOpsInfo() {
  const devopsSteps = [
    {
      step: '1',
      title: 'Source Code Management',
      description: 'Code hosted on GitHub with version control',
      icon: Github,
      color: 'from-gray-700 to-gray-800',
      details: ['Git repository setup', 'Branch protection rules', 'Pull request workflow']
    },
    {
      step: '2',
      title: 'Continuous Integration',
      description: 'Jenkins pipeline triggered on code commits',
      icon: GitBranch,
      color: 'from-blue-600 to-blue-700',
      details: ['Automated builds', 'Code quality checks', 'Unit testing']
    },
    {
      step: '3',
      title: 'Containerization',
      description: 'Application packaged using Docker',
      icon: Package,
      color: 'from-cyan-500 to-cyan-600',
      details: ['Dockerfile creation', 'Image optimization', 'Multi-stage builds']
    },
    {
      step: '4',
      title: 'Deployment',
      description: 'Automated deployment to cloud platforms',
      icon: Cloud,
      color: 'from-green-500 to-green-600',
      details: ['AWS/Heroku deployment', 'Environment management', 'Zero-downtime deployment']
    }
  ];

  const technologies = [
    { name: 'React + TypeScript', description: 'Modern frontend framework', icon: '⚛️' },
    { name: 'Vite', description: 'Fast build tool and dev server', icon: '⚡' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework', icon: '🎨' },
    { name: 'GitHub', description: 'Version control and collaboration', icon: '🐙' },
    { name: 'Jenkins', description: 'CI/CD automation server', icon: '🔧' },
    { name: 'Docker', description: 'Containerization platform', icon: '🐳' },
    { name: 'AWS/Heroku', description: 'Cloud deployment platforms', icon: '☁️' },
    { name: 'SonarQube', description: 'Code quality analysis', icon: '🔍' }
  ];

  const benefits = [
    {
      title: 'Faster Deployment',
      description: 'Automated pipelines reduce deployment time from hours to minutes',
      icon: Zap,
      color: 'text-yellow-600'
    },
    {
      title: 'Improved Quality',
      description: 'Automated testing and code analysis catch issues early',
      icon: Shield,
      color: 'text-green-600'
    },
    {
      title: 'Better Monitoring',
      description: 'Real-time monitoring and logging for better visibility',
      icon: Monitor,
      color: 'text-blue-600'
    },
    {
      title: 'Team Collaboration',
      description: 'Standardized processes improve team productivity',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">DevOps CI/CD Pipeline</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This project demonstrates a complete DevOps workflow with automated testing, 
          containerization, and deployment for modern web applications.
        </p>
      </div>

      {/* DevOps Pipeline Steps */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">CI/CD Pipeline Stages</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {devopsSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 rounded-lg p-6 h-full">
                <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4`}>
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="mb-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                    {step.step}
                  </span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                <ul className="space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-gray-500 flex items-center">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              {index < devopsSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Used */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Technologies & Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-2xl">{tech.icon}</span>
              <div>
                <h4 className="font-medium text-gray-900 text-sm">{tech.name}</h4>
                <p className="text-xs text-gray-600">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DevOps Benefits */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">DevOps Benefits</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Files Structure */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Structure</h3>
        <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          <pre>{`todo-devops/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── TodoList.tsx
│   │   ├── AddTodo.tsx
│   │   ├── Stats.tsx
│   │   └── DevOpsInfo.tsx
│   ├── App.tsx
│   └── main.tsx
├── Dockerfile
├── Jenkinsfile
├── package.json
├── tailwind.config.js
└── README.md`}</pre>
        </div>
      </div>

      {/* GitHub Repository Info */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Github className="h-6 w-6 text-gray-700" />
          <h3 className="text-xl font-semibold text-gray-900">GitHub Repository</h3>
        </div>
        <p className="text-gray-700 mb-4">
          This project is designed to be hosted on GitHub with automated CI/CD pipelines. 
          The repository includes all necessary configuration files for Jenkins, Docker, and deployment.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium text-gray-900">Repository Features</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>• Branch protection rules</li>
              <li>• Automated testing</li>
              <li>• Issue tracking</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium text-gray-900">CI/CD Integration</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>• Jenkins webhooks</li>
              <li>• Automated builds</li>
              <li>• Deployment triggers</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <h4 className="font-medium text-gray-900">Documentation</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>• Setup instructions</li>
              <li>• API documentation</li>
              <li>• Deployment guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}