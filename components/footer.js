class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .footer {
                    background: #92400e;
                    color: white;
                    padding: 3rem 0 1rem;
                    margin-top: auto;
                }
                
                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.25rem;
                    margin-bottom: 1rem;
                    color: #fef3c7;
                }
                
                .footer-section p,
                .footer-section a {
                    color: #fed7aa;
                    text-decoration: none;
                    line-height: 1.6;
                }
                
                .footer-section a:hover {
                    color: white;
                    text-decoration: underline;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    width: 40px;
                    height: 40px;
                    background: rgba(254, 215, 170, 0.2);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .social-link:hover {
                    background: rgba(254, 215, 170, 0.4);
                    transform: scale(1.1);
                }
                
                .footer-bottom {
                    border-top: 1px solid rgba(254, 215, 170, 0.3);
                    padding-top: 1rem;
                    text-align: center;
                    color: #fed7aa;
                }
                
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-grid">
                        <div class="footer-section">
                            <h3>Epicure Express</h3>
                            <p>Votre destination culinaire pour des moments inoubliables et des saveurs exceptionnelles.</p>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="instagram"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="twitter"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Contact</h3>
                            <p>123 Avenue Gourmande</p>
                            <p>75001 Paris, France</p>
                            <p>📞 01 23 45 67 89</p>
                            <p>✉️ contact@epicure-express.fr</p>
                        </div>
                        
                        <div class="footer-section">
                            <h3>Horaires</h3>
                            <p>Lun - Ven: 11h30 - 14h30 / 19h00 - 23h00</p>
                            <p>Sam - Dim: 12h00 - 23h00</p>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2024 Epicure Express. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);