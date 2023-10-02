import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', markup(galleryItems))
gallery.addEventListener('click', handlerClick)

function markup(arr) { 
    return arr.map(({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li>`).join('');
}

function handlerClick(event) {
    event.preventDefault();

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`);
    if (event.target === event.currentTarget) {
        return;
    } else {
        return instance.show(()=> document.addEventListener('keydown', escapeClose))
    }

    function escapeClose(event) {
        if (event.code === 'Escape') {
            document.removeEventListener('keydown', escapeClose)
            return instance.close()
        }
    }
}

