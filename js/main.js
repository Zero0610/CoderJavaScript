var idCliente;
var nombreCliente;
var direccionCliente;
var telefonoCliente;
var nombreProducto;
var precio;
var cantidad;
var total;
var subtotal;
var iva;
var subtotalP = 0;



function generarFactura() {


    idCliente = document.getElementById("idCliente").value;
    nombreCliente = document.getElementById("nombreCliente").value;
    direccionCliente = document.getElementById("direccionCliente").value;
    telefonoCliente = document.getElementById("telefonoCliente").value;


    for (subtotal = 0; nombreProducto != "*"; subtotal++) {


        nombreProducto = prompt('Ingrese Nombre del Producto');
        document.write("Producto:  " + nombreProducto);

        precio = parseFloat(prompt('Ingrese Precio'));
        document.write(" <br> Precio:  " + precio);

        cantidad = parseInt(prompt('Ingrese Cantidad'));
        document.write("<br>  Cantidad:  " + cantidad);


        nombreProducto = prompt('Ingrese "*" Para terminar o cualquier tecla para continuar');

        subtotal = precio * cantidad;
        subtotalP = subtotalP + parseInt(subtotal);
        iva = subtotalP * 0.19;
        total = subtotalP + iva;


        document.write("<br> SubTotal :" + subtotal);


    }
    document.write("<br><br><br><br> ID Cliente:  " + idCliente);
    document.write("<br> Nombre:  " + nombreCliente);
    document.write("<br> Direccion:  " + direccionCliente);
    document.write("<br> Telefono:  " + telefonoCliente);

}

generarFactura()
