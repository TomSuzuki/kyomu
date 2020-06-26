class Kyomu {

    // 初期化
    static initialize() {
        // 初期化
        this.size = 0;  // 虚無の大きさ
        this.spawn = false;
        this.clickNum = 0;
    }

    // 虚無を産む
    static createKyomu() {
        this.spawn = true;
        this.size = 100;
    }

    // 虚無の描画
    static display() {
        let k = document.getElementById("kyomu");
        if (this.spawn) k.style.display = "block";
        k.style.width = `${this.size}px`;
    }

    // 虚無の更新
    static update() {
        this.size = this.size - 0.2;
    }

    // 虚無の存在確認（虚無がつぶれたらfalseが返る）
    static isAlive() {
        if (this.size <= 0) return false;
        return true;
    }

    // 虚無が生まれているか
    static isSpawn() {
        return this.spawn;
    }

    // 虚無をクリック
    static clickKyomu() {
        this.size = this.size + 10;
        this.clickNum++;
    }

    // 表示する虚無の大きさ
    static getSize() {
        if (this.size < 0) return 0;
        return parseInt(this.size);
    }
}
