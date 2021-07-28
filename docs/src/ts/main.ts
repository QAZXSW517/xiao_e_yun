import main_core from './core'
const main = new main_core()
main.DOM_ready(() => {
    const image_file = "resources/images/background"
    main.background(`${image_file}_blur.webp`, `${image_file}.webp`)

    function your_name() {
        const name = sessionStorage.getItem("your_name")
        return name === "" ? "陌生人" : name || "陌生人"
    }

    main.viewer("your_name", `歡迎回來！${your_name()}！`)
    const el_hello_time = document.getElementById("hello_time")

    hello_time()
    setInterval(hello_time, 300000)
    function hello_time() {
        const $your_name = your_name()
        const hr = new Date().getHours()
        let text = ""
        switch (hr) {
            case 23:
            case 0:
            case 1:
            case 2:
            case 3:
                text = `${$your_name}還沒睡麻，${$your_name}可不要一直熬夜喔~`
                break;
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                text = `${$your_name}早安喵~`
                break;
            case 10:
            case 11:
                text = `${$your_name}午安~快要到中午惹~`
                break;
            case 12:
                text = `${$your_name}~今天的午餐真好吃呢~`
                break;
            case 13:
            case 14:
            case 15:
                text = `${$your_name}午安~想要躺在${$your_name}的懷裡~`
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
                text = `${$your_name}晚上好呀~`
                break;
            case 21:
            case 22:
                text = `${$your_name}記得可要早點睡喔~`
                break;
        }
        main.viewer("hello_time", text, ()=>{
            el_hello_time.classList.remove("have_input")
        })
    }

    let mode = 0

    document.body.addEventListener("click", (e) => {
        mode = 0
        const $your_name = your_name()
        main.viewer("your_name", `歡迎回來！${$your_name}！`)
        hello_time()
    }, false)
    document.getElementById("title").addEventListener("click", (e) => {
        e.stopPropagation()
        if (mode === 2) { return }
        mode = 1
        main.viewer("your_name", "想要怎麼叫你呢~")
        main.viewer("hello_time", "<input id='input_your_name'>", () => {
            const input = document.getElementById("input_your_name") as HTMLInputElement
            input.value = sessionStorage.getItem("your_name") || ""
            el_hello_time.classList.add("have_input")
        })
    }, false)
    el_hello_time.addEventListener("click", (e) => {
        e.stopPropagation()
        if (mode === 1) { return }
        mode = 2
        main.viewer("your_name", `${your_name()}要找什麼東西嗎~`)
        main.viewer("hello_time", "<input id='search' class='inline' minlength='1' maxlength='32'><button id='search_btn'>尋找</button>", () => {
            const input = document.getElementById("search") as HTMLInputElement
            input.value = sessionStorage.getItem("last_search") || ""
            el_hello_time.classList.add("have_input")
        })
    }, false)
    el_hello_time.addEventListener("input", (e) => {
        //input向上冒泡
        const target = e.target as HTMLInputElement
        const value = target.value
        const $switch = {
            "input_your_name": "your_name",
            "search": "last_search"
        }
        sessionStorage.setItem($switch[target.id], value)
    }, false)
    el_hello_time.addEventListener('keypress', function (e) {
        const target = e.target as HTMLInputElement
        search(target.value, (e.key === 'Enter' && target.id === "search"))
    }, false)
    el_hello_time.addEventListener('click', function (e) {
        const target = e.target as HTMLButtonElement
        const is_true = target.id === "search_btn"
        if (is_true) {
            const value = (document.getElementById("search") as HTMLInputElement).value
            search(value, is_true)
        }
    }, false)

    function search(value: string, $if: boolean) {
        if ($if && value.length > 0 && value.length <= 32) {
            sessionStorage.removeItem("last_search")
            location.href = `https://www.google.com/search?q=${encodeURIComponent(value)}`
        }
    }
})