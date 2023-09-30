import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('afterbegin', markup(galleryItems))
gallery.addEventListener('click', handlerClick())

function markup(arr) { 
    return arr.map(({ preview, original, description }) =>
        `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
            />
        </a>
        </li>`).join('');
}

const instance = basicLightbox.create(`
	 <img
            class="gallery__image"
            src="${original}"
            data-source="large-image.jpg"
            alt="${description}"
            />
`)

function handlerClick(event) { 
    event.preventDefault();
    instance.show();
     if (event.target === event.currentTarget) {
    return;
  }
}

console.log(galleryItems);
