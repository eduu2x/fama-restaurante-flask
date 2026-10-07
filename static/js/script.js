// ============================================================
// Fama Restaurante — script.js
// Interações: menu hambúrguer, abas do cardápio e lightbox.
// Nenhuma biblioteca externa — JavaScript puro.
// ============================================================

// ------------------------------------------------------------
// CARDÁPIO DIGITAL
// Para adicionar um prato, copie uma linha e altere nome,
// descrição e preços.
//   price = Prato | large = Travessa | null = "Consulte"
// ------------------------------------------------------------
const MENU = [
  {
    id: "diariamente",
    label: "Todos os dias",
    groups: [
      {
        title: "Pratos servidos diariamente",
        note: "Todos os pratos acompanham salada mini.",
        columns: ["Prato", "Travessa"],
        items: [
          { name: "Frango ao molho", desc: "Arroz, feijão e farofa", price: 20, large: 36 },
          { name: "Omelete de queijo e cebola", desc: "Arroz e feijão", price: 20, large: 36 },
          { name: "Fígado acebolado", desc: "Arroz e feijão", price: 21, large: 36 },
          { name: "Calabresa", desc: "Arroz, feijão e farofa", price: 21, large: 36 },
          { name: "Bife", desc: "Arroz, feijão e farofa", price: 25, large: 42 },
          { name: "Picadinho", desc: "Arroz, feijão, batata e cenoura", price: 25, large: 42 },
          { name: "Filé de frango grelhado", desc: "Arroz, feijão e fritas", price: 25, large: 43 },
          { name: "Filé de frango à milanesa", desc: "Arroz, feijão e fritas", price: 30, large: 50 },
          { name: "Filé de frango à parmegiana", desc: "Arroz e fritas", price: 36, large: null },
          { name: "Contra com fritas", desc: "Arroz, feijão e fritas", price: 29, large: 48 },
          { name: "Contra à milanesa", desc: "Arroz, feijão e fritas", price: 32, large: 54 },
          { name: "Contra à cavalo", desc: "Arroz, feijão e 2 ovos", price: 29, large: 48 },
          { name: "Contra à moda", desc: "Arroz, feijão, fritas, farofa e ovo", price: 32, large: 56 },
          { name: "Contra à parmegiana", desc: "Arroz e fritas", price: 39, large: null },
          { name: "Carne assada (lagarto recheado)", desc: "Arroz, feijão e fritas", price: 29, large: 47 },
          { name: "Prato verão filé de frango", desc: "Filé de frango e legumes", price: 27, large: null },
          { name: "Prato verão contra filé", desc: "Contra e legumes", price: 29, large: null }
        ]
      }
    ]
  },
  {
    id: "dia",
    label: "Pratos do dia",
    groups: [
      { title: "Segunda-feira", columns: ["Prato", "Travessa"], items: [
        { name: "Virado à paulista", desc: "Arroz, tutu, couve, bisteca, ovo, banana, torresmo e linguiça", price: 36, large: null },
        { name: "Contra à moda", desc: "Arroz, feijão, fritas, farofa e ovo", price: 32, large: 56 },
        { name: "Pernil assado", desc: "Arroz, tutu e couve", price: 25, large: 41 }
      ] },
      { title: "Terça-feira", columns: ["Prato", "Travessa"], items: [
        { name: "Almôndega com purê", desc: "Arroz, feijão e purê de batata", price: 24, large: 41 },
        { name: "Bife à rolê com purê", desc: "Arroz, feijão e purê de batata", price: 28, large: 47 }
      ] },
      { title: "Quarta-feira", columns: ["Prato", "Travessa"], items: [
        { name: "Feijoada mini", desc: "Arroz, feijoada “light”, couve, farofa e torresmo", price: 31, large: 36 },
        { name: "Panqueca de carne", desc: "Arroz e feijão", price: 22, large: 36 }
      ] },
      { title: "Quinta-feira", columns: ["Prato", "Travessa"], items: [
        { name: "Nhoque com frango", desc: "Nhoque e frango ao molho", price: 29, large: 43 },
        { name: "Macarrão com frango", desc: "Macarrão e frango ao molho", price: 25, large: 41 },
        { name: "Berinjela à parmegiana", desc: "Arroz e feijão", price: 30, large: 49, tag: "Vegetariano" }
      ] },
      { title: "Sexta-feira", columns: ["Prato", "Travessa"], items: [
        { name: "Filé de peixe (merluza)", desc: "Arroz, feijão e batata sauté", price: 29, large: 47 },
        { name: "Strogonoff de frango", desc: "Arroz e batata palha", price: 27, large: 44 },
        { name: "Costela com mandioca", desc: "Arroz, feijão e mandioca", price: 28, large: 44 }
      ] },
      { title: "Sábado", columns: ["Prato", "Travessa"], items: [
        { name: "Feijoada mini", desc: "Arroz, feijoada “light”, couve, farofa e torresmo", price: 31, large: 36 },
        { name: "Contra à parmegiana", desc: "Arroz e fritas", price: 39, large: null }
      ] }
    ]
  },
  {
    id: "feijoada",
    label: "Feijoada",
    groups: [
      { title: "Deliciosa feijoada", note: "Todas as quartas e sábados.", items: [
        { name: "Mini", desc: "Serve 1 pessoa", price: 36 },
        { name: "Pequena", desc: "Serve 2 pessoas", price: 62 },
        { name: "Grande", desc: "Serve 3 pessoas", price: 93 }
      ] }
    ]
  },
  {
    id: "extras",
    label: "Extras e porções",
    groups: [
      { title: "Extras", items: [
        { name: "Filé de frango grelhado", price: 15 },
        { name: "Filé de frango à milanesa", price: 20 },
        { name: "Filé de frango à parmegiana", price: 26 },
        { name: "Contra-filé", price: 19 },
        { name: "Contra à milanesa", price: 22 },
        { name: "Contra à parmegiana", price: 26 },
        { name: "Bife (coxão duro)", price: 16 },
        { name: "Calabresa", price: 14 },
        { name: "Frango ao molho", price: 14 },
        { name: "Omelete", price: 13 },
        { name: "Picadinho", price: 20 },
        { name: "Carne assada (2 fatias)", price: 16 },
        { name: "Berinjela", desc: "Quinta", price: 24 },
        { name: "Filé de peixe", desc: "Sexta", price: 16 },
        { name: "Panqueca (2 unidades)", desc: "Quarta", price: 20 },
        { name: "Almôndega (2 unidades)", desc: "Terça", price: 16 },
        { name: "Bife à rolê (2 unidades)", desc: "Terça", price: 30 },
        { name: "Strogonoff", desc: "Sexta", price: 18 },
        { name: "Costela", desc: "Sexta", price: 18 }
      ] },
      { title: "Acompanhamentos", items: [
        { name: "Arroz (pequeno)", price: 9 },
        { name: "Feijão (pequeno)", price: 9 },
        { name: "Fritas (pequena)", price: 9 },
        { name: "Farofa (pequena)", price: 5 },
        { name: "Ovo frito", price: 3 },
        { name: "Legumes (pequeno)", price: 9 },
        { name: "Couve", desc: "Segunda, quarta e sábado", price: 9 },
        { name: "Torresmo (pequeno)", desc: "Segunda, quarta e sábado", price: 15 },
        { name: "Cebola (acebolado)", price: 2 },
        { name: "Prato adicional", price: 7 }
      ] },
      { title: "Saladas", items: [
        { name: "Salada mini", price: 5 },
        { name: "Salada simples pequena", price: 10 },
        { name: "Salada simples grande", price: 16 },
        { name: "Salada do dia pequena", desc: "Consulte a do dia", price: 19 },
        { name: "Salada do dia grande", desc: "Consulte a do dia", price: 25 }
      ] }
    ]
  },
  {
    id: "bebidas",
    label: "Bebidas e sobremesas",
    groups: [
      { title: "Sobremesas", items: [
        { name: "Pudim", price: 4 },
        { name: "Mousse", price: 4 }
      ] },
      { title: "Bebidas", note: "Valores das bebidas: consulte no restaurante.", items: [
        { name: "Água sem gás", price: 4 },
        { name: "Água com gás", price: 5 },
        { name: "H2O", price: null }, { name: "Refrigerante mini", price: null },
        { name: "Refrigerante garrafinha 220 ml", price: null }, { name: "Refrigerante lata", price: null },
        { name: "Refrigerante 600 ml", price: null }, { name: "Refrigerante 1,5 L", price: null },
        { name: "Refrigerante 2 L", price: null }, { name: "Tubaína 600 ml", price: null },
        { name: "Suco natural (laranja/limão)", price: null }, { name: "Suco de polpa com água", price: null },
        { name: "Suco de polpa com leite", price: null }, { name: "Suco com laranja", price: null },
        { name: "Suco lata", price: null }, { name: "Cerveja lata", price: null },
        { name: "Cerveja original", price: null }, { name: "Café expresso", price: null }
      ] }
    ]
  }
];

