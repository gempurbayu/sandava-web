import Image from "next/image";
import logo from "@/assets/logo-sandava.png";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        {/* Logo with pulse animation */}
        <div className="relative">
          <Image
            src={logo}
            alt="Sandava"
            className="h-28 w-auto animate-logo-pulse"
            height={112}
            priority
          />
        </div>
        
        {/* Loading bar */}
        <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 rounded-full animate-flow-line" />
        </div>
        
        {/* Loading text with dots */}
        <div className="flex items-center gap-1">
          <span className="text-slate-500 text-sm font-medium">Loading</span>
          <span className="flex gap-0.5 ml-1">
            <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading" style={{ animationDelay: "0ms" }} />
            <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading" style={{ animationDelay: "150ms" }} />
            <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading" style={{ animationDelay: "300ms" }} />
          </span>
        </div>
      </div>
    </div>
  );
}
