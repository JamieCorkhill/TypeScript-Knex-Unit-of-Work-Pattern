import Knex from 'knex';
import { UnitOfWork } from './unit-of-work/UnitOfWork';

const knex = Knex({
    client: 'mysql',
    version: '8.0',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'password', 
        database: 'testing_knex'
    }
});

const unitOfWorkFactory = async () => {
    // Attain a transaction scope to use across a request.
    const trx = await knex.transaction();

    return new UnitOfWork(trx);
}

const main = async () => {
    const unitOfWorkOne = await unitOfWorkFactory();
    await unitOfWorkOne.usersRepository.addTestUser();
    unitOfWorkOne.commit();
    console.log('commited changes 1');

    const unitOfWorkTwo = await unitOfWorkFactory();
    await unitOfWorkTwo.usersRepository.addTestUser();
    unitOfWorkTwo.commit();
    console.log('commited changes 2');
}

main();
