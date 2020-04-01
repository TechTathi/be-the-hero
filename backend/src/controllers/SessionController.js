/** Esse controller é mais para verificar se existe alguma ong com o mesmo ID criada no banco de dados. */

const connection = require('../database/connection'); /** Importação do banco */

module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs').where('id', id).select('name').first();

        if(!ong) {
            return response.status(400).json({ error: 'No ONG found with thid ID'});
        }
    
        return response.json(ong);
        
    }
}
