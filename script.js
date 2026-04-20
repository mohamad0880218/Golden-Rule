const products = [
  {
    name: "T-Shirt",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Hoodie",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cap",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Polo Shirt",
    img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Outerwear",
    img: "https://images.pexels.com/photos/1004013/pexels-photo-1004013.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    name: "Bottoms",
    img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80"
  }
];

function showProducts(){
  document.getElementById("hero").classList.add("hidden");
  document.getElementById("products").classList.remove("hidden");

  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach((p,i)=>{
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${p.img}">
      <h3>${p.name}</h3>
    `;

    div.onclick = () => openDesigner(i);
    grid.appendChild(div);
  });
}

function openDesigner(i){
  document.getElementById("products").classList.add("hidden");
  document.getElementById("designer").classList.remove("hidden");
  document.getElementById("mockupImg").src = products[i].img;
}

let img = document.getElementById("designImg");
let box = document.getElementById("designBox");

function upload(e){
  img.src = URL.createObjectURL(e.target.files[0]);
}

function resize(v){
  img.style.width = v + "px";
}

let drag=false;

box.addEventListener("mousedown",()=>drag=true);
document.addEventListener("mouseup",()=>drag=false);

document.addEventListener("mousemove",(e)=>{
  if(!drag) return;

  const parent = box.parentElement.getBoundingClientRect();

  box.style.left = (e.clientX-parent.left-90)+"px";
  box.style.top = (e.clientY-parent.top-90)+"px";
});

function scrollToStudio(){
  document.getElementById("designer").scrollIntoView({behavior:"smooth"});
}