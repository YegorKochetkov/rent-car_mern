import { apolloClient } from 'app/graphql';
import { Car } from 'gql/graphql';
import { GET_ALL_CARS } from './queries';

class CarService {
	public async getCars(): Promise<Array<Car>> {
		const response = await apolloClient
			.query({ query: GET_ALL_CARS })
			.catch((error) => {
				throw error;
			});

		if (response && response.data) {
			return response.data as Car[];
		}

		return [];
	}
}

export default new CarService();
