import { Entity } from "./server/node_modules/fakebase/dist/Entity"
import { Table } from "./server/node_modules/fakebase/dist/Table"
export declare class Database {
  private dir
  private static tableByFile
  /**
   * Creates a database using files inside the given `dir`.
   * @param dir path to a local folder where to store the database files.
   */
  constructor(dir: string)
  /**
   * Creates or obtains the {@link Table} with the given `name`.
   * @param name a unique table name.
   * @returns a `Table` instance.
   */
  table<T extends Entity>(name: string): Table<T>
}
