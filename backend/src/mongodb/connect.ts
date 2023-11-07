import { MongoClient, ServerApiVersion, ObjectId } from 'mongodb';

interface Users {
    _id: ObjectId,
    name?: string,
    age?: number,
}

const client = new MongoClient('mongodb://localhost:27017', {
    family: 4,
    serverApi: ServerApiVersion.v1,
});
async function start() {
    console.log('start');
    try {
        await client.connect();
        console.log('connection');
        const Main = client.db('Main');
        const users = Main.collection<Users>('users');
        await users.insertOne({ age: 24, name: 'Bob' } as Users);
    } catch (err) {
        console.log(err);
    }
};

start();