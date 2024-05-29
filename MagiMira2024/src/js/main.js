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

    // 歌詞の配列データ
    // 歌詞と発話時間の組み合わせ
    const phrases = [
        // １番Aメロ＃１
        {text:"轟く1・2・3",time:0.85},
        {text:"ほらよーいどんで飛び込んで",time:3.9},
        {text:"はらりと彩った",time:6.5},
        {text:"未来　未来　未来",time:8.8},
        {text:"Oh Oh",time:11},
        // １番Aメロ＃２
        {text:"いちにっさんしで色めいて",time:11.5},
        {text:"この音が巡る",time:14},
        {text:"巡るとき",time:15.5},
        {text:"心の全部がときめいて",time:17},
        {text:"期待したい　したい",time:19},
        // １番Bメロ
        {text:"想定外の不安要素も",time:21.3},
        {text:"展開は低解像度",time:24},
        {text:"伝えたい言の葉が響くまで",time:27},
        // サビ
        {text:"初の音が奏でる世界",time:31.5},
        {text:"彩るこの視界",time:36},
        {text:"セカイ　セカイ　セカイ",time:39.3},
        {text:"間違いなんかない",time:41.5},
        {text:"全ては君次第",time:43.9},
        {text:"今日は過去の未来",time:46.6},
        {text:"ミライ　ミライ　ミライ",time:49.9},
        // ーーーーーー間奏ーーーーーーー
        // ２番Aメロ
        {text:"音と音の鼓動が響き合って",time:62},
        {text:"連なって繋いで生まれ落ちて",time:65},
        {text:"記すノートも",time:67.5},
        {text:"痛むハートの",time:68.6},
        {text:"照らすライトになっていく",time:70},
        // ２番Bメロ
        {text:"ABCからXYZ",time:73},
        {text:"レイアウトは捨て去って",time:75.5},
        {text:"鳴らしたい音",time:77.8},
        {text:"伝えたいこと",time:79},
        {text:"創造も超えて宇宙の向こう側",time:80.2},
        // ーーーーーーー間奏ーーーーーーー
        // サビ前オチ
        {text:"初の音が奏でる世界",time:93},
        {text:"彩るこの視界",time:97.8},
        {text:"セカイ　セカイ　セカイ",time:100.3},
        {text:"君次第",time:103},
        {text:"全ては君の作り上げた",time:105},
        {text:"長い長い世界の続きを見よう",time:108.5},
        // ラスサビ
        {text:"High!!",time:113.5},
        {text:"夢見心地のDIVE!!",time:115.8},
        {text:"思うがままのLIFE!!",time:117.8},
        {text:"セカイ　セカイ　セカイ",time:121},
        {text:"間違いなんかない",time:123},
        {text:"全ては君次第",time:125.5},
        {text:"導くこの未来",time:128},
        {text:"ミライ　ミライ　ミライ",time:131.5},
        {text:"初の音が重なる世界",time:133.4},
        {text:"終わりのない時代",time:139},
    ]

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

    /* ロード完了後にロード画面を非表示にする */
    function hideLoadingScreen() {
        setTimeout(() => {
            const loadingScreen = document.getElementById("loading-screen");
            loadingScreen.style.display = "none";
            const appWindow = document.getElementById("app_window");
            appWindow.style.display = "flex"; // アプリウィンドウを表示
        }, 4000); // 4秒後に実行
    }

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
            hideLoadingScreen(); // ビデオが準備できたらロード画面を非表示にする
        },
        onPlay: () => {
            console.log("Playing");
        },
        onTimeUpdate: (position) => {
            const phrase = player.video.findPhrase(position);

            if (phrase) {
                lyricsElement.textContent = phrase.text; // 歌詞を設定する部分
                lyricsAnimation.restart(); // 歌詞表示アニメーションの再生
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
