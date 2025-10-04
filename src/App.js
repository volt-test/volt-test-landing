// Volt-Test Landing Page with Blue & White Theme + Early Access Waitlist (Formspree)
// - Adds "Join Early Access" CTA in hero
// - New Early Access section with email capture
// - Source tagging and honeypot
// - Accessible labels, keyboard-friendly, and responsive

import React, { useState, useEffect, useRef } from 'react';
import logo from './img/volt-test-logo.png';
import { Github, BookOpen, Zap, Mail, CheckCircle2 } from 'lucide-react';
import posthog from 'posthog-js';


const TURNSTILE_SITE_KEY = process.env.REACT_APP_TURNSTILE_SITE_KEY || '';
const PH_PROJECT_API_KEY = process.env.REACT_APP_PH_PROJECT_API_KEY || '';
const ENABLE_ANALYTICS = (process.env.REACT_APP_ENABLE_ANALYTICS || 'true').toLowerCase() !== 'false';

// Initialize PostHog only once (guards against double-init in dev HMR)
if (PH_PROJECT_API_KEY && ENABLE_ANALYTICS && !window.__POSTHOG_INIT) {
    posthog.init(PH_PROJECT_API_KEY, {
        api_host: 'https://eu.i.posthog.com',
        capture_pageview: true,
        autocapture: true,
    });
    window.__POSTHOG_INIT = true; // flag
} else if (!PH_PROJECT_API_KEY && ENABLE_ANALYTICS) {
    // eslint-disable-next-line no-console
    console.warn('[PostHog] REACT_APP_PH_PROJECT_API_KEY missing – analytics disabled');
}

const SUBMIT_URL = 'https://formspree.io/f/mkgzewed';

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

    // Turnstile state
    const [token, setToken] = useState('');
    const widgetRef = useRef(null);

    useEffect(() => {
        const t = window.turnstile;
        if (!TURNSTILE_SITE_KEY) return; // no site key configured
        if (!t || !widgetRef.current) return;
        const id = t.render(widgetRef.current, {
            sitekey: TURNSTILE_SITE_KEY,
            theme: 'auto',
            callback: (tok) => setToken(tok),
            'expired-callback': () => setToken(''),
            'error-callback': () => setToken(''),
        });
        return () => { try { window.turnstile?.remove(id); } catch {} };
    }, []);

    const resetTurnstile = () => {
        try { window.turnstile?.reset(widgetRef.current); } catch {}
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
            if (!res.ok) throw new Error('Request failed');
            // capture analytics BEFORE clearing state (only non-PII details)
            try {
                if (PH_PROJECT_API_KEY && ENABLE_ANALYTICS && posthog?.capture) {
                    const domain = (email.split('@')[1] || '').toLowerCase();
                    posthog.capture('waitlist_submitted', {
                        email_domain: domain || null,
                        has_company: !!company,
                    });
                }
            } catch {}
            setStatus('success');
            setEmail('');
            setCompany('');
            resetTurnstile();
            setToken('');
        } catch (err) {
            setStatus('error');
            resetTurnstile();
        }
    };

    if (status === 'success') {
        return (
            <div className="flex flex-col items-center text-center">
                <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
                <p className="text-blue-800 font-semibold mb-1">You're on the list!</p>
                <p className="text-sm text-blue-600">We'll reach out as soon as Volt-Test Cloud early access opens.</p>
                <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-blue-500 underline hover:text-blue-600"
                >Add another email</button>
            </div>
        );
    }

    const disableSubmit = status === 'loading' || !email || (TURNSTILE_SITE_KEY && !token);

    return (
        <form onSubmit={onSubmit} className="space-y-4" noValidate>
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
                <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">Email *</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full border border-blue-200 rounded-lg px-4 py-2.5 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-blue-900 placeholder-blue-400"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-blue-700 mb-1">Company / Project (optional)</label>
                <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Acme Inc"
                    className="w-full border border-blue-200 rounded-lg px-4 py-2.5 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-blue-900 placeholder-blue-400"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-blue-700 mb-1">Security Check</label>
                {TURNSTILE_SITE_KEY ? (
                    <div ref={widgetRef} className="cf-turnstile" />
                ) : (
                    <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded px-2 py-1 inline-block">
                        Missing REACT_APP_TURNSTILE_SITE_KEY env variable.
                    </p>
                )}
            </div>

            {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please check fields and try again.</p>
            )}

            <div>
                <button
                    type="submit"
                    disabled={disableSubmit}
                    className={`w-full flex justify-center items-center gap-2 font-semibold rounded-lg px-6 py-3 transition text-white shadow-md ${disableSubmit ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'}`}
                >
                    {status === 'loading' ? 'Submitting…' : 'Join Early Access'}
                </button>
            </div>
            <p className="text-[10px] text-blue-400 text-center">Protected by Cloudflare Turnstile.</p>
        </form>
    );
}
