
// JavaScript Document
const navSlide = () => {
	var count = 0;
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.main');
	const navLinks = document.querySelectorAll('.grades');
	
	// Click Burger toggles nav from hidden to on screen on mobil view
	burger.addEventListener('click', ()=>{
	nav.classList.toggle('nav-active');
	nav.classList.remove('nav-active2');
	nav.classList.remove('nav-active3');
	count = 0;
	});
	
	// Click the nav in mobile view slides left
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


$("h1").on("click", function() {
		$("h1").html("Mr. Brown's <i>New</i> Website!");
	})

// Nav Slide Down
		$(function(){
        $(".main li").hover(
            function(){
                $('>ul.sub:not(:animated)', this).slideDown(500);
            },
            function(){
                $('>ul.sub',this).slideUp(300);
            }
        );
    });


	

