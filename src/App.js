import React from 'react';
import { Github, Code, Activity, Zap, Server, Shield } from 'lucide-react';
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
                            <a href="https://php.volt-test.com" className="text-gray-300 hover:text-white">PHP SDK Docs</a>
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
                                Star on GitHub
                            </a>
                            <a href="https://php.volt-test.com" className="flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors border border-gray-700">
                                Read PHP SDK Docs
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHP SDK Key Features */}
            <div className="py-20 bg-gray-800/50" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Activity className="w-6 h-6 text-blue-400" />}
                            title="Performance Testing"
                            description="Concurrent virtual user simulation and real-time metrics collection."
                            gradient="from-blue-500/20 to-blue-600/20"
                        />
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-yellow-400" />}
                            title="HTTP(S) Testing"
                            description="All standard HTTP methods, response validation, and session management."
                            gradient="from-yellow-500/20 to-yellow-600/20"
                        />
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-green-400" />}
                            title="Data Management"
                            description="CSV data source support and dynamic data extraction and reuse."
                            gradient="from-green-500/20 to-green-600/20"
                        />
                        <FeatureCard
                            icon={<Code className="w-6 h-6 text-red-400" />}
                            title="Result Analysis"
                            description="Success/failure rates and response time statistics (p90, p95, p99)."
                            gradient="from-red-500/20 to-red-600/20"
                        />
                        <FeatureCard
                            icon={<Server className="w-6 h-6 text-indigo-400" />}
                            title="Scalable Execution (Soon)"
                            description="Distributed test execution for high scalability."
                            gradient="from-indigo-500/20 to-indigo-600/20"
                        />
                        <FeatureCard
                            icon={<Shield className="w-6 h-6 text-teal-400" />}
                            title="Security Compliance"
                            description="Built-in security measures for safe load testing."
                            gradient="from-teal-500/20 to-teal-600/20"
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="py-8 bg-gray-900 text-center text-gray-400">
                <p>&copy; 2025 Volt-Test. All rights reserved.</p>
            </footer>
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
