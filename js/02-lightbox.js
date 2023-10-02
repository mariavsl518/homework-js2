import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', markup(galleryItems))
gallery.addEventListener('click', handlerClick)


function markup(arr) { 
    return arr.map(({ preview, original, description }) =>
        `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `).join('');
}
const { description } = galleryItems;
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function handlerClick(event) {
    event.preventDefault();
}


console.dir(lightbox);
console.log(galleryItems);
