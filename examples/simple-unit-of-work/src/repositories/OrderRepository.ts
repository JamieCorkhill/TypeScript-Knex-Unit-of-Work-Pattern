import * as Knex from 'knex';

export interface IOrdersRepository {
    getById(id: string): void;
}

export class OrderRepository {
    public constructor(private readonly dbContext: Knex.Transaction) {
    }

    public getById(id: string) {
        this.dbContext.select('users FROM whatever').where('users.id', id);
    }
}