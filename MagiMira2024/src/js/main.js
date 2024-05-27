/* TextAlive Playerのインスタンスを作成 */
const player = new TextAliveApp.Player({
    app: {
        token: "oE0Qvl9sHpPZfezi" // ここに自分のトークンを入れる
    },
    mediaElement: document.querySelector("#video")
});

/* 歌詞表示エリア */
const lyricsElement = document.getElementById("lyrics");

/* GSAPアニメーションのセットアップ */
gsap.fromTo("#lyrics", 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 1, ease: "power2.out", paused: true }
);

/* 歌詞が発声された時に呼ばれるイベントハンドラ */
player.addListener({
    onAppReady: (app) => {
        if (!app.songUrl) {
            /* デフォルトの楽曲を設定 */
            player.createFromSongUrl("https://piapro.jp/t/XiaI/20240201203346");
        }
    },
    onVideoReady: (video) => {
        console.log("Video is ready");
    },
    onPlay: () => {
        console.log("Playing");
    },
    onTimeUpdate: (position) => {
        const phrase = player.findPhrase(position);

        if (phrase) {
            lyricsElement.textContent = phrase.text;
            gsap.to("#lyrics", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        } else {
            gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
        }
    },
    onStop: () => {
        lyricsElement.textContent = "";
        gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
    }
});
