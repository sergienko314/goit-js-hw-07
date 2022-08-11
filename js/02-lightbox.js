import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
console.log(galleryItems);

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      ({ original, preview, description }) =>
        `<a class="gallery__item" href='${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
      />
    </a>`
    )
    .join("")
);
console.log(gallery);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
