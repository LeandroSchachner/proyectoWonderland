



document.querySelector("#boton").addEventListener("click", traerInformacion);

function traerInformacion(){
     //console.log(traerInformacion);

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "usuario.json", true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
          //console.log(this.responseText); 
          let info = JSON.parse(this.responseText);
          //console.log(info);
          let respuesta = document.querySelector("#respuesta");
          respuesta.innerHTML = "";
          
          for(let item of info){
            //console.log(item);
            respuesta.innerHTML += `
            <tr> 
              <td>${item.nombreUsuario}</td>
              <td>${item.apellidoUsuario}</td>
              <td>${item.edad}</td>
              <td>${item.nacimientoDia}</td>
              <td>${item.nacimientoMes}</td>
              <td>${item.nacimientoAño}</td>
            </tr>
            `
          }
        };
    };
};