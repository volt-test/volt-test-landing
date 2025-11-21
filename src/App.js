// Volt-Test Landing Page with Modern Design & Animations
import React, { useState, useEffect, useRef } from 'react';
import logo from './img/volt-test-logo.png';
import { Github, Zap, Mail, CheckCircle2, ArrowRight, Activity, Layers, Code2, Cpu, BarChart3, Terminal } from 'lucide-react';
import posthog from 'posthog-js';
import { motion, useInView } from 'framer-motion';

const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY || '';
const PH_PROJECT_API_KEY = process.env.REACT_APP_PH_PROJECT_API_KEY || '';
const ENABLE_ANALYTICS = (process.env.REACT_APP_ENABLE_ANALYTICS || 'true').toLowerCase() !== 'false';

// Initialize PostHog
if (PH_PROJECT_API_KEY && ENABLE_ANALYTICS && !window.__POSTHOG_INIT) {
    posthog.init(PH_PROJECT_API_KEY, {
        api_host: 'https://eu.i.posthog.com',
        capture_pageview: true,
        autocapture: true,
    });
    window.__POSTHOG_INIT = true;
} else if (!PH_PROJECT_API_KEY && ENABLE_ANALYTICS) {
    // eslint-disable-next-line no-console
    console.warn('[PostHog] REACT_APP_PH_PROJECT_API_KEY missing – analytics disabled');
}

