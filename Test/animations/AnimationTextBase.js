export class AnimationTextBase{     //アニメーションテキストの元となるクラス
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
    constructor(text,fontFamily,font_size,color,posX,posY,dispTime,lifeTime,killTime){ //コンストラクタで各パラメータを初期化
        this.setText(text);
        this.fontFamily(fontFamily);
        this.setFontSize(font_size);
        this.setColor(color);
        this.setPos(posX,posY);
        this.setDispTime(dispTime);
        this.setLifeTime(lifeTime);
        this.setKillTime(killTime);
        this.isActive = false;
        this.parentElementID = "lyrics";
        this.parentElement = document.getElementById(this.parentElementID);
        this.element;
        this.id;
    }

    //文字のフォントを指定しないコンストラクタ
    constructor(text,font_size,color,posX,posY,dispTime,lifeTime,killTime){
        this(text,"Verdana",font_size,color,posX,posY,dispTime,lifeTime,killTime);
    }

    //表示するテキストをセットする
    setText(text){
        this.text = text;
    }

    setFontFamily(fontFamily){
        this.fontFamily = fontFamily;
    }

    //表示する文字の大きさをセットする
    setFontSize(font_size){
        this.font_size = font_size;
    }

    //表示する文字の色をセットする
    setColor(color){
        this.color = color;
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

    //要素を表示する
    setActive(){
        this.isActive = true;
        $("#"+this.id).show();
    }

    //要素を非表示にする
    setInactive(){
        this.isActive = false;
        $("#"+this.id).hide();
    }

    //要素を生成する
    generate(){
        this.element = document.createElement('p');
        this.element.textContent = this.text;
        this.parentElement.appendChild(this.element);
        this.element.setAttribute("id",this.id);
        this.register();
        this.setInactive();
    }

    //スタイル関連の変更を反映する
    register(){
        this.element.style.position = "relative";
        this.element.style.color = this.color;
        this.element.style.fontFamily = this.fontFamily;
        this.element.style.fontSize = this.font_size;
        this.element.style.left = this.posX;
        this.element.style.top = this.posY;
    }

    /*
    テキストを表示して指定時間後に非表示にする処理
    
    dispTimeミリ秒で表示して、
    lifeTimeミリ秒表示し、
    killTimeミリ秒で非表示にする
    */
    play(){
        $("#"+this.id).show(this.dispTime).delay(this.lifeTime).hide(this.killTime);
    }
}