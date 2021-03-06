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
                let data = null
                if (payload.category !== '0' && payload.price_from && payload.price_to) {
                    console.log('fgello')

                    data = response.data.filter(product => {
                        if (product.category === payload.category && parseInt(payload.price_from) <= product.price && parseInt(payload.price_to) >= product.price) {
                            return product
                        }
                    })
                } else if (payload.category === '0' && payload.price_from && payload.price_to) {
                    console.log('eello')

                    data = response.data.filter(product => {
                        if (parseInt(payload.price_from) <= product.price && parseInt(payload.price_to) >= product.price) {
                            return product
                        }
                    })
                } else if (payload.category !== '0' && !payload.price_from && !payload.price_to) {
                    console.log('dello')

                    data = response.data.filter(product => {
                        if (product.category === payload.category) {
                            return product
                        }
                    })
                } else if (payload.category === '0' && !payload.price_from && payload.price_to) {
                    console.log('mello')

                    data = response.data.filter(product => {
                        if (parseInt(payload.price_to) >= product.price) {
                            return product
                        }
                    })
                } else if (payload.category === '0' && payload.price_from && !payload.price_to) {
                    console.log('fello')

                    data = response.data.filter(product => {
                        if (parseInt(payload.price_from) <= product.price) {
                            return product
                        }
                    })
                } else if (payload.category !== '0' && payload.price_from && !payload.price_to) {
                    console.log('yelllo')

                    data = response.data.filter(product => {
                        if (product.category === payload.category && parseInt(payload.price_from) <= product.price) {
                            return product
                        }
                    })
                } else if (payload.category !== '0' && !payload.price_from && payload.price_to) {
                    console.log('hello')
                    data = response.data.filter(product => {
                        if (product.category === payload.category && parseInt(payload.price_to) >= product.price) {
                            return product
                        }
                    })
                }
                resolve(data)
                commit('list', data)
                console.log(data)
            }).catch((err) => {
                reject(err)
            })
        })
    }
}