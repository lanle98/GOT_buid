(()=>{
	//stb
	console.log('fired')

	const	sigils = document.querySelectorAll(".sigil-container");
			lightbox = document.querySelector('.lightbox')
			video = document.querySelector('video')
			lbClose = document.querySelector(".lightbox-close")
	    	topBanners = document.querySelector("#houseImages")

	function openLightbox(){
		//debugger;

		let targetHouse = sigil.className.split(" ")[1];

		//this gives us a lowercase house name -> the second class on 
		//all of the shields



		//flip this to uppercase
		let targetVid = targetHouse.charAt(0).toUpperCase() + targetHouse.slice(1);

		video.src = `video/House-${targetVid}.mp4`;
		lightbox.classList.add('lightbox-on');
		
		// video.load();
		// video.play();

		

	}

	function closeLightBox(){
		lightbox.classList.remove('lightbox-on')

		//rewind the current video and pause it
		video.currentTime = 0;
		video.pause();
	}

	function animateBanners(){
		// move the banners to the left so that the current house banner is visible
		const offSet = 600;
		let currentOffset = this.dataset.offset * offSet;


		TweenMax.to(topBanners,0.8, {
		right: currentOffset



	});
		// topBanners.style.right = currentOffset + "px";
		// sigils.forEach(sigil => sigil.addEventListener('click', ))
		video.setTimeout(openLightbox,1000)
	
		
	}


	


	//animate the banners at the top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners))

	lbClose.addEventListener('click', closeLightBox)
	video.addEventListener("ended", closeLightBox)
})()