import { Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface FooterProps {
    onLoginClick?: () => void;
}

export const Footer = ({ onLoginClick }: FooterProps) => {
    return (
        <footer id="contact" className="bg-slate-950 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-12 border-b border-slate-800">

                    {/* Section 1: Company */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/theta1.png" alt="SmartTheta Logo" className="w-8 h-8 object-contain" />
                            <span className="text-2xl font-bold text-white tracking-tight">SmartTheta</span>
                        </div>
                        <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
                            AI-powered investment management for professional results. Automating wealth creation with algorithmic precision.
                        </p>
                        <div className="flex items-center gap-5">
                            <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-slate-400 hover:text-red-500 transition-colors"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Section 2: Product */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                            <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                            <li><button onClick={onLoginClick} className="hover:text-blue-400 transition-colors">Login</button></li>
                            <li><a href="#roadmap" className="hover:text-blue-400 transition-colors">Roadmap</a></li>
                        </ul>
                    </div>

                    {/* Section 3: Resources */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/blog" className="hover:text-blue-400 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Investment Guide</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">API Docs</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">System Status</a></li>
                        </ul>
                    </div>

                    {/* Section 4: Legal */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-blue-400 transition-colors">Risk Disclosure</a></li>

                        </ul>
                    </div>

                    {/* Section 5: Contact */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:support@smarttheta.com" className="hover:text-blue-400 transition-colors break-all">support@smarttheta.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>+91-XXXX-XXXXX</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>coimbatore, India</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs">Mon - Fri: 9:00 AM - 6:00 PM (IST)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex justify-center items-center">
                        <p className="text-sm text-slate-500 text-center">
                            © {new Date().getFullYear()} SmartTheta. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};