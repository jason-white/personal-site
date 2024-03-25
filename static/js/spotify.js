// Get Spotify recent tracks
const tracks = document.getElementById("recent-tracks");

const getTracks = async () => {
    return await fetch("/api/spotify", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((res) => {
            res.items.forEach((track) => {
                tracks.innerHTML = `
					<div class="track">
						<div class="track__img">
							<img src="${track.track.album.images[1].url}" alt="Cover art for ${track.track.artists[0].name}'s album titled ${track.track.album.name}">
						</div>
						<div class="track__info">
							<a aria-label="Artist: ${track.track.artists[0].name} (opens in a new window)" rel="noopener" href="${track.track.artists[0].external_urls.spotify}" target="blank_">
								${track.track.artists[0].name}
							</a>
                            <svg aria-hidden="true" class="external-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
							<p>${track.track.name}</p>
							<a aria-label="Album: ${track.track.album.name} (opens in a new window)" rel="noopener" href="${track.track.album.external_urls.spotify}" target="blank_">
								${track.track.album.name}
							</a>
                            <svg aria-hidden="true" class="external-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"/></svg>
						</div>
					</div>
				`;
            });
        })
        .catch((err) => {
            console.log(err);
            tracks.innerHTML = `
                <div class="track-error">
                    <p>There was an error retrieving the last song played.</p>
                </div>
            `;
        });
};

document.body.onload = getTracks();
