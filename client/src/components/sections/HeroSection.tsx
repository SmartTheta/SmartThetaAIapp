import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const sentences = [
    {
        prefix: "What if your ",
        highlight: "portfolio worked",
        suffix: " for you — even while you’re relaxing?"
    },
    {
        prefix: "Ever wondered what having your own ",
        highlight: "fund manager",
        suffix: " feels like?"
    },
    {
        prefix: "What’s stopping your money from ",
        highlight: "performing better",
        suffix: "?"
    }
];

export const HeroSection = () => {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false); // Fade out
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % sentences.length);
                setIsVisible(true); // Fade in
            }, 500); // Wait for fade out to complete
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    const currentSentence = sentences[index];

    return (
        <div className="h-full flex flex-col justify-center items-start p-8 lg:p-12">
            <div className="min-h-[200px] mb-8">
                <h1
                    className={`text-4xl lg:text-5xl font-bold text-slate-900 leading-tight transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {currentSentence.prefix}
                    <span className="text-primary relative inline-block">
                        {currentSentence.highlight}
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                    {currentSentence.suffix}
                </h1>
            </div>

            <button className="group relative px-8 py-4 bg-primary text-white text-lg font-bold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 overflow-hidden">
                <span className="relative z-10">Try it now!!</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
        </div>
    );
};
