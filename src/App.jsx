import './index.css';
import profile from './assets/profile.png';
import backgroundVideo from './assets/background.mp4';
import LinkButton from './components/LinkButton';
import {
  Linkedin,
  Youtube,
  Github,
  Globe,
  Briefcase
} from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md w-full text-center text-white shadow-lg mx-4 my-8">
          <img
            src={profile}
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/30 shadow-md"
          />

          <TypeAnimation
            sequence={['Afwan Sutdrajat']}
            speed={50}
            cursor={false}
            className="text-3xl font-bold mt-4"
            repeat={0}
            wrapper="h1"
          />

          <TypeAnimation
            sequence={[
              'Android & Web Developer',
              2000,
              'Content Creator',
              2000,
              'Freelancer',
              2000,
              '',
              500
            ]}
            wrapper="p"
            speed={40}
            className="mt-2 text-sm text-white/80"
            repeat={Infinity}
          />

          <div className="mt-6 space-y-4">
            <LinkButton
              text="Fastwork.id"
              url="https://fastwork.id/user/waans14"
              icon={<Briefcase className="w-5 h-5" />}
            />
            <LinkButton
              text="YouTube"
              url="https://youtube.com/@millenialzdev"
              icon={<Youtube className="w-5 h-5" />}
            />
            <LinkButton
              text="LinkedIn"
              url="https://linkedin.com/in/afwan-sutdrajat-1bb70023b"
              icon={<Linkedin className="w-5 h-5" />}
            />
            <LinkButton
              text="GitHub"
              url="https://github.com/waans14"
              icon={<Github className="w-5 h-5" />}
            />
            <LinkButton
              text="Website Portofolio"
              url="https://afwansutdrajat.vercel.app"
              icon={<Globe className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
