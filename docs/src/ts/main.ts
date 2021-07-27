import main_core from './core'
const main = new main_core()
main.DOM_ready(() => {
    const image_file = "resources/images/background"
    main.background(`${image_file}_blur.webp`, `${image_file}.webp`)

    const your_name = sessionStorage.getItem("your_name") || "陌生人"

    main.viewer("your_name", `歡迎回來！${your_name}！`)

    hello_time()
    setInterval(hello_time, 300000)
    function hello_time() {
        const hr = new Date().getHours()
        let text = ""
        switch (hr) {
            case 23:
            case 0:
            case 1:
            case 2:
            case 3:
                text = `${your_name}還沒睡麻，${your_name}可不要一直熬夜喔~`
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                text = `${your_name}早安喵~`
                break;
            case 10:
            case 11:
                text = `${your_name}午安~快要到中午惹~`
                break;
            case 12:
                text = `${your_name}~今天的午餐真好吃呢~`
                break;
            case 13:
            case 14:
            case 15:
                text = `${your_name}午安~想要躺在${your_name}的懷裡~`
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                text = `${your_name}晚上好呀~`
                break;
            case 21:
            case 22:
                text = `${your_name}記得可要早點睡喔~`
                break;
        }
        main.viewer("hello_time", text)
    }

    main.on(document.body, "click", (e) => {
        main.viewer("your_name", `歡迎回來！${your_name}！`)
        hello_time()
    }).on(document.getElementById("title"), "click", (e) => {
        e.stopPropagation()
        main.viewer("your_name", "想要怎麼叫你呢~")
        main.viewer("hello_time", "<input id='input_your_name' >")
    }).on(document.getElementById("hello_time"), "click", (e) => {
        e.stopPropagation()
        main.viewer("your_name", `${your_name}要找什麼東西嗎~`)
        main.viewer("hello_time", "<input id='input_your_name' ><button>尋找</button>")
    })
})