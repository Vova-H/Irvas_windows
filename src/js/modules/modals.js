import calcScroll from './calcScroll';

'use strict';

const modals = () => {

    function showModal(triggerSelector, modalSelector, closeSelector, canClose = true) {

        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll('[data-modal]');
        const scroll = calcScroll();

        trigger.forEach(el => {
            el.addEventListener('click', (e) => {

                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(el => {
                    el.style.display = 'none';
                });


                modal.style = 'display: block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;
                // document.body.classList.add('modal-open');
            });

        });

        close.addEventListener('click', () => {

            windows.forEach(el => {
                el.style.display = 'none';
            });

            modal.style = 'dipslay:none';
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = 0;

            // document.body.classList.remove('modal-open');

        });


        modal.addEventListener('click', (e) => {
            if (e.target === modal && canClose) {
                windows.forEach(el => {
                    el.style.display = 'none';
                });
                modal.style = 'dipslay:none';
                document.body.style.overflow = 'visible';


                // document.body.classList.remove('modal-open');
            }

        });
    }



    function showTimeModal(modalSelector, closeSelector, time) {

        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);

        close.addEventListener('click', () => {
            modal.style = 'dipslay:none';
            document.body.style.overflow = 'visible';
            // document.body.classList.remove('modal-open');
        });


        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style = 'dipslay:none';
                document.body.style.overflow = 'visible';
                // document.body.classList.remove('modal-open');
            }
        });

    }

    showModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close', false);
    showModal('.phone_link', '.popup_engineer', ' .popup_close', false);
    // showTimeModal('.popup', '.popup_close', 6000);
    showModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    showModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    showModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);


}

export default modals;