import { galleryItems } from "./gallery-items.js";

const galleryOfImages = document.querySelector("ul.gallery");
const imagesMarkup = createImageGallery(galleryItems);

galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>`;
    })
    .join("");
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
