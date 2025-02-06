import React from 'react';
import { Github, Rocket, Code, Activity, Mail, Star, Zap, ChevronRight } from 'lucide-react';
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
                            <a href="https://php.volt-test.com/docs" className="text-gray-300 hover:text-white">PHP SDK Docs</a>
                            <a href="https://github.com/volt-test/php-sdk" className="flex items-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors">
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
                            PHP SDK Now Available!
                        </div>
                        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                            Scale Your Performance<br />Testing With Confidence
                        </h1>
                        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
                            Now with a PHP SDK! Integrate Volt-Test seamlessly into your PHP applications.
                        </p>
                        <div className="flex justify-center space-x-4">
                            <a href="https://github.com/volt-test/php-sdk" className="flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all">
                                <Star className="w-5 h-5 mr-2" />
                                Star on GitHub
                            </a>
                            <a href="https://php.volt-test.com/docs" className="flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                                <Mail className="w-5 h-5 mr-2" />
                                Read PHP SDK Docs
                            </a>
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
