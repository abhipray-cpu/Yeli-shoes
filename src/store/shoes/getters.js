export default {
    //this will contain all the getters
    getBrands(state) {
        return state.brand;
    },
    getColors(state) {
        return state.color;
    },
    getMaterials(state) {
        return state.material;
    },
    getSizes(state) {
        return state.size;
    },
    getTypes(state) {
        return state.type;
    },
    getGenders(state) {
        return state.gender;
    },
    getItems(state) {
        return state.items;
    },
    getLoad(state) {
        return state.resultLoading;
    },

}