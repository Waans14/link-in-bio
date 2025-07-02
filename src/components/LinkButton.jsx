import { Rocket } from 'lucide-react';

function LinkButton({ text, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-full transition duration-300 shadow-md hover:shadow-xl backdrop-blur-md"
    >
      <div className="flex items-center gap-3">
        {icon}
        <span className="text-lg font-medium text-white">{text}</span>
      </div>
      <Rocket className="w-5 h-5 text-white transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-300" />
    </a>
  );
}

export default LinkButton;
