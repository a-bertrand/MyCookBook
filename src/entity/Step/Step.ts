import {Entity,  Column, OneToMany} from "typeorm/browser";
import { CoreEntity } from "../common/CoreEntity";
import {Recipe} from "../Recipe/Recipe";
import { IStep } from "./IStep";


@Entity()
export class Step extends CoreEntity implements IStep {
    @Column()
    number: number;

    @Column()
    description: string;

    @OneToMany('Recipe', 'steps')
    recipe: Recipe
}
