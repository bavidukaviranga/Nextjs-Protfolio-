import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
              <Image src="/bavindu.jpg" alt="Profile picture" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              I'm a passionate full-stack developer with over 3 years of experience creating web applications that solve real-world problems. I love working with modern technologies and am always eager to learn new tools and frameworks.
            </p>
            <p>
              My expertise spans modern front-end frameworks, backend architecture, and cloud technologies. I believe in
              writing clean, maintainable code and designing interfaces that users love.
            </p>
           
          </div>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-primary font-semibold mb-4">Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Frontend</p>
                  <p className="text-foreground/80">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Backend</p>
                  <p className="text-foreground/80">SpringBoot, Node.js, Express, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Tools & Platforms</p>
                  <p className="text-foreground/80">Git, AWS, Vercel, </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}
