let canvas=document.getElementById('canvas')
canvas.width=500
canvas.height=500
let ctx=canvas.getContext('2d')
let fps=50
let b01=new rect(100,100,20,20,10)
let r01=new rect(200,100,20,20,Infinity)
let world_=new world(0,0,100)
function init(){
    world_.add(b01)
    world_.add(r01)
    b01.velocity.x=0.1
    r01.velocity.x=0.05
}
function update(){
    world_.update(1000/fps)

}
function draw(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,500,500)
    b01.draw_helper('red')
    r01.draw_helper('blue')
    requestAnimationFrame(draw)
}
init()
setInterval(update,1000/fps)
draw()



