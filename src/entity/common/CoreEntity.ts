import {PrimaryGeneratedColumn, } from "typeorm/browser";
import { ICoreEntity } from "./ICoreEntity";


export abstract class CoreEntity implements ICoreEntity {

    @PrimaryGeneratedColumn()
    id: number;
}
