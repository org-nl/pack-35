document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelectorAll(".frequent-item");e.forEach(t=>{t.querySelector(".frequent-question").addEventListener("click",(function(){t.classList.toggle("active"),e.forEach(e=>{e!==t&&e.classList.contains("active")&&e.classList.remove("active")})}))});const t=document.querySelector(".menu-bar-toggle"),c=document.querySelector(".menu-bar-menu");let s=!1;t&&t.addEventListener("click",(function(){s=!s,t.classList.toggle("active"),c.classList.toggle("active")})),document.addEventListener("click",e=>{c.contains(e.target)||t.contains(e.target)||!s||(s=!1,t.classList.remove("active"),c.classList.remove("active"))});const n=document.querySelector(".site-header");window.addEventListener("scroll",(function(){window.scrollY>100?n.classList.add("scrolled"):n.classList.remove("scrolled")}))}));