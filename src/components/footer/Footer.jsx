import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

import "./Footer.css";
const Footer = () => {
    return (
        <footer className="footer">
            <h3>Reach Us!</h3>
            <div className="flex gap-8 my-4">
                <span className="text-white"><Mail /></span>
                <span className="text-blue-400"><Facebook /></span>
                <span className="text-blue-500"><Twitter /></span>
                <span className="text-orange-400"><Instagram /></span>
            </div>
            <p>© 2021</p>
        </footer>
    );
}

export default Footer;