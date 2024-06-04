import {AnimationTextBase} from "./AnimationTextBase.js";

export class FadeInClass extends AnimationTextBase{
    /* 
        text = 表示する文字列
        fontFamily = 文字のフォント
        font_size = 文字の大きさ
        color = 文字の色
        posX = 要素のx座標
        posY = 要素のy座標
        dispTime = 文字列の表示にかかる時間
        lifiTime = 文字列が表示される時間
        killTime = 文字列の削除にかかる時間
    */
    constructor(text,fontFamily,font_size,color,posX,posY,dispTime,lifeTime,killTime){
        super(text,fontFamily,font_size,color,posX,posY,dispTime,lifeTime,killTime);
    }
    
    /*
    テキストを表示して指定時間後に非表示にする処理
    
    dispTimeミリ秒でフェードインして、
    lifeTimeミリ秒表示し、
    killTimeミリ秒でフェードアウトする
    */
    play(){
        $("#"+this.id).hide().fadeIn(this.dispTime).delay(this.lifeTime).fadeOut(this.killTime);
    }
}