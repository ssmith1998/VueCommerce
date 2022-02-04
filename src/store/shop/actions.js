import axios from '../../services/api'

export default {
    ListProducts({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get('products').then((response) => {
                resolve(response.data)
                commit('list', response.data)
                commit('listCats', response.data)
            }).catch((err) => {
                reject(err)
            })
        })
    },


    filterProducts({
        commit
    }, payload) {
        return new Promise((resolve, reject) => {
            axios.get('products').then((response) => {
                let data = response.data.filter(product => {
                    if (product.category === payload.category) {
                        return product
                    }
                })
                resolve(data)
                commit('list', data)
                console.log(payload)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}