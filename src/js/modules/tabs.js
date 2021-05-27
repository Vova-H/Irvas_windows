'use strict';

const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    const hideTabContant = () => {
        content.forEach(el => {
            el.style.display = 'none';
        });

        tab.forEach(el => {
            el.classList.remove(activeClass);
        });
    };

    const showTabContant = (i = 0) => {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    };

    hideTabContant();
    showTabContant();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
            tab.forEach((el, nr) => {
                if (target == el || target.parentNode == el) {
                    hideTabContant();
                    showTabContant(nr);
                }
            });
        }
    });
};


export default tabs;