const SUBMIT_URL = 'https://formspree.io/f/mkgzewed';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-accent selection:text-white overflow-hidden">
            {/* Background Elements */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-brand-light blur-3xl opacity-60 mix-blend-multiply animate-blob"></div>
                <div className="absolute -top-[40%] -right-[20%] w-[70%] h-[70%] rounded-full bg-blue-100 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-[40%] left-[20%] w-[70%] h-[70%] rounded-full bg-indigo-100 blur-3xl opacity-60 mix-blend-multiply animate-blob animation-delay-4000"></div>
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={logo} alt="Volt-Test Logo" className="h-8 w-auto rounded-md" />
                            <span className="font-bold text-xl tracking-tight text-brand-dark">VoltTest</span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-slate-600 hover:text-brand transition-colors font-medium">Features</a>
                            <a href="#laravel" className="text-slate-600 hover:text-brand transition-colors font-medium">Laravel</a>
                            <a href="#how-it-works" className="text-slate-600 hover:text-brand transition-colors font-medium">How it Works</a>
                            <a href="https://php.volt-test.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-brand transition-colors font-medium">Docs</a>
                            <a
                                href="#early-access"
                                className="bg-brand text-white px-5 py-2 rounded-full font-medium hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40 transform hover:-translate-y-0.5"
                            >
                                Early Access
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="text-left"
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand text-sm font-semibold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                                </span>
                                v1.0 is now available
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                                Performance Testing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-accent">
                                    Reimagined.
                                </span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                                Write, run, and automate performance tests in PHP. Powered by a blazing-fast Go engine. No context-switching, just code.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <a
                                    href="#early-access"
                                    className="group bg-brand text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl shadow-brand/25 hover:bg-brand-dark transition-all flex items-center gap-2 hover:-translate-y-1"
                                >
                                    <Mail className="h-5 w-5" /> Join Early Access
                                    <ArrowRight className="h-4 w-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                </a>
                                <a
                                    href="https://github.com/volt-test/php-sdk"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:border-brand hover:text-brand transition-all flex items-center gap-2 hover:-translate-y-1"
                                >
                                    <Github className="h-5 w-5" /> Star on GitHub
                                </a>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-accent rounded-2xl blur opacity-20"></div>
                            <div className="relative rounded-2xl bg-[#0f172a] shadow-2xl overflow-hidden border border-slate-700/50">
                                <div className="flex items-center px-4 py-3 bg-slate-800/50 border-b border-slate-700/50 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-2 text-xs text-slate-400 font-mono">test.php</div>
                                </div>
                                <div className="p-6 overflow-x-auto">
                                    <pre className="font-mono text-sm leading-relaxed text-slate-300">
                                        <Typewriter
                                            tokens={[
                                                { text: '$volt', className: 'text-purple-400' },
                                                { text: ' = (', className: 'text-slate-400' },
                                                { text: 'new', className: 'text-blue-400' },
                                                { text: ' VoltTest', className: 'text-yellow-300' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: "'Load Test'", className: 'text-green-400' },
                                                { text: '))', className: 'text-slate-400' },
                                                { text: '\n    ->', className: 'text-slate-400' },
                                                { text: 'setVirtualUsers', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: '50', className: 'text-orange-400' },
                                                { text: '); ', className: 'text-slate-400' },
                                                { text: '// 50 users', className: 'text-slate-500' },
                                                { text: '\n\n', className: '' },
                                                { text: '$volt', className: 'text-purple-400' },
                                                { text: '->', className: 'text-slate-400' },
                                                { text: 'scenario', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: "'Checkout Flow'", className: 'text-green-400' },
                                                { text: ')', className: 'text-slate-400' },
                                                { text: '\n    ->', className: 'text-slate-400' },
                                                { text: 'step', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: "'Visit Home'", className: 'text-green-400' },
                                                { text: ')', className: 'text-slate-400' },
                                                { text: '\n    ->', className: 'text-blue-400' }, // Fixed missing get method call for better visual flow or just kept as is? User code had ->get.
                                                { text: 'get', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: "'https://api.app.com'", className: 'text-green-400' },
                                                { text: ')', className: 'text-slate-400' },
                                                { text: '\n    ->', className: 'text-slate-400' },
                                                { text: 'validateStatus', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: "'status'", className: 'text-green-400' },
                                                { text: ', ', className: 'text-slate-400' },
                                                { text: '200', className: 'text-orange-400' },
                                                { text: ');', className: 'text-slate-400' },
                                                { text: '\n\n', className: '' },
                                                { text: '$volt', className: 'text-purple-400' },
                                                { text: '->', className: 'text-slate-400' },
                                                { text: 'run', className: 'text-blue-400' },
                                                { text: '(', className: 'text-slate-400' },
                                                { text: 'true', className: 'text-orange-400' },
                                                { text: '); ', className: 'text-slate-400' },
                                                { text: '//Stream to console', className: 'text-slate-500' },
                                            ]}
                                            speed={20}
                                            delay={1000}
                                        />
                                    </pre>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="relative z-10 py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Everything you need to break your app.
                        </h2>
                        <p className="text-lg text-slate-600">
                            Built for developers who want robust, scalable, and maintainable performance tests.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Code2 className="h-6 w-6 text-white" />}
                            title="Native PHP SDK"
                            description="Write tests in the language you love. Seamless integration with Laravel, Symfony, and more."
                            color="bg-blue-500"
                        />
                        <FeatureCard
                            icon={<Zap className="h-6 w-6 text-white" />}
                            title="Blazing Fast"
                            description="Powered by a high-performance Go engine to simulate thousands of concurrent users efficiently."
                            color="bg-amber-500"
                        />
                        <FeatureCard
                            icon={<Layers className="h-6 w-6 text-white" />}
                            title="Scenario Management"
                            description="Define complex user flows with weights, think times, and custom data providers."
                            color="bg-purple-500"
                        />
                        <FeatureCard
                            icon={<Activity className="h-6 w-6 text-white" />}
                            title="Real-time Metrics"
                            description="Watch your tests run in real-time with detailed CLI output and aggregated reports."
                            color="bg-emerald-500"
                        />
                        <FeatureCard
                            icon={<Cpu className="h-6 w-6 text-white" />}
                            title="Resource Efficient"
                            description="Minimal memory footprint allows you to run massive loads from a single machine."
                            color="bg-rose-500"
                        />
                        <FeatureCard
                            icon={<BarChart3 className="h-6 w-6 text-white" />}
                            title="Detailed Reporting"
                            description="Get comprehensive insights into latency, throughput, and error rates."
                            color="bg-indigo-500"
                        />
                    </div>
                </div>
            </section>

            {/* Laravel Integration */}
            <section id="laravel" className="relative z-10 py-24 bg-slate-50 border-y border-slate-200/50 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-brand/20 rounded-3xl transform -rotate-2 scale-105 blur-sm"></div>
                            <div className="relative bg-[#0f172a] rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
                                <div className="flex items-center px-4 py-3 bg-slate-800/50 border-b border-slate-700/50 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <div className="ml-2 text-xs text-slate-400 font-mono">artisan</div>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="flex items-center gap-2 text-slate-400 mb-4">
                                        <span className="text-green-400">➜</span>
                                        <span>~/project</span>
                                        <span className="text-slate-500">git:(main)</span>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-slate-300">$ composer require </span>
                                        <span className="text-yellow-300">volt-test/laravel-performance-testing</span>
                                        <span className="text-slate-500"> --dev</span>
                                    </div>
                                    <div className="mb-4 text-slate-500">
                                        Installing volt-test/laravel-performance-testing (v1.0.0)...
                                    </div>
                                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                                        <span className="text-green-400">➜</span>
                                        <span>~/project</span>
                                    </div>
                                    <div>
                                        <span className="text-slate-300">$ php artisan </span>
                                        <span className="text-green-400">volttest:make</span>
                                        <span className="text-slate-300"> UserTest </span>
                                        <span className="text-blue-400">--routes</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-semibold mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                                </span>
                                Laravel Package Available
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                First-Class <span className="text-red-600">Laravel</span> Support
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Seamlessly integrate performance testing into your Laravel workflow. Our dedicated package brings the power of VoltTest directly to Artisan.
                            </p>

                            <div className="space-y-6 mb-8">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                                        <Zap className="h-5 w-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Automatic Route Discovery</h3>
                                        <p className="text-slate-600 text-sm">Automatically generate tests based on your defined routes.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                                        <Terminal className="h-5 w-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Artisan Commands</h3>
                                        <p className="text-slate-600 text-sm">Create, run, and manage tests using familiar CLI commands.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                                        <Layers className="h-5 w-5 text-red-500" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">CSRF Handling</h3>
                                        <p className="text-slate-600 text-sm">Built-in support for CSRF tokens and session management.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="https://github.com/volt-test/laravel-performance-testing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20"
                                >
                                    <Github className="h-5 w-5" /> View Package
                                </a>
                                <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 rounded-xl font-mono text-sm text-slate-600 border border-slate-200">
                                    composer require volt-test/laravel-performance-testing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="relative z-10 py-24 bg-slate-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                From 0 to 10k users in seconds.
                            </h2>
                            <div className="space-y-8">
                                <Step
                                    number="01"
                                    title="Install via Composer"
                                    description="Add the SDK to your project dev dependencies."
                                    tokens={[
                                        { text: 'composer ', className: 'text-slate-300' },
                                        { text: 'require ', className: 'text-slate-300' },
                                        { text: 'volt-test/php-sdk', className: 'text-yellow-300' },
                                        { text: ' --dev', className: 'text-slate-500' },
                                    ]}
                                />
                                <Step
                                    number="02"
                                    title="Define your Scenario"
                                    description="Describe user behavior using our fluent API."
                                    tokens={[
                                        { text: '$scenario', className: 'text-purple-400' },
                                        { text: '->', className: 'text-slate-400' },
                                        { text: 'get', className: 'text-blue-400' },
                                        { text: '(', className: 'text-slate-400' },
                                        { text: "'/api/products'", className: 'text-green-400' },
                                        { text: ')', className: 'text-slate-400' },
                                        { text: '->', className: 'text-slate-400' },
                                        { text: 'validateStatus', className: 'text-blue-400' },
                                        { text: '(', className: 'text-slate-400' },
                                        { text: "'status'", className: 'text-green-400' },
                                        { text: ', ', className: 'text-slate-400' },
                                        { text: '200', className: 'text-orange-400' },
                                        { text: ');', className: 'text-slate-400' },
                                    ]}
                                />
                                <Step
                                    number="03"
                                    title="Run & Analyze"
                                    description="Execute the test and get instant feedback."
                                    tokens={[
                                        { text: 'php ', className: 'text-slate-300' },
                                        { text: 'test.php', className: 'text-yellow-300' },
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-light to-white rounded-3xl transform rotate-3 scale-105"></div>
                            <div className="relative bg-[#0f172a] p-6 rounded-3xl shadow-2xl border border-slate-700/50 font-mono text-sm leading-relaxed overflow-hidden">
                                <div className="flex items-center justify-between mb-6 border-b border-slate-700/50 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs font-mono text-slate-400">test-results.log</div>
                                </div>

                                <div className="space-y-1 text-slate-300">
                                    <div className="flex justify-between items-center">
                                        <span>Preparing Test... 100%</span>
                                        <span className="text-slate-500 text-xs">(4/4, 29215 it/s)</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-6">
                                        <span>Running test (VUs) 100%</span>
                                        <span className="text-slate-500 text-xs">(50/50, 276 it/s)</span>
                                    </div>

                                    <div className="text-slate-500 mb-1">Test Metrics Summary:</div>
                                    <div className="text-slate-700 mb-3">===================</div>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1 mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Duration:</span>
                                            <span className="text-slate-200">181.83ms</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Total Reqs:</span>
                                            <span className="text-yellow-400">50</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Success Rate:</span>
                                            <span className="text-emerald-400">100.00%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Req/sec:</span>
                                            <span className="text-slate-200">275.00</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Failed:</span>
                                            <span className="text-slate-200">0</span>
                                        </div>
                                    </div>

                                    <div className="text-slate-500 mb-1">Response Time:</div>
                                    <div className="text-slate-700 mb-3">------------</div>

                                    <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Min:</span>
                                            <span className="text-slate-200">6.23ms</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Max:</span>
                                            <span className="text-slate-200">178.25ms</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Avg:</span>
                                            <span className="text-slate-200">90.06ms</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">P95:</span>
                                            <span className="text-slate-200">171.35ms</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">P99:</span>
                                            <span className="text-slate-200">178.25ms</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Early Access / CTA */}
            <section id="early-access" className="relative z-10 py-24">
                <div className="absolute inset-0 bg-brand-dark skew-y-3 transform origin-bottom-right translate-y-20 -z-10"></div>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand to-brand-accent"></div>

                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Join the Volt-Test Cloud
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            We're building a distributed cloud platform to run massive scale tests from 20+ regions. Get early access before we launch.
                        </p>

                        <WaitlistForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="Volt-Test Logo" className="h-8 w-auto opacity-80 grayscale" />
                        <span className="font-semibold text-slate-200">VoltTest</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium">
                        <a href="https://php.volt-test.com" className="hover:text-white transition-colors">Documentation</a>
                        <a href="https://github.com/volt-test/php-sdk" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://x.com/vt_developers" className="hover:text-white transition-colors">Twitter</a>
                        <a href="https://discord.com/invite/BvQD6bptaD" className="hover:text-white transition-colors">Discord</a>
                    </div>
                    <div className="text-xs">
                        &copy; {new Date().getFullYear()} VoltTest.
                    </div>
                </div>
            </footer>
        </main>
    );
}

