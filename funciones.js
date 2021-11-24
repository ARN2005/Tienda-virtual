window.sr=ScrollReveal();
sr.reveal(".hola", {
    duration: 6000,
    origin:"right",
    distance: "100px"

});
function comprar(){
    var unid=parseInt(prompt("Cuantas unidades desea comprar?(1-2-3-4...)"))
    if (unid>0) {
        alert("Su compra ha sido exitosa se enviarán " + unid + " unidades a su casa. Esperamos su siguente compra.");
    } else {
        alert("Su compra se ha cancelado.")
    }
    
}