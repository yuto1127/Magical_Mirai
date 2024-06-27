// テキストアニメーション実装に必要なインポート
import {AnimationTextBase} from './animations/AnimationTextBase.js';
import {FadeInClass} from './animations/FadeInClass.js';

var time = 0; //追加箇所 HN

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

var scene_info_index = 1;
const scene_info = [
    {scene_num:0,scene_time:-1000,bg_image_pass:"仮背景.jpg"},
    {scene_num:1_01,scene_time:0,bg_image_pass:"仮背景.jpg"},//轟く123~
    {scene_num:1_02,scene_time:64,bg_image_pass:"仮背景.jpg"},//はらりと~
    {scene_num:1_03,scene_time:108,bg_image_pass:"ohoh一面.png"},//ohoh
    {scene_num:2_01,scene_time:114,bg_image_pass:"bg_2_導入_アニメ.gif"},//いちにさんし~
    {scene_num:2_02,scene_time:114+18,bg_image_pass:"bg_2_導入_静止画.png"},
    {scene_num:2_03,scene_time:167,bg_image_pass:"bg_2_終わり_アニメ.gif"},//心の~
    {scene_num:2_04,scene_time:167+13,bg_image_pass:"bg_2_終わり_静止画.png"},
    {scene_num:2_05,scene_time:189,bg_image_pass:"期待したい一面.png"},//期待したい~
    {scene_num:3_01,scene_time:211,bg_image_pass:"bg_3_10_導入_ディザリング.gif"},//想定外~
    {scene_num:3_02,scene_time:211+30,bg_image_pass:"bg_3_10_静止画_導入.png"},
    {scene_num:3_03,scene_time:265,bg_image_pass:"bg_3_10_終了_ディザリング.gif"},//伝えたい~
    {scene_num:3_04,scene_time:265+20,bg_image_pass:"bg_3_10_静止画_終了.png"},
    {scene_num:4,scene_time:313,bg_image_pass:"初の音.jpg"},//初の音~
    {scene_num:5_01,scene_time:345,bg_image_pass:"bg_5_7_12_16_18_1世界_gif.gif"},//世界~
    {scene_num:5_02,scene_time:345+14,bg_image_pass:"bg_5_7_12_16_18_1世界_静止画.png"},
    {scene_num:5_03,scene_time:360,bg_image_pass:"bg_5_7_12_16_18_2彩るこの.png"},//彩る~
    {scene_num:5_04,scene_time:371,bg_image_pass:"bg_5_7_12_16_18_3視界_gif.gif"},//視界~
    {scene_num:5_05,scene_time:371+15,bg_image_pass:"bg_5_7_12_16_18_3視界_静止画.png"},
    {scene_num:6,scene_time:393,bg_image_pass:"ミライセカイ一面.png"},//世界世界世界
    {scene_num:7_01,scene_time:411,bg_image_pass:"bg_5_7_12_16_18_4間違いなんか.png"},//間違いなんか~
    {scene_num:7_02,scene_time:422,bg_image_pass:"bg_5_7_12_16_18_5ない_gif.gif"},//ない~
    {scene_num:7_03,scene_time:422+9,bg_image_pass:"bg_5_7_12_16_18_5ない_静止画.png"},
    {scene_num:7_04,scene_time:437,bg_image_pass:"bg_5_7_12_16_18_6全ては君.png"},//全ては~
    {scene_num:7_05,scene_time:448,bg_image_pass:"bg_5_7_12_16_18_7君次第_gif.gif"},//次第~
    {scene_num:7_06,scene_time:448+13,bg_image_pass:"bg_5_7_12_16_18_7君次第_静止画.png"},
    {scene_num:7_07,scene_time:462,bg_image_pass:"bg_5_7_12_16_18_8今日は過去の.png"},//今日は過去の~
    {scene_num:7_08,scene_time:473,bg_image_pass:"bg_5_7_12_16_18_9未来_gif.gif"},//未来
    {scene_num:7_09,scene_time:473+14,bg_image_pass:"bg_5_7_12_16_18_9未来_静止画.png"},
    {scene_num:8,scene_time:495,bg_image_pass:"ミライセカイ一面.png"},//未来未来未来
    {scene_num:9_01,scene_time:521,bg_image_pass:"bg_9$1.gif"},
    {scene_num:9_02,scene_time:532,bg_image_pass:"bg_9$2.jpg"},
    {scene_num:9_03,scene_time:542,bg_image_pass:"bg_9$3.gif"},
    {scene_num:9_04,scene_time:561,bg_image_pass:"bg_9$4.gif"},
    {scene_num:9_05,scene_time:571,bg_image_pass:"bg_9$5.jpg"},
    {scene_num:9_06,scene_time:535,bg_image_pass:"bg_9$6.gif"},
    {scene_num:9_07,scene_time:601,bg_image_pass:"bg_9$7.jpg"},
    {scene_num:10_01,scene_time:612,bg_image_pass:"bg_3_10_導入_ディザリング.gif"},
    {scene_num:10_02,scene_time:612+30,bg_image_pass:"bg_3_10_静止画_導入.png"},
    {scene_num:10_03,scene_time:671,bg_image_pass:"bg_3_10_終了_ディザリング.gif"},
    {scene_num:10_04,scene_time:671+20,bg_image_pass:"bg_3_10_静止画_終了.png"},
    {scene_num:11_01,scene_time:722,bg_image_pass:"bg_11_1.gif"},
    {scene_num:11_02,scene_time:750,bg_image_pass:"bg_11_1.png"},
    {scene_num:11_03,scene_time:771,bg_image_pass:"bg_11_2.gif"},
    {scene_num:11_04,scene_time:771+29,bg_image_pass:"bg_11_2.png"},
    {scene_num:12_01,scene_time:830,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:12_02,scene_time:852,bg_image_pass:"bg_5_7_12_16_18_静止画_2.jpg"},
    {scene_num:12_03,scene_time:880,bg_image_pass:"bg_5_7_12_16_18_静止画_3.jpg"},
    {scene_num:12_04,scene_time:902,bg_image_pass:"bg_5_7_12_16_18_静止画_4.jpg"},
    {scene_num:13,scene_time:922,bg_image_pass:"bg_1_13.GIF"},
    {scene_num:14,scene_time:1022,bg_image_pass:"bg_14_静止画.jpg"},
    {scene_num:15,scene_time:1081,bg_image_pass:"bg_15_20_静止画.jpg"},
    {scene_num:16_01,scene_time:1132,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:16_015,scene_time:1159,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"},
    {scene_num:16_02,scene_time:1160,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:16_025,scene_time:1181,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"},
    {scene_num:16_03,scene_time:1182,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:17,scene_time:1210,bg_image_pass:"ミライセカイ一面.png"},
    {scene_num:18_01,scene_time:1222,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"},
    {scene_num:18_02,scene_time:1232,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:18_025,scene_time:1260,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"},
    {scene_num:18_03,scene_time:1261,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:18_035,scene_time:1289,bg_image_pass:"bg_5_7_12_16_18_静止画_1.jpg"},
    {scene_num:18_04,scene_time:1290,bg_image_pass:"bg_5_7_12_16_18_サビ音ハメ.gif"},
    {scene_num:19,scene_time:1311,bg_image_pass:"ミライセカイ一面.png"},
    {scene_num:20,scene_time:1331,bg_image_pass:"bg_15_20_静止画.jpg"},
    {scene_num:21,scene_time:1412,bg_image_pass:"仮背景.jpg"},
    {scene_num:22,scene_time:9999,bg_image_pass:"仮背景.jpg"}
];

//追加箇所 HN
/* アニメーションテキストを生成 */
for(var i=0;i<phrases.length;i++){
    animTextList.push(new AnimationTextBase(phrases[i].text,"Arial","40px","black","300px","300px",0,3000,0));
    animTextList[i].setID("text_"+i);
    animTextList[i].generate();
}

// 画像格納変数
const bg_pass = "../../img/bg_img/";
const bg_tmp = "仮背景.jpg";
// const bg_1_13 = "bg_1_13.GIF";
// const bg_2$1 = "bg_2_導入_アニメ.gif"
// const bg_2$2 = "bg_2_導入_静止画.jpg"
// const bg_2$3 = "bg_2_終わり_アニメ.gif"
// const bg_2$4 = "bg_2_終わり_静止画.jpg"
// const bg_3_10$1 = "bg_3_10_導入_ディザリング.gif";
// const bg_3_10$2 = "bg_3_10_静止画_導入.jpg";
// const bg_3_10$3 = "bg_3_10_終了_ディザリング.gif";
// const bg_3_10$4 = "bg_3_10_静止画_終了.jpg";
// const bg_5_7_12_16_18$sabi = "bg_5_7_12_16_18_サビ音ハメ.jpg";
// const bg_5_7_12_16_18$1 = "bg_5_7_12_16_18_静止画_1.jpg";
// const bg_5_7_12_16_18$2 = "bg_5_7_12_16_18_静止画_2.jpg";
// const bg_5_7_12_16_18$3 = "bg_5_7_12_16_18_静止画_3.jpg";
// const bg_5_7_12_16_18$4 = "bg_5_7_12_16_18_静止画_4.jpg";
// const bg_4_6_8_17_19 = "bg_4_6_8_17_19.jpg";
// const bg_9$1 = "bg_9$1.gif";
// const bg_9$2 = "bg_9$2.jpg";
// const bg_9$3 = "bg_9$3.gif";
// const bg_9$4 = "bg_9$4.gif";
// const bg_9$5 = "bg_9$5.jpg";
// const bg_9$6 = "bg_9$6.gif";
// const bg_9$7 = "bg_9$7.jpg";
// const bg_11$1 = "bg_11_1.gif";
// const bg_11$2 = "bg_11_1_静止画.gif";
// const bg_11$3 = "bg_11_2.gif";
// const bg_11$4 = "bg_11_2_静止画.gif";
// const bg_14 = "bg_14_静止画.jpg";
// const bg_15_20 = "bg_15_20_静止画.jpg";

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

    // 未使用↓
    // /* GSAPアニメーションのセットアップ */
    // const lyricsAnimation = gsap.fromTo("#lyrics", 
    //     { opacity: 0, y: 20 }, 
    //     { opacity: 1, y: 0, duration: 1, ease: "power2.out", paused: true }
    // );

    /* 再生ボタン */
    const timelag = 0;
    var scene = 0;
    var animTextIndex = 0;
    const bg_image = $('#bg_image');
    const playButton = document.getElementById("play-button");
    const playButtonBG = document.getElementById("play-button-bg");
    playButton.addEventListener("click", () => {
        player.requestPlay(); // 再生を要求する
        playButton.style.display = "none"; // 再生ボタンを非表示にする
        playButtonBG.style.display = "none";

        //以下追加処理 HN
        // 0.1秒ごとに実行
        time -= timelag;
        setInterval(() => {
            if(scene == scene_info[scene_info_index-1].scene_num && scene_info[scene_info_index].scene_time <= time){
                scene = scene_info[scene_info_index].scene_num;
                setSceneBackGround(scene_info[scene_info_index].bg_image_pass);
                scene_info_index++;
            }
            if(animTextIndex < phrases.length){
                if(time == phrases[animTextIndex].time){
                    animTextList[animTextIndex].play();
                    animTextIndex++;
                }
            }
            time+=1;
        },100);//ここまで HN
    });

    function setSceneBackGround(pass){
        bg_image.attr('src',bg_pass + pass).show();
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

//画像を先に読み込む処理
window.onload = function(){
    loadImages();
}

// 画像プリロード用関数
function loadImages(){
    for (i = 1; i < scene_info.length; i++){
        preLoadImage(bg_pass+scene_info[i].bg_image_pass, (err, img) => {
            if (err) {
                console.error('Failed to load image:', err);
            } else {
                console.log('Image loaded:', img);
            }
        });
    }
}

function preLoadImage(url,callback){
    const img = document.createElement('img');
    img.onload = () => callback(null, img);
    img.onerror = (err) => callback(err);
    img.src = url;
}

//以下キャッシュ無効化の処理
window.onbeforeunload = function() {};
window.onunload = function() {};
window.addEventListener("pageshow", function(event){
    if (event.persisted) {
        // ここにキャッシュ有効時の処理を書く
        window.location.reload();
    }
});