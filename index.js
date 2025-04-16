import{S as h,a as y}from"./assets/vendor-CvPYLCcf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery"),f=document.querySelector(".loader"),g=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:m,downloads:p})=>`<li class="gallery-item">
        <a class="gallery-link" href=${s}>
            <img
                class="gallery-image"
                src=${a} 
                alt="${e}"
            />
            <ul class="gallery-descr">
                <li>
                    <h2>Likes</h2><p>${t}</p>
                </li>
                <li>
                    <h2>Views</h2><p>${i}</p>
                </li>
                <li>
                    <h2>Comments</h2><p>${m}</p>
                </li>
                <li>
                    <h2>Downloads</h2><p>${p}</p>
                </li>
            </ul>
        </a>
    </li>`).join("");d.insertAdjacentHTML("beforeend",r),g.refresh()}function n(){d.innerHTML=""}function b(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}function S(o){return b(),y.get("https://pixabay.com/api/",{params:{key:"49740043-bed2939fa2e4edbb3e5f2f338",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const l=document.querySelector(".form"),u=document.querySelector('[name="search-text"]');l.addEventListener("submit",$);function $(o){if(o.preventDefault(),!u.value.trim()){l.reset(),n();return}S(u.value.trim()).then(r=>{if(n(),r.data.hits.length===0)return c(),iziToast.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});L(r.data.hits),c()}).catch(r=>{console.log(r)}),l.reset()}
//# sourceMappingURL=index.js.map
