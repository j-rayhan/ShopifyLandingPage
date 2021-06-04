import React from 'react';
import logo from '../assets/shopify_logo.png';
import headerBanner from '../assets/img-1.png';

function Header() {
    return (
        <section className="site-header">
            <img src={logo} alt="logo" className="logo" />
            <div>
                <h1>Sell online with shopify</h1>
                <p>Trusted by over 1,000,000 businesses worldwide</p>
            </div>

            <div className="free-trial-form">
                <input type="text" className="input" placeholder="Enter your email address" />
                <button>Start free trial</button>
            </div>
            <p className="note">
                Try Shopify free for 14 days, no credit card required. By entering your email, you agree to receive marketing emails from Shopify.
        </p>

            <img src={headerBanner} alt="banner" className="header-banner" />
        </section>
    );
}

export default Header;
