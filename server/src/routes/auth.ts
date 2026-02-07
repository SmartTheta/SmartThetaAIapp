import { Router } from 'express';
import {
    checkEmailExists,
    checkPhoneExists,
    sendVerificationOtp,
    verifyVerificationOtp,
    register
} from '../controllers/authController';

const router = Router();

router.post('/check-email', checkEmailExists);
router.post('/check-phone', checkPhoneExists);
router.post('/send-otp', sendVerificationOtp);
router.post('/verify-otp', verifyVerificationOtp);
router.post('/register', register);

export default router;
