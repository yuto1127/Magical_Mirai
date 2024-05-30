import {AnimationTextBase} from "./AnimationTextBase.js";

export class FadeInClass extends AnimationTextBase{
    constructor(text,font_size,color,posX,posY,dispTime,lifeTime,killTime){
        super(text,font_size,color,posX,posY,dispTime,lifeTime,killTime);
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