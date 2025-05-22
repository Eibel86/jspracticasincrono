///////PRACTICA PROMESA  
const idButton = document.querySelector("#idButton");
const container = document.getElementById('container');
// // ///EVENTO
idButton.addEventListener("click", (ev)=>{
   //llamar a una función
   getApiData()
});

///////FUNCIONES
/**
 * Funcion, con tiempo de espera, promesa.
 * @returns 
 */
const api=()=>{
     return new Promise((resolve, reject) => {
        const isOk=false;
        setTimeout (()=>{
            if (isOk){
                let objApi = {
                    id: "1",
                    nombre: "Abel",
                    mail: "abel@gmail.com",  
                };
                resolve (objApi);
            } else {
                reject ("Error. No encontrado");
            }
        },2000);     
    })
}
const getApi = async () => {
    try {
        const alumnoEncontrado = await api();
    } catch (error){
        console.log(`Error: ${error}`)
    }
}
/////////INVOCAR
api()
    .then((respuesta) => {
        container.innerHTML = `Nombre: ${respuesta.nombre}-----email: ${respuesta.mail}`;
    })
    .catch((error) => {
        container.innerHTML = error;
    })
    .finally(() => {
        console.log("fin de buscar");
    });
