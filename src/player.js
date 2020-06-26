class Player {

    // 初期化
    static initialize() {
        // キーの初期化
        this.keyStatus = {
            click: false
        };

        // マウスイベントの登録（クリック時）
        document.addEventListener('mousedown', (e) => {
            this.keyStatus.click = true;
            e.preventDefault();
            return false;
        });

        // マウスイベントの登録（離したとき）
        document.addEventListener('mouseup', (e) => {
            this.keyStatus.click = false;
            e.preventDefault();
            return false;
        });

        // スマホのタッチの登録（クリック時）
        document.addEventListener('touchstart', (e) => {
            this.keyStatus.click = true;
            e.preventDefault();
            return false;
        });

        // スマホのタッチの登録（離したとき）
        document.addEventListener('touchend', (e) => {
            this.keyStatus.click = false;
            e.preventDefault();
            return false;
        });
    }

    // クリックしたか？
    static isClick() {
        let temp = this.keyStatus.click;
        this.keyStatus.click = false;
        return temp;
    }

    // 操作の更新
    static update() {

        // クリックした
        if (Player.isClick()) {
            // 虚無は生まれているか？
            if (!Kyomu.isSpawn()) {
                Kyomu.createKyomu();    // 虚無の生成
            } else if (Kyomu.isAlive()) { // 虚無の存在確認（虚無がつぶれたらfalseが返る）
                Kyomu.clickKyomu();
            } else {    // 虚無は死んだ（ゲームオーバー）
            }
        }
    }


}