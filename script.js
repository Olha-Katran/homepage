document.addEventListener('DOMContentLoaded', function() {
    const showLinkedInButton = document.querySelector('.linkedin_button');
    const showTelegramButton = document.querySelector('.telegram_button');

    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.modal__close');
    const linkedinContent = document.querySelector('.modal__qr-code_linkedin');
    const telegramContent = document.querySelector('.modal__qr-code_telegram');


    showLinkedInButton.addEventListener('click', function() {
        telegramContent.style.display = 'none';
        linkedinContent.style.display = 'block';
        modal.style.display = 'block';
    });

    showTelegramButton.addEventListener('click', function() {
        linkedinContent.style.display = 'none';
        telegramContent.style.display = 'block';
        modal.style.display = 'block';
    })

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});