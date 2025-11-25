import{a as l,S as c,i as d}from"./assets/vendor-DeKi_rfE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function f(o){return l.get("https://pixabay.com/api/",{params:{key:"53395315-8c17e52e5e4d7b2c0ffc17b33",q:o,image_type:"photo",safesearch:!0,orientation:"horizontal"}}).then(e=>e.data)}const i={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};let u=new c(".gallery a",{captionDelay:250,captionsData:"alt"});function m(o){i.gallery.innerHTML=o.map(e=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </li>
    `).join(""),u.refresh()}function p(){i.gallery.innerHTML=""}function y(){i.loader.classList.remove("hiden")}function g(){i.loader.classList.add("hiden")}const h={form:document.querySelector(".form")};h.form.addEventListener("submit",o=>{o.preventDefault();const e=o.target.elements.searchText.value;p(),y(),f(e).then(a=>{a.totalHits==0&&d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(a.hits)}).catch(a=>console.log(a)).finally(()=>{g()}),o.target.reset()});
//# sourceMappingURL=index.js.map
