import * as Knex from 'knex';

export interface IProductsRepository {

}

export class ProductsRepository {
    constructor(private readonly dbContext: Knex.Transaction) {

    }
}