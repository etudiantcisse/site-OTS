import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Settings, GamepadIcon, Zap, BookOpen, Phone, Instagram, Mail, Send, ChevronDown, Cpu, Shield, Headphones } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      title: "Activation Windows & Office",
      description: "Activation légale de vos licences Windows et Office pour une utilisation optimale",
      icon: Shield,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Installation de Logiciels",
      description: "Installation et configuration de tous types de logiciels selon vos besoins",
      icon: Settings,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Vente de Jeux PC",
      description: "Large sélection de jeux PC avec installation et support technique inclus",
      icon: GamepadIcon,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Optimisation PC",
      description: "Amélioration des performances pour redonner vie à votre ordinateur lent",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Formations Informatiques",
      description: "Formations personnalisées pour maîtriser vos outils informatiques",
      icon: BookOpen,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img src="/ChatGPT_Image_25_juil._2025__00_15_40-removebg-preview.png" alt="Online Tech Services Logo" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900">Online Tech Services</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</button>
              <button onClick={() => scrollToSection('recrutement')} className="text-gray-700 hover:text-blue-600 transition-colors">Recrutement</button>
              <button onClick={() => scrollToSection('apropos')} className="text-gray-700 hover:text-blue-600 transition-colors">À propos</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Nous contacter
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('accueil')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Accueil</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('recrutement')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Recrutement</button>
              <button onClick={() => scrollToSection('apropos')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">À propos</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Nous contacter
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-300 to-indigo-200"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-300 rounded-lg animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-blue-400 rounded-full animate-bounce"></div>
          <div className="absolute bottom-32 left-32 w-12 h-12 border border-blue-200 rotate-45 animate-spin"></div>
          <div className="absolute bottom-20 right-40 w-24 h-24 border border-blue-300 rounded-lg animate-pulse"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <Monitor className="h-20 w-20 mx-auto mb-8 text-blue-300 animate-bounce" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Online Tech <span className="text-blue-300">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Solution de vos problèmes avec vos PC, le tout en ligne sans déplacement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Nous contacter maintenant
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-300" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour tous vos besoins informatiques, entièrement à distance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section id="recrutement" className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-blue-400 rotate-45 animate-spin"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-blue-200 rounded-lg animate-bounce"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Recrutement</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Expert informatique disponible pour rejoindre votre équipe
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-200">Profil Professionnel</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Expert en assistance technique informatique</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Spécialiste en support à distance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Formation et accompagnement utilisateurs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-blue-100">Résolution de problèmes complexes</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-200">Compétences Techniques</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-600/30 rounded-lg p-4 text-center">
                    <Shield className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <span className="text-sm text-blue-100">Sécurité IT</span>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4 text-center">
                    <Settings className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <span className="text-sm text-blue-100">Configuration</span>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4 text-center">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <span className="text-sm text-blue-100">Optimisation</span>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4 text-center">
                    <Headphones className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                    <span className="text-sm text-blue-100">Support Client</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-200">Recherche d'Opportunités</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Passionné par l'informatique et fort de mon expérience en assistance technique, 
                  je suis ouvert aux opportunités de collaboration et d'emploi dans le domaine IT.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-200">Disponibilité immédiate</h4>
                      <p className="text-blue-100 text-sm">Prêt à intégrer une équipe dynamique</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-200">Travail à distance</h4>
                      <p className="text-blue-100 text-sm">Expertise confirmée en télétravail</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-200">Adaptabilité</h4>
                      <p className="text-blue-100 text-sm">Capacité d'apprentissage rapide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  Me contacter pour un recrutement
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">À propos</h2>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    BC
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">B. CISSE</h3>
                    <p className="text-blue-600 font-semibold">Expert Informatique</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Spécialiste en assistance informatique à distance avec plusieurs années d'expérience. 
                  Je m'engage à résoudre vos problèmes informatiques rapidement et efficacement, 
                  sans que vous ayez besoin de vous déplacer.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Pourquoi nous choisir ?</h3>
              
              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Headphones className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Disponibilité</h4>
                  <p className="text-gray-600">Support technique disponible quand vous en avez besoin</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapidité</h4>
                  <p className="text-gray-600">Résolution rapide de vos problèmes informatiques</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <Monitor className="h-8 w-8 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Service 100% en ligne</h4>
                  <p className="text-gray-600">Aucun déplacement nécessaire, tout se fait à distance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-xl text-gray-600">
              Contactez-nous pour résoudre vos problèmes informatiques
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors">
                <Phone className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-600">Appelez-nous pour un support immédiat</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-pink-50 rounded-xl p-6 hover:bg-pink-100 transition-colors">
                <Instagram className="h-8 w-8 text-pink-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                  <p className="text-gray-600">@b_cisse_ofl</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 bg-green-50 rounded-xl p-6 hover:bg-green-100 transition-colors">
                <Mail className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">bc7806521@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Formulaire de contact rapide</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Décrivez votre problème..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer le message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="/ChatGPT_Image_25_juil._2025__00_15_40-removebg-preview.png" alt="Online Tech Services Logo" className="h-8 w-8" />
                <span className="text-xl font-bold">Online Tech Services</span>
              </div>
              <p className="text-gray-400">
                Votre partenaire de confiance pour tous vos besoins informatiques à distance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Activation Windows & Office</li>
                <li>Installation de logiciels</li>
                <li>Vente de jeux PC</li>
                <li>Optimisation PC</li>
                <li>Formations informatiques</li>
                <li>Recrutement IT</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: bc7806521@gmail.com</p>
                <p>Instagram: @bcisse.ofl</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Online Tech Services. Tous droits réservés.</p>
            <p className="mt-2">conçu par Babacar CISSE</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;