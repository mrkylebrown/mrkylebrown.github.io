
// JavaScript Document
const navSlide = () => {
	var count = 0;
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.main');
	const navLinks = document.querySelectorAll('.grades');
	burger.addEventListener('click', ()=>{
	nav.classList.toggle('nav-active');
	nav.classList.remove('nav-active2');
	nav.classList.remove('nav-active3');
	count = 0;
	});
	nav.addEventListener('click', ()=>{
		if (count == 0) {
			nav.classList.toggle('nav-active2');
		} else if (count == 1) {
			nav.classList.toggle('nav-active3');
		}
	
	count += 1;
	
	
	});
	

	
	//Animate Links
	burger.addEventListener('click', ()=>{
		navLinks.forEach((link,index)=>{ 
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5}s`;
		})
	})
	
}

navSlide();

