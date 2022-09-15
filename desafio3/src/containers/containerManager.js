const fs = require('fs');

const path = '../src/files/tools.json';

class ContainerManager {
    //getAll
    getAllTools = async () => {
        try {       
            if (fs.existsSync(path)) {
                const fileData = await fs.promises.readFile(path, 'utf8');
                const tools = JSON.parse(fileData);
                return tools;
            } else {
                return []; // no tenemos nada
            }
        } catch (error) {
            console.log('Cannot read file: ' + error);
        }
    }
    //save tool
    addTool = async (tool) => {
        try {
            const tools = await this.getAllTools();
            if (tools.length === 0) {
                tool.id = 1;
                tools.push(tool);
                await fs.promises.writeFile(path, JSON.stringify(tools, null, '\t'));
            } else {
                tool.id = tools[tools.length-1].id+1;
                tools.push(tool);
                await fs.promises.writeFile(path, JSON.stringify(tools, null, '\t'));
            }
        } catch (error) {
            console.log('Cannot write file: ' + error);
        }
    }
    
    getById = async (id) => {
        try {
            const tools = await this.getAllTools();
            const objetById = tools.find(item => item.id === id);
            if (objetById.id != undefined) {
                return objetById;
            } else {
                return null;
            }
        } catch (error) {
            console.log('Cannot read file: ' + error);
        }
    }

    deleteById = async(id) => {
        try {
            const tools = await this.getAllTools();
            let index = tools.findIndex(i => i.id === id);
            if (index != -1) {
                tools.splice(index,1);
                await fs.promises.writeFile(path,JSON.stringify(tools,null,'\t'));
                console.log(`Se elimino el producto con el Id ${id}`);
            } else {
                console.log('El id no se encuentra registrado');
            }
        } catch (error) {
            console.log('Cannot read file: '+error);
        }
    }

    deleteAll = async() => {
        try {
            await fs.promises.unlink(path);
            console.log('Su lista de productos ha sido eliminada por completo');
        } catch (error) {
            console.log('the file cannot be deleted: '+error);
        }
    }

}

module.exports = ContainerManager;