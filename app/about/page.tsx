import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import { User, Briefcase, Lightbulb, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#DEDEDE] dark:bg-background text-foreground pb-20 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 mt-10">
        
        <section className="relative w-full bg-[#0D6767] rounded-[3rem] p-8 md:p-16 border-[10px] border-slate-900 dark:border-white shadow-2xl overflow-hidden mb-12">
          
          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-[8px] border-[#DEDEDE] overflow-hidden bg-[#CFCFCF] shrink-0 shadow-lg">
              <Image 
                src="/profilep.jpg" 
                alt="Eduardo Pastelero"
                fill
                priority
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="flex-1 space-y-6 text-center md:text-left text-white">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase italic">
                ABOUT ME
              </h1>
              <div className="h-2 w-48 bg-slate-900 rounded-none mx-auto md:mx-0" />
              
              <p className="text-xl md:text-2xl leading-relaxed font-medium text-[#DEDEDE] max-w-2xl">
                I am a Creative Technologist specialized in bridging the gap between high-end 
                Graphic Design and robust Full-Stack Engineering. I transform complex ideas into 
                polished, user-centric digital experiences.
              </p>

              <div className="inline-block px-6 py-2 bg-[#DEDEDE] text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest">
                Creative Developer
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          <Link href="/about/web-developer" className="md:col-span-4 group">
            <div className="h-full bg-[#CFCFCF] dark:bg-card border-4 border-slate-900 rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-4 transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <Eye className="w-12 h-12 text-[#0D6767]" />
              <h3 className="text-2xl font-black uppercase tracking-tighter">View Full <br/> Resume</h3>
            </div>
          </Link>

          <div className="md:col-span-4 bg-[#CFCFCF] dark:bg-card border-4 border-slate-900 rounded-3xl p-8 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-6 h-6 text-[#0D6767]" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Professional Path</h3>
             </div>
             <ul className="text-sm font-bold space-y-4 text-slate-800 dark:text-muted-foreground">
                <li className="flex flex-col border-l-2 border-slate-900 pl-3">
                  <span>Web & UI Development</span>
                  <span className="text-[10px] opacity-60">Cordova Public College • 2026</span>
                </li>
                <li className="flex flex-col border-l-2 border-slate-400 pl-3">
                  <span>Visual & Brand Design</span>
                  <span className="text-[10px] opacity-60">Freelance Projects • 2025</span>
                </li>
             </ul>
          </div>

          <div className="md:col-span-4 bg-[#CFCFCF] dark:bg-card border-4 border-slate-900 rounded-3xl p-8 flex flex-col gap-4">
             <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-6 h-6 text-[#0D6767]" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Core Stack</h3>
             </div>
             <div className="flex flex-wrap gap-2">
                {['Next.js', 'React', 'TypeScript', 'Prisma', 'Tailwind'].map((s) => (
                  <span key={s} className="px-3 py-1 bg-white border-2 border-slate-900 rounded-lg text-[10px] font-black uppercase">
                    {s}
                  </span>
                ))}
             </div>
          </div>
        </div>

        <section className="bg-white dark:bg-slate-900 border-4 border-slate-900 rounded-3xl p-8">
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {['WordPress', 'Elementor', 'Figma', 'PostgreSQL', 'Node.js', 'PHP'].map((skill) => (
                <span key={skill} className="text-lg font-black uppercase tracking-widest text-[#0D6767]">
                  {skill}
                </span>
              ))}
           </div>
        </section>

      </main>

      <div className="max-w-4xl mx-auto border-t-4 border-slate-900 dark:border-white mt-16 mb-4 opacity-20" />
      
      <Footer />
    </div>
  );
}