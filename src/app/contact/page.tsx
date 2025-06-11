'use client';

import { envoyermail } from './mail';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

export default function Home() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [ville, setVille] = useState('');
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [isErrorPopupVisible, setIsErrorPopupVisible] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const ok = await envoyermail(name, email, message, phone, ville); // envoie aussi la ville
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
            <section className="relative bg-cover bg-center h-90 flex items-center justify-center" style={{ backgroundImage: "url('img/aext4.jpg')" }}>
                <div className="bg-black/50 w-full h-full absolute top-0 left-0" />
                <h2 className="texte-center text-white text-4xl font-bold z-10">Contactez-moi</h2>
            </section>

            <section className="bg-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
                    {/* Formulaire */}
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
                                <label htmlFor="ville" className="block text-gray-400 text-sm font-medium mb-1">VILLE / DÉPARTEMENT DE DÉPART</label>
                                <input type="text" id="ville" value={ville} onChange={(e) => setVille(e.target.value)} className="w-full text-gray-200 border-b border-gray-600 focus:outline-none focus:border-blue-500" placeholder="Ex : Marseille (13)" />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-1">TÉLÉPHONE</label>
                                <PhoneInput
                                    placeholder="Entrez votre numéro"
                                    defaultCountry="FR"
                                    value={phone}
                                    onChange={setPhone}
                                    className="text-gray-600"
                                />
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
                            <button type="submit" className="w-full bg-yellow-300 text-white px-6 py-3 hover:bg-yellow-500 transition font-semibold">
                                ENVOYER
                            </button>
                        </form>
                    </div>

                    {/* Partie droite (Contact + Horaires) */}
                    <div className="flex flex-col justify-between space-y-8">
                        <div className="shadow-lg p-8 border shadow-black/25 py-12 px-10 h-full flex flex-col justify-center">
                            <h3 className="text-2xl text-black text-yellow-300 font-bold mb-6 text-center">Contact XBTP</h3>
                            <p className="text-lg text-black mb-4"><strong>Numéro :</strong> 01 23 45 67 89</p>
                            <p className="text-lg text-black "><strong>Email :</strong> contact@xbtp.fr</p>
                        </div>
                        <div className="shadow-lg p-8 border shadow-black/25 py-12 px-10 h-full flex flex-col justify-center">
                            <h3 className="text-2xl text-yellow-300 font-bold mb-6 text-center">Horaires d'ouverture</h3>
                            <ul className="text-lg space-y-2">
                                <li className='text-black'><strong>Lundi - Vendredi :</strong> 8h00 - 18h00</li>
                                <li className='text-black'><strong>Samedi :</strong> 9h00 - 13h00</li>
                                <li className='text-black'><strong>Dimanche :</strong> Fermé</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popups */}
            {isPopupVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">
                    <div className="bg-yellow-300 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center relative w-full max-w-lg shadow-lg animate-fade-in">
                        <p className="text-black font-bold text-xl text-center">TON MESSAGE A BIEN ÉTÉ<br />ENVOYÉ !</p>
                        <button onClick={() => setIsPopupVisible(false)} className="absolute top-2 right-2 text-black text-2xl bg-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">×</button>
                    </div>
                </div>
            )}

            {isErrorPopupVisible && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 px-4">
                    <div className="bg-red-400 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center relative w-full max-w-lg shadow-lg animate-fade-in">
                        <p className="text-black font-bold text-xl text-center">TON MESSAGE NE S'EST PAS BIEN<br />ENVOYÉ !</p>
                        <button onClick={() => setIsErrorPopupVisible(false)} className="absolute top-2 right-2 text-black text-2xl bg-white w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">×</button>
                    </div>
                </div>
            )}

            {/* Animation */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.2s ease-out forwards;
                }
            `}</style>
        </main>
    );
}
