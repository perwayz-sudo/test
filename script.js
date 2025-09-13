let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

let player;
window.onYouTubeIframeAPIReady = function () {
	player = new YT.Player("player", {
		videoId: "lsqbpw67hSs",
		playerVars: {
			start: 0,
			end:,
			autoplay: 1,
			controls: 0,
			mute: 0,
			loop: 1,
			modestbranding: 1,
			playsinline: 1,
			rel: 0,
			showinfo: 0,
			origin: window.location.origin
		},
		events: {
			onReady: (event) => {
				event.target.playVideo();
			},
			onStateChange: (event) => {
				// When video ends, restart it
				if (event.data === YT.PlayerState.ENDED) {
					player.seekTo(22);
					player.playVideo();
				}
			}
		}
	});
};
