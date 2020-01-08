// JavaScript Document
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.main');
	const navLinks = document.querySelectorAll('.grades');
	burger.addEventListener('click', ()=>{
		nav.classList.toggle('nav-active')
	});
	//Animate Links
	navLinks.forEach((link,index)=>{ 
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 2}s`;
		console.log(index);
	})
}

navSlide();