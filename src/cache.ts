import {Cache} from './types';

const cache: Cache = {};

export const setCache = (key: string, data: any) => {
	cache[key] = data;
};

export const getCache = (key: string) => {
	return cache[key];
};

export const hasCache = (key: string) => {
	return key in cache;
};