document.addEventListener("DOMContentLoaded", () => {
    /* TextAlive Playerのインスタンスを作成 */
    const player = new TextAliveApp.Player({
        app: {
            token: "oE0Qvl9sHpPZfezi" // ここに自分のトークンを入れる
        },
        mediaElement: document.querySelector("#media") // 新しいメディア要素を指定
    });

    /* 歌詞表示エリア */
    const lyricsElement = document.getElementById("lyrics");

    /* GSAPアニメーションのセットアップ */
    const lyricsAnimation = gsap.fromTo("#lyrics", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", paused: true }
    );

    /* 再生ボタン */
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        player.requestPlay(); // 再生を要求する
        playButton.style.display = "none"; // 再生ボタンを非表示にする
    });

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
            const phrase = player.video.findPhrase(position);

            if (phrase) {
                lyricsElement.textContent = phrase.text;
                lyricsAnimation.restart();
            } else {
                gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
            }
        },
        onStop: () => {
            lyricsElement.textContent = "";
            gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
        }
    });
});
