import { createSlice } from '@reduxjs/toolkit';
import { Car } from 'gql/graphql';
import { RootState } from '../store';

type TopCarsStateType = {
	cars: Car[];
};

const initialState: TopCarsStateType = {
	cars: [],
};

const topCarsSlice = createSlice({
	name: 'topcars',
	initialState,
	reducers: {
		setTopCars: (state, action) => {
			state.cars = action.payload;
		},
	},
});

export const { setTopCars } = topCarsSlice.actions;
export const selectTopCars = (state: RootState) => state.topCars.cars;
export default topCarsSlice.reducer;
