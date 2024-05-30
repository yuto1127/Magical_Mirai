import {FadeInClass} from './animations/FadeInClass.js';

const timer = document.getElementById("timer");
let time = 0;
let hour = 0;
let minute = 0;
let second = 0;

let index = 0;
let text_li = [];
let showTime_li = [3,6,9];  //それぞれの要素を表示する秒数を指定
/*
引数はそれぞれ、テキスト、文字の大きさ、文字の色、横の座標、縦の座標、
表示にかかる時間（ミリ秒）、表示する時間（ミリ秒）、削除にかかる時間（ミリ秒）を示す
*/
text_li.push(new FadeInClass("これは","20px","#000000","200px","100px",1000,1000,1000));//フェードインするテキストを配列に追加
text_li.push(new FadeInClass("テスト","20px","#000000","200px","150px",1000,1000,1000));
text_li.push(new FadeInClass("です","20px","#000000","200px","200px",1000,1000,1000));

for(let i=0;i<text_li.length;i++){       //ここで、それぞれのテキストにIDをセットし、生成している
    text_li[i].setID("text_"+i);
    text_li[i].generate();
}

function setTimer(){        //サンプルでの経過時間を計算する処理
    second++;
    time++;
    if(second == 60){
        second = 0;
        minute++;
    }
    if(minute == 60){
        minute = 0;
        hour++;
    }
    if(hour == 24){
        hour = 0;
    }
    return hour,minute,second;
}

function testPlay(){        //要素の表示時間になったら、テキストを表示する
    if(time == showTime_li[index]){
        text_li[index].play();  //テキストを表示する
        index++;
    }
}

window.addEventListener("load", () => {     //経過時間を計算して表示
    setInterval(function () {
      setTimer();
      timer.innerHTML = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
    }, 1000);
  });

window.addEventListener("load", () => {     //testPlayメソッドを毎秒呼ぶ
    setInterval(function (){
        testPlay();
    },1000);
});