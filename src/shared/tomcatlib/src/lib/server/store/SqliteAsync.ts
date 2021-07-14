import sqllite3 from 'sqlite3';

class AsyncDb {
  private db: sqllite3.Database;
  constructor(db: sqllite3.Database) {
    this.db = db;
  }
  public async close(): Promise<boolean> {
    return new Promise<boolean>((resolve, error) => {
      this.db.close((err) => {
        if (err) {
          error(err);
        } else {
          resolve(true);
        }
      });
    });
  }
  public async run(sql: string): Promise<sqllite3.RunResult> {
    return new Promise<sqllite3.RunResult>((resolve, error) => {
      this.db.run(sql, (result, err) => {
        if (err) {
          error(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
export class SqliteAsync {
  public static async CreateDb(name: string): Promise<AsyncDb> {
    return new Promise((res, err) => {
      const db = new sqllite3.Database(name, (_err) => {
        if (_err) err(_err);
        else {
          res(new AsyncDb(db));
        }
      });
    });
  }
}
