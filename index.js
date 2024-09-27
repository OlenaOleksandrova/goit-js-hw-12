import{a as c}from"./assets/vendor-Cn2Vr82J.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i="https://pixabay.com/api/",l="46110623-cffeede45492ee1adb33fe3c4",u=6;async function f(n,o=1){const r=new URLSearchParams({key:l,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:u}),s=`${i}?${r}`;try{const e=await c.get(s);return console.log("fetchImages data:",e.data),e.data}catch(e){console.error("Error fetching images:",e)}}function d(n){return n.reduce((o,r)=>o+`<article class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
                </a>
                <ul class="info">
                    <li class="info-item"><strong>Likes:</strong> ${r.likes}</li>
                    <li class="info-item"><strong>Views:</strong> ${r.views}</li>
                    <li class="info-item"><strong>Comments:</strong> ${r.comments}</li>
                    <li class="info-item"><strong>Downloads:</strong> ${r.downloads}</li>
                </ul>
            </article>`,"")}const m=document.querySelector(".search-form"),g=document.querySelector(".gallery"),p=document.querySelector(".js-load-more");m.addEventListener("submit",y);async function y(n){n.preventDefault();const o=n.currentTarget,r=o.elements.query.value.trim();if(r)try{const s=await f(r);console.log("handleSubmit:",s);const e=d(s.hits);g.innerHTML=e,p.classList.remove("is-hidden")}catch(s){console.error("Error:",s)}finally{o.reset()}}
//# sourceMappingURL=index.js.map
