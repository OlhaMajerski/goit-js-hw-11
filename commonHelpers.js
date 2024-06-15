import{S as u,i as f}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const d="44388505-390a672441da303f6d08bc48a";function m(e){const o="https://pixabay.com",n="/api/",s=new URLSearchParams({key:d,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=`${o}${n}?${s}`;return fetch(r).then(t=>{if(!t.ok)throw new Error("Network response was not ok.");return t.json()}).catch(t=>{throw console.error("Fetching error: ",t),t})}const p="/goit-js-hw-11/assets/alert-icon-8e3df674.svg";let h=new u(".gallery a",{overlayOpacity:.9,captionDelay:250,captionsData:"alt"});const y=document.querySelector(".gallery"),l=document.querySelector(".loader");function g(e){return`<a href="${e.largeImageURL}" class="gallery-item">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p>
          <b>Likes:</b> ${e.likes}
        </p>
        <p>
          <b>Views:</b> ${e.views}
        </p>
        <p>
          <b>Comments:</b> ${e.comments}
        </p>
        <p>
          <b>Downloads:</b> ${e.downloads}
        </p>
      </div>
    </a>`}function b(e){return e.map(g).join("")}function L(e){const o=b(e);y.innerHTML=o,h.refresh()}function c(e){f.error({message:e,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topLeft",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:p,iconColor:"#fff"})}function w(){l.style.display="block"}function i(){l.style.display="none"}document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".search-form").addEventListener("submit",o=>{o.preventDefault();const n=o.target.elements.query.value.trim();if(!n){c("Please enter a search term.");return}w(),m(n).then(s=>{i(),s.hits.length===0?c("Sorry, there are no images matching your search query. Please try again!"):L(s.hits)}).catch(()=>{i(),c("An error occurred while fetching images.")})})});
//# sourceMappingURL=commonHelpers.js.map
