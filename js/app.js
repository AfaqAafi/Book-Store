
let searchBtn = document.querySelector('#search-btn').onclick = ()=>{
    document.querySelector('#search-form').classList.add('active');
}

let closeBtn = document.querySelector('#close-btn').onclick = ()=>{
    document.querySelector('#search-form').classList.remove('active');
}


let cartBtn =  document.querySelector('#add-cart').onclick = ()=>{
    document.querySelector('.cart-form').classList.add('active');
} 

let closCartBtn = document.querySelector('#closeCartBtn').onclick = ()=>{
    document.querySelector('.cart-form').classList.remove('active');
} 

let Detectnoval = document.querySelector('#detect-noval').onclick =()=>{
    document.querySelector('.detect-noval').classList.toggle('active')
}
let comics = document.querySelector('#comics').onclick =()=>{
    document.querySelector('.comics-drop').classList.toggle('active')
}

let latest = document.querySelector('#latest').onclick =()=>{
    document.querySelector('.container-dropdown').classList.toggle('active')
    document.querySelector('.icons').classList.toggle('active')
}

let kids = document.querySelector('#kidz').onclick =()=>{
    document.querySelector('.kidz').classList.toggle('active')
}


let books = document.querySelector('#books').onclick =()=>{
    document.querySelector('.book-container').classList.toggle('active')
    document.querySelector('.icons').classList.toggle('active')
}
let customfavorite = document.querySelector('#custom-favorite').onclick =()=>{
    document.querySelector('.favorite-dropdown').classList.toggle('active')
}
let categories = document.querySelector('#categories').onclick =()=>{
    document.querySelector('.categories-dropdown').classList.toggle('active')
}
let science = document.querySelector('#science').onclick =()=>{
    document.querySelector('.science-dropdown').classList.toggle('active')
}
let kidzContainer = document.querySelector('#kidz-container').onclick =()=>{
    document.querySelector('.kidz-dropdown').classList.toggle('active')
    document.querySelector('.icons').classList.toggle('active')
}

let topCollection = document.querySelector('#top-collection').onclick =()=>{
    document.querySelector('.collection').classList.toggle('active')
}
let topforMore = document.querySelector('#for-more').onclick =()=>{
    document.querySelector('.more-kids').classList.toggle('active')
}

let barBTn = document.querySelector('#bars-btn').onclick = () =>{
    document.querySelector('.navbar-link').classList.toggle('active')
    document.querySelector('.icons').classList.toggle('active')
}
var swiper = new Swiper(".home", {
    // autoHeight: true,
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        992: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

    }
    
  });
var swiper = new Swiper(".testimonial", {
    autoplay: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  const tabItems = document.querySelectorAll(".tab-item");

const tabItemContent = document.querySelectorAll(".tab-content-item");
// let tab1 = document.querySelector('#tab-1-content')
// let tab2 = document.querySelector('#tab-2-content')
// let tab3 = document.querySelector('#tab-3-content')

for(var i= 0; i<tabItems.length; i++){
    tabItems[i].addEventListener("click", function(){
        tabItems.forEach(function(element){
            element.classList.remove('active');
        })

        this.classList.add('active')
        var tabItemValue = this.getAttribute("data-target");
        // alert(tabItemValue)
        tabItemContent.forEach(item => {
            item.style.display = "none"
        })


        if(tabItemValue == "best"){
            document.querySelector("." + tabItemValue).style.display = "block";

        }
       else if(tabItemValue == "feature"){
        document.querySelector("." + tabItemValue).style.display = "block";
        }
      else if(tabItemValue == "sale"){
        document.querySelector("." + tabItemValue).style.display = "block";
        }
        else {
            console.log("");
        }
    })
}