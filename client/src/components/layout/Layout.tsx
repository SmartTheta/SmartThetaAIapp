import { type ReactNode } from 'react';
import { TopHeader } from './TopHeader';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
    children: ReactNode;
    onSignUpClick?: () => void;
    onLoginClick?: () => void;
}

export const Layout = ({ children, onSignUpClick, onLoginClick }: LayoutProps) => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
            <TopHeader />
            <Navbar onSignUpClick={onSignUpClick} onLoginClick={onLoginClick} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer onLoginClick={onLoginClick} />
        </div>
    );
};
