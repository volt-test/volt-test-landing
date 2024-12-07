import React from 'react';
import { Github, Rocket, Code, Activity, Mail, Star, GitBranch, Zap, ChevronRight } from 'lucide-react';
import LogoSmall from './img/logo-180-60.svg';
import LogoLarge from './img/logo-400.svg';


export default function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
            {/* Navigation */}
            <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center space-x-3">
                            <img
                                src={LogoSmall}
                                alt="Volt-Test Logo"
                                className="h-8"
                            />
                        </div>
                        <div className="flex items-center space-x-8">
                            <a href="#features" className="text-gray-300 hover:text-white">Features</a>
                            <a href="#progress" className="text-gray-300 hover:text-white">Progress</a>
                            <a href="https://github.com" className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                                <Github className="w-4 h-4 mr-2" />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <img
                            src={LogoLarge}
                            alt="Volt-Test Logo Large"
                            className="mx-auto mb-12 w-64"
                        />
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-8">
                            <Zap className="w-4 h-4 mr-2" />
                            High-Performance Software Testing Engine
                        </div>
                        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                            Scale Your Performance<br />Testing With Confidence
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
                            From local development to enterprise deployments, Volt-Test delivers scalable, reliable performance testing that grows with your needs.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <button className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                                <Star className="w-5 h-5 mr-2" />
                                Star on GitHub
                            </button>
                            <button className="flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                                <Mail className="w-5 h-5 mr-2" />
                                Join Beta
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="py-20 bg-gray-800/50" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Activity className="w-6 h-6 text-blue-400" />}
                            title="Scale Infinitely"
                            description="From 1K to 10M concurrent users, our architecture grows with your needs"
                            gradient="from-blue-500/20 to-blue-600/20"
                        />
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-yellow-400" />}
                            title="Developer First"
                            description="Built for developers with clean APIs, comprehensive docs, and SDK support"
                            gradient="from-yellow-500/20 to-yellow-600/20"
                        />
                        <FeatureCard
                            icon={<Rocket className="w-6 h-6 text-blue-400" />}
                            title="Real-time Analytics"
                            description="Get instant insights with comprehensive metrics and analysis"
                            gradient="from-blue-500/20 to-blue-600/20"
                        />
                    </div>
                </div>
            </div>

            {/* Progress Section */}
            <div className="py-20" id="progress">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white text-center mb-12">Development Progress</h2>
                    <div className="space-y-8">
                        <ProgressBar
                            title="Core Engine"
                            percentage={60}
                            description="Load generation and metrics collection implemented"
                        />
                        <ProgressBar
                            title="Cloud Infrastructure"
                            percentage={30}
                            description="Architecture design and implementation in progress"
                        />
                        <ProgressBar
                            title="SDK Development"
                            percentage={20}
                            description="Initial API design and prototyping"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-gradient-to-r from-blue-500/20 to-yellow-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Testing?</h2>
                    <p className="text-xl text-gray-300 mb-8">Join our beta program and be among the first to experience next-generation performance testing.</p>
                    <button className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Get Early Access
                        <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, description, gradient }) {
    return (
        <div className={`p-8 rounded-xl bg-gradient-to-br ${gradient} border border-gray-700/50 hover:border-gray-600/50 transition-all`}>
            <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}

function ProgressBar({ title, percentage, description }) {
    return (
        <div>
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-white">{title}</span>
                <span className="text-blue-400 font-medium">{percentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                    className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                />
            </div>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
}