function FeatureCard({ icon, title, description, color }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-brand/20 transition-all"
        >
            <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
}

function Step({ number, title, description, code, tokens }) {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-brand font-bold flex items-center justify-center text-lg border border-blue-100">
                {number}
            </div>
            <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 mb-3">{description}</p>
                <div className="bg-slate-900 text-slate-300 text-sm font-mono p-3 rounded-lg inline-block border border-slate-700 min-h-[3rem]">
                    <Typewriter text={code} tokens={tokens} speed={20} delay={500} />
                </div>
            </div>
        </div>
    );
}

function Typewriter({ text, tokens, speed = 30, delay = 0 }) {
    const [displayedContent, setDisplayedContent] = useState(null);
    const [started, setStarted] = useState(false);

    // Intersection Observer to start typing when in view
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                setStarted(true);
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [isInView, delay]);

    useEffect(() => {
        if (!started) return;

        // Calculate total length based on text or tokens
        const fullText = tokens ? tokens.map(t => t.text).join('') : text;
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentIndex++;

                if (tokens) {
                    // Logic for tokens
                    let charCount = 0;
                    const currentTokens = [];

                    for (const token of tokens) {
                        if (charCount + token.text.length <= currentIndex) {
                            // Fully typed token
                            currentTokens.push(<span key={charCount} className={token.className}>{token.text}</span>);
                            charCount += token.text.length;
                        } else if (charCount < currentIndex) {
                            // Partially typed token
                            const slice = token.text.slice(0, currentIndex - charCount);
                            currentTokens.push(<span key={charCount} className={token.className}>{slice}</span>);
                            charCount += slice.length;
                            break; // Stop here
                        } else {
                            // Not yet reached
                            break;
                        }
                    }
                    setDisplayedContent(currentTokens);
                } else {
                    // Logic for plain text
                    setDisplayedContent(fullText.slice(0, currentIndex));
                }
            } else {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [started, text, tokens, speed]);

    return (
        <span ref={ref}>
            {displayedContent}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-brand ml-1 align-middle"
            />
        </span>
    );
}

