import {AnimationTextBase} from './animations/AnimationTextBase.js';
import {FadeInClass} from './animations/FadeInClass.js';

var time = 0; //追加箇所 HN

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
    const phrases = [
        // 歌詞と発話時間の組み合わせをここに追加
         // １番Aメロ＃１

         {text:"轟く1・2・3",time:0.8},

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
    ];

    /* GSAPアニメーションのセットアップ */
    const lyricsAnimation = gsap.fromTo("#lyrics", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", paused: true }
    );

    /* 再生ボタン */
    const bg_image = document.getElementById("bg_image"); //追加箇所 HN
    var scene = 0; //追加箇所 HN
    const bg_tmp = "../../img/bg_img/仮背景.jpg"; //追加箇所 HN
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        player.requestPlay(); // 再生を要求する
        playButton.style.display = "none"; // 再生ボタンを非表示にする

        //以下追加処理 HN
        // 0.1秒ごとに実行
        setInterval(() => {
            time+=1;
            if(scene == 0 && (0 < time && time <= 115)){    //絵コンテでは11秒ですが、調整のため11.5秒に変更しました HN
                scene = 1;
                bg_image.src = "../../img/bg_img/背景_1_9.jpg";
            }else if(scene == 1 && (115 < time && time <= 200)){
                scene = 2;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 2 && (200 < time && time <= 310)){
                scene = 3;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 3 && (310 < time && time <= 330)){
                scene = 4;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 4 && (330 < time && time <= 380)){
                scene = 5;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 5 && (380 < time && time <= 410)){
                scene = 6;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 6 && (410 < time && time <= 490)){
                scene = 7;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 7 && (490 < time && time <= 522)){
                scene = 8;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 8 && (522 < time && time <= 620)){    //+1.2秒調整
                scene = 9;
                bg_image.src = "../../img/bg_img/背景_1_9.jpg";
            }else if(scene == 9 && (620 < time && time <= 720)){
                scene = 10;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 10 && (720 < time && time <= 810)){
                scene = 11;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 11 && (810 < time && time <= 930)){
                scene = 12;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 12 && (930 < time && time <= 1020)){
                scene = 13;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 13 && (1020 < time && time <= 1060)){
                scene = 14;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 14 && (1060 < time && time <= 1120)){
                scene = 15;
                bg_image.src = "../../img/bg_img/案1横顔_15_20.jpg";
            }else if(scene == 15 && (1120 < time && time <= 1210)){
                scene = 16;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 16 && (1210 < time && time <= 1220)){
                scene = 17;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 17 && (1220 < time && time <= 1310)){
                scene = 18;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 18 && (1310 < time && time <= 1330)){
                scene = 19;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 19 && (1330 < time && time <= 1410)){
                scene = 20;
                bg_image.src = "../../img/bg_img/案1横顔_15_20.jpg";
            }else if(scene == 20 && (1410 < time && time <= 1530)){
                scene = 21;
                bg_image.src = bg_tmp; //仮背景に設定
            }else if(scene == 21){
                scene = 22;
                console.log("End");
            }
        },100)//ここまで HN
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

    /* ポップアップ情報エリア */
    const songInfoPopup = document.createElement("div");
    songInfoPopup.id = "song-info-popup";
    document.body.appendChild(songInfoPopup);

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

            // 楽曲情報のポップアップ表示
            const songInfoHtml = `
                <h1>${player.data.song.name}</h1>
                <h2>${player.data.song.artist.name}</h2>
            `;
            songInfoPopup.innerHTML = songInfoHtml;
            songInfoPopup.style.display = "block";
            gsap.fromTo(songInfoPopup, 
                { opacity: 0, y: 20 }, 
                { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );

            // 5秒後にポップアップを非表示にする
            setTimeout(() => {
                gsap.to(songInfoPopup, 
                    { opacity: 0, y: 20, duration: 1, ease: "power2.out", onComplete: () => {
                        songInfoPopup.style.display = "none";
                    }}
                );
            }, 5000); // 5秒後に実行
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
