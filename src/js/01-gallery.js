import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Initial html element to add new pictures
const gallery = document.querySelector("ul.gallery");

// New structure to add to the initial html document
const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img 
    class="gallery__image"
    src="${preview}" 
    data-source="${original}"
    alt="${description}"/>
    </a>
 </li>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);
console.log(galleryItems);

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
  const image = evt.target;
  if (image.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${image.dataset.source}" class="gallery__item">
    </div>
`);

  instance.show();
}