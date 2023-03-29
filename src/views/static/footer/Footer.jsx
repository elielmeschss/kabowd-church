import React from "react";

import FooterDesktop from "./layout/FooterDesktop";
import FooterMobile from "./layout/FooterMobile";


export default function Footer() {

    const isMobile = window.innerWidth <= 768

    return (
        <>
            {
                isMobile ? <FooterMobile /> : <FooterDesktop />
            }
        </>
    )
}