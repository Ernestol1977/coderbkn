const ContainerManager = require('./containers/containerManager');

const container = new ContainerManager();

const express = require('express');
const app = express();
const PORT = 8080;

const products = new ContainerManager();

app.get('/productos', async (req,res) => {
    const data = await products.getAllTools()
    res.json(data)
})

app.get('/productosRandom', async (req,res) => {
    const data = await products.getAllTools();
    let random = Math.floor(Math.random() * data.length +1);
    const id = await products.getById(random);
    res.json(id)
})

const server = app.listen(PORT, () => console.log(`El servidor esta escuchando ${server.address().port}`));
server.on("error", error => console.log(`Error en servidor ${error}`))



const environment = async() =>{
    // Añadiendo nueva herramienta
    // console.log('Adding a tool...');

    // let tool ={
    //     name: 'cerrucho',
    //     type: 'varios',
    //     price: '20'
    // }

    // await container.addTool(tool)

//     // Listando herramientas
    console.log('Getting tools');
    const tools = await container.getAllTools();
    console.log(tools);


//     //Buscando herramienta por Id
    // console.log('call by id...');
    // const toolsId = await container.getById(1);
    // console.log(toolsId);

//     // Borrando por Id
//     // console.log('delete tool by id');
//     // await container.deleteById(3);
    
//     // Borrando 
//     // console.log('deleting file...');
//     // await container.deleteAll();
}
environment();
