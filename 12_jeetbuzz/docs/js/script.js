function initSlider(){const e=document.querySelector(".swiper-wrapper"),t=document.querySelectorAll(".swiper-slide");if(!e||0===t.length)return;let n=0;const o=t.length,l=t[0].cloneNode(!0);function s(){!function(t){const l=100*-t+"%";e.style.transition=t===o?"none":"transform 0.5s ease",e.style.transform="translateX("+l+")",t===o&&setTimeout(()=>{e.style.transition="none",e.style.transform="translateX(0)",n=0},500),n=t%o}(n+1)}e.appendChild(l);let i=setInterval(s,5e3);const c=document.querySelector(".banner-section");c&&(c.addEventListener("mouseenter",()=>{clearInterval(i)}),c.addEventListener("mouseleave",()=>{i=setInterval(s,5e3)})),t.forEach(e=>{e.style.width="100%",e.style.float="left"}),e.style.width=100*(o+1)+"%",e.style.display="flex"}function initFaqToggle(){const e=document.querySelectorAll(".faq-item");e.forEach(t=>{t.querySelector(".faq-question").addEventListener("click",()=>{t.classList.toggle("active"),e.forEach(e=>{e!==t&&e.classList.remove("active")})})}),e.length>0&&e[0].classList.add("active")}function initMobileMenu(){const e=document.querySelector(".open-menu"),t=document.querySelector(".mobile__menu"),n=document.querySelector(".for-mobile-bg");if(e&&t&&n&&(e.addEventListener("click",()=>{t.style.display="block",t.classList.add("active"),n.style.display="block",document.body.style.overflow="hidden"}),n.addEventListener("click",o),!document.querySelector(".close-menu"))){const e=document.createElement("div");e.className="close-menu",e.innerHTML="&times;",e.style.position="absolute",e.style.top="15px",e.style.right="15px",e.style.fontSize="24px",e.style.color="#fff",e.style.cursor="pointer",t.appendChild(e),e.addEventListener("click",o)}function o(){t.classList.remove("active"),setTimeout(()=>{t.style.display="none",n.style.display="none"},300),document.body.style.overflow=""}}document.addEventListener("DOMContentLoaded",(function(){initSlider(),initFaqToggle(),initMobileMenu()}));