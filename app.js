// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = []
let lista =  document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombre = document.getElementById('amigo')
    if (nombre.value ==''){
        alert('Por favor, inserte un nombre.')
        return
    }
    amigos.push(nombre.value)
    console.log(amigos)   
    verAmigo(amigos)
    document.querySelector('#amigo').value = '';
}

function verAmigo(amigos){
   
     lista.innerHTML = ''
    for(let i = 0; i<amigos.length; i++){
        let elemento = amigos[i]
        let li = document.createElement("li");
        li.innerHTML = elemento;
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert('Ingresa nombres para conocer a tu amigo invisible')

    }else {
        let ganador = Math.floor(Math.random()*amigos.length);
        let amigo = amigos[ganador]
        let li = document.createElement('li');
        li.textContent = `Tu amigo secreto es ${amigo}`;
        document.getElementById('resultado').append(li);
        document.getElementById('listaAmigos').remove('li')
       

    }
}

