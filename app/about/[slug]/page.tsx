import { resumeData } from "@/data/resume";
import { notFound } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { Briefcase, User, Lightbulb, ArrowLeft, Eye, Download } from "lucide-react";
import Link from "next/link";

export default async function DynamicAboutPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const data = resumeData[slug as keyof typeof resumeData];

  if (!data) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        <Link href="/about" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Profile
        </Link>

        <div className="bg-card rounded-[2.5rem] p-8 md:p-16 border border-border shadow-2xl mb-12">
          <div className="border-b border-border pb-10 mb-10">
            <h1 className="text-4xl font-extrabold mb-2">Eduardo Pastelero</h1>
            <p className="text-xl font-semibold text-primary">{data.title}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold uppercase tracking-widest opacity-60">Summary</h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground">{data.summary}</p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold uppercase tracking-widest opacity-60">Experience</h2>
              </div>
              <div className="space-y-8">
                {data.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                    <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7.5px] top-1.5" />
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{exp.year}</span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {exp.details.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold uppercase tracking-widest opacity-60">Skills</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xl text-sm font-bold border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}