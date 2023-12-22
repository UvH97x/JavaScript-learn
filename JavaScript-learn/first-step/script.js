//関数：HTMLのbodyタグ内の一番下に<p>要素を追加する
function createParagraph(){
    const para = document.createElement("p");
    para.textContent = "ボタンが押されたよ！";
    document.body.appendChild(para);
}

/*
    1. ページ内のボタン全て参照し、配列に格納する
    2. 配列の要素数分for文を回し、addEventListenerを使ってイベントを設定する
    3. イベントが発生したら、createParagraph()関数を実行する
*/
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}