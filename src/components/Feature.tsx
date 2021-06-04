import React from 'react';
import responsive from '../assets/responsive-icon.png';
import money from '../assets/money-icon.png';
import users from '../assets/users-icon.png';

function Feature() {
    return (
        <section className="site-feature">
            <div>
                <img src={responsive} alt="responsive-icon" />
                <h3>
                    Beautiful themes are responsive and customizable.
                </h3>
                <p>
                    No design skills needed. You have complete control over the look and feel of your website, from it's layout, to content and colors.
                </p>
            </div>
            <div>
                <img src={money} alt="money-icon" />
                <h3>
                    Pricing as low as $29/month.
                </h3>
                <p>
                    Weather you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $29/month.
                </p>
            </div>
            <div>
                <img src={users} alt="users-icon" />
                <h3>
                    Trusted by over 1,000,000 businesses worldwide.
                </h3>
                <p>
                    Shopify handles everything from marketing and payments, to secure checkout and shipping.
                </p>
            </div>
        </section>
    );
}

export default Feature;
