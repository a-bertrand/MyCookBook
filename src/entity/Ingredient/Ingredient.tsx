import { CoreEntity } from "../common/CoreEntity";
import {Column, OneToMany, Entity} from "typeorm/browser";
import { Recipe } from "../Recipe/Recipe";


@Entity()
export default class Ingredient extends CoreEntity  {
    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    measure_type: string;

    @Column({nullable: true})
    quantity : number;

    @OneToMany('Recipe', 'ingredients')
    recipe: Recipe
}
