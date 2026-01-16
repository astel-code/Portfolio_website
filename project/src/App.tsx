import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sparkles, Zap, Star, Rocket, Shield, Globe, Menu, X } from 'lucide-react';

type Theme = 'dark' | 'light' | 'cosmic' | 'aurora';

function App() {
  const [theme, setTheme] = useState<Theme>('cosmic');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeConfigs = {
    dark: { icon: Moon, name: 'Dark' },
    light: { icon: Sun, name: 'Light' },
    cosmic: { icon: Sparkles, name: 'Cosmic' },
    aurora: { icon: Zap, name: 'Aurora' }
  };

  return (
    <div className={`min-h-screen transition-all duration-700 ${theme}`}>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Astel
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text/80 hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-text/80 hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-text/80 hover:text-primary transition-colors">Contact</a>
          </div>

          {/* Theme Switcher */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-1 bg-surface/50 backdrop-blur-md rounded-full p-1 border border-white/10">
              {Object.entries(themeConfigs).map(([key, config]) => {
                const IconComponent = config.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setTheme(key as Theme)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      theme === key 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'text-text/60 hover:text-text hover:bg-white/10'
                    }`}
                    title={config.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </button>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-text hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-t border-white/10 p-6">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-text/80 hover:text-primary transition-colors">Features</a>
              <a href="#about" className="text-text/80 hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-text/80 hover:text-primary transition-colors">Contact</a>
              
              {/* Mobile Theme Switcher */}
              <div className="flex items-center space-x-2 pt-4 border-t border-white/10">
                <span className="text-text/60 text-sm">Theme:</span>
                <div className="flex space-x-1">
                  {Object.entries(themeConfigs).map(([key, config]) => {
                    const IconComponent = config.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setTheme(key as Theme)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          theme === key 
                            ? 'bg-primary text-white shadow-lg' 
                            : 'text-text/60 hover:text-text hover:bg-white/10'
                        }`}
                        title={config.name}
                      >
                        <IconComponent className="w-4 h-4" />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-surface/50 backdrop-blur-md rounded-full px-4 py-2 border border-white/10 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-text/80">Enhanced Experience</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Stellar Design
            </span>
            <br />
            <span className="text-text">Reimagined</span>
          </h1>
          
          <p className="text-xl text-text/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the next generation of web design with dynamic themes, 
            beautiful animations, and premium aesthetics that adapt to your style.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Get Started</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="px-8 py-4 bg-surface/50 backdrop-blur-md text-text border border-white/20 rounded-xl font-semibold transition-all duration-300 hover:bg-surface/70 hover:border-white/30 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
              Powerful Features
            </h2>
            <p className="text-xl text-text/70 max-w-2xl mx-auto">
              Built with modern technologies and designed for the future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Dynamic Themes",
                description: "Switch between multiple beautiful themes with smooth transitions and unique color palettes."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Optimized performance with modern web technologies for instant loading and smooth interactions."
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description: "Built with security best practices and reliable architecture for production environments."
              },
              {
                icon: Globe,
                title: "Global Ready",
                description: "Responsive design that works perfectly across all devices and screen sizes worldwide."
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Professional-grade design with attention to detail and pixel-perfect implementation."
              },
              {
                icon: Rocket,
                title: "Future Proof",
                description: "Built with cutting-edge technologies and designed to evolve with your needs."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-surface/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 transition-all duration-500 hover:bg-surface/70 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-text group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-text/70 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-surface/50 backdrop-blur-xl rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-50"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-text">
                Ready to Experience
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  The Future?
                </span>
              </h2>
              
              <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already discovered the power of modern design
              </p>
              
              <button className="group relative px-10 py-5 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Your Journey</span>
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Astel
            </span>
          </div>
          
          <p className="text-text/60 mb-6">
            Enhanced with love using modern web technologies
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-text/60">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;