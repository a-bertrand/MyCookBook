import { Connection, createConnection } from 'typeorm/browser';
import { Image, Recipe, Step } from '../Index';
import { Ingredient } from '../Ingredient/Ingredient';


export class DatabaseHelper {
    public static DbInitializer(): Promise<Connection> {
        return createConnection({
            type: 'react-native',
            database: 'test',
            location: 'default',
            logging: ['error', 'query', 'schema'],
            synchronize: true,
            entities: [
                Ingredient,
                Step,
                Image,
                Recipe
            ]
        });
   }
}
