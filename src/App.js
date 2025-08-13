// Volt-Test Landing Page with Blue & White Theme + Early Access Waitlist (Formspree)
// - Adds "Join Early Access" CTA in hero
// - New Early Access section with email capture
// - Source tagging and honeypot
// - Accessible labels, keyboard-friendly, and responsive

import React, { useState, useEffect, useRef } from 'react';
import logo from './img/volt-test-logo.png';
import { Github, BookOpen, Zap, Mail, CheckCircle2 } from 'lucide-react';


const SUBMIT_URL = 'https://formspree.io/f/mkgzewed'; // Vercel

export default function LandingPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-blue-900 font-sans">
            {/* Hero */}
            <section className="pt-24 pb-16 px-4 text-center">
                <div className="flex justify-center mb-4">
                    <img src={logo} alt="Volt-Test Logo" className="h-14 rounded-lg" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    VoltTest for Developers<br />
                    <span className="text-blue-500">Performance, Stress, Load Testing <br />Has been Recharged.</span>
                </h1>
                <p className="text-lg md:text-2xl text-blue-700 max-w-2xl mx-auto mb-8">
                    Write, run, and automate performance tests in PHP. <br /> Powered by a blazing-fast Go engine.<br/> No context-switching, just code.
                </p>
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    <a
                        href="#early-access"
                        className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow hover:bg-blue-500 transition flex items-center gap-2"
                        aria-label="Join Volt-Test Cloud Early Access"
                    >
                        <Mail className="h-5 w-5" /> Join Early Access
                    </a>
                    <a href="https://php.volt-test.com/docs/getting-started" target="_blank" rel="noopener noreferrer"
                       className="bg-blue-500 text-white px-6 py-3 rounded-xl text-lg font-bold shadow hover:bg-blue-400 transition">
                        Get Started
                    </a>
                    <a href="https://github.com/volt-test/php-sdk" target="_blank" rel="noopener noreferrer"
                       className="border border-blue-400 text-blue-500 px-6 py-3 rounded-xl text-lg font-bold hover:bg-blue-500 hover:text-white transition flex items-center gap-2">
                        <Github className="h-5 w-5" /> GitHub
                    </a>
                </div>
                <div className="rounded-2xl bg-white border border-blue-100 shadow-xl w-full max-w-2xl mx-auto p-6 mt-4">
                    <pre className="text-left text-sm md:text-base text-blue-800 bg-blue-50 rounded-xl p-4 overflow-x-auto">
{`$voltTest = (new VoltTest('Name of Your test'))
->setVirtualUsers(10);
$scenario = $voltTest->scenario('Basic Scenario');
$scenario->step('Register')
    ->get('https://your-app.test')
    ->header('Content-Type', 'text/html');
$result = $voltTest->run(true);`}
                    </pre>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-blue-50">
                <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-10">
                    <Feature
                        icon={<Zap className="h-8 w-8 text-blue-500" />}
                        title="Native PHP SDK"
                        description="Write tests in PHP. No extra scripts. Works with Laravel, Symfony, any PHP app."
                    />
                    <Feature
                        icon={<BookOpen className="h-8 w-8 text-blue-500" />}
                        title="Easy & Fast"
                        description="Composer install, write a test, and go! Instant results—locally or in CI."
                    />
                    <Feature
                        icon={<Github className="h-8 w-8 text-blue-500" />}
                        title="Open Source"
                        description="MIT licensed. Built for the community. Integrates easily into your workflow."
                    />
                </div>
            </section>

            {/* Advanced Features */}
            <section className="py-16 bg-white border-t border-blue-100">
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">
                        Advanced Features
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureItem
                            title="Multiple Scenario Support with Weights"
                            description="Run different test scenarios in a single test suite, each with custom weight distributions to simulate real-world traffic patterns."
                        />
                        <FeatureItem
                            title="Data Provider for Virtual Users"
                            description="Assign dynamic, realistic data to each virtual user for more authentic and robust test simulations."
                        />
                        <FeatureItem
                            title="Extract Data from Requests"
                            description="Capture data from responses and reuse it in subsequent requests for chained and dependent testing."
                        />
                        <FeatureItem
                            title="Request Customization & Response Validation"
                            description="Modify headers, payloads, and easily assert results for flexible, end-to-end testing."
                        />
                        <FeatureItem
                            title="Think Time & Ramp-Up Configuration"
                            description="Simulate real-user behavior by controlling delays between requests and gradual load increases."
                        />
                        <FeatureItem
                            title="Debug Requests"
                            description="Inspect and troubleshoot each request and response with built-in debugging tools."
                        />
                    </div>
                </div>
            </section>

            {/* Getting Started */}
            <section className="py-20 px-4 text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Start?</h2>
                <p className="text-lg text-blue-700 mb-8">
                    Install, write your first test, and run it. That's all.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-left shadow-xl mb-4">
                    <p className="mb-2 font-semibold text-blue-500">1. Install via Composer:</p>
                    <pre className="mb-4 text-blue-800 bg-white p-2 rounded overflow-x-auto">{`composer require volt-test/php-sdk --dev`}</pre>
                    <p className="mb-2 font-semibold text-blue-500">2. Write a test: test.php</p>
                    <pre className="mb-4 text-blue-800 bg-white p-2 rounded overflow-x-auto">{`$voltTest = (new VoltTest('Name of Your test'))
->setVirtualUsers(10);
$scenario = $voltTest->scenario('Basic Scenario');
$scenario->step('Register')
    ->get('https://your-app.test')
    ->header('Content-Type', 'text/html');
$result = $voltTest->run(true);`}</pre>
                    <p className="mb-2 font-semibold text-blue-500">3. Run your test suite:</p>
                    <pre className="text-blue-800 bg-white p-2 rounded overflow-x-auto">{`php test.php`}</pre>
                </div>
                <a
                    href="https://php.volt-test.com/docs/getting-started"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 bg-blue-500 text-white px-8 py-3 rounded-xl text-lg font-bold shadow hover:bg-blue-400 transition"
                >
                    Read Quickstart
                </a>
            </section>

            {/* Early Access Waitlist */}
            <section id="early-access" className="py-20 bg-blue-50 border-t border-blue-100">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-4">
                        Join Volt-Test Cloud Early Access
                    </h2>
                    <p className="text-blue-700 text-center mb-8">
                        Be first to run massive, distributed tests in the cloud. Limited seats for early users.
                    </p>
                    <div className="bg-white border border-blue-100 rounded-2xl shadow-xl p-6 md:p-8">
                        <WaitlistForm />
                        <p className="text-xs text-blue-400 mt-4">
                            We’ll only email you about early access and product updates. Unsubscribe anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Community & Footer */}
            <footer className="py-10 bg-white text-center border-t border-blue-100">
                <div className="flex justify-center gap-6 mb-4 flex-wrap">
                    <a href="https://php.volt-test.com" target="_blank" className="hover:underline text-blue-500" rel="noreferrer">Docs</a>
                    <a href="https://github.com/volt-test/php-sdk" target="_blank" className="hover:underline text-blue-500" rel="noreferrer">GitHub</a>
                    <a href="https://x.com/vt_developers" target="_blank" className="hover:underline text-blue-500" rel="noreferrer">X(twitter)</a>
                    <a href="https://discord.com/invite/BvQD6bptaD" target="_blank" className="hover:underline text-blue-500" rel="noreferrer">Discord</a>
                </div>
                <p className="text-sm text-blue-400">
                    &copy; {new Date().getFullYear()} VoltTest. Built by developers for developers.
                </p>
            </footer>
        </main>
    );
}

