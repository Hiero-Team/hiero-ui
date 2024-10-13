import React from 'react';
import styles from './styles.module.css';

interface HieroCheckoutButtonProps {
  appName: string;
  redirectUrl: string;
  email?: string;
}

const HieroCheckoutButton: React.FC<HieroCheckoutButtonProps> = ({ appName, redirectUrl, email }) => {
  const handleCheckout = () => {
    const encodedRedirectUrl = encodeURIComponent(redirectUrl);
    let checkoutUrl = `https://hiero.gl/${appName}?redirect_url=${encodedRedirectUrl}`;
    if (email) {
      checkoutUrl += `&email=${encodeURIComponent(email)}`;
    }
    window.location.href = checkoutUrl;
  };

  return (
    <button
      onClick={handleCheckout}
      className={styles.checkoutButton}
      aria-label="Checkout with Hiero"
    >
      <div className={styles.iconWrapper}>
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_0-aE3lQTKvjejCvz1zNOuHwtOp4aAvAi.jpeg"
          alt="Hiero logo"
          className={styles.icon}
        />
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.checkoutText}>Checkout with</span>
        <span className={styles.hieroText}>Hiero</span>
      </div>
    </button>
  );
};

export default HieroCheckoutButton;