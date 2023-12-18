const propiedadesAlquiler = [
    {
    nombre: 'propiedad 1', // "card-title"
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", // class="card-img-top"
    descripcion: 'casa en alquiler para proximoaño', //"card-text"
    ubicacion: '-33.012294681671946, -71.53875278824032', //"fas fa-map-marker-alt"
    habitaciones: 3, //"fas fa-bed"
    baños: 3,
    costo: 75000000, // "fas fa-dollar-sign"
    smoke: true, //"fas fa-smoking-ban"
    pets: true //"fa-solid fa-ban"
    },
    {
    nombre: 'propiedad 2', // "card-title"
    src: 'https://www.corredorala.com/upload/propiedad/447710-img-20210426-wa0022.jpg', // class="card-img-top"
    descripcion: 'casa en alquiler para proximoaño', //"card-text"
    ubicacion: '-33.012294681671946, -71.53875278824032', //"fas fa-map-marker-alt"
    habitaciones: 5, //"fas fa-bed"
    baños: 2,
    costo: 80000000, // "fas fa-dollar-sign"
    smoke: false, //"fas fa-smoking-ban"
    pets: false //"fa-solid fa-ban"
    },
    {
    nombre: 'propiedad 3', // "card-title"
    src: 'https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg?size=626&ext=jpg', // class="card-img-top"
    descripcion: 'casa en alquiler para proximo año', //"card-text"
    ubicacion: '-33.012294681671946, -71.53875278824032', //"fas fa-map-marker-alt"
    habitaciones: 3, //"fas fa-bed"
    baños: 2,
    costo: 50000000, // "fas fa-dollar-sign"
    smoke: false, //"fas fa-smoking-ban"
    pets: true //"fa-solid fa-ban"
},
{
    nombre: 'propiedad 4', // "card-title"
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg", // class="card-img-top"
    descripcion: 'casa en alquiler para proximoaño', //"card-text"
    ubicacion: '29.979759487356834, 31.13403592598127', //"fas fa-map-marker-alt"
    habitaciones: 3, //"fas fa-bed"
    baños: 3,
    costo: 75000000, // "fas fa-dollar-sign"
    smoke: true, //"fas fa-smoking-ban"
    pets: true //"fa-solid fa-ban"
    },
    {
    nombre: 'propiedad 5', // "card-title"
    src: 'https://www.corredorala.com/upload/propiedad/447710-img-20210426-wa0022.jpg', // class="card-img-top"
    descripcion: 'casa en alquiler para proximoaño', //"card-text"
    ubicacion: '-33.012294681671946, -71.53875278824032', //"fas fa-map-marker-alt"
    habitaciones: 5, //"fas fa-bed"
    baños: 2,
    costo: 80000000, // "fas fa-dollar-sign"
    smoke: true, //"fas fa-smoking-ban"
    pets: true //"fa-solid fa-ban"
    },
    {
    nombre: 'propiedad 6', // "card-title"
    src: 'https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg?size=626&ext=jpg', // class="card-img-top"
    descripcion: 'casa en alquiler para proximo año', //"card-text"
    ubicacion: '-50.99943603456493, -72.99983393220002', //"fas fa-map-marker-alt"
    habitaciones: 3, //"fas fa-bed"
    baños: 2,
    costo: 50000000, // "fas fa-dollar-sign"
    smoke: false, //"fas fa-smoking-ban"
    pets: true 
}] 
const renderProp = ()=>{ 
    const resultHTML = propiedadesAlquiler.map(
        (obj)=>{
        return `<div class="col-md-3 mb-4">
            <div class="card">
                <img src="${obj.src}"
                    class="card-img-top" alt="Imagen del departamento" />
                <div class="card-body">
                    <h5 class="card-title">
                        ${obj.nombre}
                    </h5>
                    <p class="card-text">
                        ${obj.descripcion}
                    </p>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> ${obj.ubicacion}
                    </p>
                    <p>
                        <i class="fas fa-bed"></i> ${obj.habitaciones} Habitaciones |
                        <i class="fas fa-bath"></i> ${obj.baños} Baños
                    </p>
                    <p><i class="fas fa-dollar-sign"></i>${obj.costo}</p>
                    ${
                        obj.smoke? `
                            <p class="text-success">
                            <i class="fa-solid fa-smoking" style="color: #4feb24;"></i> Se permite fumar
                    </p>`:  `
                    <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>`     
                    }
                    ${obj.pets?`
                    <p class="text-danger">
                        <i class="fa-solid fa-ban"></i> No se permiten mascotas
                    </p>`:`
                    <p class="text-success">
                    <i class="fa-solid fa-paw" style="color: #4feb24;"></i> se permiten mascotas
                    </p>`   
                    }
                </div>
            </div>
        </div>`
        })

document.getElementById("arrayAlquiler").innerHTML = resultHTML;
}

renderProp()
