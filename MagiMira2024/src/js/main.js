// テキストアニメーション実装に必要なインポート
import {AnimationTextBase} from './animations/AnimationTextBase.js';
import {FadeInClass} from './animations/FadeInClass.js';

var time = 0; //追加箇所 HN
// APIの読み込みとPlayerクラスのインスタンスの作成
document.addEventListener("DOMContentLoaded", () => {
    /* TextAlive Playerのインスタンスを作成 */
    const player = new TextAliveApp.Player({
        app: {
            token: "oE0Qvl9sHpPZfezi" // ここに自分のトークンを入れる
        },
        mediaElement: document.querySelector("#media") // 新しいメディア要素を指定
        
    });
    player.volume = 10;
    // 未使用↓
    /* 歌詞表示エリア */
    // const lyricsElement = document.getElementById("lyrics");

    // 歌詞の配列データ
    const phrases = [
        // 歌詞と発話時間の組み合わせをここに追加
         // １番Aメロ＃１

         {text:"轟く1・2・3",time:8},

         {text:"ほらよーいどんで飛び込んで",time:39},
 
         {text:"はらりと彩った",time:65},
 
         {text:"未来　未来　未来",time:88},
 
         {text:"Oh Oh",time:110},
 
         // １番Aメロ＃２
 
         {text:"いちにっさんしで色めいて",time:115},
 
         {text:"この音が巡る",time:140},
 
         {text:"巡るとき",time:155},
 
         {text:"心の全部がときめいて",time:170},
 
         {text:"期待したい　したい",time:190},
 
         // １番Bメロ
 
         {text:"想定外の不安要素も",time:213},
 
         {text:"展開は低解像度",time:240},
 
         {text:"伝えたい言の葉が響くまで",time:270},
 
         // サビ
 
         {text:"初の音が奏でる世界",time:315},
 
         {text:"彩るこの視界",time:360},
 
         {text:"セカイ　セカイ　セカイ",time:393},
 
         {text:"間違いなんかない",time:415},
 
         {text:"全ては君次第",time:439},
 
         {text:"今日は過去の未来",time:466},
 
         {text:"ミライ　ミライ　ミライ",time:499},
 
         // ーーーーーー間奏ーーーーーーー
 
         // ２番Aメロ
 
         {text:"音と音の鼓動が響き合って",time:620},
 
         {text:"連なって繋いで生まれ落ちて",time:650},
 
         {text:"記すノートも",time:675},
 
         {text:"痛むハートの",time:686},
 
         {text:"照らすライトになっていく",time:700},
 
         // ２番Bメロ
 
         {text:"ABCからXYZ",time:730},
 
         {text:"レイアウトは捨て去って",time:755},
 
         {text:"鳴らしたい音",time:778},
 
         {text:"伝えたいこと",time:790},
 
         {text:"創造も超えて宇宙の向こう側",time:802},
 
         // ーーーーーーー間奏ーーーーーーー
 
         // サビ前オチ
 
         {text:"初の音が奏でる世界",time:930},
 
         {text:"彩るこの視界",time:978},
 
         {text:"セカイ　セカイ　セカイ",time:1003},
 
         {text:"君次第",time:1030},
 
         {text:"全ては君の作り上げた",time:1050},
 
         {text:"長い長い世界の続きを見よう",time:1085},
 
         // ラスサビ
 
         {text:"High!!",time:1135},
 
         {text:"夢見心地のDIVE!!",time:1158},
 
         {text:"思うがままのLIFE!!",time:1178},
 
         {text:"セカイ　セカイ　セカイ",time:1210},
 
         {text:"間違いなんかない",time:1230},
 
         {text:"全ては君次第",time:1255},
 
         {text:"導くこの未来",time:1280},
 
         {text:"ミライ　ミライ　ミライ",time:1315},
 
         {text:"初の音が重なる世界",time:1334},
 
         {text:"終わりのない時代",time:1390},
    ];

    var animTextList = [];

    //追加箇所 HN
    /* アニメーションテキストを生成 */
    for(var i=0;i<phrases.length;i++){
        animTextList.push(new AnimationTextBase(phrases[i].text,"Arial","40px","black","300px","300px",0,3000,0));
        animTextList[i].setID("text_"+i);
        animTextList[i].generate();
    }
    // 未使用↓
    // /* GSAPアニメーションのセットアップ */
    // const lyricsAnimation = gsap.fromTo("#lyrics", 
    //     { opacity: 0, y: 20 }, 
    //     { opacity: 1, y: 0, duration: 1, ease: "power2.out", paused: true }
    // );

    /* 再生ボタン */
    var scene = 0;
    var animTextIndex = 0;
    const bg_image = $('#bg_image');
    const bg_image2 = $('#bg_image2');
    // 画像格納変数
    const bg_tmp = "../../img/bg_img/仮背景.jpg";
    const bg_1_9 = "../../img/bg_img/bg_1_9.GIF";
    const bg_2_11_1 = "../../img/bg_img/初音ミク_2_11.gif";
    const bg_2_11_2 = "../../img/bg_img/初音ミク_2_11_静止画.jpg";
    const bg_3_10_1 = "../../img/bg_img/初音ミク_3_10_導入_ディザリング.gif";
    const bg_3_10_2 = "../../img/bg_img/初音ミク_3_10_静止画_導入.jpg";
    const bg_3_10_3 = "../../img/bg_img/初音ミク_3_10_終了_ディザリング.gif";
    const bg_3_10_4 = "../../img/bg_img/初音ミク_3_10_静止画_終了.jpg";
    const bg_15_20 = "../../img/bg_img/案1横顔_15_20.jpg";
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        player.requestPlay(); // 再生を要求する
        playButton.style.display = "none"; // 再生ボタンを非表示にする

        //以下追加処理 HN
        // 0.1秒ごとに実行
        setInterval(() => {
            time+=1;
            if(scene == 0 && (0 < time && time <= 115)){    //+0.5秒調整
                scene = 1;
                bg_image.attr('src',bg_1_9);
            }else if(scene == 1 && (115 < time && time <= 200)){
                scene = 201;
                bg_image.attr('src',bg_2_11_1);
            }else if(scene == 201 && (115+17 < time && time <= 200)){
                scene = 202;
                bg_image.attr('src',bg_2_11_2);
            }else if(scene == 202 && (200 < time && time <= 310)){
                scene = 301;
                bg_image.attr('src',bg_3_10_1);
            }else if(scene == 301 && (200+28 < time && time <= 310)){
                scene = 302;
                bg_image.attr('src',bg_3_10_2);
            }else if(scene == 302 && (260 < time && time <= 310)){
                scene = 303;
                bg_image.attr('src',bg_3_10_3);
            }else if(scene == 303 && (260+19 < time && time <= 310)){
                scene = 304;
                bg_image.attr('src',bg_3_10_4);
            }else if(scene == 304 && (310 < time && time <= 330)){
                scene = 4;
                bg_image.attr('src',bg_tmp); //仮背景に設定
                $('#bg_image').show();
            }else if(scene == 4 && (330 < time && time <= 380)){
                scene = 5;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 5 && (380 < time && time <= 410)){
                scene = 6;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 6 && (410 < time && time <= 490)){
                scene = 7;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 7 && (490 < time && time <= 522)){
                scene = 8;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 8 && (522 < time && time <= 620)){    //+1.2秒調整
                scene = 9;
                bg_image.attr('src',bg_1_9);
            }else if(scene == 9 && (620 < time && time <= 720)){
                scene = 10;
                bg_image.attr('src',bg_3_10_1);
            }else if(scene == 10 && (720 < time && time <= 810)){
                scene = 11;
                bg_image.attr('src',bg_2_11_1);
            }else if(scene == 11 && (810 < time && time <= 930)){
                scene = 12;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 12 && (930 < time && time <= 1020)){
                scene = 13;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 13 && (1020 < time && time <= 1060)){
                scene = 14;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 14 && (1060 < time && time <= 1120)){
                scene = 15;
                bg_image.attr('src',bg_15_20);
            }else if(scene == 15 && (1120 < time && time <= 1210)){
                scene = 16;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 16 && (1210 < time && time <= 1220)){
                scene = 17;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 17 && (1220 < time && time <= 1310)){
                scene = 18;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 18 && (1310 < time && time <= 1330)){
                scene = 19;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 19 && (1330 < time && time <= 1410)){
                scene = 20;
                bg_image.attr('src',bg_15_20);
            }else if(scene == 20 && (1410 < time && time <= 1530)){
                scene = 21;
                bg_image.attr('src',bg_tmp); //仮背景に設定
            }else if(scene == 21){
                scene = 22;
                console.log("End");
            }

            if(time == phrases[animTextIndex].time){
                animTextList[animTextIndex].play();
                animTextIndex++;
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
                // 未使用↓ 
                // gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
            }
        },
        onStop: () => {
            lyricsElement.textContent = "";
            // 未使用↓
            // gsap.to("#lyrics", { opacity: 0, y: 20, duration: 1, ease: "power2.out" });
        }
    });
});
