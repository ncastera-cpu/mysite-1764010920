class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .header {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(10px);
                    border-bottom: 1px solid rgba(254, 215, 170, 0.3);
                    padding: 1rem 0;
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #92400e;
                    text-decoration: none;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                    align-items: center;
                }
                
                .nav-link {
                    color: #57534e;
                    text-decoration: none;
                    font-weight: 500;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    transition: all 0.3s ease;
                }
                
                .nav-link:hover {
                    color: #92400e;
                    background: rgba(254, 215, 170, 0.3);
                }
                
                .nav-link.active {
                    color: #92400e;
                    background: rgba(254, 215, 170, 0.5);
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: #57534e;
                    cursor: pointer;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background: white;
                        flex-direction: column;
                        padding: 1rem;
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
                    }
                    
                    .nav-links.mobile-open {
                        display: flex;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <header class="header">
                <div class="nav-container">
                    <a href="index.html" class="logo">Epicure Express 🍽️</a>
                    
                    <button class="mobile-menu-btn">
                        <i data-feather="menu"></i>
                    </button>
                    
                    <nav class="nav-links">
                        <a href="index.html" class="nav-link ${window.location.pathname.includes('index.html') || window.location.pathname === '/' ? 'active' : ''}">
                            Accueil
                        </a>
                        <a href="menu.html" class="nav-link ${window.location.pathname.includes('menu.html') ? 'active' : ''}">
                            Menu
                        </a>
                        <a href="#" class="nav-link">À Propos</a>
                        <a href="#" class="nav-link">Contact</a>
                    </nav>
                </div>
            </header>
        `;

        // Mobile menu functionality
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            
            // Update icon
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('mobile-open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });

        // Close mobile menu when clicking on a link
        const navLinkElements = this.shadowRoot.querySelectorAll('.nav-link');
        navLinkElements.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('mobile-open');
                mobileMenuBtn.querySelector('i').setAttribute('data-feather', 'menu');
                feather.replace();
            });
        });
    }
}

customElements.define('custom-header', CustomHeader);