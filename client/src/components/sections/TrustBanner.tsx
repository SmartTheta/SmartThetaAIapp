import { ShieldCheck } from 'lucide-react';

export const TrustBanner = () => {
    const partners = [
        { name: 'Zerodha', className: 'font-bold text-xl' },
        { name: 'Shoonya', className: 'font-bold text-xl' },
        { name: 'Angel One', className: 'font-bold text-xl' },
        { name: 'NSE', className: 'font-bold text-xl tracking-widest' },
        { name: 'BSE', className: 'font-bold text-xl tracking-widest' },
    ];

    return (
        <div className="w-full bg-[#F7F9FC] border-y border-[#E5E7EB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="flex flex-col items-center gap-10">

                    {/* Top Text */}
                    <p className="text-sm font-semibold text-[#333333] tracking-wide uppercase text-center opacity-70">
                        Trusted by investors, powered by technology
                    </p>

                    {/* Logos Grid */}
                    <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                        {partners.map((partner) => (
                            <div key={partner.name} className={`text-[#333333] ${partner.className}`}>
                                {partner.name}
                            </div>
                        ))}
                    </div>

                    {/* Security Badge */}
                    <div className="flex items-center gap-2 text-[#333333] bg-white px-5 py-2.5 rounded-full border border-[#E5E7EB] shadow-sm text-sm font-medium mt-4">
                        <ShieldCheck className="w-5 h-5 text-[#2563EB]" />
                        <span>Bank-level security | 256-bit encryption</span>
                    </div>

                </div>
            </div>
        </div>
    );
};
