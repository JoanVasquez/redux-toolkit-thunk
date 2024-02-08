export interface ICrudService<T> {
  save(data: T): Promise<T>;
  update(id: number, data: T): Promise<T>;
  delete(id: number): Promise<any>;
  findAll(): Promise<Array<T>>;
  findById(id: number): Promise<T>;
}
