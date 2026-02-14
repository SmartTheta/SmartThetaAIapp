import { useNavigate } from 'react-router-dom';
import { OnboardingLayout } from '../../onboarding/layout/OnboardingLayout';
import { KYCComponent } from '../../dashboard/KYCComponent';

export const KYCOnboardingPage = () => {
    const navigate = useNavigate();

    const handleComplete = () => {
        // KYC Complete - navigate to Smart Basket (Stock Selection)
        navigate('/dashboard/stock-selection');
    };

    return (
        <OnboardingLayout currentStep={1}>
            <KYCComponent onComplete={handleComplete} />
        </OnboardingLayout>
    );
};
