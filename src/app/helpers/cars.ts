import { CarType } from 'app/types/car';
import AudiS3120 from '../../assets/images/audi_s3_120.png';
import AudiS3 from '../../assets/images/audi_s3.png';
import BMWM3120 from '../../assets/images/bmw_m3_120.png';
import BMWM3 from '../../assets/images/bmw_m3.png';
import HondaAccord120 from '../../assets/images/honda_accord_120.png';
import HondaAccord from '../../assets/images/honda_accord.png';
import HondaCRV120 from '../../assets/images/honda_crv_120.png';
import HondaCRV from '../../assets/images/honda_crv.png';
import JeepWrangler120 from '../../assets/images/jeep_wrangler_120.png';
import JeepWrangler from '../../assets/images/jeep_wrangler.png';
import LamborghiniUrus120 from '../../assets/images/lamborghini_urus_120.png';
import LamborghiniUrus from '../../assets/images/lamborghini_urus.png';
import RollRoyce120 from '../../assets/images/rolls_royce_120.png';
import RollRoyce from '../../assets/images/rolls_royce.png';
import TeslaM3120 from '../../assets/images/tesla_m3_120.png';
import TeslaM3 from '../../assets/images/tesla_m3.png';

export const Cars: CarType[] = [
	{
		name: 'Rolls-Royce Ghost',
		mileage: '2k',
		thumbnail: { xs: RollRoyce120, sm: RollRoyce },
		dailyPrice: 150,
		monthlyPrice: 3600,
		gearType: 'Auto',
		gas: 'Petrol',
	},
	{
		name: 'Tesla Model 3',
		mileage: '13k',
		thumbnail: { xs: TeslaM3120, sm: TeslaM3 },
		dailyPrice: 90,
		monthlyPrice: 2200,
		gearType: 'Auto',
		gas: 'electric',
	},
	{
		name: 'Audi S3',
		mileage: '10k',
		thumbnail: { xs: AudiS3120, sm: AudiS3 },
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: 'Auto',
		gas: 'Petrol',
	},
	{
		name: 'BMW M3',
		mileage: '10k',
		thumbnail: { xs: BMWM3120, sm: BMWM3 },
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: 'Manual',
		gas: 'Petrol',
	},
	{
		name: 'Honda CR-V',
		mileage: '20k',
		thumbnail: { xs: HondaCRV120, sm: HondaCRV },
		dailyPrice: 60,
		monthlyPrice: 1600,
		gearType: 'Auto',
		gas: 'Petrol',
	},
	{
		name: 'Honda Accord',
		mileage: '20k',
		thumbnail: { xs: HondaAccord120, sm: HondaAccord },
		dailyPrice: 50,
		monthlyPrice: 1500,
		gearType: 'Auto',
		gas: 'Petrol',
	},
	{
		name: 'Jeep Wrangler',
		mileage: '20k',
		thumbnail: { xs: JeepWrangler120, sm: JeepWrangler },
		dailyPrice: 60,
		monthlyPrice: 1700,
		gearType: 'Manual',
		gas: 'Diesel',
	},
	{
		name: 'Lamborghini Urus',
		mileage: '5k',
		thumbnail: { xs: LamborghiniUrus120, sm: LamborghiniUrus },
		dailyPrice: 150,
		monthlyPrice: 3800,
		gearType: 'Auto',
		gas: 'Petrol',
	},
];
