export default {
    //this will contain all the mutations
    intializeFilters(state, payload) {
        console.log(payload.type);
        console.log(payload.brand);
        console.log(payload.type != 'roopamc');
        console.log(payload.brand != 'roopamc');
        state.brand = ['Adidas', 'Air Jordan',
            'Burberry', 'Crocs',
            'Gucci', 'H&M',
            'Lakhani', 'Liberty',
            'Miu Miu', 'New Balance',
            'Nike', 'Paragon',
            'Puma', 'Red Chief',
            'Reebok', 'Skechers',
            'Under Armour', 'Woodland'
        ];
        state.color = ['black', 'blue', 'green', 'orange', 'pink', 'purple',
                'red', 'white', 'yellow'
            ],
            state.material = ['denim', 'foam', 'leather', 'natural rubber', 'textiles'],
            state.size = [10, 8, 11, 6, 7, 9];
        state.type = ['Ballerina Flats', 'Ballet Slippers', 'Canvas', 'Clogs',
            'Flats', 'High Heels', 'Hiking Boots', 'Loafers',
            'Office Shoes', 'Pee-Toe shoes', 'Sandals',
            'Slip Ons', 'Sneakers', 'Stocking boots'
        ];
        state.gender = ['Female', 'Male', 'Unisex'];
        state.items = [];
        if (payload.brand != 'roopamc') {
            state.brand = [];
            state.brand.push(payload.brand);
        } else
            state.brand = ['Adidas', 'Air Jordan',
                'Burberry', 'Crocs',
                'Gucci', 'H&M',
                'Lakhani', 'Liberty',
                'Miu Miu', 'New Balance',
                'Nike', 'Paragon',
                'Puma', 'Red Chief',
                'Reebok', 'Skechers',
                'Under Armour', 'Woodland'
            ];
        if (payload.type != 'roopamc') {
            state.type = [];
            state.type.push(payload.type);
        } else
            state.type = ['Ballerina Flats', 'Ballet Slippers', 'Canvas', 'Clogs',
                'Flats', 'High Heels', 'Hiking Boots', 'Loafers',
                'Office Shoes', 'Pee-Toe shoes', 'Sandals',
                'Slip Ons', 'Sneakers', 'Stocking boots'
            ];


    },
    setBrand(state, payload) {
        state.brand.push(payload.value)
    },
    setColor(state, value) {
        state.color.push(value)
    },
    setMaterial(state, value) {
        state.material.push(value)
    },
    setSize(state, value) {
        state.size.push(value)
    },
    setType(state, value) {
        state.type.push(value)
    },
    setGender(state, value) {
        state.gender.push(value)
    },
    addItem(state, payload) {
        state.items.push(payload.value)

    },
    setLoader(state, payload) {
        state.resultLoading = payload.value;
    }
}