// 起動されたときに呼ばれる関数を登録する
window.addEventListener("load", () => {
    // 初期化
    initialize();

    // ゲームを開始する
    loop();
});

// 初期化
let mode = 0;
let frame = 0;
function initialize() {
    // 初期化
    Player.initialize();
    Kyomu.initialize();
}

// ゲーム本体
function loop() {

    // 更新
    Player.update();
    Kyomu.update();

    // 表示
    Kyomu.display();
    UI.display();

    // 指定フレーム後にloopを再呼び出し
    frame++;
    requestAnimationFrame(loop);
};
