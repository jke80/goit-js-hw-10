const e=document.querySelector(".error");function n(n){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${n}`,{headers:{"x-api-key":"live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V"}}).then((e=>{if(!e.ok)throw new Error(Response.status);return e.json()})).catch((n=>{e.hidden=!1}))}e.hidden=!0;const t=document.querySelector(".breed-select"),r=document.querySelector(".cat-info"),a=document.querySelector(".loader"),c=document.querySelector(".error");t.addEventListener("change",(function(e){c.hidden||(c.hidden=!0);r.innerHTML="",a.hidden=!1;n(e.currentTarget.value).then((e=>{r.innerHTML=function(e){const{url:n,breeds:t}=e,{name:r,description:a,origin:c,temperament:i}=t[0];return`<img class='cat-info_img' src="${n}" alt="">\n  <div class="cat-info_container">\n  <h1 class="cat-info_title">${r}</h1>\n  <p class="cat-info_text">${a} </p>\n  <p class="cat-info_text"> <span class="cat-info_span"> Origin:</span> ${c}</p>\n  <p class="cat-info_temperament_text"><span class="cat-info_span">Temperament: </span>${i}</p>\n</div>`}(e[0]),a.hidden=!0}))})),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_AmCgmr4wWhxqcfZ1vI08fed7gUEeaUtmjvQEW8kH7YDtK22PVvZzkZBGbEks1d9V"}}).then((e=>{if(!e.ok)throw new Error(Response.status);return e.json()})).catch((n=>{e.hidden=!1})).then((e=>{console.log(e),t.innerHTML=function(e){return e.map((({id:e,name:n})=>`<option value="${e}">${n}</option>`)).join("")}(e),a.hidden=!0}));
//# sourceMappingURL=index.88631360.js.map