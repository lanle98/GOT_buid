(()=>{
	//stb
	console.log('fired')

	const	sigils = document.querySelectorAll(".sigil-container");
			lightbox = document.querySelector('.lightbox')
			video = document.querySelector('video')

	function openLightbox(){
		lightbox.classList.add('lightbox-on')
	}

	sigils.forEach(sigil => sigil.addEventListener('click', openLightbox))

	function closeLightBox(){
		lightbox.classList.remove('lightbox-on')
	}


	video.addEventListener("ended", closeLightBox)
})()