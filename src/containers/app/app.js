import './app.pcss';

history.pushState({}, document.title, location.href);

window.addEventListener('popstate', event => {
    event.preventDefault();
    location.reload();
});
