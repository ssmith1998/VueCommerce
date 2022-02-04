export default {
    list(state, payload) {
        state.products = payload
    },
    listCats(state, payload) {
        console.log('catts', payload)
        let categories = payload.map(prod => {
            return prod.category ? prod.category : null
        })
        state.categories = [...new Set(categories)]

    }
}