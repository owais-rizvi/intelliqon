'use client';

import { useState } from 'react';
import styles from './AuthModal.module.css';

export default function AuthModal({ product, onClose, onSuccess }) {
  const [mfaCode, setMfaCode] = useState('');
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Frontend Mock Validation
    if (mfaCode.length !== 6) {
      setError('Please enter a valid 6-digit MFA code.');
      return;
    }
    if (!isCaptchaChecked) {
      setError('Please complete the CAPTCHA verification.');
      return;
    }

    // Simulate a brief network request for realism during your presentation
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSuccess(product); // This triggers the unlocked view in the parent component
    }, 800); 
  };

  // If no product is selected, don't render anything
  if (!product) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        
        <h2 className={styles.title}>Secure Access Required</h2>
        <p className={styles.subtitle}>
          You are attempting to access proprietary specifications for <strong>{product.title}</strong>. Please authenticate to continue.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* MFA Input Section */}
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="mfa">MFA Verification Code</label>
            <input 
              type="text" 
              id="mfa"
              className={styles.input}
              placeholder="Enter 6-digit code"
              value={mfaCode}
              onChange={(e) => setMfaCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              disabled={isLoading}
            />
            <span className={styles.helperText}>Check your registered device or email.</span>
          </div>

          {/* Fake CAPTCHA UI */}
          <div 
            className={`${styles.captchaContainer} ${isLoading ? styles.disabled : ''}`} 
            onClick={() => !isLoading && setIsCaptchaChecked(!isCaptchaChecked)}
          >
            <div className={`${styles.checkbox} ${isCaptchaChecked ? styles.checked : ''}`}>
              {isCaptchaChecked && '✓'}
            </div>
            <span className={styles.captchaText}>I am not a robot</span>
            <div className={styles.captchaBrand}>
              <span className={styles.captchaLogo}>🔒</span>
              <span className={styles.captchaName}>reCAPTCHA</span>
            </div>
          </div>

          {/* Error Message */}
          {error && <p className={styles.errorText}>{error}</p>}

          <button type="submit" className={styles.submitButton} disabled={isLoading}>
            {isLoading ? 'Verifying...' : 'Verify & Access'}
          </button>
        </form>
      </div>
    </div>
  );
}