import{a as S,S as E}from"./assets/vendor-BHxofHDG.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",P="46110623-cffeede45492ee1adb33fe3c4",g=15;async function h(t,s=1){const r=new URLSearchParams({key:P,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:g}),n=`${v}?${r}`;try{const e=await S.get(n);return console.log("fetchImages data:",e.data),e.data}catch(e){console.error("Error fetching images:",e)}}function y(t){return t.reduce((s,r)=>s+`<article class="gallery-item">
                <a href="${r.largeImageURL}" class="gallery-link">
                    <img src="${r.webformatURL}" alt="${r.tags}" class="gallery-image" />
                </a>
                <ul class="info">
                    <li class="info-item"><strong>Likes:</strong> ${r.likes}</li>
                    <li class="info-item"><strong>Views:</strong> ${r.views}</li>
                    <li class="info-item"><strong>Comments:</strong> ${r.comments}</li>
                    <li class="info-item"><strong>Downloads:</strong> ${r.downloads}</li>
                </ul>
            </article>`,"")}const q=document.querySelector(".search-form"),c=document.querySelector(".gallery"),d=document.querySelector(".js-load-more"),f=document.querySelector(".message"),p=document.querySelector(".loader");let a=1,i=null,m=0,l=null;q.addEventListener("submit",M);d.addEventListener("click",$);async function M(t){t.preventDefault();const s=t.currentTarget;if(i=s.elements.query.value.trim(),!!i){a=1,c.innerHTML="",d.classList.add("is-hidden");try{L();const r=await h(i,a);if(m=Math.ceil(r.totalHits/g),r.totalHits===0){b("Sorry, there are no images matching your search query. Please try again!");return}const n=y(r.hits);c.innerHTML=n,l?l.refresh():l=new E(".gallery a",{captionsData:"alt",captionDelay:250}),a<m&&d.classList.remove("is-hidden")}catch(r){console.error("Error:",r)}finally{w(),s.reset()}}}async function $(){a+=1;try{L();const t=await h(i,a),s=y(t.hits);c.insertAdjacentHTML("beforeend",s),l.refresh(),a>=m&&(d.classList.add("is-hidden"),b("We're sorry, but you've reached the end of search results.")),x()}catch(t){console.error("Error:",t)}finally{w()}}function L(){p.style.display="block"}function w(){p.style.display="none"}function b(t){f.textContent=t,f.classList.remove("is-hidden"),setTimeout(()=>{f.classList.add("is-hidden")},3e3)}function x(){const t=c.lastElementChild;if(t){const s=t.getBoundingClientRect().height;window.scrollBy({top:s*2,left:0,behavior:"smooth"})}else console.error("Were sorry, but you have reached the end of search results.")}
//# sourceMappingURL=index.js.map
