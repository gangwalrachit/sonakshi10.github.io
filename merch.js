let items = [
    {
        img: "./files/shirt1.jpg",
        price: "$15",
        desc: `Official licensed unisex soft-style cotton Tee featuring The Beatles ‘8 Track' design motif.`,
        category: "shirt"
    },
    {
        img: "./files/shirt2.jpg",
        price: "$29",
        desc: `Graphic Artwork: OBT-0006. Part of the All Together Now Collection!`,
        category: "shirt"
    },
    {
        img: "./files/bag.jpg",
        price: "$10",
        desc: `Double sided printing. 100% biodegradable Polypropylene material.`,
        category: "accessory"
    },
    {
        img: "./files/cap.jpg",
        price: "$25",
        desc: `Unisex Black Drop T Logo Black Baseball Cap. An official licensed unisex cotton Baseball Cap.`,
        category: "accessory"
    },
    {
        img: "./files/shirt3.jpg",
        price: "$20",
        desc: `Super soft high quality t-shirts, with front print, inside neck print.`,
        category: "shirt"
    },    
]
const container = document.querySelector(".grid-container")
const btnContainer = document.querySelector(".btn-container")

window.addEventListener('DOMContentLoaded',function(){
    displayItems(items);
      const filterBtns = document.querySelectorAll(".filter-btn")
      filterBtns.forEach(function(btn){
        btn.addEventListener("click",function(e){
          const category = e.currentTarget.dataset.id;
          const menuCategory = items.filter(function(menuItem){
            if(menuItem.category === category){
              return menuItem;
            }
          })
          if(category==='all'){
            displayItems(items);
          }
          else
            displayItems(menuCategory)
        })
      })
})
function displayItems(displayitems){
    let display = displayitems.map(function(item){
        return `<div class="grid-item">
        <div class="container">
          <img src=${item.img} alt="" class="photo">
          <div class="price">
            <h4>${item.price}</h4>
            <a href="#">Add to Cart</a>
          </div>
        </div>
        <div class="grid-info">
          <p>${item.desc}</p>
        </div>
      </div> `
    }).join('');
    container.innerHTML = display;
}

