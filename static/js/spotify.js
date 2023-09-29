// Get Spotify recent tracks
const tracks = document.getElementById("recent-tracks");

const getTracks = async () => {
	return await fetch('/api/spotify', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((res) => res.json())
		.then(res => {
			res.items.forEach((track) => {
				tracks.innerHTML = `
					<div class="track">
						<div class="track__img">
							<img src="${track.track.album.images[1].url}" alt="Cover art for ${track.track.artists[0].name}'s album titled ${track.track.album.name}">
						</div>
						<div class="track__info">
							<a href="${track.track.artists[0].external_urls.spotify}" target="blank_">
								${track.track.artists[0].name}
							</a>
							<p>${track.track.name}</p>
							<a href="${track.track.album.external_urls.spotify}" target="blank_">
								${track.track.album.name}
							</a>
						</div>
					</div>
				`
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

document.body.onload = getTracks();

