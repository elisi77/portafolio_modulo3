let cantidad=prompt("ingrese una cantidad:")

let lista={}
let i=1


while (i<=cantidad) {

    //hacer algo
    let usuario={}
    //let nombre=prompt("Ingrese nombre de usuario" +i+":")
    //let rut=prompt("Ingrese rut de usuario"+i+":")
   
    //lista.push(nombre)
    //lista.push(rut)
    //lista.push(año)
    //lista.push([nombre,rut,año,hexAño])

    usuario["nombre"]=prompt("Ingrese nombre de usuario "+i+":")
    usuario["rut"]=prompt("Ingrese rut de usuario "+i+":")
    let año=parseInt(prompt("Ingrese año de nacimiento de usuario "+i+":"))
    let hexAño = año.toString(16);
    let numeroAl=Math.round(Math.random()*100)
    usuario["año"]=año
    usuario["contraseña"]=hexAño+numeroAl
    lista["usuario"+i]=usuario
        i=i+1
    }