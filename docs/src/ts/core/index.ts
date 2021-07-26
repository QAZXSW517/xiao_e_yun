export  default class{
    public constructor(){
    }
    public background(low_quality_url:string, high_quality_url:string){
        const info = this.info+"背景加載器|"
        console.log(info+"開始運行")
        const img = new Image()
        const pre_background = document.getElementById('preload_background')
        const main_background = document.getElementById('main_background')

        const start_time = Date.now()
        image_load(pre_background,low_quality_url,()=>{
            console.log(info+"加載成功低畫質背景")
            image_load(main_background,high_quality_url,()=>{
                const done_time = Date.now()
                console.log(info+"加載成功高畫質背景")
                if((done_time - start_time)<= 50){
                    pre_background.remove()
                }else{
                    this.fade_out(pre_background,()=>{pre_background.remove()},1200)
                }
            })
        })
        
        function image_load(el:HTMLElement,url:string,done:()=>void) {
            img.src = low_quality_url
            img.addEventListener('load', () => {
                done()
                el.style.backgroundImage = `url(${url})`
            },{once:true})
        }
    }

    public fade_out(el:HTMLElement,done:()=>void,time:number=400){
        const info = this.info+"淡出|"
        console.log(info+time+"ms")

        const opacity = getComputedStyle(el).opacity as unknown as number

        const run_time = 10 //間隔 100ms
        const total_i = Math.floor(time / run_time) //總運行次數
        let i = total_i //運行次數

        const interval = setInterval(run,run_time)
        run()

        function run() { 
            (el.style.opacity as unknown as number) = opacity / total_i * i
            
            i--
            if(i === 0){
                clearInterval(interval)
                done()
            }
        }
    }

    public info = "|主要核心|"
}