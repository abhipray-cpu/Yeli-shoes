import mutations from './mutations'
import getters from './getters'
import actions from './action'

export default {
    namespaced: true,
    state() {
        return {
            //these are filte arrays for filtering the products
            brand: [],
            color: ['black', 'blue', 'green', 'orange', 'pink', 'purple',
                'red', 'white', 'yellow'
            ],
            material: ['denim', 'foam', 'leather', 'natural rubber', 'textiles'],
            size: [10, 8, 11, 6, 7, 9],
            type: ['Ballerina Flats', 'Ballet Slippers', 'Canvas', 'Clogs',
                'Flats', 'High Heels', 'Hiking Boots', 'Loafers',
                'Office Shoes', 'Pee-Toe shoes', 'Sandals',
                'Slip Ons', 'Sneakers', 'Stocking boots'
            ],
            gender: ['Female', 'Male', 'Unisex'],
            items: [],
            resultLoading: true //this is the items array for storing filtered items

        };
    },
    mutations,
    getters,
    actions,
}