// Formata um preço como "R$ 20,00" ou mostra "—" quando é null.
function formatPrice(value) {
  return value == null ? "—" : "R$ " + value.toFixed(2).replace(".", ",");
}

// ------------------------------------------------------------
// ABAS DO CARDÁPIO
// ------------------------------------------------------------
let activeTab = MENU[0].id;

function renderMenuTabs() {
  const tabsBox = document.getElementById("menu-tabs");
  tabsBox.innerHTML = "";
  MENU.forEach(function (tab) {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", tab.id === activeTab ? "true" : "false");
    if (tab.id === activeTab) button.classList.add("is-active");
    button.textContent = tab.label;
    button.addEventListener("click", function () {
      activeTab = tab.id;
      renderMenuTabs();
      renderMenuBoard();
    });
    tabsBox.appendChild(button);
  });
}

function renderMenuBoard() {
  const board = document.getElementById("menu-board");
  const tab = MENU.find(function (t) { return t.id === activeTab; }) || MENU[0];
  board.innerHTML = "";

  tab.groups.forEach(function (group) {
    const groupBox = document.createElement("div");
    groupBox.className = "menu-group";

    const head = document.createElement("div");
    head.className = "menu-group-head";
    const title = document.createElement("h3");
    title.textContent = group.title;
    head.appendChild(title);
    if (group.columns) {
      const cols = document.createElement("div");
      cols.className = "menu-cols";
      group.columns.forEach(function (col) {
        const span = document.createElement("span");
        span.textContent = col;
        cols.appendChild(span);
      });
      head.appendChild(cols);
    }
    groupBox.appendChild(head);

    if (group.note) {
      const note = document.createElement("p");
      note.className = "menu-note";
      note.textContent = group.note;
      groupBox.appendChild(note);
    }

    const list = document.createElement("ul");
    group.items.forEach(function (item) {
      const li = document.createElement("li");
      li.className = "menu-item";

      const text = document.createElement("div");
      text.className = "menu-item-text";
      const strong = document.createElement("strong");
      strong.textContent = item.name;
      if (item.tag) {
        const em = document.createElement("em");
        em.textContent = item.tag;
        strong.appendChild(em);
      }
      text.appendChild(strong);
      if (item.desc) {
        const span = document.createElement("span");
        span.textContent = item.desc;
        text.appendChild(span);
      }
      li.appendChild(text);

      const dots = document.createElement("span");
      dots.className = "menu-dots";
      dots.setAttribute("aria-hidden", "true");
      li.appendChild(dots);

      const prices = document.createElement("div");
      prices.className = "menu-prices";
      const price = document.createElement("span");
      price.textContent = item.price == null ? "Consulte" : formatPrice(item.price);
      prices.appendChild(price);
      if (group.columns) {
        const large = document.createElement("span");
        large.textContent = formatPrice(item.large);
        prices.appendChild(large);
      }
      li.appendChild(prices);

      list.appendChild(li);
    });
    groupBox.appendChild(list);
    board.appendChild(groupBox);
  });
}

