export const createGalleryCardTemplate = imgInfo => {
  return `
  <li class="gallery-card">
    <a href="${imgInfo.largeImageURL}">
      <img class="gallery-img" src="${imgInfo.webformatURL}" alt="${imgInfo.tags}" />
    </a>
    <div class="container-gallery-card">
    <p class="par-gallery-card">likes <span>${imgInfo.likes}</span></p>
    <p class="par-gallery-card">views <span>${imgInfo.views}</span></p>
    <p class="par-gallery-card">comments <span>${imgInfo.comments}</span> </p>
    <p class="par-gallery-card">downloads <span>${imgInfo.downloads}</span> </p>
    </div>
  </li>
  `;
};

