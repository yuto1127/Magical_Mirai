export class AnimationImage{     //アニメーションテキストの元となるクラス
    /* 
        posX = 要素のx座標
        posY = 要素のy座標
        dispTime = 文字列の表示にかかる時間
        lifeTime = 文字列が表示される時間
        killTime = 文字列の削除にかかる時間
    */
    constructor(id,pass,posX,posY,size,dispTime,lifeTime,killTime){ //コンストラクタで各パラメータを初期化
        this.setID(id);
        this.setPass(pass);
        this.setPos(posX,posY);
        this.setSize(size);
        this.setDispTime(dispTime);
        this.setLifeTime(lifeTime);
        this.setKillTime(killTime);
        this.isActive = false;
        this.parentElementID = "animation-text-area";
        this.parentElement = document.getElementById(this.parentElementID);
        this.generate();
    }

    //画像のパスをセットする
    setPass(pass){
        this.pass = pass;
    }
    
    //表示する位置をセットする
    setPos(posX,posY){
        this.posX = posX;
        this.posY = posY;
    }

    //表示にかかる時間をセットする
    setDispTime(dispTime){
        this.dispTime = dispTime;
    }

    //表示する時間をセットする
    setLifeTime(lifeTime){
        this.lifeTime = lifeTime;
    }

    //削除にかかる時間をセットする
    setKillTime(killTime){
        this.killTime = killTime;
    }

    //IDをセットする
    setID(id){
        this.id = id;
    }

    //IDを取得するメソッド
    getID(){
        return this.id;
    }

    setSize(size){
        this.size = size;
    }

    //要素を表示する
    show(){
        this.isActive = true;
        $("#"+this.id).show(this.dispTime);
    }

    fadeIn(){
        this.isActive = true;
        $("#"+this.id).fadeIn(this.dispTime);
    }

    //要素を非表示にする
    hide(){
        this.isActive = false;
        $("#"+this.id).hide(this.killTime);
    }

    play(){
        $("#"+this.id).show(this.dispTime).delay(this.lifeTime).hide(this.killTime);
    }

    //要素を生成する
    generate(){
        this.element = document.createElement('img');
        this.element.src = this.pass;
        this.parentElement.appendChild(this.element);
        this.element.setAttribute("id",this.id);
        this.register();
        this.hide();
    }

    //スタイル関連の変更を反映する
    register(){
        this.element.style.position = "absolute";
        this.element.style.left = this.posX;
        this.element.style.top = this.posY;
        this.element.style.width = this.size;
        this.element.style.zIndex = 20;
        this.element.style.maxWidth = "90vw";
        this.element.style.maxHeight = "90vh";
    }
}