import * as Knex from 'knex';
import { IRepository } from './shared/repository';

export interface IUserRepository {
    addTestUser(): Promise<void>
}

export class UserRepository {
    constructor(private readonly dbContext: Knex.Transaction) {
        
    }

    async addTestUser(): Promise<void> {
        await this.dbContext.insert({
            email: 'test@domain.con',
            first_name: 'Jamie',
            last_name: 'Corkhill'
        }).into('users');
    }
}