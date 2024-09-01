import{a as h,i as g,S as L}from"./assets/vendor-CZwys2ms.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const m=r=>`
  <li class="gallery-card">
    <a href="${r.largeImageURL}">
      <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
    </a>
    <div class="container-gallery-card">
    <p class="par-gallery-card">likes <span>${r.likes}</span></p>
    <p class="par-gallery-card">views <span>${r.views}</span></p>
    <p class="par-gallery-card">comments <span>${r.comments}</span> </p>
    <p class="par-gallery-card">downloads <span>${r.downloads}</span> </p>
    </div>
  </li>
  `;h.defaults.baseURL="https://pixabay.com/api/";const y=(r,t)=>{const a={params:{key:"45536153-cc603d9bdbd983a3052077003",q:r,orientation:"horizontal",page:t,per_page:15,image_type:"photo",safesearch:"true"}};return h.get("",a)},n=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery"),f=document.querySelector(".loader"),p=document.querySelector(".load-more");let l=1,d="";const b=()=>{f.classList.remove("is-hidden")},u=()=>{f.classList.add("is-hidden")},v=async r=>{try{r.preventDefault(),l=1,d=n.elements.user_query.value,b();const t=await y(d,l);if(console.log(t),t.data.hits.length===0){g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.innerHTML="",n.reset(),u();return}const a=t.data.hits.map(e=>m(e)).join("");i.innerHTML=a,n.reset(),u(),new L(".js-gallery a",{captionsData:"alt",captionDelay:250}).refresh(),p.classList.remove("is-hidden")}catch(t){console.log(t)}},w=async r=>{try{l++;const t=await y(d,l),a=t.data.hits.map(s=>m(s)).join("");i.insertAdjacentHTML("beforeend",a);const{height:o}=i.firstElementChild.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"});const e=Math.ceil(t.data.totalHits/15);l>=e&&(p.classList.add("is-hidden"),g.info({title:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(t){console.log(t)}};n.addEventListener("submit",v);p.addEventListener("click",w);
//# sourceMappingURL=index.js.map
