import { IOrdersRepository, OrderRepository } from './../repositories/OrderRepository';
import * as Knex  from 'knex';
import { IProductsRepository, ProductsRepository } from './../repositories/ProductsRepository';
import { IUserRepository, UserRepository } from './../repositories/UserRepository';

export interface IUnitOfWork {
    commit(): void;
    rollback(): void
}

// Requires a transaction scope injected on a per-request basis.
export class UnitOfWork implements IUnitOfWork {
    private context: Knex.Transaction;

    public readonly usersRepository: IUserRepository;
    public readonly ordersRepository: IOrdersRepository;
    public readonly productsRepository: IProductsRepository;

    public constructor(transactionContext: Knex.Transaction) {
        this.context = transactionContext;

        this.usersRepository = new UserRepository(transactionContext);
        this.ordersRepository = new OrderRepository(transactionContext);
        this.productsRepository = new ProductsRepository(transactionContext);
    }

    public commit(): void {
        this.context.commit();
    }

    public rollback(): void {
        this.context.rollback();
    }
}

