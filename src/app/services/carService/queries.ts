import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
	query {
		cars {
			id
			name
			thumbnail {
				xs
				sm
			}
			mileage
			gas
			monthlyPrice
			dailyPrice
			gearType
		}
	}
`;

export const GET_CAR_BY_ID = gql`
	query ($carId: String!) {
		carById(carId: $carId) {
			id
			name
			mileage
			gas
			monthlyPrice
			dailyPrice
			gearType
			thumbnail {
				xs
				sm
			}
		}
	}
`;
