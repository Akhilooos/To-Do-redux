import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vanillacake:10,
    chococake:5,
    strawberrycake:6
}


const cakeSlice = createSlice({
    name:"Cakes",
    initialState,
    reducers:{
        buyVanillacake(state){
            state.vanillacake--;
        },
        buyChococake(state){
            state.chococake--;
        },
        buyStrawberrycake(state){
            state.strawberrycake--;
        },
        addVanillacake(state,data){
            state.vanillacake =state.vanillacake + data.payload;
        },
        addChococake(state,data){
            state.chococake=state.chococake+data.payload;
        },
        addStrawberrycake(state,data){
            state.strawberrycake=state.strawberrycake+data.payload;
        },

    }
});
export const{buyVanillacake,buyChococake,buyStrawberrycake,addVanillacake,addChococake,addStrawberrycake}=cakeSlice.actions;
export default cakeSlice.reducer;