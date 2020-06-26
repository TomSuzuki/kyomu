class UI {

    // UIの表示
    static display() {

        // スタートを非表示
        if (Kyomu.isSpawn()) document.getElementById("uiStart").style.display = "none";

        // ゲームオーバーを表示
        if (Kyomu.isSpawn() && !Kyomu.isAlive()) document.getElementById("uiGameover").style.display = "block";

        // UIの更新
        let e = document.getElementById("uiScore");
        e.innerHTML = `現在の虚無の大きさ：${Kyomu.getSize()}cm<br>クリック回数：${Kyomu.clickNum}回`;
    }

}