import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real-State-web",
      description: "A responsive Single Page Application (SPA) built with React, inspired by rightmove.co.uk. It allows users to search and filter properties based on property type, price range, number of bedrooms, date added, and postcode area.",
      tags: ["React.js", "JavaScript" ,"Bootstrap"],
      image: "/state.jpg",
      link: "https://github.com/bavidukaviranga/Real-State-web",
    },
    {
      id: 2,
      title: "Mini-Shop",
      description: "🛍 Mini E-Commerce App (Frontend Only) A simple frontend e-commerce web app built using React (Vite), Tailwind CSS, and Axios. It allows users to browse products, view product details, and manage a shopping cart using the Fake Store API.",
      tags: ["React (Vite)", "Tailwind CSS", "Axios", "Fake Store API"],
      image: "/mini shop.jpg",
      link: "https://github.com/bavidukaviranga/Mini-Shop",
    },
    {
      id: 3,
      title: "Crime-Alert ",
      description:
        "CrimeAlert is a community crime-reporting web app that lets users notify police in real time when witnessing criminal activity. Built with HTML , PHP , and CSS , it features responsive design, secure form submissions, location-aware reporting, an admin dashboard for managing alerts, user authentication, audit logging, and evidence storage.",
      tags: ["HTML", "php", "Css", "Bootstrap"],
      image: "1234-mobile.webp",
      link: "#",
    },
    {
      id: 4,
      title: "Gas-detection-and-harm-prevention-system",
      description:
        "An IoT-based portable gas and fire detection system for homes and private areas. Developed using C++, HTML, PHP, and CSS, it detects harmful gases and fire hazards in real time, automatically activates the exhaust fan and water spray system, and sends instant safety alerts through a responsive web interface.",
      tags: ["php", "HTML", "C++"],
      image: "gas.webp",
      link: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
        <p className="text-foreground/60 mb-12 max-w-2xl">
          Here are some of my recent projects that showcase my skills in full-stack development and design.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l4-4m0 0l4-4m-4 4H7m10 0h-4"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
