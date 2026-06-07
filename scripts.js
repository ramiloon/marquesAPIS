const url = "https://ghibliapi.vercel.app/films";

const contenedor = document.getElementById("contenedor-peliculas");


fetch(url)
    .then(respuesta => {
        
        return respuesta.json();
    })
    .then(peliculas => {
       
        peliculas.forEach(pelicula => {
            
            
            contenedor.innerHTML += `
                <div class="col">
                    <div class="card shadow-sm">
                        <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.title}">
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <p class="card-text text-muted">${pelicula.original_title}</p>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><strong>Director:</strong> ${pelicula.director}</li>
                                <li class="list-group-item"><strong>Año:</strong> ${pelicula.release_date}</li>
                                <li class="list-group-item"><strong>Puntuación:</strong> ${pelicula.rt_score} / 100</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
        contenedor.innerHTML = "<p>Hubo un error al cargar las películas.</p>";
    });
