import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, ChevronRight, Sparkles, Target, Globe, CheckCircle, Star, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Partners from '@/components/Partners';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-secondary/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-primary/20 shadow-soft mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">Excellence Académique depuis 2009</span>
            </div>

            {/* Main Heading */}
            <h1 className="heading-1 mb-8 animate-slide-up">
              Façonnez votre <span className="gradient-text">Avenir</span><br />
              avec <span className="gradient-text">ESTIM</span>
            </h1>

            {/* Subtitle */}
            <p className="text-large text-muted-foreground mb-12 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
              L'École Supérieure de Technologie, d'Innovation et de Management vous offre 
              des formations d'excellence pour devenir les leaders de demain
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <Link to="/pre-registration">
                <Button className="btn-primary group">
                  Commencer mon inscription
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/tracks">
                <Button className="btn-outline">
                  Découvrir nos filières
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-heading mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Années d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-heading mb-2">2000+</div>
                <div className="text-sm text-muted-foreground">Diplômés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text font-heading mb-2">95%</div>
                <div className="text-sm text-muted-foreground">Taux d'insertion</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Accès <span className="gradient-text">Rapide</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour commencer votre parcours chez ESTIM
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Filières */}
            <Link to="/tracks" className="group">
              <div className="card-modern group-hover:shadow-strong">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-3 mb-4 group-hover:text-primary transition-colors">Nos Filières</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Découvrez nos 9 formations d'excellence adaptées aux besoins du marché
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Explorer</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Admission */}
            <Link to="/admission" className="group">
              <div className="card-modern group-hover:shadow-strong">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="heading-3 mb-4 group-hover:text-secondary transition-colors">Admission</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Conditions d'admission et processus d'inscription simplifié
                </p>
                <div className="flex items-center text-secondary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>S'inscrire</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Contact */}
            <Link to="/contact" className="group">
              <div className="card-modern group-hover:shadow-strong">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="heading-3 mb-4 group-hover:text-primary transition-colors">Contact</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Notre équipe est là pour répondre à toutes vos questions
                </p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                  <span>Contacter</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose ESTIM */}
      <section className="py-20 bg-gradient-to-br from-accent/50 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              Pourquoi choisir <span className="gradient-text">ESTIM</span> ?
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto">
              L'excellence académique rencontre l'innovation pédagogique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-glass hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-3 mb-4">Formation Pratique</h3>
              <p className="text-muted-foreground leading-relaxed">
                70% de pratique avec projets réels et équipements de pointe pour une immersion totale
              </p>
            </div>

            <div className="card-glass hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="heading-3 mb-4">Encadrement d'Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ratio 1 enseignant pour 15 étudiants garantissant un accompagnement personnalisé
              </p>
            </div>

            <div className="card-glass hover-lift">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="heading-3 mb-4">Insertion Garantie</h3>
              <p className="text-muted-foreground leading-relaxed">
                95% d'insertion professionnelle grâce à notre réseau de 500+ entreprises partenaires
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="card-modern bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold gradient-text font-heading mb-2">15+</div>
                <div className="text-muted-foreground">Années d'expérience</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text font-heading mb-2">2000+</div>
                <div className="text-muted-foreground">Diplômés actifs</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text font-heading mb-2">95%</div>
                <div className="text-muted-foreground">Taux d'insertion</div>
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text font-heading mb-2">500+</div>
                <div className="text-muted-foreground">Entreprises partenaires</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center">
          <h2 className="heading-2 mb-6 text-white">
            Prêt à commencer votre parcours ?
          </h2>
          <p className="text-large text-white/90 mb-12 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui ont choisi ESTIM pour bâtir leur avenir
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/pre-registration">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 text-lg rounded-2xl shadow-strong">
                Commencer l'inscription
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 text-lg rounded-2xl">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;