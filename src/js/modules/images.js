import calcScroll from './calcScroll';

const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    const scroll = calcScroll();

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.display = 'none';
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';

    imgPopup.appendChild(bigImage);


    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = 'visible';
            document.body.style.marginRight = 0;
        }
    });

};

export default images;