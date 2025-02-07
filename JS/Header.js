
function createHeader() {
    return `
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="top-nav">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand" href="Index.html">
                            <img src="Assets/images/logo.png" alt="Logo">
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="AboutUs.html">¿Quienes somos?</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Mapa.html">Mapa</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Archivo.html">Archivo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Contacto.html">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
}

// Function to load the header
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = createHeader();
    }
}

// Export the function for use in other files
export { loadHeader };
