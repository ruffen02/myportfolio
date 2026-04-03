import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import { Lightbulb } from "lucide-react";

export default function SkillsPage() {
  
  // Progress Bar Details
  const progressCards = [
    { title: "FRONTEND", level: "90%", value: 90 },
    { title: "BACKEND", level: "85%", value: 85 },
    { title: "DESIGN (UI/UX)", level: "75%", value: 75 },
  ];

  // Tech Logos from your public folder
  const techLogos = [
    { name: "JavaScript", icon: "/javascript.png" },
    { name: "React", icon: "/react.png" },
    { name: "Git", icon: "/git.png" },
    { name: "PHP", icon: "/php.png" },
    { name: "GitHub", icon: "/github.png" },
  ];

  return (
    /* Light Mode -> specific wireframeBg (#DEDEDE) | Dark Mode -> standard dark background */
    <div className="min-h-screen bg-[#DEDEDE] dark:bg-background text-foreground pb-20 transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 mt-16 flex flex-col items-center">
        
        {/* Title Section matching home page style */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter italic text-slate-900 dark:text-white leading-tight">
            MY SKILLS & <br /> CORE STACK
          </h1>
          <div className="h-2 w-48 bg-slate-900 dark:bg-white rounded-none mx-auto mt-4" />
        </div>

        {/* --- MAIN HERO BOX (Teal Container) --- */}
        {/* thick black border and teal fill matching the picture */}
        <section className="relative w-full bg-[#0D6767] rounded-[3rem] p-8 md:p-16 border-[10px] border-slate-900 dark:border-white shadow-2xl overflow-hidden mb-12 flex flex-col gap-12">
          
          <div className="space-y-4 text-center text-white relative z-10">
             <div className="flex items-center gap-3 justify-center mb-10">
                <div className="bg-[#DEDEDE] p-2.5 rounded-full">
                   <Lightbulb className="w-6 h-6 text-slate-900" />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter">Competency Levels</h2>
             </div>
          </div>

          {/* Grid of Progress Cards (The three grey boxes) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {progressCards.map((card) => (
              <div 
                key={card.title} 
                className="bg-[#CFCFCF] dark:bg-card border-4 border-slate-900 rounded-2xl p-6 flex flex-col gap-4 shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                   <h3 className="text-sm font-black uppercase tracking-widest text-slate-800 dark:text-muted-foreground">{card.title}</h3>
                   <span className="text-xs font-black text-white bg-slate-900 px-3 py-1 rounded-full">{card.level}</span>
                </div>
                
                {/* Progress Bar replication */}
                <div className="w-full h-4 bg-slate-300 dark:bg-muted rounded-full overflow-hidden border-2 border-slate-900">
                  <div 
                    style={{ width: `${card.value}%` }}
                    className="h-full bg-slate-900 dark:bg-white rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Grid of Logos (The wide grey bar at bottom) */}
          <div className="w-full bg-[#CFCFCF] dark:bg-muted/50 border-4 border-slate-900 rounded-2xl p-6 flex flex-wrap items-center justify-center gap-6 md:gap-8 relative z-10 shadow-lg">
            {techLogos.map((tech) => (
              <div 
                key={tech.name}
                className="relative w-16 h-16 md:w-20 md:h-20 bg-white border border-border rounded-xl p-3 shadow-md transition-all hover:-translate-y-1 hover:border-[#0D6767]"
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={tech.icon} 
                    alt={tech.name}
                    fill
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Optional Tooltip/Text */}
                {/* <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded-full">{tech.name}</span> */}
              </div>
            ))}
          </div>

        </section>

      </main>

      {/* Decorative Line before footer */}
      <div className="max-w-4xl mx-auto border-t-4 border-slate-900 dark:border-white mt-16 mb-4 opacity-20" />
      
      <Footer />
    </div>
  );
}