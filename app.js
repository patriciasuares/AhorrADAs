const descripcion = document.getElementById ('descripcion')
const monto = document.getElementById ('monto')
const tipo = document.getElementById ('tipo')
const categoria = document.getElementById ('categoria')
const fecha = document.getElementById ('fecha')
const cancelarBtn= document.getElementById ('cancelar-btn')
const agregarBtn = document.getElementById ('agregar-btn')


agregarBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    console.log(descripcion.value)
    console.log(monto.value)
    console.log(tipo.value)
    console.log(categoria.value)
    //console.log(fecha.value)
    
    
});

/*
agregarBtn.addEventListener('click', function (e) {
    
    e.preventDefault();
    
    console.log(descripcion.value)
    console.log(monto.value)
    console.log(tipo.value)
    console.log(categoria.value)
    console.log(fecha.value)
  });*/




  //clase 18/7

const selectCategoria =document.getElementById ('select-categoria')


const operaciones =[
{
    descripcion: 'desayuno',
    mmonto: 10,
    categoria: 'comida',
},

{
    descripcion: 'cena',
    monto: 10,
    categoria: 'comida',
},

{
    descripcion: 'sueldo',
    monto: 100,
    categoria: 'trabajo',
    
},

{
    descripcion: 'gasolina',
    monto: 20,
    categoria: 'transporte',
}

]


selectCategoria.addEventListener('change', e =>{ //even e
    const copiaOperaciones = [...operaciones];
const categoriaComida = [];

for (let i=0; i< copiaOperaciones.length; i ++){
    if (copiaOperaciones[i].categoria ='comida'){ //'transporte'
        categoriaComida.push (copiaOperaciones[i])
    }
}


})
//console.log (categoriaComida)

// esto hace q la cuadno seleccciono del select me selecciona en el 
//linea 76 si pongo === select-categoria.value hago que solo uso un solo for en vez de utilizat 7