import Api from './api'

export default class SeriesService {
    static getAll = async (options) => {
        const {
            page,
            orderBy,
            limit,
        } = Object.assign({
            page: 1,
            exactMatch: false,
            orderBy: 'name',
            limit: 20,
        }, options);
        let offset = page * limit - limit;
        let url =
            `characters?offset=${offset}&orderBy=${orderBy}&limit=${limit}`;

        const response = await Api.get(url);
        return response;
    }

    static getById = async (serieId) => {
        const response = await Api.get(`characters/${serieId}`);
        return response;
    }
}