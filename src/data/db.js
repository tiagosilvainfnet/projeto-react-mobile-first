import Dexie from 'dexie';

export const db = new Dexie('react-mobile-first');
db.version(1).stores({
    products: '++id, name, price, description, quantity, created_at, updated_at',
});

export default db;