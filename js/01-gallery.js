import { galleryItems } from "./gallery-items.js";
console.log(galleryItems);
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(
      ({ description, original, preview }) =>
        `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"/>
      </a>
    </div>`
    )
    .join("")
);

gallery.addEventListener("click", activateModal);

function activateModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  document.addEventListener("keydown", onModalClose);
  const onClickItem = event.target.dataset.source;
  console.log(onClickItem);

  const instance = basicLightbox.create(
    `<img src="${onClickItem}" width="800" height="600">`
  );

  instance.show();

  function onModalClose(event) {
    if (event.code === "Escape") {
      instance.close();
    }

    document.removeEventListener("keydown", onModalClose);
  }
}
