// Volt-Test Landing Page with Blue & White Theme
import logo from './img/volt-test-logo.png';
import { Github, BookOpen, Zap } from 'lucide-react';

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
                    Write, run, and automate performance tests in PHP with ease. Powered by a blazing-fast Go engine. No context-switching, just code.
                </p>
                <div className="flex justify-center gap-4 mb-8">
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

            {/* Community & Footer */}
            <footer className="py-10 bg-white text-center border-t border-blue-100">
                <div className="flex justify-center gap-6 mb-4">
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
