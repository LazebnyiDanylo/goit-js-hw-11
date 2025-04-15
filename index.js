import{S as h,a as y,i as g}from"./assets/vendor-BBSqv8W6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new h(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:m,downloads:p})=>`<li class="gallery-item">
        <a class="gallery-link" href=${a}>
            <img
                class="gallery-image"
                src=${s} 
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
    </li>`).join("");u.insertAdjacentHTML("beforeend",r),b.refresh()}function f(){u.innerHTML=""}function S(){d.removeAttribute("hidden")}function l(){d.setAttribute("hidden",!0)}function $(o){S(),y.get("https://pixabay.com/api/",{params:{key:"49740043-bed2939fa2e4edbb3e5f2f338",q:`${o}`,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(f(),r.data.hits.length===0)return l(),g.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});L(r.data.hits),l()}).catch(r=>{console.log(r)})}const n=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');n.addEventListener("submit",q);function q(o){if(o.preventDefault(),!c.value.trim()){n.reset(),f();return}$(c.value.trim()),n.reset()}
//# sourceMappingURL=index.js.map
