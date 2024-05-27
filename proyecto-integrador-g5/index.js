var datos = {
    usuario: { // nombre, email, contrasenia, fecha_nac, dni, foto_perfil
        nombre: "Juan Diaz",
        email: "juandiaz@gmail.com",
        contrasenia: "jajajaaj",
        fecha_nac: "2004-07-03",
        dni: "43264845",
        fotoPerfil: "/images/users/fotoPerfil.jpg"
    },
    productos: [ // array de 10 productos (son objetos literales: propiedades son: imagen, nombre, descripcion, comentarios)
        {
            imagen: "/images/products/pava-electrica.jpeg",
            nombre: "Pava eléctrica",
            descripcion: "Pava Eléctrica Philips Hd9368/90 Selector De Temp Para Mate Color Negro",
            comentarios: [
                {
                    usuario: "Julieta Gardey",
                    texto: "Muy bueno",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Me llego roto",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Re lindooooo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/heladera.jpeg",
            nombre: "Heladera",
            descripcion: "Heladera Philco Phnt458x No Frost 405lts Inox",
            comentarios: [
                {
                    usuario: "Juan Diaz",
                    texto: "Era otro color",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Justo lo que necesitaba",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "Exelente serviciooo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/tostadora.jpeg",
            nombre: "Tostadora",
            descripcion: "Tostadora Peabody 750 Doble Ranura La Sensación",
            comentarios: [
                {
                    usuario: "Mora Noguer",
                    texto: "No funciona",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Muy copadoo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Me llego muy rapido",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/licuadora.jpeg",
            nombre: "Licuadora",
            descripcion: "Licuadora Moulinex Optimix Plus Lm270558 550 W 2 Lts Roja Color Rojo",
            comentarios: [
                {
                    usuario: "Carla Maria",
                    texto: "Que eficiente",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "Buena calidad",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Vendedor muy atento",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/horno.jpeg",
            nombre: "Horno",
            descripcion: "Horno Eléctrico Kanji - 28 Lts 1600w",
            comentarios: [
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Espectacular",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Que rico sale todo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Hermoso todo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/microondas.jpeg",
            nombre: "Microondas",
            descripcion: "Microondas BGH Quick Chef B120DB9 blanco 20L 220V",
            comentarios: [
                {
                    usuario: "Julieta Gardey",
                    texto: "Productazoooo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Alto color",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Recomiendo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/lavarropas.jpeg",
            nombre: "Lavarropas",
            descripcion: "Lavarropas LG Wm8516ee6 Inverter Direct Drive 8.5kg 1400 Rpm Color Stone silver",
            comentarios: [
                {
                    usuario: "Juan Diaz",
                    texto: "No recomiendo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Carla Maria",
                    texto: "No funciona para nada bien",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "No es lo que parece",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/aire.jpeg",
            nombre: "Aire acondicionado",
            descripcion: "Aire acondicionado TCL portátil frío/calor 3010 frigorías blanco 220V - 240V TACA-3500FCSA/PORT",
            comentarios: [
                {
                    usuario: "Mora Noguer",
                    texto: "Copado materiales buenos",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Mala calidad",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Malisimooo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/cafeteraa.jpeg",
            nombre: "Cafetera",
            descripcion: "Daihatsu cafe expresso CM5403DE Negro 220V Expreso",
            comentarios: [
                {
                    usuario: "Carla Maria",
                    texto: "No lo comprennn",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "muy tremendo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Lindooo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        },
        {
            imagen: "/images/products/batidora.jpeg",
            nombre: "Batidora",
            descripcion: "Batidora Planetaria Daihatsu Sm-1507 Roja - 1100 Watts Amasa Color Rojo",
            comentarios: [
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Feoo",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "No pedi este talle",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Todo perfecto",
                    imagenPerfil: "/images/users/fotoPerfil.jpg"
                }
            ]
        }
    ]

}

module.exports = datos;