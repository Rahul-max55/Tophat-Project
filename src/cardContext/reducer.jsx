
const reducer = (state, action) => {
    const { type, id } = action;
    switch (type) {
        case "ADDTOCART":
            console.log(state.apiValue);
            let oneProduct = state.apiValue.filter((v) => v.id === id);
        return { ...state, cartProduct: [...state.cartProduct, ...oneProduct] };
        case "DELETE":
            let remainProduct = state.cartProduct.filter((v) => v.id !== id);
            console.log(remainProduct);
            return { ...state, cartProduct: remainProduct };
        default:
            return state;
    }

}

export default reducer;