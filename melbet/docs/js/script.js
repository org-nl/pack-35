document.addEventListener("DOMContentLoaded",(function(){let e=(new Date).getFullYear();document.querySelector("#current-year").innerHTML=e;const t=document.querySelector(".youtube-container-dmvn2w");if(t){const e=t.querySelector(".youtube-placeholder-dmvn2w"),n=t.getAttribute("data-video-id");e.addEventListener("click",(function(){const e=document.createElement("iframe");e.setAttribute("src",`https://www.youtube.com/embed/${n}?autoplay=1`),e.setAttribute("title","Melbet Ghana Introduction"),e.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"),e.setAttribute("allowfullscreen",""),e.setAttribute("loading","lazy"),t.innerHTML="",t.appendChild(e)}))}}));