const productos =[
    {
        id:"gibsonSg",
        nombre:"Gibson SG",
        img:"/img/gibson-sg.webp",
        precio:"5000",
        stock:"3",
        categoria:"guitarras",
    },
    {
        id:"LesPaul",
        nombre:"Gibson Les Paul",
        img:"/img/les-negra.webp",
        precio:"2000",
        stock:"3",
        categoria:"guitarras",

    },
    {
        id:"bajoFender",
        nombre:"Bajo Fender Jazz Bazz",
        img:"/img/bajo-jazz.webp",
        precio:"2000",
        stock:"3",
        categoria:"bajos",

    },
    {
        id:"Parquer",
        nombre:"Bajo Electrico Parquer",
        img:"/img/bajo-parquer.jpg",
        precio:"1500",
        stock:"4",
        categoria:"bajos",

    },
    {
        id:"Strato",
        nombre:"Fender StratoCaster",
        img:"/img/strato-caster.jpg",
        precio:"3500",
        stock:"4",
        categoria:"guitarras",

    },
    {
        id:"mapex",
        nombre:"Bateria Mapex",
        img:"/img/bateria-mapex.webp",
        precio:"6000",
        stock:"1",
        categoria:"baterias",

    },
    {
        id:"wha",
        nombre:"Pedal wah-wah Cry Baby",
        img:"/img/wah-wah.webp",
        precio:"900",
        stock:"4",
        categoria:"accesorios",

    },
    {
        id:"baqueta",
        nombre:"Baquetas",
        img:"/img/baquetas.webp",
        precio:"300",
        stock:"4",
        categoria:"accesorios",

    },
    {
        id:"puas",
        nombre:"Puas Fender",
        img:"/img/puas.jpg",
        precio:"100",
        stock:"4",
        categoria:"accesorios",

    },
    {
        id:"ampli",
        nombre:"Amplificador Marshall ",
        img:"/img/ampli.jpg",
        precio:"450",
        stock:"1",
        categoria:"accesorios",
    },

]
const obtenerProductos = new Promise ((resolve)=> {
    setTimeout(()=> {
        resolve(productos);
    },2000 );
});
export default obtenerProductos