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
