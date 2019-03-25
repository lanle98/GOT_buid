(()=>{
	//stb
	console.log('fired')

	const	sigils = document.querySelectorAll(".sigil-container");
			lightbox = document.querySelector('.lightbox')
			video = document.querySelector('video')
			lbClose = document.querySelector(".lightbox-close")
	    	topBanners = document.querySelector("#houseImages")
	    	tagline = document.querySelector('.house-name')
	    	houseInfo = document.querySelector('.house-info')

	const houseData = [
		["stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
		["BARATHEON", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],
		["LANNISTER", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.`],
	]

	function openLightbox(){
		//debugger;

		let targetHouse = this.className.split(" ")[1];

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

		tagline.innerHTML = `House ${houseData[this.dataset.offset][0]}` ;
		houseInfo.innerHTML = houseData[this.dataset.offset][1]

		TweenMax.to(topBanners,0.8, {
		right: currentOffset});
		// topBanners.style.right = currentOffset + "px";


		// change the text content on the page per house
		
		
	
		
	}


	


	//animate the banners at the top
	sigils.forEach(sigil => sigil.addEventListener('click', animateBanners))

	lbClose.addEventListener('click', closeLightBox)
	video.addEventListener("ended", closeLightBox)
})()