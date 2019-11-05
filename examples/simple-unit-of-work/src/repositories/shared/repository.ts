export interface IRepository<T> {
    exists(id: string): Promise<boolean>
}

export abstract class Repository<T> implements IRepository<T> {
    exists(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
