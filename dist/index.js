"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var HieroCheckoutButton = function (_a) {
    var appName = _a.appName, redirectUrl = _a.redirectUrl, email = _a.email;
    var handleCheckout = function () {
        var encodedRedirectUrl = encodeURIComponent(redirectUrl);
        var checkoutUrl = "https://hiero.gl/a/".concat(appName, "?redirect_url=").concat(encodedRedirectUrl);
        if (email) {
            checkoutUrl += "&email=".concat(encodeURIComponent(email));
        }
        window.location.href = checkoutUrl;
    };
    return (react_1.default.createElement("button", { onClick: handleCheckout, className: "checkout-button", "aria-label": "Checkout with Hiero" },
        react_1.default.createElement("div", { className: "icon-wrapper" },
            react_1.default.createElement("img", { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_0-aE3lQTKvjejCvz1zNOuHwtOp4aAvAi.jpeg", alt: "Hiero logo", className: "icon" })),
        react_1.default.createElement("div", { className: "text-wrapper" },
            react_1.default.createElement("span", { className: "checkout-text" }, "Checkout with"),
            react_1.default.createElement("span", { className: "hiero-text" }, "Hiero")),
        react_1.default.createElement("style", { jsx: true }, "\n        .checkout-button {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          background-color: transparent;\n          border: none;\n          cursor: pointer;\n          padding: 0;\n          transition: all 0.3s;\n        }\n        .icon-wrapper {\n          width: 5rem;\n          height: 5rem;\n          background-color: black;\n          border-radius: 50%;\n          overflow: hidden;\n          transition: all 0.3s;\n        }\n        .checkout-button:hover .icon-wrapper {\n          transform: scale(1.1);\n          box-shadow: 0 0 0 4px #facc15, 8px 8px 0px 0px rgba(250,204,21,0.5);\n        }\n        .checkout-button:focus .icon-wrapper {\n          outline: none;\n          box-shadow: 0 0 0 4px #facc15, 0 0 0 8px rgba(0,0,0,0.3);\n        }\n        .icon {\n          width: 100%;\n          height: 100%;\n          object-fit: cover;\n          transition: transform 0.3s;\n        }\n        .checkout-button:hover .icon {\n          transform: scale(1.1) rotate(12deg);\n        }\n        .text-wrapper {\n          display: flex;\n          align-items: baseline;\n          margin-top: 0.5rem;\n          font-family: Arial, sans-serif;\n          white-space: nowrap;\n        }\n        .checkout-text {\n          font-size: 0.875rem;\n          font-weight: bold;\n          color: #666;\n          margin-right: 0.25rem;\n        }\n        .hiero-text {\n          font-size: 1.25rem;\n          font-weight: 900;\n          color: #000;\n        }\n        @media (min-width: 640px) {\n          .icon-wrapper {\n            width: 6rem;\n            height: 6rem;\n          }\n          .checkout-text {\n            font-size: 1rem;\n          }\n          .hiero-text {\n            font-size: 1.5rem;\n          }\n        }\n      ")));
};
exports.default = HieroCheckoutButton;
