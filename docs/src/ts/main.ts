import main_core from './core'
document.addEventListener('DOMContentLoaded', () => {
    const main = new main_core()
    const image_file = "resources/images/background"
    main.background(`${image_file}_blur.webp`,`${image_file}.webp`)
    
},{once:true})