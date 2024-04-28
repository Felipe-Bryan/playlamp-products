(()=>{"use strict";var e={549:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categoryItem=void 0,t.categoryItem=function(e){return`<div class="accordion-item">\n    <h2 class="accordion-header" id="heading-${e.id}">\n    <button\n        class="accordion-button collapsed"\n        type="button"\n        data-bs-toggle="collapse"\n        data-bs-target="#collapse-${e.id}"\n        aria-expanded="false"\n        aria-controls="collapse-${e.id}">\n        ${e.name}\n    </button>\n    </h2>\n        <div\n        id="collapse-${e.id}"\n        class="accordion-collapse collapse"\n        aria-labelledby="heading-${e.id}"\n        data-bs-parent="#fullList">\n        <div class="accordion-body p-1 category" id="${e.name}">\n        </div>\n    </div>\n</div>`}},943:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productToList=void 0,t.productToList=function(e){return`<div class="container p-0">\n    <div class="row m-0 p-1">\n        <div class="col-8 p-0 d-flex align-items-center">${e.name}</div>\n        <div class="col p-0 d-flex justify-content-end align-items-center">\n            <button type="button" class="btn btn-danger removeBtn" id="remove-${e.id}">-</button>\n            <div class="m-2 w-50 d-flex justify-content-center align-items-center" id="${e.id}-qt">${e.qt}</div>\n            <button type="button" class="btn btn-success addBtn" id="add-${e.id}">+</button>\n        </div>\n    </div>\n    <hr class="m-0" />\n</div>`}},329:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productToTableMarked=void 0,t.productToTableMarked=function(e){if(e.qt>0)return`<tr>\n        <td>${e.name}</td>\n        <td class="text-center">${e.qt}</td>\n        <td class="d-flex justify-content-end align-items-center">R$ ${(e.price*e.qt).toFixed(2)}</td>\n    </tr>`}},420:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.categoriesDB=void 0,t.categoriesDB=[{id:"ca1",name:"Interruptor-Tomadas"},{id:"ca2",name:"Iluminação"},{id:"ca3",name:"Roteador"},{id:"ca4",name:"Cartão de Memória"},{id:"ca5",name:"Segurança"},{id:"ca6",name:"Controle IR"},{id:"ca7",name:"Sensores"},{id:"ca8",name:"Cortinas"},{id:"ca9",name:"Outros"},{id:"ca10",name:"Assistentes"}]},634:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.productsDB=void 0,t.productsDB=[{id:"1",name:"Interruptor 4x2 1B",price:74.95,category:"Interruptor-Tomadas"},{id:"2",name:"Interruptor 4x2 2B",price:78.99,category:"Interruptor-Tomadas"},{id:"3",name:"Interruptor 4x2 3B",price:68.72,category:"Interruptor-Tomadas"},{id:"4",name:"Interruptor 4x2 4B",price:99.99,category:"Interruptor-Tomadas"},{id:"5",name:"Interruptor 4x4 4B",price:139.99,category:"Interruptor-Tomadas"},{id:"6",name:"Interruptor 4x4 6B",price:165.99,category:"Interruptor-Tomadas"},{id:"7",name:"Interruptor 4x4 8B",price:209.99,category:"Interruptor-Tomadas"},{id:"8",name:"Interruptor 4x2 1B + 1T",price:130,category:"Interruptor-Tomadas"},{id:"9",name:"Interruptor 4x2 1B + 2T",price:0,category:"Interruptor-Tomadas"},{id:"10",name:"Interruptor 4x2 2B + 1T",price:144.99,category:"Interruptor-Tomadas"},{id:"11",name:"Interruptor 4x4 4B + 2T",price:174.99,category:"Interruptor-Tomadas"},{id:"12",name:"Controle ventilador smart",price:0,category:"Interruptor-Tomadas"},{id:"13",name:"Sonoff mini",price:0,category:"Interruptor-Tomadas"},{id:"14",name:"Interruptor R2 2S",price:39.99,category:"Interruptor-Tomadas"},{id:"15",name:"Interruptor R2 3S",price:69,category:"Interruptor-Tomadas"},{id:"16",name:"Interrutor paralelo RF433 2B",price:49.99,category:"Interruptor-Tomadas"},{id:"17",name:"Tomada sobrepor wifi 10A",price:49.99,category:"Interruptor-Tomadas"},{id:"18",name:"Tomada sobrepor wifi 16A",price:61.36,category:"Interruptor-Tomadas"},{id:"19",name:"Tomada embutir 20A 1T",price:119.99,category:"Interruptor-Tomadas"},{id:"20",name:"Interruptor cortina",price:124.99,category:"Interruptor-Tomadas"},{id:"21",name:"Tomada c/USB 2S",price:165.51,category:"Interruptor-Tomadas"},{id:"22",name:"Lampada Led",price:0,category:"Iluminação"},{id:"23",name:"Lampada Led RGB",price:39.54,category:"Iluminação"},{id:"24",name:"Fita Led",price:0,category:"Iluminação"},{id:"25",name:"Fita led RGB 10m",price:169.99,category:"Iluminação"},{id:"26",name:"Fita Led RGB 5m",price:31.5,category:"Iluminação"},{id:"27",name:"Plafon Led Embutir",price:0,category:"Iluminação"},{id:"28",name:"Plafon led RGB Embutir 18w redondo",price:139.32,category:"Iluminação"},{id:"29",name:"Plafon led RGB Embutir 24w redondo",price:144.99,category:"Iluminação"},{id:"30",name:"Plafon Led Sobrepor",price:0,category:"Iluminação"},{id:"31",name:"Plafon led RGB Sobrepor 24w quadrado",price:170.45,category:"Iluminação"},{id:"32",name:"Plafon led RGB Sobrepor 18w redondo",price:119.99,category:"Iluminação"},{id:"33",name:"Plafon led RGB Sobrepor 18w quadrado",price:129.99,category:"Iluminação"},{id:"34",name:"Barra Led",price:0,category:"Iluminação"},{id:"35",name:"Controlador dual rgb fita led",price:49.99,category:"Iluminação"},{id:"36",name:"Spot RGB redondo embutir",price:59.09,category:"Iluminação"},{id:"37",name:"Roteador Unifi Dream Router",price:1800,category:"Roteador"},{id:"38",name:"Roteador Mesh",price:1400,category:"Roteador"},{id:"39",name:"Acess point ubiquit",price:1200,category:"Roteador"},{id:"40",name:"Hub 3.0",price:173.99,category:"Roteador"},{id:"41",name:"Roteador Mesh Twibi",price:459,category:"Roteador"},{id:"42",name:"Cartão memória 128GB",price:0,category:"Cartão de Memória"},{id:"43",name:"Cartão memória 256GB",price:410,category:"Cartão de Memória"},{id:"44",name:"Cartão memória 512GB",price:0,category:"Cartão de Memória"},{id:"45",name:"Cartão memória 1TB",price:0,category:"Cartão de Memória"},{id:"46",name:"fechadura digital",price:349,category:"Segurança"},{id:"47",name:"camera wifi",price:167.2,category:"Segurança"},{id:"48",name:"fechadura digital",price:650,category:"Segurança"},{id:"49",name:"video porteiro",price:349.99,category:"Segurança"},{id:"50",name:"controle remoto IR smart",price:48.99,category:"Controle IR"},{id:"51",name:"Sensor porta e janela rf433",price:32.9,category:"Sensores"},{id:"52",name:"Detector fumaça rf433",price:72.99,category:"Sensores"},{id:"53",name:"Sensor presença wifi",price:74.25,category:"Sensores"},{id:"54",name:"Sensor temperatura",price:249.99,category:"Sensores"},{id:"55",name:"Módulo mini cortina",price:73,category:"Cortinas"},{id:"56",name:"motor tubular cortina de rolo",price:459.99,category:"Cortinas"},{id:"57",name:"cortina motorizada 4,2m",price:923.99,category:"Cortinas"},{id:"58",name:"controle de cenas",price:104.4,category:"Outros"},{id:"59",name:"eletrofita 10A",price:25,category:"Outros"},{id:"60",name:"eletrofita 20A",price:74,category:"Outros"},{id:"61",name:"Echo dot",price:300,category:"Assistentes"},{id:"62",name:"Echo show",price:800,category:"Assistentes"}]},959:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getStorageData=void 0,t.getStorageData=function(e){return JSON.parse(localStorage.getItem(e)||"[]")}},916:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.saveToStorage=void 0,t.saveToStorage=function(e,t){localStorage.setItem(e,JSON.stringify(t))}},962:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.addItem=void 0;const o=r(959),a=r(916);t.addItem=function(e){let t=(0,o.getStorageData)("order");for(let r=0;r<t.length;r++)if(t[r].id===e){t[r].qt++;const o=document.getElementById(`${e}-qt`);(0,a.saveToStorage)("order",t),o.innerHTML=String(t[r].qt)}}},632:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.componentVisibility=void 0,t.componentVisibility=function(e,t){const r=document.getElementById(e);"show"==t?r.removeAttribute("style"):r.setAttribute("style","display: none")}},650:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.placeCategoriesHome=void 0;const o=r(549);t.placeCategoriesHome=function(e,t){e.forEach((e=>{t.innerHTML+=(0,o.categoryItem)(e)}))}},31:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.placeMarkedProducts=void 0;const o=r(329);t.placeMarkedProducts=function(e){const t=document.getElementById("listItems");e.forEach((e=>{e.qt>0&&(t.innerHTML+=(0,o.productToTableMarked)(e))}))}},473:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.placeProductsHome=void 0;const o=r(943);t.placeProductsHome=function(e){const t=document.querySelectorAll(".category");e.forEach((e=>{for(let r=0;r<t.length;r++)e.category===t[r].id&&(t[r].innerHTML+=(0,o.productToList)(e))}))}},312:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.removeItem=void 0;const o=r(959),a=r(916);t.removeItem=function(e){let t=(0,o.getStorageData)("order");for(let r=0;r<t.length;r++)if(t[r].id===e){t[r].qt>0?t[r].qt--:t[r].qt=0;const o=document.getElementById(`${e}-qt`);(0,a.saveToStorage)("order",t),o.innerHTML=String(t[r].qt)}}},26:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startNewOrder=void 0;const o=r(916);t.startNewOrder=function(e){let t=[];return e.forEach((e=>{const r=Object.assign(Object.assign({},e),{qt:0});t.push(r)})),(0,o.saveToStorage)("order",t),t}},901:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sumTotalOrder=void 0,t.sumTotalOrder=function(e){const t=document.getElementById("totalValue");let r=0;e.forEach((e=>{e.qt>0&&(r+=e.price*e.qt)})),t.innerHTML=`R$ ${r.toFixed(2)}`}},642:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startHome=void 0;const o=r(420),a=r(634),i=r(959),n=r(26),d=r(650),c=r(473),s=r(632);t.startHome=function(){const e=document.getElementById("fullList");e.innerHTML="";let t=(0,i.getStorageData)("order");0===t.length&&(t=(0,n.startNewOrder)(a.productsDB)),(0,s.componentVisibility)("fullList","show"),(0,s.componentVisibility)("newOrder","show"),(0,s.componentVisibility)("showOrder","show"),(0,s.componentVisibility)("orderTable","hide"),(0,s.componentVisibility)("home","hide"),(0,s.componentVisibility)("saveOrder","hide"),(0,d.placeCategoriesHome)(o.categoriesDB,e),(0,c.placeProductsHome)(t)}},251:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.startMarked=void 0;const o=r(959),a=r(632),i=r(31),n=r(901);t.startMarked=function(){document.getElementById("listItems").innerHTML="";const e=(0,o.getStorageData)("order");(0,a.componentVisibility)("fullList","hide"),(0,a.componentVisibility)("orderTable","show"),(0,a.componentVisibility)("showOrder","hide"),(0,a.componentVisibility)("newOrder","hide"),(0,a.componentVisibility)("home","show"),(0,a.componentVisibility)("saveOrder","show"),(0,i.placeMarkedProducts)(e),(0,n.sumTotalOrder)(e)}}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}(()=>{const e=r(634),t=r(26),o=r(962),a=r(312),i=r(642),n=r(251);(0,i.startHome)(),document.querySelectorAll(".addBtn").forEach((e=>{e.addEventListener("click",(()=>{const t=e.id.replace("add-","");(0,o.addItem)(t)}))})),document.querySelectorAll(".removeBtn").forEach((e=>{e.addEventListener("click",(()=>{const t=e.id.replace("remove-","");(0,a.removeItem)(t)}))})),document.getElementById("newOrder").addEventListener("click",(()=>{(0,t.startNewOrder)(e.productsDB),location.reload()})),document.getElementById("showOrder").addEventListener("click",(()=>{(0,n.startMarked)()})),document.getElementById("home").addEventListener("click",(()=>{(0,i.startHome)()}))})()})();