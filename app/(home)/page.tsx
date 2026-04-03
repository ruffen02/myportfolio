import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  
  return (
    <div className="min-h-screen bg-[#DEDEDE] dark:bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Left Side: Bordered Container */}
        <div className="flex-1 w-full max-w-[480px] aspect-[4/5] border-[10px] border-[#0D6767] rounded-[3rem] p-6 flex flex-col gap-6 bg-[#CFCFCF] dark:bg-card shadow-xl">
          
          {/* Main Image Area */}
          <div className="flex-[3] w-full bg-[#BDBDBD] dark:bg-muted rounded-2xl overflow-hidden relative">
            <Image
              src="/profilep.jpg"
              alt="Eduardo Pastelero"
              fill
              priority
              className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* CHANGED: Lower accent box now contains "NIEKO" */}
          <div className="flex-1 w-full bg-[#BDBDBD] dark:bg-muted/50 rounded-xl flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-black tracking-[0.2em] text-[#0D6767] dark:text-primary uppercase opacity-90">
              NIEKO
            </span>
          </div>
          
        </div>

        {/* Right Side: Hero Text */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-6xl font-black leading-tight tracking-tighter text-slate-900 dark:text-white">
              Hi, I{"'"}m <br /> Eduardo Pastelero
            </h1>
            <div className="h-1.5 w-32 bg-slate-900 dark:bg-primary rounded-full mx-auto md:mx-0" />
            <p className="text-xl text-slate-700 dark:text-muted-foreground leading-relaxed max-w-md">
              Full-Stack Developer building modern, high-performance web applications with a focus on clean design.
            </p>
          </div>

          <div className="pt-4">
            <Link href="/about">
              <Button 
                className="w-full max-w-sm rounded-2xl py-8 text-xl font-bold shadow-lg bg-[#0D6767] hover:bg-[#0A5252] text-white transition-all active:scale-95 cursor-pointer" 
                size="lg"
              >
                Know More
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer-specific accent line */}
      <div className="max-w-4xl mx-auto border-t-2 border-slate-400 dark:border-muted mt-10 mb-4 opacity-30" />
      
      <Footer />
    </div>
  );
}