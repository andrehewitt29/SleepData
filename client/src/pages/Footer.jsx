import React from 'react';

function Footer() {
    return (
        <footer>
            <div class="footer-section" id="copyright">
                <p>Copyright &copy; 2023 Lifespantrust | All rights reserved</p>
            </div>
            <div class="footer-section" id="policy">
                <a href='PrivacyPolicy'>Privacy Policy</a>
                <a href='TermsAndConditions'>Terms and Conditions</a>
                <a href='ContactUs'>Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer;