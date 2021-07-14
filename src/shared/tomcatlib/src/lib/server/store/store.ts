import sql from 'sqlite3';
let db = null;

function createDb(): void {
  console.log('createDb chain');
  db = new sql.Database('temp.db', createTable);
}

function createTable() {
  console.log('createTable lorem');
  db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)', insertRows);
}

function insertRows() {
  console.log('insertRows Ipsum i');
  const stmt = db.prepare('INSERT INTO lorem VALUES (?)');

  for (let i = 0; i < 10; i++) {
    stmt.run('Ipsum ' + i);
  }

  stmt.finalize();
}

export class SqlliteStore {
  public static CreateDb() {
    createDb();
    console.log('closing');
    db.close();
  }
  public static async CreateDbAsync() {
    return new Promise((r, e) => {
      const db1 = new sql.Database('temp2.db', () => {
        db1.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)', (err) => {
          if (err) {
            e(err);
          } else {
            const stmt = db1.prepare('INSERT INTO lorem VALUES (?)');

            for (let i = 0; i < 10; i++) {
              stmt.run('Ipsum ' + i);
            }

            stmt.finalize();
            db1.close(() => {
              r(db1);
            });
          }
        });
      });
    });
  }
}
