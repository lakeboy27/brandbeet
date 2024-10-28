const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({scrollTrigger:{
    trigger : ".part1" , 
    start : "50% 50%" , 
    end : "250% 50%" , 
    scrub : true , 
    // markers : true , 
    pin: true 
}})

tl.to('.rotatediv' ,{
    rotate : -15 ,
    scale: 0.8
},'a')
tl.to('#rowdiv2' , { 
    marginTop : "5%"
},'a')
tl.to('#rowdiv3' , { 
    marginTop : "-2%"
},'a')
tl.to('#rowdiv4' , { 
    marginTop : "-8%"
},'a')
tl.to('#rowdiv5' , { 
    marginTop : "-10%"
},'a')
tl.to('.overlay h1' , { 
    opacity :1 ,
    delay : .2
},'a')
tl.to('.overlay' , { 
    backgroundColor : '#000000b4'
},'a')
tl.to('.scrolling' , { 
    width : "100%"
},'a')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger : ".part2" , 
    start : "0% 70%" , 
    end : "50% 50%" , 
    scrub : true , 
    // markers : true , 
    // pin: true 
}})

tl2.to('.roundwrap' , { 
    height : 0 , 
    marginTop : 0 
})


let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:'.content2' , 
        start : '20% 50%', 
        end : '100% 50%' , 
        // markers  : true ,
        scrub : 1
    }
}); 
tl3.to('.textareahover h1' , { 
    width : '100%'
})
tl3.to('.textareahover h2' , { 
    delay : -.3,
    width : '100%'
})



let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:'.part4' , 
        start : '50% 50%', 
        end : '200% 50%' , 
        pin: true ,
        // markers  : true ,
        scrub : 1
    }
}); 


tl4.to('.cone' , { 
    marginTop : '-40%' ,
    opacity: '1'
},'sct')
tl4.to('.ctwo' , { 
    opacity: '1'
},'sct2')
tl4.to('.cone',{
    marginTop :'-100' , 
    opacity :'0'
},'sct2')
tl4.to('.cthree' , { 
    opacity: '1'
},'sct3')
tl4.to('.ctwo',{
    marginTop :'-100' , 
    opacity :'0'
},'sct3')
tl4.to('.cone',{
    marginTop :'-200'
},'sct3')
tl4.to('.cone',{
    marginTop :'-230'
},'sct4')
tl4.to('.cthree',{
    opacity : '0'
},'sct4')

tl4.to('.cirpart4',{
    marginLeft :'100%', 
    rotate: 360
},'sct4')
