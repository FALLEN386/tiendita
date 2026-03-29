
  const carrito = document.getElementById("carrito");
  const template = document.getElementById("template");
  const footer = document.getElementById('footer');
  const templateFooter = document.getElementById('templateFooter');
   const fragment = document.createDocumentFragment();
//   const botones = document.querySelectorAll('.card .btn');


document.addEventListener('click', e => {
    //console.log(e.target.matches(".card .btn-outline-secondary"))
    if (e.target.matches(".card .btn-outline-secondary")) {
        //console.log('ejecutar agregar al carro')
        agregarAlCarrito(e)
    }

    //console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches("#carrito .list-group-item .btn-success")) {
        btnAumentar(e)
    }
    if (e.target.matches("#carrito .list-group-item .btn-danger")) {
        btnDisminuir(e)
    }
});

let carritoObjeto = [];

 //1
  const agregarAlCarrito = (e) => {
     console.log(e.target.dataset.fruta);

      const producto = {
          titulo: e.target.dataset.fruta,
          id: e.target.dataset.fruta,
          cantidad: 1,
          precio: parseInt( e.target.dataset.precio),
      };

      //console.log(producto);
          //1
       const indice = carritoObjeto.findIndex(
          (item) => item.id === producto.id      )

      //console.log(indice);

      //2
       if (indice === -1) {
          carritoObjeto.push(producto)
      } else { //3
           carritoObjeto[indice].cantidad++
        //    carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio 
      }
        

      console.log(carritoObjeto);


     pintarCarrito();
  };

const pintarCarrito = (array) => {
    carrito.textContent = ""
    
    carritoObjeto.forEach((item) => {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad;
        
        clone.querySelector('.btn-danger').dataset.id = item.id
        clone.querySelector('.btn-success').dataset.id = item.id
        fragment.appendChild(clone);

    })

    carrito.appendChild(fragment);

    pintarFooter();

};

const pintarFooter = () => {
    console.log("pintar footer");
    footer.textContent = ""

    const total = carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio , 0 
    )

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector('span').textContent = total

    footer.appendChild(clone);

}
  
const btnAumentar = (e) => {
    console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map((item) => {
        if (item.id === e.target.dataset.id) {
            item.cantidad++;
        }
        return item

    });
    pintarCarrito();
};

const btnDisminuir = (e) => {
    console.log("me diste click", e.target.dataset.id);

    carritoObjeto = carritoObjeto.filter(item => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad > 0) {
                item.cantidad--
                if (item.cantidad === 0) return
                return item
            }
        } else {
            return item
        }
    })

    pintarCarrito();
}


//   botones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito )); forma antigua

// const frutas = ["🍌", "🍏", "🍓"];

 //const nuevoArray = frutas.map((fruta) => fruta);  en el map siempre se returna algo

//  frutas.push("🍉");
// console.log(nuevoArray);

// const copiaArray = frutas; al asser esta funcion muta el aaray osea
//actualiza y agreaga sin pedir permiso por que no retorna

// frutas.push("🍉");
// console.log(copiaArray);

//filter
// const users = [
//    { uid: 1, name: "John", age: 34 },
//     { uid:2, name: "Amy", age: 20 },
//     { uid:3, name: "CamperCat", age: 10 },
    
// ];

//const mayores = users.filter((user) => user.age > 30) para filtrar las personas mayores de 30
// const userFiltrado = users.filter((user) => user.uid !== 3) filter

// console.log(userFiltrado); filter

//const names = users.map((user) => user.name)
//console.log(names)

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const numeroPorDos = numeros.map((num) => num * 2)
// console.log(numeroPorDos);


// const users = [
//    { uid: 1, name: "John", age: 34 },
//     { uid:2, name: "Amy", age: 20 },
//     { uid:3, name: "CamperCat", age: 10 },
    
// ];

//Formas de buscar elementos

// const amy = users.find((user) => user.uid === 2)
// console.log(amy); trae informacion completa objet

// destructer
// const {age} = users.find((user) => user.uid === 2)
// console.log(age);

//some espara decidir si es vrdadero (true) o false
// const existe =users.some((user) => user.uid === 2)
// console.log(existe);

// const indice = users.findIndex((user) => user.uid === 2)
//console.log(indice); aca nos arrohja el numero directo
// console.log(users[indice]);

//slice
//const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//             0      [1       2]      3

// const arrayNuevo = arr.slice(1, 3)
// console.log(arrayNuevo);


//concat
//const array1 = ["a", "b", "c"];
//const array2 = ["d", "e", "f"];

//const array3 = array1.concat(array2);
//console.log(array3);

//spread sintaxis
//const array3 = [...array1,"-" ,...array2];
//console.log(array3);


//reduce
// const numeros = [1, 2, 3, 4, 5];

// const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual)

// console.log(sumarTodos);


// const arrayNumeros = [
//     [0, 1],
//     [2, 3],
//     [4, 5],
// ];





//spritOpereitor
//const arrayPlano = [].concat(...arrayNumeros);
//console.log(arrayPlano);


//metodo 1 con reduce
// const soloNumeros = arrayNumeros.reduce((acc, current) => acc.concat(current))

// console.log(soloNumeros);

//const cadenaMes = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

//split
 //const arrayMeses = cadenaMes.split(",")
 //console.log(arrayMeses);

//const nuevoTexto = arrayMeses.join("-");
//console.log(nuevoTexto);




//burbujeo forma lenta
// const padre = document.querySelector('.border-primary');
// const hijo = document.querySelector('.border-secondary');
// const nieto = document.querySelector('.border-danger');

// //agregar evento
// padre.addEventListener('click', () => {
//     console.log('me diste click padre')
// },
//     true

// );

// hijo.addEventListener('click', () => {
//     console.log('me diste click hijo')
// },
//     true

// );

// nieto.addEventListener('click', () => {
//     console.log('me diste click nieto')
// },
//     true

// );

//forma rapida
// const cajitas = document.querySelectorAll('.border');


// cajitas.forEach(caja => {
//     caja.addEventListener('click', (e) => { //la e nossirve para evitar la propagacion osa pener un evenbto
//         e.stopPropagation() // evitamos la propagacion
//         console.log('me diste click')

//     })
// })


//prent
// const ancla = document.querySelector('a');

// ancla.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('medisteclick');

// })


//const container = document.querySelector('.container');

// container.addEventListener('click', e => {
//     // console.log(e.target.id);

//     if (e.target.id === "padre") {
//         console.log("diste click al padre");
//     }

//     //console.log(e.target.matches(".border-secondary"));

//     if (e.target.matches(".border-secondary")) {
//         console.log("diste click al hijo");
//     }

//     //console.log(e.target.dataset.div);
//     if (e.target.dataset.div === "divnieto") {
//         console.log("diste click al nieto");
//     }
// })