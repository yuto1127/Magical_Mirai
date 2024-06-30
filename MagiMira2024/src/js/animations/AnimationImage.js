export class AnimationImage{     //アニメーションテキストの元となるクラス
    /* 
        posX = 要素のx座標
        posY = 要素のy座標
        dispTime = 文字列の表示にかかる時間
        lifeTime = 文字列が表示される時間
        killTime = 文字列の削除にかかる時間
    */
    constructor(id,pass,posX,posY){ //コンストラクタで各パラメータを初期化
        this.setID(id);
        this.setPass(pass);
        this.setPos(posX,posY);
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

    //IDをセットする
    setID(id){
        this.id = id;
    }

    //IDを取得するメソッド
    getID(){
        return this.id;
    }

    //要素を表示する
    show(){
        this.isActive = true;
        $("#"+this.id).show();
    }

    //要素を非表示にする
    hide(){
        this.isActive = false;
        $("#"+this.id).hide();
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
        this.element.style.position = "relative";
        this.element.style.left = this.posX;
        this.element.style.top = this.posY;
        this.element.style.width = "42.5%";
        this.element.style.zIndex = 20;
    }
}