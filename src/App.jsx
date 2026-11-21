import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import PracticeAreas from './components/PracticeAreas';
import WorkflowSection from './components/WorkflowSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import AdvocatePreloader from './components/AdvocatePreloader';
import { portfolioData } from './data/portfolioData';
import { MessageCircle } from 'lucide-react';

export default function App() {
  // Language state: 'gu' (Gujarati) or 'en' (English)
  const [lang, setLang] = useState('gu');
  
  // Profile state for active language
  const activeProfile = portfolioData.profile[lang];
  const activeEducation = portfolioData.education[lang];
  const activeStats = portfolioData.stats[lang];
  const activeServices = portfolioData.services[lang];
  const activeWorkflow = portfolioData.workflow[lang];
  const activeNavLinks = portfolioData.nav[lang];

  const [customPhotoUrl, setCustomPhotoUrl] = useState(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle active navigation spy on scroll, scroll progress bar & intersection observer
  useEffect(() => {
    // Dynamic Document Title & SEO Meta Description based on active language
    if (lang === 'gu') {
      document.documentElement.lang = 'gu';
      document.title = "એડવોકેટ પારસકુમાર જે. કારેટીયા | ગુજરાત હાઈકોર્ટ & રાજકોટ ડિસ્ટ્રિક્ટ કોર્ટ વકીલ";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'એડવોકેટ પારસકુમાર જે. કારેટીયા (બી.કોમ., એલ.એલ.બી., એલ.એલ.એમ. ચાલુ) - સિવિલ, રેવન્યુ, ક્રિમીનલ કેસો અને ૨૦+ કાનૂની સેવાઓ. ઓફિસ નં. ૧૨, નક્ષત્ર કોમ્પ્લેક્સ-૫, સાધુ વાસવાણી રોડ, રાજકોટ.');
      }
    } else {
      document.documentElement.lang = 'en';
      document.title = "Adv. Paraskumar J. Karetiya | Advocate Gujarat High Court & Rajkot District Courts";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Adv. Paraskumar J. Karetiya (B.Com., LL.B., LL.M. Running) - Civil, Revenue, Criminal litigation, Property Documentation, Affidavits, and 20+ Legal Services in Rajkot & Gujarat High Court. Office No. 12, Nakshatra Complex-5, Sadhu Vasvani Road, Rajkot.');
      }
    }

    // 1. Navigation spy & scroll progress
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'workflow', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 2. Scroll reveal animations observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [lang]);

  const handleOpenConsultation = (topic = '') => {
    setModalTopic(topic || (lang === 'gu' ? 'કાનૂની સલાહ' : 'General Consultation'));
    setConsultationModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-[#edf3f8] text-[#1e293b] selection:bg-[#48719a] selection:text-white overflow-x-hidden w-full max-w-full ${lang === 'gu' ? 'font-gujarati' : 'font-sans'}`}>
      
      {/* Advocate Symbol Preloader */}
      <AdvocatePreloader lang={lang} />

      {/* Top Animated Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#48719a] via-[#6ba0d1] to-[#14375e] z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Top Floating Navbar with High Contrast */}
      <Navbar
        lang={lang}
        setLang={setLang}
        profile={activeProfile}
        navLinks={activeNavLinks}
        activeSection={activeSection}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Signature Hero Section */}
      <HeroSection
        profile={activeProfile}
        lang={lang}
        customPhotoUrl={customPhotoUrl}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Stats & Trust Bar */}
      <div className="reveal-on-scroll">
        <StatsBar stats={activeStats} />
      </div>

      {/* About Section: Academic Degrees (B.Com., LL.B., LL.M.) & Actual Office */}
      <div className="reveal-on-scroll">
        <AboutSection
          profile={activeProfile}
          education={activeEducation}
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>

      {/* Practice Areas / 20+ Legal Services from Office Shutter Board */}
      <div className="reveal-on-scroll">
        <PracticeAreas
          services={activeServices}
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>

      {/* The 4-step Representation Process */}
      <div className="reveal-on-scroll">
        <WorkflowSection
          workflow={activeWorkflow}
          lang={lang}
        />
      </div>

      {/* Frequently Asked Questions (FAQ) Section for Search Rich Results */}
      <div className="reveal-on-scroll">
        <FAQSection
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>

      {/* Direct Office Contact & Inquiry Form with Live Email Sending */}
      <div className="reveal-on-scroll">
        <ContactSection
          profile={activeProfile}
          lang={lang}
          onOpenConsultation={handleOpenConsultation}
        />
      </div>

      {/* Footer with mandatory Bar Council disclaimer */}
      <Footer
        profile={activeProfile}
        lang={lang}
      />

      {/* Interactive Consultation Modal with Live Email Booking */}
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        defaultTopic={modalTopic}
        services={activeServices}
        profile={activeProfile}
        lang={lang}
      />

      {/* Floating WhatsApp Quick Action Button (Bottom Left) */}
      <a
        href={`https://wa.me/919512938031?text=${encodeURIComponent(lang === 'gu' ? 'નમસ્તે એડવોકેટ પારસકુમાર, મારે કાનૂની સલાહ લેવી છે.' : 'Hello Adv. Paraskumar, I need legal consultation.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-5 z-40 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#1ebd5a] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white flex items-center gap-2 group animate-soft-float"
        title="Chat on WhatsApp (+91 95129 38031)"
      >
        <MessageCircle size={20} className="fill-white stroke-none" />
        <span className="hidden sm:inline text-xs font-bold">
          {lang === 'gu' ? 'વોટ્સએપ સંપર્ક' : 'WhatsApp'}
        </span>
      </a>

    </div>
  );
}
