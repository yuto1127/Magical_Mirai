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
    player.volume = 20;
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

    const scene_info_index = 1;
    const scene_info = [
        {scene_num:0,scene_time:-1,bg_image_pass="none"},
        {scene_num:1,scene_time:0,bg_image_pass:"bg_1_13.GIF"},
        {scene_num:2_01,scene_time:110,bg_image_pass:"bg_2_導入_アニメ.gif"},
        {scene_num:2_02,scene_time:111,bg_image_pass:"bg_2_導入_静止画.jpg"},
        {scene_num:2_03,scene_time:112,bg_image_pass:"bg_2_終わり_アニメ.gif"},
        {scene_num:2_04,scene_time:113,bg_image_pass:"bg_2_終わり_静止画.jpg"},
        {scene_num:3_01,scene_time:200,bg_image_pass:"bg_3_10_導入_ディザリング.gif"},
        {scene_num:3_02,scene_time:201,bg_image_pass:"bg_3_10_静止画_導入.jpg"},
        {scene_num:3_03,scene_time:202,bg_image_pass:"bg_3_10_終了_ディザリング.gif"},
        {scene_num:3_04,scene_time:203,bg_image_pass:"bg_3_10_静止画_終了.jpg"},
        {scene_num:4,scene_time:310,bg_image_pass:"bg_4_6_8_17_19.jpg"},
        {scene_num:5,scene_time:410,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"}
    ];

    /* 再生ボタン */
    var scene = 0;
    var animTextIndex = 0;
    const bg_image = $('#bg_image');
    const bg_image2 = $('#bg_image2');
    // 画像格納変数
    const bg_pass = "../../img/bg_img/";
    const bg_tmp = "仮背景.jpg";
    const bg_1_13 = "bg_1_13.GIF";
    const bg_2$1 = "bg_2_導入_アニメ.gif"
    const bg_2$2 = "bg_2_導入_静止画.jpg"
    const bg_2$3 = "bg_2_終わり_アニメ.gif"
    const bg_2$4 = "bg_2_終わり_静止画.jpg"
    const bg_3_10$1 = "bg_3_10_導入_ディザリング.gif";
    const bg_3_10$2 = "bg_3_10_静止画_導入.jpg";
    const bg_3_10$3 = "bg_3_10_終了_ディザリング.gif";
    const bg_3_10$4 = "bg_3_10_静止画_終了.jpg";
    const bg_5_7_12_16_18$sabi = "bg_5_7_12_16_18_サビ音ハメ.jpg";
    const bg_5_7_12_16_18$1 = "bg_5_7_12_16_18_静止画_1.jpg";
    const bg_5_7_12_16_18$2 = "bg_5_7_12_16_18_静止画_2.jpg";
    const bg_5_7_12_16_18$3 = "bg_5_7_12_16_18_静止画_3.jpg";
    const bg_5_7_12_16_18$4 = "bg_5_7_12_16_18_静止画_4.jpg";
    const bg_4_6_8_17_19 = "bg_4_6_8_17_19.jpg";
    const bg_9$1 = "bg_9$1.gif";
    const bg_9$2 = "bg_9$2.jpg";
    const bg_9$3 = "bg_9$3.gif";
    const bg_9$4 = "bg_9$4.gif";
    const bg_9$5 = "bg_9$5.jpg";
    const bg_9$6 = "bg_9$6.gif";
    const bg_9$7 = "bg_9$7.jpg";
    const bg_11$1 = "bg_11_1.gif";
    const bg_11$2 = "bg_11_1_静止画.gif";
    const bg_11$3 = "bg_11_2.gif";
    const bg_11$4 = "bg_11_2_静止画.gif";
    const bg_14 = "bg_14_静止画.jpg";
    const bg_15_20 = "bg_15_20_静止画.jpg";
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        player.requestPlay(); // 再生を要求する
        playButton.style.display = "none"; // 再生ボタンを非表示にする

        //以下追加処理 HN
        // 0.1秒ごとに実行
        setInterval(() => {
            time+=1;
            if(scene == scene_info[scene_info_index-1].scene_num && scene_info[scene_info_index].scene_time <= time){
                scene = scene_info[scene_info_index].scene_num;
                setSceneBackGround(1,scene_info[scene_info_index].bg_image_pass);
                scene_info_index++;
            }

            if(time == phrases[animTextIndex].time){
                animTextList[animTextIndex].play();
                animTextIndex++;
            }
        },100)//ここまで HN
    });

    function setSceneBackGround(index,bg_num){
        if(index == 1) bg_image.attr('src',bg_pass + bg_num);
        else bg_image2.attr('src',bg_pass + bg_num);
    }

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
        // マウス、キーボードの操作によるエフェクト発生↓（後述）
    });
});
