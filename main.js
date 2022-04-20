let canvas=document.getElementById('canvas')
canvas.width=500
canvas.height=500
let ctx=canvas.getContext('2d')
let fps=50
let b01=new ball(100,100,20,10)
let r01=new rect(200,100,40,40,10)
let ws=[]
let bs=[]
let nn=500
let tt=0



console.time()
for(let i=0;i<10000;i++){
    let v1=new vec2(1,2)
    let v2=new vec2(2,3)
    let v3=v1.add(v2)
}
console.timeEnd()

let world_=new world(0,0,10)
let keys={}
function init(){
    ws.push(new rect(250,0,500,10,Infinity))
    ws.push(new rect(250,500,500,10,Infinity))
    ws.push(new rect(0,250,10,500,Infinity))
    ws.push(new rect(500,250,10,500,Infinity))
    for(let i of ws){
        i.isgravity=false
        world_.add(i)
    }
    for(let i=0;i<nn;i++){
        let x=Math.random()*480+10
        let y=Math.random()*480+10
        let vx=(Math.random()-0.5)*0.5
        let vy=(Math.random()-0.5)*0.5
        let bb=new ball(x,y,5,10)
        bb.velocity=new vec2(vx,vy)
        bs.push(bb)
        world_.add(bb)
    }



    

    /*
    world_.add(b01)
    world_.add(r01)
    b01.velocity[0]=0.1
    r01.velocity[0]=0
    world_.add_constraint(b01,r01,100,0.0001)*/
    /*window.addEventListener('keydown',keydown)
    window.addEventListener('keyup',keyup)*/
}
function update(){
    tt+=1000/fps

    /*
    if(keys.a){
        b01.velocity[0]-=0.005
    }
    if(keys.d){
        b01.velocity[0]+=0.005
    }
    if(keys.w){
        b01.velocity[1]-=0.005
    }
    if(keys.s){
        b01.velocity[1]+=0.005
    }*/



    world_.update(1000/fps)

}

function keydown(e){
    let keyid=e.code
    if(keyid==='KeyA'){
        keys.a=true
    }
    if(keyid==='KeyD'){
        keys.d=true
    }
    if(keyid==='KeyW'){
        keys.w=true
    }
    if(keyid==='KeyS'){
        keys.s=true
    }
}
function keyup(e){
    let keyid=e.code
    if(keyid==='KeyA'){
        keys.a=false
    }
    if(keyid==='KeyD'){
        keys.d=false
    }
    if(keyid==='KeyW'){
        keys.w=false
    }
    if(keyid==='KeyS'){
        keys.s=false
    }
}
function draw(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,500,500)



    for(let i of ws){
        i.draw_helper('orange')
    }
    for(let i of bs){
        i.draw_helper('white')
    }

    //b01.draw_helper('red')
    //r01.draw_helper('blue')
    requestAnimationFrame(draw)
}
//init()
//setInterval(update,1000/fps)
//draw()