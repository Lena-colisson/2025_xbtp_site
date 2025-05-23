'use client';

import { envoyermail } from './mail';
import { useState } from 'react';

export default function Home() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ok = await envoyermail(name, email, message);
        if (ok === true) {
            setIsPopupVisible(true);
        } else {
            console.log(ok);
            setIsErrorPopupVisible(ok);
        }
    };

    return (
        <main>
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-90 flex items-center justify-center" style={{ backgroundImage: "url('img/pexels-quang-nguyen-vinh-222549-14021062.webp')" }}>
                <div className="bg-black bg-black-50 w-full h-full absolute top-0 left-0" />
                <h2 className="texte-center text-white text-4xl font-bold z-10">Contactez-moi</h2>
            </section>
<section className="bg-white py-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
    {/* Première card : formulaire */}
    <div className="bg-white shadow-lg p-8 border shadow-black/25 py-16 px-16">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-1">NOM</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full text-gray-200 border-b border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-1">EMAIL</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full text-gray-200 border-b border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-1">Votre Projet</label>
          <select
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full text-gray-400 border-b border-gray-600 focus:outline-none focus:border-blue-500"
          >
            <option value="">-- Choisissez une option --</option>
            <option value="Terrassement">Terrassement</option>
            <option value="Aménagement extérieur">Aménagement extérieur</option>
            <option value="Charpente">Charpente</option>
            <option value="Maçonnerie">Maçonnerie</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white px-6 py-3 rounded hover:bg-yellow-600 transition font-semibold">
          ENVOYER
        </button>
      </form>
    </div>

    {/* Colonne droite avec 2 cards empilées */}
    <div className="flex flex-col justify-between space-y-8">
      {/* Deuxième card : Contact */}
      <div className="bg-black text-white shadow-lg p-8 border shadow-black/25 py-12 px-10 h-full flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-center">Contact XBTp</h3>
        <p className="text-lg mb-4"><strong>Numéro :</strong> 01 23 45 67 89</p>
        <p className="text-lg"><strong>Email :</strong> contact@xbtp.fr</p>
      </div>

      {/* Troisième card : Horaires */}
      <div className="bg-black text-white shadow-lg p-8 border shadow-black/25 py-12 px-10 h-full flex flex-col justify-center">
        <h3 className="text-2xl font-bold mb-6 text-center">Horaires d'ouverture</h3>
        <ul className="text-lg space-y-2">
          <li><strong>Lundi - Vendredi :</strong> 8h00 - 18h00</li>
          <li><strong>Samedi :</strong> 9h00 - 13h00</li>
          <li><strong>Dimanche :</strong> Fermé</li>
        </ul>
      </div>
    </div>
  </div>
</section>



            {isPopupVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 transition-opacity duration-300 ease-in-out">
                    <div className="bg-yellow-400 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center relative w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[250px] shadow-lg transform scale-95 opacity-0 animate-fade-in">
                        <p className="text-black font-bold text-xl text-center">TON MESSAGE A BIEN ÉTÉ<br />ENVOYÉ !</p>
                        <button onClick={() => setIsPopupVisible(false)} className="absolute top-2 right-2 text-black text-2xl bg-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">×</button>
                    </div>
                </div>
            )}

            {isErrorPopupVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4 transition-opacity duration-300 ease-in-out">
                    <div className="bg-red-400 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center relative w-full max-w-md md:max-w-lg lg:max-w-xl h-auto md:h-[250px] shadow-lg transform scale-95 opacity-0 animate-fade-in">
                        <p className="text-black font-bold text-xl text-center">TON MESSAGE NE S'EST PAS BIEN<br />ENVOYÉ !</p>
                        <button onClick={() => setIsErrorPopupVisible(false)} className="absolute top-2 right-2 text-black text-2xl bg-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">×</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.3);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.1s ease-out forwards;
        }
      `}</style>
        </main>
    );
}
