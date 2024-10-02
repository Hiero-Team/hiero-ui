import React from 'react';

interface HieroCheckoutButtonProps {
  appName: string;
  redirectUrl: string;
  email?: string;
}

const HieroCheckoutButton: React.FC<HieroCheckoutButtonProps> = ({ appName, redirectUrl, email }) => {
  const handleCheckout = () => {
    const encodedRedirectUrl = encodeURIComponent(redirectUrl);
    let checkoutUrl = `https://hiero.gl/a/${appName}?redirect_url=${encodedRedirectUrl}`;
    if (email) {
      checkoutUrl += `&email=${encodeURIComponent(email)}`;
    }
    window.location.href = checkoutUrl;
  };

  return (
    <button
      onClick={handleCheckout}
      className="checkout-button"
      aria-label="Checkout with Hiero"
    >
      <div className="icon-wrapper">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_0-aE3lQTKvjejCvz1zNOuHwtOp4aAvAi.jpeg"
          alt="Hiero logo"
          className="icon"
        />
      </div>
      <div className="text-wrapper">
        <span className="checkout-text">Checkout with</span>
        <span className="hiero-text">Hiero</span>
      </div>
      <style jsx>{`
        .checkout-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s;
        }
        .icon-wrapper {
          width: 5rem;
          height: 5rem;
          background-color: black;
          border-radius: 50%;
          overflow: hidden;
          transition: all 0.3s;
        }
        .checkout-button:hover .icon-wrapper {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px #facc15, 8px 8px 0px 0px rgba(250,204,21,0.5);
        }
        .checkout-button:focus .icon-wrapper {
          outline: none;
          box-shadow: 0 0 0 4px #facc15, 0 0 0 8px rgba(0,0,0,0.3);
        }
        .icon {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }
        .checkout-button:hover .icon {
          transform: scale(1.1) rotate(12deg);
        }
        .text-wrapper {
          display: flex;
          align-items: baseline;
          margin-top: 0.5rem;
          font-family: Arial, sans-serif;
          white-space: nowrap;
        }
        .checkout-text {
          font-size: 0.875rem;
          font-weight: bold;
          color: #666;
          margin-right: 0.25rem;
        }
        .hiero-text {
          font-size: 1.25rem;
          font-weight: 900;
          color: #000;
        }
        @media (min-width: 640px) {
          .icon-wrapper {
            width: 6rem;
            height: 6rem;
          }
          .checkout-text {
            font-size: 1rem;
          }
          .hiero-text {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </button>
  );
};

export default HieroCheckoutButton;