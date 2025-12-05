function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}



/* code for the small java menu:

                <button class="btn__menu" onclick="openMenu()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="btn__menu--svg">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
        <div class="nav">
            <button class="btn__menu btn__menu--close" onclick="closeMenu()">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="light___StyledCloseIcon-lj69nl-14 fASujC">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            <div class="nav__links">
                <a class="nav__link">About</a>
                <a class="nav__link">Blog</a>
                <a class="nav__link">Pricing</a>
                <a class="nav__link">Contact Us</a>
                <a class="nav__link">Login</a>
                <a class="nav__link nav__link--primary">Sign Up</a>
            </div>
        </div> 
*/