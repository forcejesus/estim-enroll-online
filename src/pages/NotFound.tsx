import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-estim-green/5 via-white to-estim-gold/5 flex items-center justify-center pt-16 lg:pt-24">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold opacity-20">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-estim-green/20 to-estim-gold/20 flex items-center justify-center">
                  <Search className="w-16 h-16 text-estim-green" />
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-800 mb-4">
                Page introuvable
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
              </p>
              <div className="bg-gradient-to-r from-estim-green/10 to-estim-gold/10 rounded-2xl p-6 border border-estim-green/20 mb-8">
                <p className="text-sm text-gray-700">
                  <strong>Que faire maintenant ?</strong><br />
                  Vérifiez l'URL, retournez à la page d'accueil ou explorez nos filières.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-gradient-to-r from-estim-green to-estim-gold hover:from-estim-darkGreen hover:to-estim-gold text-white w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Retour à l'accueil
                </Button>
              </Link>
              
              <Link to="/#tracks">
                <Button variant="outline" className="border-estim-green text-estim-green hover:bg-estim-green hover:text-white w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Découvrir nos filières
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Liens rapides</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                <Link to="/" className="text-estim-green hover:text-estim-darkGreen transition-colors">
                  Accueil
                </Link>
                <Link to="/#about" className="text-estim-green hover:text-estim-darkGreen transition-colors">
                  À propos
                </Link>
                <Link to="/pre-registration" className="text-estim-green hover:text-estim-darkGreen transition-colors">
                  Pré-inscription
                </Link>
                <Link to="/#contact" className="text-estim-green hover:text-estim-darkGreen transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Brand Message */}
            <div className="mt-8">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-estim-green/20 to-estim-gold/20 rounded-full border border-estim-green/30">
                <span className="text-estim-green font-semibold text-sm">ESTIM je t'estime !</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;