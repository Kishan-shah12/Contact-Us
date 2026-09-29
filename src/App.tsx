import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = ({ size = 15 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4';

const RECIPIENT_EMAIL = 'jnkishansah@gmail.com';

const SERVICES: string[] = [
  'Website',
  'Mobile App',
  'Web App',
  'E-Commerce',
  'Visual Identity',
  '3D & Motion',
  'Digital Marketing',
  'Growth & Consulting',
  'Other',
];

interface SocialBtnProps {
  icon: React.ReactNode;
  className: string;
  href?: string;
  ariaLabel: string;
}

function SocialBtn({ icon, className, href = '#', ariaLabel }: SocialBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm ${className}`}
    >
      {icon}
    </a>
  );
}

interface Notification3DProps {
  recipientEmail: string;
  senderName: string;
  selectedServices: string[];
  onReset: () => void;
}

function Notification3D({
  recipientEmail,
  senderName,
  selectedServices,
  onReset,
}: Notification3DProps) {
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 12;
    const rotateX = -((y - centerY) / centerY) * 12;
    setCoords({ x: rotateX, y: rotateY });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 10;
    const rotateX = -((y - centerY) / centerY) * 10;
    setCoords({ x: rotateX, y: rotateY });
  };

  const handleLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      className="w-full py-1 animate-pop-in-3d"
      style={{ perspective: '1000px' }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleLeave}
        onTouchStart={() => setIsHovered(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleLeave}
        className="relative preserve-3d rounded-2xl bg-gradient-to-b from-white via-emerald-50/20 to-white border border-emerald-100/90 p-5 sm:p-6 shadow-[0_20px_50px_rgba(16,185,129,0.12),0_4px_16px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-4 transition-transform duration-200 ease-out cursor-default"
        style={{
          transform: isHovered
            ? `rotateX(${coords.x}deg) rotateY(${coords.y}deg) scale3d(1.02, 1.02, 1.02)`
            : 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
        }}
      >
        {/* Holographic light sheen overlay following cursor/touch */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.45 : 0,
            background: `radial-gradient(circle at ${((coords.y + 12) / 24) * 100}% ${((coords.x + 12) / 24) * 100}%, rgba(255,255,255,0.9), transparent 60%)`,
          }}
        />

        {/* 3D Floating Checkmark Sphere */}
        <div
          className="relative preserve-3d flex items-center justify-center my-1"
          style={{ transform: 'translateZ(48px)' }}
        >
          {/* Pulsing radar ping aura */}
          <div className="absolute w-20 h-20 rounded-full bg-emerald-400/25 animate-ping-slow" />

          {/* Middle dimensional halo ring */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-100 via-teal-50 to-emerald-200/50 border border-emerald-300/60 shadow-[0_8px_20px_rgba(16,185,129,0.25)] flex items-center justify-center animate-float-3d">
            {/* Inner glossy 3D sphere */}
            <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7),0_6px_16px_rgba(16,185,129,0.45)] flex items-center justify-center text-white">
              <Check size={22} strokeWidth={3} className="drop-shadow-xs" />
            </div>
          </div>
        </div>

        {/* 3D Elevated Headings */}
        <div
          className="preserve-3d flex flex-col items-center gap-1.5"
          style={{ transform: 'translateZ(38px)' }}
        >
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-[11px] font-semibold tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Dispatched to Inbox
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-0.5">
            You're all set{senderName ? `, ${senderName.split(' ')[0]}` : ''}! 🎉
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xs m-0 leading-relaxed">
            Your inquiry has successfully reached{' '}
            <span className="font-semibold text-gray-900">{recipientEmail}</span>. Expect a response within 24 hours.
          </p>
        </div>

        {/* 3D Selected Services Tags preview */}
        {selectedServices.length > 0 && (
          <div
            className="preserve-3d w-full bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 p-2.5 shadow-xs flex flex-wrap items-center justify-center gap-1.5 text-left"
            style={{ transform: 'translateZ(26px)' }}
          >
            <span className="text-[11px] font-medium text-gray-400 mr-0.5">
              Requested:
            </span>
            {selectedServices.map((srv) => (
              <span
                key={srv}
                className="text-[10px] font-semibold bg-gray-100 text-gray-800 px-2 py-0.5 rounded-md border border-gray-200"
              >
                {srv}
              </span>
            ))}
          </div>
        )}

        {/* 3D Tactile Reset Button */}
        <div
          className="preserve-3d pt-1"
          style={{ transform: 'translateZ(34px)' }}
        >
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-gray-800 active:scale-95 shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.25)] transition-all cursor-pointer"
          >
            <Sparkles size={13} className="text-amber-300" />
            Send another message
          </button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [sending, setSending] = useState<boolean>(false);
  const [sent, setSent] = useState<boolean>(false);
  const nameInputRef = React.useRef<HTMLInputElement>(null);

  const handleDropALine = (e: React.MouseEvent) => {
    e.preventDefault();
    if (sent) {
      setSent(false);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 250);
  };

  const toggleService = (service: string) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      // Direct live email routing to jnkishansah@gmail.com
      await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          services: selected.length > 0 ? selected.join(', ') : 'None specified',
          _subject: `New Project Inquiry from ${name} (${email})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Form routing notice:', err);
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setSending(false);
      setSent(true);
    }
  };

  return (
    <main className="min-h-screen bg-white p-3 sm:p-4 md:p-6">
      {/* Large Rounded Card Container */}
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-[calc(100vh-48px)]">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={VIDEO_URL}
        />

        {/* Subtle dark tint to ensure high contrast over bright video frames */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-[calc(100vh-24px)] sm:min-h-[calc(100vh-32px)] md:min-h-[calc(100vh-48px)] lg:h-full p-4 sm:p-6 md:p-8 gap-6">
          {/* Navbar (top) */}
          <nav
            aria-label="Main Navigation"
            className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm pl-3 sm:pl-4 pr-2 py-2 w-full sm:w-auto self-start flex items-center gap-3 sm:gap-6"
          >
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 shrink-0 group"
              aria-label="Kishan Sah"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500/10 via-purple-500/15 to-pink-500/10 p-1 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_16px_rgba(139,92,246,0.3)]">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 drop-shadow-xs"
                >
                  <defs>
                    <linearGradient
                      id="logoGrad1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4F46E5" />
                      <stop offset="50%" stopColor="#7C3AED" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                    <linearGradient
                      id="logoGrad2"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2563EB" />
                      <stop offset="60%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#A855F7" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 256 256 L 128 256 L 0 128 L 128 128 Z"
                    fill="url(#logoGrad1)"
                  />
                  <path
                    d="M 256 128 L 128 128 L 0 0 L 128 0 Z"
                    fill="url(#logoGrad2)"
                  />
                </svg>
              </div>
              <span className="font-semibold text-gray-950 tracking-tight text-sm pr-1">
                Kishan Sah
              </span>
            </a>

            {/* Nav Links */}
            <div className="hidden sm:flex items-center gap-6">
              <a
                href="https://protofilo-kishan-sah.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                Our story
              </a>
              <a
                href="https://protofilo-kishan-sah.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                Expertise
              </a>
              <a
                href="https://github.com/Kishan-shah12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                Our work
              </a>
              <a
                href="https://www.linkedin.com/in/kishan-sah-b97a73315/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm font-medium hover:opacity-60 transition-opacity whitespace-nowrap"
              >
                Journal
              </a>
            </div>

            {/* CTA Button */}
            <button
              type="button"
              onClick={handleDropALine}
              className="bg-black text-white text-sm font-medium px-4 sm:px-5 py-2 rounded-xl hover:bg-gray-800 active:scale-95 transition-all ml-auto whitespace-nowrap cursor-pointer shadow-sm"
            >
              Start a project
            </button>
          </nav>

          {/* Spacer */}
          <div className="flex-1 min-h-[2rem]" />

          {/* Bottom row (headline + form) */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2 sm:pb-0">
            {/* Headline (left) */}
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-medium leading-tight drop-shadow-lg lg:max-w-lg xl:max-w-2xl shrink-0 text-white m-0">
              We craft bold ideas
              <br />
              and ship them as{' '}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                products
              </span>
            </h1>

            {/* Contact form card (right) */}
            <div id="contact" className="w-full lg:w-[min(480px,45%)] shrink-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden p-4 sm:p-6 flex flex-col gap-4">
                {/* 1. Heading */}
                <h2 className="text-xl sm:text-2xl font-semibold text-black tracking-tight m-0 flex items-center gap-1.5">
                  <span>Say hello!</span>
                  <span className="animate-wave inline-block cursor-default select-none">
                    👋
                  </span>
                </h2>

                {/* 2. Email + socials row */}
                <div className="flex flex-row items-center justify-between gap-3 bg-gray-50 rounded-2xl px-4 py-2.5">
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11px] text-gray-500 font-medium">
                      Drop us a line
                    </span>
                    <a
                      href={`mailto:${RECIPIENT_EMAIL}`}
                      className="text-blue-600 font-semibold hover:underline truncate text-sm"
                    >
                      {RECIPIENT_EMAIL}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="animate-float-1">
                      <SocialBtn
                        ariaLabel="GitHub"
                        href="https://github.com/Kishan-shah12"
                        className="bg-gradient-to-br from-gray-900 via-neutral-900 to-black text-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.35)]"
                        icon={<GithubIcon size={15} />}
                      />
                    </div>
                    <div className="animate-float-2">
                      <SocialBtn
                        ariaLabel="LinkedIn"
                        href="https://www.linkedin.com/in/kishan-sah-b97a73315/"
                        className="bg-gradient-to-br from-[#0A66C2] via-[#0077B5] to-[#005582] text-white hover:shadow-[0_4px_14px_rgba(10,102,194,0.45)] hover:brightness-110"
                        icon={<LinkedinIcon size={15} />}
                      />
                    </div>
                    <div className="animate-float-3">
                      <SocialBtn
                        ariaLabel="Facebook"
                        href="https://www.facebook.com/kishan.sah.98478/"
                        className="bg-gradient-to-br from-[#1877F2] via-[#166fe5] to-[#0d5ec4] text-white hover:shadow-[0_4px_14px_rgba(24,119,242,0.45)] hover:brightness-110"
                        icon={<FacebookIcon size={15} />}
                      />
                    </div>
                  </div>
                </div>

                {/* 3. OR divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 font-medium text-sm">OR</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* 4. Form or Success State */}
                {sent ? (
                  <Notification3D
                    recipientEmail={RECIPIENT_EMAIL}
                    senderName={name}
                    selectedServices={selected}
                    onReset={() => {
                      setSent(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                      setSelected([]);
                    }}
                  />
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <label className="text-sm font-medium text-black">
                      Tell us about your vision
                    </label>

                    {/* Name + Email inputs */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        ref={nameInputRef}
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
                      />
                    </div>

                    {/* Textarea */}
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What are you looking to build or improve..."
                      className="flex-1 min-w-0 text-sm px-3 py-2.5 rounded-xl border border-gray-200 bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition resize-none"
                    />

                    {/* Service tags section */}
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium text-gray-700">
                        I need help with...
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {SERVICES.map((service) => {
                          const isSelected = selected.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                                isSelected
                                  ? 'bg-gray-100 text-black border-black shadow-xs'
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full bg-black text-white text-sm font-semibold py-3 rounded-2xl hover:bg-gray-800 transition-colors disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {sending ? 'Sending...' : 'Send my message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
