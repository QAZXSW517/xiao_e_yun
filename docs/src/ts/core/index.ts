export  default class{
    public constructor(){
    }
    public DOM_ready(fun:()=>void){
        document.addEventListener('DOMContentLoaded',fun,{once:true})
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
                    pre_background.style.display = "none"
                }else{
                    this.fade_out(pre_background,()=>{},1200)
                }
            })
        })
        
        function image_load(el:HTMLElement,url:string,done:()=>void) {
            img.src = url
            img.addEventListener('load', () => {
                el.style.backgroundImage = `url(${url})`
                done()
            },{once:true})
        }
    }

    public fade_in(el:HTMLElement,done?:()=>void,time:number=400){

        const opacity = Number(getComputedStyle(el).opacity) as unknown as number

        if(el.style.display === "none"){
            el.style.display = "block"
        }
        
        const run_time = 10 //間隔 10ms
        const total_i = Math.floor(time / run_time) //總運行次數
        let i = total_i //運行次數

        const interval = setInterval(run,run_time)
        run()

        function run() { 
            i--

            const fade_opacity = ( ( 1 - opacity ) / total_i * (total_i - i)) + opacity;
            (el.style.opacity as unknown as number) = fade_opacity
            
            if(i === 0){
                clearInterval(interval)
                if(done){done()}
            }
        }
    }

    public fade_out(el:HTMLElement,done?:()=>void,time:number=400){

        const opacity = Number(getComputedStyle(el).opacity) as unknown as number

        const run_time = 10 //間隔 100ms
        const total_i = Math.floor(time / run_time) //總運行次數
        let i = total_i //運行次數

        const interval = setInterval(run,run_time)
        run()

        function run() { 
            i--
            
            const fade_opacity = opacity / total_i * i;
            (el.style.opacity as unknown as number) = fade_opacity
            
            if(i === 0){
                clearInterval(interval)
                el.style.display = "none"
                if(done){done()}
            }
        }
    }
    private __viewer = {}
    public viewer(key?:string,val?:string,done?:()=>void){
        if(key===undefined){ //&&val===undefined
            return this.__viewer
        }else if(val===undefined){
            return this.__viewer[key]
        }else{
            if(val !== this.__viewer[key]){
                try{
                    const $this = this
                    const el = document.getElementById("$"+key)
                    if(el.style.display === "none"||el.style.opacity === "0"||$this.__viewer[key] === ""||$this.__viewer[key] === undefined){
                        run()
                    }else{
                        $this.fade_out(el,run)
                    }
                    function run(){
                        el.innerHTML = val
                        $this.fade_in(el)
                        if(done){done()}
                    }
                }catch(e){
                    const info = this.info+"viewer|"
                    console.warn(info+"未找到id:"+key,e)
                }
            }
            return this.__viewer[key] = val
        }
    }

    private info = "|主要核心|"
}