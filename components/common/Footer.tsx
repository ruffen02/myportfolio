import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DEDEDE] dark:bg-background pt-10 pb-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* THE CENTERED HORIZONTAL LINE */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-2xl h-[2px] bg-slate-900 dark:bg-white opacity-40" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-10">
          
          {/* LEFT SIDE: Brand & Location */}
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white">
              PASTELERO
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0D6767] dark:text-slate-400">
              Cordova, Philippines • © {new Date().getFullYear()}
            </p>
          </div>

          {/* RIGHT SIDE: The Wireframe Contact Stack */}
          <div className="flex flex-col gap-4 min-w-[200px]">
            
            {/* Facebook Row */}
            <a href="#" className="group flex items-center justify-end gap-4">
              <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all">
                <Image src="/facebook.png" alt="FB" fill className="object-contain" />
              </div>
              <div className="h-[2px] w-24 bg-slate-900 dark:bg-white transition-all group-hover:bg-[#0D6767]" />
            </a>

            {/* Email/Gmail Row */}
            <a href="mailto:your-email@example.com" className="group flex items-center justify-end gap-4">
              <div className="relative w-5 h-5 grayscale group-hover:grayscale-0 transition-all">
                <Image src="/gmail.png" alt="Email" fill className="object-contain" />
              </div>
              <div className="h-[2px] w-24 bg-slate-900 dark:bg-white transition-all group-hover:bg-[#0D6767]" />
            </a>

            {/* Phone/Contact Row */}
            <div className="group flex items-center justify-end gap-4 cursor-pointer">
              <div className="relative w-5 h-5 dark:invert">
                <Image src="/telephone.png" alt="Phone" fill className="object-contain" />
              </div>
              <div className="h-[2px] w-24 bg-slate-900 dark:bg-white transition-all group-hover:bg-[#0D6767]" />
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}