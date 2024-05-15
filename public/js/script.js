// Play Audio
const elementAplayer = document.getElementById('aplayer');

if (elementAplayer) {
    let dataSong = elementAplayer.getAttribute("data-song");
    dataSong = JSON.parse(dataSong);
    let dataSinger = elementAplayer.getAttribute("data-singer");
    dataSinger = JSON.parse(dataSinger);

    const ap = new APlayer({
        container: elementAplayer,
        audio: [{
            name: dataSong.title,
            artist: dataSinger.fullName,
            url: dataSong.audio,
            cover: dataSong.avatar
        }],
        autoplay: true
    });

    const avatar = document.querySelector(".singer-detail .inner-avatar");

    ap.on('play', function () {
        avatar.style.animationPlayState = "running";
    });

    ap.on('pause', function () {
        avatar.style.animationPlayState = "paused";
    });
}
// End Play Audio

// Button Like
const buttonLike = document.querySelector("[button-like]");
if (buttonLike) {
    buttonLike.addEventListener("click", () => {
        const isActive = buttonLike.classList.contains("active");

        const typeLike = isActive ? "no" : "yes";

        const idSong = buttonLike.getAttribute("button-like");
        const link = `/songs/like/${typeLike}/${idSong}`;

        fetch(link, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                const spanLike = buttonLike.querySelector("[data-like]");
                spanLike.innerHTML = data.like;

                buttonLike.classList.toggle("active");
            })
    });
}
// End Button Like

// Button Favorite
const listButtonFavorite = document.querySelectorAll("[button-favorite]");
if (listButtonFavorite.length > 0) {
    listButtonFavorite.forEach(buttonFavorite => {
        buttonFavorite.addEventListener("click", () => {
            const isActive = buttonFavorite.classList.contains("active");

            const typeFavorite = isActive ? "no" : "yes";

            const idSong = buttonFavorite.getAttribute("button-favorite");
            const link = `/songs/favorite/${typeFavorite}/${idSong}`;
            fetch(link, {
                method: "PATCH"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    buttonFavorite.classList.toggle("active");
                })
        });
    })
}
// End Button Favorite