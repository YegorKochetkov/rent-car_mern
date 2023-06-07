/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
	  };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string | number; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Car = {
	__typename?: 'Car';
	dailyPrice: Scalars['Float']['output'];
	gas: Scalars['String']['output'];
	gearType: Scalars['String']['output'];
	id: Scalars['String']['output'];
	mileage: Scalars['Float']['output'];
	monthlyPrice: Scalars['Float']['output'];
	name: Scalars['String']['output'];
	thumbnail: CarPhoto;
};

export type CarPhoto = {
	__typename?: 'CarPhoto';
	id: Scalars['String']['output'];
	sm: Scalars['String']['output'];
	xs: Scalars['String']['output'];
};

export type Mutation = {
	__typename?: 'Mutation';
	addNewCar: Car;
	deleteCar: Scalars['String']['output'];
};

export type MutationAddNewCarArgs = {
	newCarData: NewCarInput;
};

export type MutationDeleteCarArgs = {
	carId: Scalars['String']['input'];
};

export type NewCarInput = {
	dailyPrice: Scalars['Int']['input'];
	gas: Scalars['String']['input'];
	gearType: Scalars['String']['input'];
	mileage: Scalars['Int']['input'];
	monthlyPrice: Scalars['Int']['input'];
	name: Scalars['String']['input'];
	thumbnail?: InputMaybe<NewCarPhotoInput>;
};

export type NewCarPhotoInput = {
	sm: Scalars['String']['input'];
	xs: Scalars['String']['input'];
};

export type Query = {
	__typename?: 'Query';
	carById: Car;
	cars: Array<Car>;
};

export type QueryCarByIdArgs = {
	carId: Scalars['String']['input'];
};
