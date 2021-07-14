import test from 'ava';
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';

import { CandleStickLiteDb } from './CandleSticksLiteDb';

test('foo', async (t) => {
  //await SqlliteStore.CreateDbAsync()
  //SqlliteStore.CreateDb();
  const db = CandleStickLiteDb.Open('candels.db');
  await db.CreateTable('binance');
  t.is(2, 2);
});

test('kkk', async (t) => {
  const db = await open({
    filename: 'temp4.db',
    driver: sqlite3.Database,
  });
  await db.open();
  await db.exec('CREATE TABLE tbl (col TEXT)');
  await db.exec('INSERT INTO tbl VALUES ("test")');
  const result = await db.get('SELECT col FROM tbl');
  console.log(result);
  t.pass();
});
