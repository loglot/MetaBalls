const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var speed = 2
var radius = 30
var orbCount = 200
var orbs = []

for(let i = 0; i<orbCount; i++){
    orbs.push(orbSet())
}

tick()









function tick() {
    rect(0, 0, canvas.width, canvas.height, "#000")

    orbs.forEach(e => {
        circle(e.x, e.y, radius, "#fff")
        console.log(e)
        e.x+=e.velX
        e.y+=e.velY
        if(e.x < 0 + radius || e.x > canvas.width - radius){
            e.velX *= -1
        }
        if(e.y < 0 + radius || e.y > canvas.height - radius){
            e.velY *= -1
        }
    });




    requestAnimationFrame(tick)
}

function orbSet() { 
    return{
        x: canvas.width * .5,
        y: canvas.height * .5,
        velX: (Math.random() - .5) * speed,
        velY: (Math.random() - .5) * speed
    }
}

function circle(x, y, rad, color = "rgba(255, 0, 0, .5)") {
    ctx.beginPath();
    ctx.arc(x, y, rad, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function rect(x, y, w, h, color = "rgba(255, 0, 0, .5)") {
    ctx.beginPath();
    ctx.rect(x, y, w, h) 
    ctx.fillStyle = color;
    ctx.fill()
    ctx.closePath();
}