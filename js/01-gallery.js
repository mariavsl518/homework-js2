import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');
const instance = basicLightbox.create(lightbox());

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
    
function lightbox() { 
    return `<img src="" width="800" height="600">`
}

function handlerClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return;
    } else {
        // add url link here
        return instance.show(()=> document.addEventListener('keydown', escapeClose))
    }
}

function escapeClose(event) {
        if (event.code === 'Escape') {
            return instance.close()
        }
    }