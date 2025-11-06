export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-primary font-semibold mb-4">About</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              
            </p>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors">
                  
                </a>
              </li>
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Resource</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  CV
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Connect</h3>
            <p className="text-foreground/60 text-sm">Follow for updates on new projects and insights</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/40 text-sm">© 2025 Your Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-foreground/40 hover:text-primary transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
