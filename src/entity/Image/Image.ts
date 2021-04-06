import {Entity, Column, OneToMany} from "typeorm/browser";
import { CoreEntity } from "../common/CoreEntity";
import { IRecipe } from "../Recipe/IRecipe";


@Entity()
export class Image extends CoreEntity {
    @Column()
    title: string;

    @Column()
    content: string;

    @OneToMany('Recipe', 'images')
    recipe: IRecipe
}
