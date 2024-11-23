const slides = [
	{
		image:"./assets/images/slideshow/slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"./assets/images/slideshow/slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"./assets/images/slideshow/slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"./assets/images/slideshow/slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let dots = document.querySelector(".dots")
let tagline = document.querySelector("#banner p")

let arrowLeft = document.querySelector(".arrow_left")
let arrowRight = document.querySelector(".arrow_right")

let banner_img = document.querySelector(".banner-img")
// ajout des dots //
function creationDots () {
	for (let i = 0 ; i < slides.length; i++ ) {
		let dot = document.createElement("div")
		dots.appendChild(dot)
		dot.classList.add("dot")
		
		if (i === 0) {
			dot.classList.add("dot_selected")
		}
	
		
	}
}

creationDots()

let dotsa = document.querySelectorAll(".dot")
let slidelength = slides.length



index = 0
arrowRight.addEventListener("click", () => {
		index ++
		if (index === slidelength) {
			index = 0
			dotsa[index].classList.add("dot_selected")
			dotsa[slidelength-1].classList.remove("dot_selected")
			
		}
		else {
			dotsa[index-1].classList.remove("dot_selected")
		}
		banner_img.src = slides[index].image

		tagline.innerHTML =`${slides[index].tagLine}`
		
		dotsa[index].classList.add("dot_selected")

		
		
})


arrowLeft.addEventListener("click", () => {
	index --
	if (index === -1) {
		index = slidelength-1
		dotsa[0].classList.remove("dot_selected")
	}
	else {
		dotsa[index+1].classList.remove("dot_selected")
	}
	
	banner_img.src = slides[index].image
	tagline.innerHTML =`${slides[index].tagLine}`
	dotsa[index].classList.add("dot_selected")
	
	
})




