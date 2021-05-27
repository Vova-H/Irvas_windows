import checkNumInputs from './modules/checkNumInputs';

'use strict';


const forms = (state) => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо за обращение',
        fall: 'Что то пошло не так'
    }

    checkNumInputs('input[name="user_phone"]');


    const postDate = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'post',
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(el => {
            el.value = '';
        });
    };

    form.forEach(el => {
        el.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            el.appendChild(statusMessage);

            const formData = new FormData(el);
            if (el.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }


            postDate('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => {
                    statusMessage.textContent = message.fall;
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                });
        });
    });
};


export default forms;