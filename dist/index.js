"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var HieroCheckoutButton = function (_a) {
    var appName = _a.appName, redirectUrl = _a.redirectUrl, email = _a.email;
    var handleCheckout = function () {
        var encodedRedirectUrl = encodeURIComponent(redirectUrl);
        var checkoutUrl = "https://hiero.gl/".concat(appName, "?redirect_url=").concat(encodedRedirectUrl);
        if (email) {
            checkoutUrl += "&email=".concat(encodeURIComponent(email));
        }
        window.location.href = checkoutUrl;
    };
    return (react_1.default.createElement("button", { onClick: handleCheckout, className: styles_module_css_1.default.checkoutButton, "aria-label": "Checkout with Hiero" },
        react_1.default.createElement("div", { className: styles_module_css_1.default.iconWrapper },
            react_1.default.createElement("img", { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0_0-aE3lQTKvjejCvz1zNOuHwtOp4aAvAi.jpeg", alt: "Hiero logo", className: styles_module_css_1.default.icon })),
        react_1.default.createElement("div", { className: styles_module_css_1.default.textWrapper },
            react_1.default.createElement("span", { className: styles_module_css_1.default.checkoutText }, "Checkout with"),
            react_1.default.createElement("span", { className: styles_module_css_1.default.hieroText }, "Hiero"))));
};
exports.default = HieroCheckoutButton;
