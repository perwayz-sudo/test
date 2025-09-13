let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;
window.onYouTubeIframeAPIReady = function () {
	player = new YT.Player("player", {
		videoId: "6FEsFvZ-hqY", // same video
		playerVars: {
			autoplay: 1,        // autoplay enabled
			controls: 0,        // no player controls
			mute: 0,            // 🔊 sound enabled
			loop: 0,            // play only once
			modestbranding: 1,  // minimal YouTube branding
			playsinline: 1,     // play inside the page
			rel: 0,             // no related videos at the end
			showinfo: 0,        // hide title bar
			origin: window.location.origin
		},
		events: {
			onReady: (event) => {
				event.target.playVideo(); // start playing automatically
			}
		}
	});
};
