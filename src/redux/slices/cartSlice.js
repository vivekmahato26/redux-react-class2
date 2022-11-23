import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        product: [],
        totalQty: 0,
        totalPrice: 0
    },
    reducers: {
        incrementProduct: (state, actions) => {
            const product = actions.payload;
            const tempProduct = state.product.filter(e => e.id == product.id);
            if (tempProduct.length) {
                const tempProducts = state.product.map(e => {
                    if (e.id == product.id) {
                        return {
                            ...e,
                            qty: e.qty + 1
                        }
                    }
                    else {
                        return e;
                    }
                })
                state.product = tempProducts;
                state.totalQty = state.totalQty + 1;
                state.totalPrice = state.totalPrice + product.price[0]
            } else {
                const tempProducts = [...state.product, { ...product, qty: 1 }]
                state.product = tempProducts;
                state.totalQty = state.totalQty + 1;
                state.totalPrice = state.totalPrice + product.price[0]
            }

        },
        decrementProduct: (state, actions) => {
            const product = actions.payload;
            if (state.product.length == 0) return;
            const tempProduct = state.product.filter(e => e.id == product.id);
            if (tempProduct.length == 0) return;
            if (tempProduct.length) {
                if (tempProduct[0].qty == 1) {
                    const tempProducts = state.product.filter(e => e.id != product.id);
                    state.product = tempProducts;
                    state.totalQty = state.totalQty - 1;
                    state.totalPrice = state.totalPrice - product.price[0];
                } else {
                    const tempProducts = state.product.map(e => {
                        if (e.id == product.id) {
                            return {
                                ...e,
                                qty: e.qty - 1
                            }
                        }
                        else {
                            return e;
                        }
                    })

                    state.product = tempProducts;
                    state.totalQty = state.totalQty - 1;
                    state.totalPrice = state.totalPrice - product.price[0];

                }
            }
        }
    }
})


export const { incrementProduct, decrementProduct } = cartSlice.actions;

export default cartSlice;