const ContainerManager = require('./containers/containerManager');

const container = new ContainerManager();

const environment = async() =>{
    // Añadiendo nueva herramienta
    console.log('Adding a tool...');

    let tool ={
        name: 'cerrucho',
        type: 'varios',
        price: '20'
    }

    await container.addTool(tool)

    // Listando herramientas
    console.log('Getting tools');
    let tools = await container.getAllTools();
    console.log(tools);


    //Buscando herramienta por Id
    // console.log('call by id...');
    // let toolsId = await container.getById(2);
    // console.log(toolsId);

    // Borrando por Id
    // console.log('delete tool by id');
    // await container.deleteById(3);
    
    // Borrando 
    // console.log('deleting file...');
    // await container.deleteAll();
}
environment();
