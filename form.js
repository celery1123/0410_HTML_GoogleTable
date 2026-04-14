document.addEventListener("DOMContentLoaded", function() {
    const clickColor = document.createElement("button");
    const answerColor = document.querySelector(".answerColor");
    clickColor.textContent = "清除選取的項目";
    clickColor.type = "button";
    clickColor.className = "clearButton";
    
    // 監聽所有顏色 radio 按鈕
    const radioButtons = answerColor.querySelectorAll("input[type='radio']");
    radioButtons.forEach(radio => {
        radio.addEventListener("click", function() {
            if (!answerColor.contains(clickColor)) {
                answerColor.appendChild(clickColor);
            }
            console.log("click");
        });
    });
    
    // 清除按鈕功能
    clickColor.addEventListener("click", function(e) {
        e.preventDefault();
        // 清除所有radio按鈕的選擇
        const allRadios = answerColor.querySelectorAll("input[type='radio']");
        allRadios.forEach(radio => {
            radio.checked = false;
        });
        // 清除後移除按鈕
        clickColor.remove();
        console.log("已清除顏色選擇");
    });
})