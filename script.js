document.addEventListener('DOMContentLoaded', function() {
    const showButton = document.querySelector('.show-button');
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal__close');

    showButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
