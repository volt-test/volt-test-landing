import React from 'react';
import './App.css';
import { useState } from 'react';
import { Github, Star, Zap, CodeIcon, Activity, Rocket, Mail } from 'lucide-react';

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-8 h-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Volt-Test</span>
              </div>
              <nav className="flex space-x-6">
                <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
                <a href="#roadmap" className="text-gray-600 hover:text-gray-900">Roadmap</a>
                <a href="https://github.com" className="flex items-center text-gray-600 hover:text-gray-900">
                  <Github className="w-5 h-5 mr-1" />
                  GitHub
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Hero */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🚀 In Development
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The Next Generation Performance Testing Engine
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Building a modern, open-source load testing solution that scales from local development to enterprise deployments. Coming soon.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
                <Github className="w-5 h-5 mr-2" />
                Star on GitHub
              </button>
              <button className="flex items-center border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50">
                <Mail className="w-5 h-5 mr-2" />
                Join Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <VisionCard
                icon={<Rocket className="w-8 h-8 text-blue-600" />}
                title="Scalable Architecture"
                description="From local development to cloud deployment, supporting 1K to 10M concurrent users"
            />
            <VisionCard
                icon={<CodeIcon className="w-8 h-8 text-blue-600" />}
                title="Developer First"
                description="Built by developers, for developers. Clean APIs, great docs, and extensive SDK support"
            />
            <VisionCard
                icon={<Activity className="w-8 h-8 text-blue-600" />}
                title="Real-time Analytics"
                description="Comprehensive metrics and insights for your performance testing needs"
            />
          </div>
        </div>

        {/* Development Progress */}
        <div className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Development Progress</h2>
            <div className="max-w-3xl mx-auto">
              <ProgressItem
                  title="Core Engine"
                  progress={60}
                  details="Basic load generation and metrics collection implemented"
              />
              <ProgressItem
                  title="Cloud Infrastructure"
                  progress={30}
                  details="Architecture design completed, implementation in progress"
              />
              <ProgressItem
                  title="SDK Development"
                  progress={20}
                  details="Initial API design phase"
              />
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">For Developers</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-blue-600 mr-2" />
                  Star and watch the repository
                </li>
                <li className="flex items-center">
                  <CodeIcon className="w-5 h-5 text-blue-600 mr-2" />
                  Contribute to the codebase
                </li>
                <li className="flex items-center">
                  <Github className="w-5 h-5 text-blue-600 mr-2" />
                  Submit feature requests
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Early Access</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-2" />
                  Join the waitlist
                </li>
                <li className="flex items-center">
                  <Activity className="w-5 h-5 text-blue-600 mr-2" />
                  Test beta versions
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-blue-600 mr-2" />
                  Provide feedback
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

function VisionCard({ icon, title, description }) {
  return (
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
  );
}

function ProgressItem({ title, progress, details }) {
  return (
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{title}</span>
          <span className="text-gray-600">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{details}</p>
      </div>
  );
}