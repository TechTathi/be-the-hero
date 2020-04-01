const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },


    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX'); /* Gerar o id aleátorio para as ongs */

        /** Esse insert pode demorar a ser feito, por isso colocar await antes de se fazer a inserção, e async ali na função */
        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
    
    return response.json({ id });
    }    
};