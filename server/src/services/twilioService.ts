import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const verifySid = process.env.TWILIO_VERIFY_SID;

console.log('Twilio Config Loaded:', {
    hasAccountSid: !!accountSid,
    hasAuthToken: !!authToken,
    verifySid: verifySid ? `${verifySid.substring(0, 4)}...${verifySid.substring(verifySid.length - 4)}` : 'MISSING',
    sidLength: verifySid?.length,
    sidPrefix: verifySid?.substring(0, 2)
});

const client = twilio(accountSid, authToken);

export const sendOtp = async (to: string, channel: 'sms' | 'email') => {
    try {
        if (!verifySid) {
            throw new Error(`TWILIO_VERIFY_SID is missing in environment variables.`);
        }
        console.log(`[Twilio] Sending ${channel} OTP to: ${to}`);

        const verification = await client.verify.v2.services(verifySid)
            .verifications
            .create({ to, channel });
        return verification;
    } catch (error: any) {
        console.error('Twilio Send Error:', error.message);
        throw error;
    }
};

export const verifyOtp = async (to: string, code: string) => {
    try {
        const verificationCheck = await client.verify.v2.services(verifySid!)
            .verificationChecks
            .create({ to, code });
        return verificationCheck;
    } catch (error: any) {
        console.error('Twilio Verify Error:', error.message);
        throw error;
    }
};
