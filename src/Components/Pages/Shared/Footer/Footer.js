import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-white text-base-content rounded mt-16">
                <div className="grid grid-flow-col gap-4">
                    <Link>About us</Link>
                    <Link>Contact us</Link>
                    <Link>Terms & Conditions</Link>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by BIKE PARLOUR | CHOOSE YOUR DREAM BIKE</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;