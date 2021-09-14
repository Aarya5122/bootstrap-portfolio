import React from "react"
import "./css/styles.css"
import FooterLocation from "./FooterLocation";
import FooterSocialIcons from "./FooterSocialIcons";
import FooterAbout from "./FooterAbout";

const Footer = () => {
    return(
        <footer className="footer text-center">
            <div className="container">
                <div className="row">
                    <FooterLocation/>
                    <FooterSocialIcons/>
                    <FooterAbout/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;