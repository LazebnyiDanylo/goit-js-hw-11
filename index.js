import{S as h,a as y,i as g}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new h(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:m,downloads:p})=>`<li class="gallery-item">
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
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),L.refresh()}function f(){u.innerHTML=""}function S(){d.classList.remove("hidden")}function n(){d.classList.add("hidden")}function $(o){S(),y.get("https://pixabay.com/api/",{params:{key:"49740043-bed2939fa2e4edbb3e5f2f338",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(f(),r.data.hits.length===0)return n(),g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});b(r.data.hits),n()}).catch(r=>{console.log(r)})}const l=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');l.addEventListener("submit",q);function q(o){if(o.preventDefault(),!c.value.trim()){l.reset(),f();return}$(c.value.trim()),l.reset()}
//# sourceMappingURL=index.js.map
