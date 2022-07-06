 const jugadores= [
    {id:1,nombre:"lionel messi", valor:50, club:"psg",liga:"ligue 1"},
    {id:1,nombre:"lautaro martinez", valor:80, club:"inter",liga:"serie A"},
    {id:1,nombre:"Angel Di maria", valor:30, club:"psg",liga:"ligue 1"},
    {id:1,nombre:"Rodrigo De paul", valor:50, club:"Atletico Madrid",liga:"La liga"},
    {id:1,nombre:"Leandro Paredes", valor:60, club:"psg",liga:"ligue 1"},

 ]

 let container= document.getElementById ("container");
 let filtro= parseInt(prompt("ingrese el monto maximo"));

 let filtrados= jugadores.filter(elemento => elemento.valor < filtro);

 for (const jugador of filtrados){
    let item= document.createElement("div");
    item.innerHTML= `<h1>NOMBRE=${jugador.nombre}</h1>
                       <h3>VALOR DE MERCADO ${jugador.valor}</h3>
                       <b>CLUB ACTUAL ${jugador.club}</b> `
 container.append(item)
                    }