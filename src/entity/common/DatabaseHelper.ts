import { Connection, createConnection } from 'typeorm/browser';
import { Image, Recipe, Step } from '../Index';



export class DatabaseHelper {
    public static DbInitializer(): Promise<Connection> {
        return createConnection({
            type: 'react-native',
            database: 'test',
            location: 'default',
            logging: ['error', 'query', 'schema'],
            synchronize: true,
            entities: [
                Recipe,
                Step,
                Image
            ]
        });
   }
}