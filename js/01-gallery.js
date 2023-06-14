import { galleryItems } from "./gallery-items.js";
const galleryOfImages = document.querySelector("ul.gallery");
const imagesMarkup = createImageGallery(galleryItems);
galleryOfImages.insertAdjacentHTML("beforeend", imagesMarkup);
galleryOfImages.addEventListener("click", onGalleryItemClick);

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </li>`;
    })
    .join("");
}

function onGalleryItemClick(e) {
  e.preventDefault();

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const imgModal = basicLightbox.create(
    `<img src="${e.target.dataset.source}">`,
    {
      onShow: () => window.addEventListener("keydown", onEscKeyClose),
      onClose: () => window.removeEventListener("keydown", onEscKeyClose),
    }
  );
  imgModal.show();

  function onEscKeyClose(e) {
    if (e.code === "Escape") {
      imgModal.close();
    }
  }
}
