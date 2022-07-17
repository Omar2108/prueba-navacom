const btn_imagen1 = document.getElementById("imagen1");
const btn_imagen2 = document.getElementById("imagen2");
const btn_imagen3 = document.getElementById("imagen3");
const btn_imagen4 = document.getElementById("imagen4");
const btn_imagen5 = document.getElementById("imagen5");
const btn_imagen6 = document.getElementById("imagen6");
const btn_imagen7 = document.getElementById("imagen7");
const btn_imagen8 = document.getElementById("imagen8");
const btn_imagen9 = document.getElementById("imagen9");
const btn_imagen10 = document.getElementById("imagen10");
const btn_imagen11 = document.getElementById("imagen11");
const btn_imagen12 = document.getElementById("imagen12");
const btn_imagen13 = document.getElementById("imagen13");
const btn_imagen14 = document.getElementById("imagen14");
const btn_imagen15 = document.getElementById("imagen15");
const btn_imagen16 = document.getElementById("imagen16");
const btn_imagen17 = document.getElementById("imagen17");
const btn_imagen18 = document.getElementById("imagen18");
const btn_imagen19 = document.getElementById("imagen19");
const btn_imagen20 = document.getElementById("imagen20");
const btn_imagen21 = document.getElementById("imagen21");
const btn_imagen22 = document.getElementById("imagen22");
const btn_imagen23 = document.getElementById("imagen23");
const btn_imagen24 = document.getElementById("imagen24");

//funciones para mostrar el modal con la infromacion de cada comunidad.

const mostrar_modal1 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[7].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen1.addEventListener("click", mostrar_modal1);

const mostrar_modal2 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[3].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen2.addEventListener("click", mostrar_modal2);

const mostrar_modal3 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[13].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen3.addEventListener("click", mostrar_modal3);

const mostrar_modal4 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[20].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen4.addEventListener("click", mostrar_modal4);

const mostrar_modal5 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[22].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen5.addEventListener("click", mostrar_modal5);

const mostrar_modal6 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[6].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen6.addEventListener("click", mostrar_modal6);

const mostrar_modal7 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[5].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen7.addEventListener("click", mostrar_modal7);

const mostrar_modal8 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[17].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen8.addEventListener("click", mostrar_modal8);

const mostrar_modal9 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[4].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen9.addEventListener("click", mostrar_modal9);

const mostrar_modal10 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[1].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen10.addEventListener("click", mostrar_modal10);

const mostrar_modal11 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[10].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen11.addEventListener("click", mostrar_modal11);

const mostrar_modal12 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[11].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen12.addEventListener("click", mostrar_modal12);

const mostrar_modal13 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[2].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen13.addEventListener("click", mostrar_modal13);

const mostrar_modal14 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[0].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen14.addEventListener("click", mostrar_modal14);

const mostrar_modal15 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[15].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen15.addEventListener("click", mostrar_modal15);

const mostrar_modal16 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[24].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen16.addEventListener("click", mostrar_modal16);

const mostrar_modal17 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[23].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen17.addEventListener("click", mostrar_modal17);

const mostrar_modal18 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[12].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen18.addEventListener("click", mostrar_modal18);

const mostrar_modal19 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[8].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen19.addEventListener("click", mostrar_modal19);

const mostrar_modal20 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[9].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen20.addEventListener("click", mostrar_modal20);

const mostrar_modal21 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[21].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen21.addEventListener("click", mostrar_modal21);

const mostrar_modal22 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[18].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen22.addEventListener("click", mostrar_modal22);

const mostrar_modal23 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[19].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen23.addEventListener("click", mostrar_modal23);

const mostrar_modal24 = () => {
    fetch(`http://localhost:3000/api/reddit/v1/contenidos`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let id = data[14].id;
            fetch(`http://localhost:3000/api/reddit/v1/contenido/${id}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    let id_modal = document.getElementById("id-comnunidad");
                    let lang_modal = document.getElementById("lang-comnunidad");
                    let title_modal = document.getElementById("title-comnunidad");
                    let url_modal = document.getElementById("url-comnunidad");
                    let description_modal = document.getElementById("description-comnunidad");
                    let created_modal = document.getElementById("created-comnunidad");

                    id_modal.textContent = data[0].id;
                    lang_modal.textContent = data[0].lang;
                    title_modal.textContent = data[0].title;
                    url_modal.textContent = "https://www.reddit.com" + data[0].url;
                    description_modal.textContent = data[0].description;
                    created_modal.textContent = data[0].created;

                    $('#staticBackdrop').modal('show');
                });
        });


}

btn_imagen24.addEventListener("click", mostrar_modal24);