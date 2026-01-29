import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import JuanHeadshot from '../assets/Juan_Headshot.jpg';

const JuanProfile = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#f6f1ef]">
            <Navbar />

            {/* Hero Section with Profile */}
            <section className="relative min-h-screen flex items-center justify-center bg-[#333333] overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="hidden md:block absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-5xl mx-auto px-8 py-20 relative z-10">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate('/about')}
                        className="absolute top-8 left-8 flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 group hover:gap-3"
                    >
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="font-wix-madefor text-sm font-medium">Back to About</span>
                    </button>

                    {/* Profile Card */}
                    <div className="flex flex-col items-center text-center pt-16">
                        {/* Profile Image with Animation */}
                        <div className="relative mb-10">
                            <div className="absolute inset-0 bg-white/10 rounded-full blur-2xl scale-110"></div>
                            <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105">
                                <img src={JuanHeadshot} alt="Juan Chahin" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Name and Title */}
                        <div className="mb-12">
                            <h1 className="text-6xl md:text-7xl font-bold font-custom text-white mb-4 tracking-tight">
                                Juan Chahin
                            </h1>
                            <div className="flex items-center justify-center gap-3 mb-2">
                                <div className="w-8 h-px bg-white/30"></div>
                                <p className="text-white/80 font-wix-madefor text-sm tracking-[0.3em] uppercase">
                                    FOUNDER
                                </p>
                                <div className="w-8 h-px bg-white/30"></div>
                            </div>
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex flex-col gap-3 w-full max-w-md">
                            <a
                                href="tel:+17864913497"
                                className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="text-white font-wix-madefor text-base font-semibold">Cellphone</div>
                                    <div className="text-white/60 font-wix-madefor text-sm">(786)-491-3497</div>
                                </div>
                                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href="tel:+17867890097"
                                className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="text-white font-wix-madefor text-base font-semibold">Telephone</div>
                                    <div className="text-white/60 font-wix-madefor text-sm">(786)-789-0097</div>
                                </div>
                                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href="https://www.instagram.com/procontractorsfl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="text-white font-wix-madefor text-base font-semibold">Follow me</div>
                                    <div className="text-white/60 font-wix-madefor text-sm">@procontractorsfl</div>
                                </div>
                                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/juan-chahin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:scale-105"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="text-white font-wix-madefor text-base font-semibold">Connect on LinkedIn</div>
                                    <div className="text-white/60 font-wix-madefor text-sm">Juan Chahin</div>
                                </div>
                                <svg className="w-5 h-5 text-white/40 group-hover:text-white/60 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JuanProfile;
