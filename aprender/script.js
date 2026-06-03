alert("testando alert")
let totalRolado = 0

function resetar(){

    
}
function rolarD2(){
    let dado = Math.cell(Math.random()*2)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
     document.getElementById('outputUltima').innerHTML = totalRolado
    
}
function rolarD4(){
    let dado = Math.cell(Math.random()*4)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
     document.getElementById('outputUltima').innerHTML = totalRolado
    
}
function rolarD8(){
    let dado = Math.cell(Math.random()*8)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
     document.getElementById('outputUltima').innerHTML = totalRolado
    
}
function rolarD16(){
    let dado = Math.cell(Math.random()*16)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
     document.getElementById('outputUltima').innerHTML = totalRolado
    
}
function rolarD32(){
    let dado = Math.cell(Math.random()*32)
    document.getElementById('outputUltima').innerHTML = dado
    totalRolado += dado
     document.getElementById('outputUltima').innerHTML = totalRolado
    
}

