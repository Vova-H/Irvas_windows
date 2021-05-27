import checkNumInputs from './checkNumInputs';


const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');


    checkNumInputs('#width');
    checkNumInputs('#height');


    function actionToElems(event, elem, prop) {

        elem.forEach((el, i) => {
            el.addEventListener(event, () => {


                switch (el.nodeName) {
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (el.getAttribute('type') == 'checkbox') {
                            i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
                            elem.forEach((item, j) => {
                                item.checked = false;
                                if (i == j) {
                                    item.checked = true;
                                }
                            });
                        } else {
                            state[prop] = el.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = el.value;
                        break;
                }

                console.log(state);

            });
        });
    }

    actionToElems('click', windowForm, 'form');
    actionToElems('input', windowWidth, 'width');
    actionToElems('input', windowHeight, 'height');
    actionToElems('change', windowType, 'type');
    actionToElems('change', windowProfile, 'profile');




}



export default changeModalState;