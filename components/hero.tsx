"use client"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-b from-background to-background/80">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold text-balance">
         Full Stack Developer &<br />
          <span className="text-primary">Backend Engineer </span>
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
          I craft beautiful, functional digital experiences with cutting-edge technologies. Specializing in modern web
          development and intuitive user interfaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
