const darkModeToggle = document.getElementById('theme-toggle');
const body = document.body;
const navBar = document.getElementById('navBar');
const navMenu = document.getElementById('container-fluid');
const containerHeader  = document.getElementById('container-header');
const customContainer  = document.getElementById('custom-container');
const certificatenContainer  = document.getElementById('container-certificaten');
const footerContainer = document.getElementById('contact-page');


// controleren of het al actief is
if (localStorage.getItem('dark-mode-toggle') === 'enabled') {
    body.classList.add('dark-mode-toggle');
    darkModeToggle.textContent = "🌞";
    customContainer.classList.add('containers-dark');
    certificatenContainer.classList.add('containers-dark');
    footerContainer.classList.add('containers-dark');
    containerHeader.classList.add('container-header-dark');
    navBar.classList.remove('navbar-light', 'bg-light');
    navBar.classList.add('navbar-dark', 'bg-dark');
    navMenu.classList.add('navbar-dark');
    darkModeToggle.classList.remove('btn-outline-dark');
    darkModeToggle.classList.add('btn-outline-light');
    darkModeToggle.textContent = "🌞";
} else {
    darkModeToggle.textContent = "🌙";  // Als dark mode niet actief is
    darkModeToggle.classList.remove('btn-outline-light');
    darkModeToggle.classList.add('btn-outline-dark');
    navBar.classList.add('navbar-light', 'bg-light');
    navBar.classList.remove('navbar-dark', 'bg-dark');
    navMenu.classList.remove('navbar-dark');
}

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode-toggle') || 
    containerHeader.classList.contains('container-header-dark') || 
    navBar.classList.contains('theme-toggle-dark') || 
    customContainer.classList.contains('theme-toggle-dark') || 
    certificatenContainer.classList.contains('theme-toggle-dark') || 
    footerContainer.classList.contains('container-footer-dark') || 
    darkModeToggle.classList.contains('btn-outline-light')) {
        body.classList.remove('dark-mode-toggle');
        // na custom certifi en footer toevoeging
        customContainer.classList.remove('containers-dark');
        certificatenContainer.classList.remove('containers-dark');
        footerContainer.classList.remove('containers-dark');
        containerHeader.classList.remove('container-header-dark');
        localStorage.setItem('dark-mode-toggle', 'disabled');
        darkModeToggle.classList.remove('btn-outline-light');
        darkModeToggle.classList.add('btn-outline-dark');
        navBar.classList.add('navbar-light', 'bg-light');
        navBar.classList.remove('navbar-dark', 'bg-dark');
        navMenu.classList.remove('navbar-dark');
          darkModeToggle.textContent = "🌙";
      } else {
        body.classList.add('dark-mode-toggle');
        localStorage.setItem('dark-mode-toggle', 'enabled');
        darkModeToggle.textContent = "🌞";
        // na cvustom etc toevoeging
        certificatenContainer.classList.add('containers-dark');
        footerContainer.classList.add('containers-dark');
        customContainer.classList.add('containers-dark');
        // header container
        containerHeader.classList.add('container-header-dark');
        darkModeToggle.classList.remove('btn-outline-dark');
        darkModeToggle.classList.add('btn-outline-light');
        navBar.classList.remove('navbar-light', 'bg-light');
        navBar.classList.add('navbar-dark', 'bg-dark');

        navMenu.classList.add('navbar-dark');
    }
})