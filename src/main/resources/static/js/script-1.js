let jsTriggers1 = document.querySelectorAll('.js-tab-trigger1');

jsTriggers.forEach(function(trigger1) {
    trigger1.addEventListener('click', function() {
        let id1 = this.getAttribute('data-tab1'),
            content = document.querySelector('.js-tab-content1[data-tab1="'+id1+'"]'),
            activeTrigger1 = document.querySelector('.js-tab-trigger1.active'),
            activeContent1 = document.querySelector('.js-tab-content1.active');

        activeTrigger1.classList.remove('active');
        trigger1.classList.add('active');

        activeContent1.classList.remove('active');
        content.classList.add('active');
    });
});