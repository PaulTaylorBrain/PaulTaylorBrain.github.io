// An email link that avoids displaying or embedding a complete plain-text address.
// This may discourage basic address harvesters; it cannot prevent targeted scraping.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a.email-link[data-user][data-host]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const address = link.dataset.user + '@' + link.dataset.host;
      window.location.href = 'mailto:' + address;
    });
  });
});
