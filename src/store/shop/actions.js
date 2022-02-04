import axios from '../../services/api'

export default {
    ListProducts({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get('products').then((response) => {
                resolve(response.data)
                commit('list', response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}