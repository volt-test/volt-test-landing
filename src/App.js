import React from 'react';
import { Github, Rocket, Code, Activity, Mail, Star, GitBranch, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold">Volt-Test</span>
              </div>
              <div className="flex items-center space-x-6">
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#roadmap" className="text-gray-600 hover:text-gray-900">Roadmap</a>
                <a href="#github" className="flex items-center px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 mb-8">
                <Rocket className="w-4 h-4 mr-2" />
                In Development
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                The Next Generation<br />Performance Testing Engine
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Building a modern, open-source load testing solution that scales from local development to enterprise deployments. Coming soon.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                  <Star className="w-5 h-5 mr-2" />
                  Star on GitHub
                </button>
                <button className="flex items-center px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="w-5 h-5 mr-2" />
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<Rocket className="w-6 h-6 text-blue-600" />}
                  title="Scalable Architecture"
                  description="From local development to cloud deployment, supporting 1K to 10M concurrent users"
              />
              <FeatureCard
                  icon={<Code className="w-6 h-6 text-blue-600" />}
                  title="Developer First"
                  description="Built by developers, for developers. Clean APIs, great docs, and extensive SDK support"
              />
              <FeatureCard
                  icon={<Activity className="w-6 h-6 text-blue-600" />}
                  title="Real-time Analytics"
                  description="Comprehensive metrics and insights for your performance testing needs"
              />
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Development Progress</h2>
            <div className="space-y-8">
              <ProgressBar
                  title="Core Engine"
                  percentage={60}
                  description="Basic load generation and metrics collection implemented"
              />
              <ProgressBar
                  title="Cloud Infrastructure"
                  percentage={30}
                  description="Architecture design completed, implementation in progress"
              />
              <ProgressBar
                  title="SDK Development"
                  percentage={20}
                  description="Initial API design phase"
              />
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <InvolvementCard
                  title="For Developers"
                  items={[
                    { icon: <Star className="w-5 h-5" />, text: "Star and watch the repository" },
                    { icon: <Code className="w-5 h-5" />, text: "Contribute to the codebase" },
                    { icon: <GitBranch className="w-5 h-5" />, text: "Submit feature requests" }
                  ]}
              />
              <InvolvementCard
                  title="Early Access"
                  items={[
                    { icon: <Mail className="w-5 h-5" />, text: "Join the waitlist" },
                    { icon: <Activity className="w-5 h-5" />, text: "Test beta versions" },
                    { icon: <Zap className="w-5 h-5" />, text: "Provide feedback" }
                  ]}
              />
            </div>
          </div>
        </div>
      </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
      <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
  );
}

function ProgressBar({ title, percentage, description }) {
  return (
      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-semibold text-gray-900">{title}</span>
          <span className="text-blue-600 font-medium">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
          <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
  );
}

function InvolvementCard({ title, items }) {
  return (
      <div className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold mb-6">{title}</h3>
        <ul className="space-y-4">
          {items.map((item, index) => (
              <li key={index} className="flex items-center text-gray-700">
            <span className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3 text-blue-600">
              {item.icon}
            </span>
                {item.text}
              </li>
          ))}
        </ul>
      </div>
  );
}