import{a as c}from"./assets/vendor-Cn2Vr82J.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="https://pixabay.com/api/",u="46110623-cffeede45492ee1adb33fe3c4",f=6;async function d(n,o=1){const r=new URLSearchParams({key:u,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:o,per_page:f}),s=`${l}?${r}`;try{const e=await c.get(s);return console.log("fetchImages data:",e.data),e.data}catch(e){console.error("Error fetching images:",e)}}function m(n){return n.reduce((o,r)=>o+`<article class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
                </a>
                <ul class="info">
                    <li class="info-item"><strong>Likes:</strong> ${r.likes}</li>
                    <li class="info-item"><strong>Views:</strong> ${r.views}</li>
                    <li class="info-item"><strong>Comments:</strong> ${r.comments}</li>
                    <li class="info-item"><strong>Downloads:</strong> ${r.downloads}</li>
                </ul>
            </article>`,"")}const g=document.querySelector(".search-form"),p=document.querySelector(".gallery"),i=document.querySelector(".js-load-more");let y=1;g.addEventListener("submit",h);async function h(n){n.preventDefault();const o=n.currentTarget,r=o.elements.query.value.trim();if(r)try{const s=await d(r);console.log("handleSubmit:",s);const e=m(s.hits);p.innerHTML=e,s.totalHits>y*6?i.classList.remove("is-hidden"):i.classList.add("is-hidden")}catch(s){console.error("Error:",s)}finally{o.reset()}}
//# sourceMappingURL=index.js.map
