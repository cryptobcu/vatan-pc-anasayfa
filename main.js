import oneriler from "./data-json/relatedProducts.json" assert {type: 'json'};
import coksatanlar from "./data-json/bestSeller.json" assert {type: 'json'};

// Swiper Configuration
var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    freeMode: true,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1.6
      }
    }
  });

  document.getElementById("onecikansec").innerHTML = oneriler.map(item => 
    `
    <div class="col-2" id="onecikanitem">
              <div style="padding: 15px 0; color: #2196F3; font-size: 10px; font-weight: 800;">
                WEB'E ÖZEL
              </div>
              <img src="${item.img}" width="150" height="150" alt="">
              <div style="padding: 5px 0; font-size: 11px;">
                <i style="color: #FB8E01; margin-right: 2px;" class="fa-solid fa-star"></i>
                ${item.rating} <span style="color: #b6b0b0; font-weight: 500; padding-left: 3px;"> (${item.comment} Yorum)</span>
              </div>
              <div style="color: #b6b0b0; font-size: 10px;">
                ${item.code}
              </div>
              <div style="font-size: 12px; padding: 10px 15px; font-weight: bold;text-align:center;">
                ${item.title}
              </div>
              <div style="padding: 20px 0;color: #1E62AF;font-size: 28px;font-weight:700; ">
                <i class="fa-solid fa-turkish-lira-sign"></i>${item.price}
              </div>
              <div style="color: red; font-size: 10px; font-weight: 600;">
              YALNIZCA 2 ÜRÜN KALDI
              </div>
              <div class="hoversepet" style="padding: 10px 0 20px 0;">
                <span style="background-color: #ded7d7;color: #7c7b7b;padding: 5px;border-radius: 8px; font-size: 12px; font-weight: 600;">
                ${item.samedayshipping ? "BUGÜN KARGODA" : "YAKIN ZAMANDA KARGODA"}
                </span>
              </div>
              <div id="hoversepet2" style=" background-color: #2196F3;">
                        <span style="padding: 15px 30px;">
                          <a style="color: white;text-decoration: none;font-weight: 700;" href="#">
                            Sepete Ekle
                          </a>
                        </span>
                      </div>
            </div>
    `).join("");   