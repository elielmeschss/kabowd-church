import React from "react";

import FooterDesktop from "./layout/FooterDesktop";
import FooterMobile from "./layout/FooterMobile";


export default function Footer() {
    const styleFooter = {
        background: `#fafafa`
    };

    const isMobile = window.innerWidth <= 768

    return (
        <footer style={styleFooter}>
            {
                isMobile ? <FooterMobile /> : <FooterDesktop />
            }
        </footer>
    )
}