function Feature({ icon, title, description }) {
    return (
        <div className="bg-white rounded-2xl border border-blue-100 p-6 text-center shadow-xl">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-bold mb-2 text-blue-800">{title}</h3>
            <p className="text-blue-700">{description}</p>
        </div>
    );
}

function FeatureItem({ title, description }) {
    return (
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">{title}</h3>
            <p className="text-blue-900 text-base">{description}</p>
        </div>
    );
}

/** Early Access Waitlist (Formspree) */
function WaitlistForm() {
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [hp, setHp] = useState(''); // honeypot

    // --- Turnstile bits ---
    const [token, setToken] = useState('');
    const widgetRef = useRef(null);

    useEffect(() => {
        // Render widget when script is ready
        const t = window.turnstile;
        if (!t || !widgetRef.current) return;
        const id = t.render(widgetRef.current, {
            sitekey: "0x4AAAAAABrXUaAkT2Oipilm", // put your site key in .env
            theme: 'auto',
            callback: (tok) => setToken(tok),
            'expired-callback': () => setToken(''),
            'error-callback': () => setToken(''),
        });
        return () => {
            try { window.turnstile?.remove(id); } catch {}
        };
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (hp) return; // bot
        if (!token) { setStatus('no-captcha'); return; } // no captcha

        setStatus('loading');
        try {
            const res = await fetch(SUBMIT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    company,
                    source: 'volt-test.com',
                    list: 'early-access',
                    token,
                }),
            });

            if (res.ok) {
                setStatus('success'); // success
                setEmail('');
                setCompany('');
                setToken('');
                // Reset the widget so it can be used again
                try { window.turnstile?.reset(widgetRef.current); } catch {}
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <form onSubmit={onSubmit} className="grid gap-3">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-blue-200 bg-blue-50 focus:bg-white focus:border-blue-400 px-4 py-3 outline-none"
                autoComplete="email"
            />

            <label htmlFor="company" className="sr-only">Company (optional)</label>
            <input
                id="company"
                type="text"
                placeholder="Company / Team (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-xl border border-blue-200 bg-blue-50 focus:bg-white focus:border-blue-400 px-4 py-3 outline-none"
                autoComplete="organization"
            />

            {/* Honeypot field */}
            <input
                type="text"
                name="_gotcha"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
            />

            {/* Turnstile widget */}
            <div ref={widgetRef} className="cf-turnstile my-2" />

            <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-bold shadow hover:bg-blue-500 transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
                {status === 'loading' ? 'Joining…' : <>Join Early Access <Mail className="h-5 w-5" /></>}
            </button>

            {status === 'success' && (
                <div className="flex items-start gap-2 text-green-700 bg-green-50 border border-green-200 rounded-xl px-3 py-2 mt-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" />
                    <p className="text-sm">Thanks! Please check your inbox to confirm your spot.</p>
                </div>
            )}
            {status === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mt-2">
                    Something went wrong. Please try again.
                </p>
            )}
            {status === 'no-captcha' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mt-2">
                    Please complete the CAPTCHA to join the waitlist.
                </p>
            )}
        </form>
    );
}