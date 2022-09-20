const carrito = document.getElementById('carrito')
const template = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const botonos = document.querySelectorAll('.btn')
let carritoObjetos = []

// let carritoObjetos = {
//         "manzana" : {
//             titulo: "manzana",
//             id: "manzana",
//             cantidad: 1
//         },
//         "manzana" : {
//             titulo: "manzana",
//             id: "manzana",
//             cantidad: 1
//         },
// }

// console.log(carrito);
// console.log(template);
// console.log(fragment);
// console.log(botonos);

const agregarCarrito = (e)=>{
    // console.log(e.target);
    // console.log(e.target.dataset);
    // console.log(e.target.dataset.fruta);
    const producto = {
        titulo: e.target.dataset.fruta,
        id:e.target.dataset.fruta,
        cantidad:1
    }
    // console.log(producto);
    const index = carritoObjetos.findIndex(element=>
        element.id === producto.id
    )

    // console.log(index);
    // console.log(carritoObjeto[index]);
    
    if (index === -1) {
            carritoObjetos.push(producto)
    }else{
        carritoObjetos[index].cantidad++
    }
    console.log(carritoObjetos);
    pintarCarrito(carritoObjetos)
}

const pintarCarrito = (array)=>{
    // carrito.innerHTML = ''
    carrito.textContent = ''
    array.forEach(element=>{
        // console.log(element);
        const clone = template.cloneNode(true)
        clone.querySelector('.lead').textContent = element.titulo
        clone.querySelector('.badge').textContent = element.cantidad
        fragment.appendChild(clone)
    })
    carrito.appendChild(fragment)
}
botonos.forEach((btn)=>{
    // console.log(btn);
    btn.addEventListener('click',agregarCarrito)
})
