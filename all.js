document.addEventListener('DOMContentLoaded', function() {
    var footerElement = document.querySelector('.md-footer .md-copyright');
    if (footerElement) {
      footerElement.style.display = 'none';
    }
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.querySelector('.md-header__button--theme');
    if (themeToggle) {
      const discordButton = document.createElement('a');
      discordButton.href = 'YOUR_DISCORD_INVITE_LINK';
      discordButton.className = 'md-header__button md-icon';
      discordButton.setAttribute('aria-label', 'Join our Discord');
      discordButton.innerHTML = '<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58 0-.287-.01-1.046-.015-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.467-2.382 1.235-3.222-.125-.303-.535-1.527.115-3.176 0 0 1.005-.322 3.3 1.23.955-.265 1.98-.398 3-.403 1.02.005 2.045.138 3 .403 2.28-1.552 3.285-1.23 3.285-1.23.655 1.649.245 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.805 5.62-5.475 5.92.43.37.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.215.697.825.58C20.565 21.795 24 17.297 24 12c0-6.627-5.373-12-12-12z"/></svg>';
      themeToggle.parentNode.insertBefore(discordButton, themeToggle.nextSibling);
    }
  });
  