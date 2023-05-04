const icon = document.querySelector('.accordion__icon');
const header = document.querySelector('.accordion__header');
const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', (e) => {
    const activePanel = e.target.closest('.accordion__panel');
    if (!activePanel) return;
    toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
    const activeButton = panelToActivate.querySelector('.accordion__icon');
    const activePane = panelToActivate.querySelector('.accordion__content');
    const activePanelIsOpened = activeButton.getAttribute('aria-expanded');

    if(activePanelIsOpened === 'true') {
        panelToActivate.querySelector('.accordion__icon').setAttribute('aria-expanded', false);

        panelToActivate.querySelector('.accordion__content').setAttribute('aria-hidden', true);
    }else  {
        panelToActivate.querySelector('.accordion__icon').setAttribute('aria-expanded', true);

        panelToActivate.querySelector('.accordion__content').setAttribute('aria-hidden', false);
    }
}
