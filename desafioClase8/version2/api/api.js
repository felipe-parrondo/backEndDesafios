const e = require("express");

var productos = [];


class Productos{
    constructor(){}

    static guardar(titulo, precio, foto){
        let tempObj = {
            title: titulo,
            price: precio,
            thumbnail: foto,
            id: productos.length + 1
        };
        productos.push(tempObj);
        
        return tempObj;
    };

    static leer(){
        if(productos.length == 0){
            return "ningun objeto cargado";
        } else {
            return productos;
        }
        
    };

    static leerId(tempId){
        if(productos.length == 0){
            return "ningun objeto cargado";
        } else {
            return (productos.find(i => i.id == tempId))
        }
    }

    static update(tempId, act){
        let tempInd = productos.findIndex(i => i.id == tempId)
        
        if(act.title){
            productos[tempInd].title = act.title
        }

        if(act.price){
            productos[tempInd].price = act.price
        }

        if(act.thumbnail){
            productos[tempInd].thumbnail = act.thumbnail
        }
    }

    static delete(tempId){
        let newArr = [];
        let elementoBorrado;
        
        productos.forEach(i => {
            if(i.id != tempId){
                newArr.push(i);
            } else {
                elementoBorrado = i;
            }
        })

        productos = [];
        productos = newArr;

        for( let i = 0; i < productos.length; i++){
            productos[i].id = i + 1;
        }

        return elementoBorrado;
    }
};

module.exports = Productos;