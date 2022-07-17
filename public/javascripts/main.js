const btnDatos = document.getElementById("btnDatos");
const obtener_datos = () => {

    fetch(`https://www.reddit.com/reddits.json`)
        .then(response => response.json())
        .then(data => {
            let datos = data.data;
            let arreglo = datos.children;
            console.log(arreglo);

            for (let i = 0; i < arreglo.length; i++) {
                let datos = arreglo[i].data;

                fetch(`http://localhost:3000/api/reddit/v1/contenido`, {
                        method: "POST",
                        body: `id=${datos.id}&header_img=${datos.header_img}&lang=${datos.lang}&title=${datos.title}&url=${datos.url}&description=${datos.description}&created=${datos.created}`,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }

                    })
                    .then(response => response.json())
                    .catch(err => console.log(err));



            }
        });
}

btnDatos.addEventListener("click", obtener_datos);