import { apolloClient } from 'app/graphql';
import { Car } from 'gql/graphql';
import { GET_ALL_CARS, GET_CAR_BY_ID } from './queries';

class CarService {
	public async getCars(): Promise<Array<Car>> {
		const response = await apolloClient
			.query({ query: GET_ALL_CARS })
			.catch((error) => {
				throw error;
			});

		if (response?.data) {
			const { cars } = response.data;
			return cars as Car[];
		}

		return [];
	}

	public async getCar(carId: string): Promise<Car | null> {
		const response = await apolloClient
			.query({ query: GET_CAR_BY_ID, variables: { carId } })
			.catch((error) => {
				throw error;
			});

		if (response?.data) {
			const { carById } = response.data;
			return carById as Car;
		}

		return null;
	}
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CarService();
