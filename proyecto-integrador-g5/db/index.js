var datos = {
    usuario: { // nombre, email, contrasenia, fecha_nac, dni, foto_perfil
        nombre: "Juan Diaz",
        email: "juandiaz@gmail.com",
        contrasenia: "jajajaaj",
        fecha_nac: "2004-07-03",
        dni: "43264845",
        fotoPerfil: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fprofile-icon&psig=AOvVaw27q4OF-eIY39WmEdTY2_cb&ust=1712694291658000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDn1ci5s4UDFQAAAAAdAAAAABAJ"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Me llego roto",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Re lindooooo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Justo lo que necesitaba",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "Exelente serviciooo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Muy copadoo",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Me llego muy rapido",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "Buena calidad",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Vendedor muy atento",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Que rico sale todo",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Hermoso todo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Alto color",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Recomiendo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Carla Maria",
                    texto: "No funciona para nada bien",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "No es lo que parece",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Margarita Ziraldo",
                    texto: "Mala calidad",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "Malisimooo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Julieta Gardey",
                    texto: "muy tremendo",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Mora Noguer",
                    texto: "Lindooo",
                    imagenPerfil: "link"
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
                    imagenPerfil: "link"
                },
                {
                    usuario: "Juan Diaz",
                    texto: "No pedi este talle",
                    imagenPerfil: "link"
                },
                {
                    usuario: "Carla Maria",
                    texto: "Todo perfecto",
                    imagenPerfil: "link"
                }
            ]
        }
    ]

}

module.exports = datos;