/** Early Access Waitlist (Formspree) */
function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [hp, setHp] = useState(''); // honeypot

    // Turnstile state
    const [token, setToken] = useState('');
    const widgetRef = useRef(null);

    useEffect(() => {
        const t = window.turnstile;
        if (!TURNSTILE_SITE_KEY) return; // no site key configured
        if (!t || !widgetRef.current) return;
        const id = t.render(widgetRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            theme: 'light',
            callback: (tok) => setToken(tok),
            'expired-callback': () => setToken(''),
            'error-callback': () => setToken(''),
        });
        return () => { try { window.turnstile?.remove(id); } catch { } };
    }, []);

    const resetTurnstile = () => {
        try { window.turnstile?.reset(widgetRef.current); } catch { }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;
        if (hp) return; // bot
        if (!email) { setStatus('error'); return; }
        if (TURNSTILE_SITE_KEY && !token) { setStatus('error'); return; }

        setStatus('loading');
        try {
            const res = await fetch(SUBMIT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    email,
                    company,
                    source: 'landing-page',
                    turnstile_token: token,
                })
            });
            if (!res.ok) {
                setStatus('error');
                resetTurnstile();
                return;
            }
            // capture analytics BEFORE clearing state (only non-PII details)
            try {
                if (PH_PROJECT_API_KEY && ENABLE_ANALYTICS && posthog?.capture) {
                    const domain = (email.split('@')[1] || '').toLowerCase();
                    posthog.capture('waitlist_submitted', {
                        email_domain: domain || null,
                        has_company: !!company,
                    });
                }
            } catch { }
            setStatus('success');
            setEmail('');
            setCompany('');
            resetTurnstile();
            setToken('');
        } catch (err) {
            // Network errors or other exceptions
            setStatus('error');
            resetTurnstile();
        }
    };

    if (status === 'success') {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center text-center py-8"
            >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
                <p className="text-slate-600 mb-6">We'll reach out as soon as Volt-Test Cloud early access opens.</p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="text-sm text-brand font-medium hover:text-brand-dark underline"
                >
                    Register another email
                </button>
            </motion.div>
        );
    }

    const disableSubmit = status === 'loading' || !email || (TURNSTILE_SITE_KEY && !token);

    return (
        <form onSubmit={onSubmit} className="max-w-md mx-auto space-y-4 text-left" noValidate>
            {/* Honeypot */}
            <input
                type="text"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
            />

            <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Work Email</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-1">Company (Optional)</label>
                <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc."
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                />
            </div>

            <div className="pt-2">
                {TURNSTILE_SITE_KEY ? (
                    <div ref={widgetRef} className="cf-turnstile" />
                ) : (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1 inline-block">
                        Missing REACT_APP_TURNSTILE_SITE_KEY
                    </p>
                )}
            </div>

            {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
                    Something went wrong. Please check your connection and try again.
                </motion.p>
            )}

            <button
                type="submit"
                disabled={disableSubmit}
                className={`w-full flex justify-center items-center gap-2 font-bold rounded-lg px-6 py-4 transition-all text-white shadow-lg ${disableSubmit ? 'bg-slate-300 cursor-not-allowed shadow-none' : 'bg-brand hover:bg-brand-dark hover:shadow-brand/30 hover:-translate-y-0.5'}`}
            >
                {status === 'loading' ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    'Join Early Access'
                )}
            </button>
            <p className="text-[10px] text-slate-400 text-center mt-4">
                Protected by Cloudflare Turnstile. We respect your privacy.
            </p>
        </form>
    );
}
