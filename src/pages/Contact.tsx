import React from 'react';
import { Phone, Mail, MapPin, Clock, Users, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container px-4 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-estim-green to-estim-gold mb-8">
            <Phone className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Contactez-<span className="text-transparent bg-clip-text bg-gradient-to-r from-estim-green to-estim-gold">nous</span>
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-estim-green to-estim-gold rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est là pour répondre à toutes vos questions sur nos formations et processus d'admission
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gray-800 rounded-3xl border border-gray-700 hover:border-estim-green/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-estim-green/20 flex items-center justify-center">
                <Phone className="w-8 h-8 text-estim-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-estim-green">Téléphone</h3>
              <p className="text-gray-300 mb-2">+212 522 XXX XXX</p>
              <p className="text-gray-400 text-sm">Lun - Ven: 9h - 17h</p>
            </div>
            
            <div className="text-center p-8 bg-gray-800 rounded-3xl border border-gray-700 hover:border-estim-gold/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-estim-gold/20 flex items-center justify-center">
                <Mail className="w-8 h-8 text-estim-gold" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-estim-gold">Email</h3>
              <p className="text-gray-300 mb-2">contact@estim-edu.com</p>
              <p className="text-gray-400 text-sm">Réponse sous 24h</p>
            </div>
            
            <div className="text-center p-8 bg-gray-800 rounded-3xl border border-gray-700 hover:border-estim-green/50 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-estim-green/20 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-estim-green" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-estim-green">Adresse</h3>
              <p className="text-gray-300 mb-2">Casablanca, Maroc</p>
              <p className="text-gray-400 text-sm">Campus principal</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold mb-6 text-estim-green">Horaires d'ouverture</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Lundi - Vendredi</span>
                  <span className="text-white font-semibold">9h00 - 17h00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Samedi</span>
                  <span className="text-white font-semibold">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Dimanche</span>
                  <span className="text-red-400 font-semibold">Fermé</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-estim-green/10 to-estim-gold/10 rounded-3xl p-8 border border-estim-green/20">
              <h2 className="text-2xl font-bold mb-6 text-estim-gold">Prendre rendez-vous</h2>
              <p className="text-gray-300 mb-6">
                Planifiez une visite de notre campus ou un entretien personnalisé avec notre équipe pédagogique.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 text-estim-green mr-3" />
                  <span>Visite guidée du campus</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MessageSquare className="w-5 h-5 text-estim-gold mr-3" />
                  <span>Entretien d'orientation</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Clock className="w-5 h-5 text-estim-green mr-3" />
                  <span>Séances d'information</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;