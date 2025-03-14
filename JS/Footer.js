function createFooter() {
    return `
    <footer class="footer-bar">
        <img src="Assets/images/logo.png" alt="Footer Logo" class="footer-logo">
        <span>Xipil, derechos reservados</span>
        <button class="back-to-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' });">Subir</button>
    </footer>
    `;
}

function loadFooter() {
    const footerContainer = document.querySelector('footer');
    if (footerContainer) {
        footerContainer.innerHTML = createFooter();
    }
}

export { loadFooter };