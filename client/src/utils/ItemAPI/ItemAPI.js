import axios from 'axios'

const ItemAPI = {
    getITem: () => axios.get('api/items'),
    createItem: item => axios.post('/api/items', item),
    updateItem: (id, updates) => axios.put`'/api/items/${id}`, updates),
    deleteItem: id => axios.delete(`/api/items/${id}`)
}

export default ItemAPI