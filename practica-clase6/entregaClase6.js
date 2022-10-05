// TODO ESTO PUEDE FALLAR ES MAS QUE NADA
// PARA VER LA IDEA 


const express = require('express');
const app = express();


const fs = require('fs')
const PORT = process.env.PORT || 8080;
class Desafio{
    name=""
    constructor(name){
        this.name=`./${name}.txt`
    }

    async save(obj){
        try {
            const archivo =[]
            try{
                const lectura=await this.getAll() 
                if(lectura){
                    archivo.concat(lectura)
                }
            }
            catch{  }
            archivo.push(obj)
            await fs.promises.writeFile(this.name, JSON.stringify(archivo, null, 3) )
            console.log("escrito correctamente")
        } catch (error) {
            console.log(`Error en escritura `,error)
        }

    }


    async getAll(){
        try {
            const archivo=  await fs.promises.readFile(this.name, 'utf-8')
            return JSON.parse(archivo)
        } catch (error) {
            console.log(`fallo lectura `,error)
        }
    }
}

const documento=new Desafio('desafio')
// documento.save({
//     title: 'Calculadora',
//     price: 234.56,
//     thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png',
//     id: 2
// })

const randomFunction=(limite)=>{
    return parseInt(Math.random()*limite) + 1
}

app.get('/productos',(request,response)=>{
    documento.getAll()
        .then( lista=>{
            JSON.parse(lista) 
        })
        .then( listaParse=>{
            response.json(listaParse )
        })
})

app.get('/productoRandom',(request,response)=>{
    documento.getAll()
    .then( lista=>
        JSON.parse(lista) 
    )
    .then( listaParse =>
        listaParse[randomFunction(listaParse.length)]
    )
    .then( itemLista=>
        response.json(itemLista) 
    )
})
app.listen( PORT, () => console.log(`Server listening on PORT ${PORT}`));