// ------------------------------------------------------------
// MENU HAMBÚRGUER (celular)
// ------------------------------------------------------------
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

function closeMenu() {
  navLinks.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", function () {
  const open = navLinks.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

// Fecha o menu ao clicar em qualquer link (navegação por âncoras).
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// ------------------------------------------------------------
// LIGHTBOX DA GALERIA (com teclado: Esc fecha, setas navegam)
// ------------------------------------------------------------
const galleryButtons = Array.prototype.slice.call(document.querySelectorAll(".gallery-grid button"));
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
let currentImage = 0;

function openLightbox(index) {
  currentImage = index;
  const img = galleryButtons[index].querySelector("img");
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

function moveLightbox(direction) {
  currentImage = (currentImage + direction + galleryButtons.length) % galleryButtons.length;
  const img = galleryButtons[currentImage].querySelector("img");
  lightboxImage.src = img.src;
  lightboxImage.alt = img.alt;
}

galleryButtons.forEach(function (button, index) {
  button.addEventListener("click", function () { openLightbox(index); });
});

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
document.getElementById("lightbox-prev").addEventListener("click", function () { moveLightbox(-1); });
document.getElementById("lightbox-next").addEventListener("click", function () { moveLightbox(1); });

document.addEventListener("keydown", function (event) {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

// ------------------------------------------------------------
// Início: monta o cardápio quando a página carregar.
// ------------------------------------------------------------
renderMenuTabs();
renderMenuBoard();
