const posts = document.getElementById("recent-links");
document.body.onload = getLinks();

function getLinks() {
	return fetch('/api/pinboard', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
		.then((res) => res.json())
		.then(res => {
			res.posts.forEach((post) => {
				posts.innerHTML += `
						<li class="recent-link">
							<div class="recent-link__info">
								<a href="${post.href}" target="blank_">
									${post.description}
								</a>
								<p>${post.extended}</p>
							</div>
						</li>
				`
			});
		})
		.catch((err) => {
			console.log(err);
		});
}

