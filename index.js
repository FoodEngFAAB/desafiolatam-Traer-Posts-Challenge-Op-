

//Realiza request (consulta) a la API usando async-await
const getPosts = async () => {

    //Almacena la URL en una constante
    const url = 'https://jsonplaceholder.typicode.com/posts'
    // Bloque try/catch para conectarse a la URL y controlar errores
    try {
        const res = await fetch(url)
        //Almacena el arreglo de datos recibidos
        const data = await res.json()
        console.log(data)
        const lista = document.getElementById("post-data")

        //Recorre arreglo con forEach e inserta datos en la lista mediante innerHTML
        data.forEach((element)=>{
            lista.innerHTML += `<ul>
                                    <li><b>${element.title}</b></p>
                                    <p>${element.body}</p>
                                    </ br>
                              </ul>`
        });

    } 
    // Método catch() para atrapar errores
    catch(err) {
        console.log(err)
    }
    
}
