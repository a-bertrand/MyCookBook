import { Column } from "typeorm/browser";
import { CoreEntity } from "./common/CoreEntity";


export default class Category extends CoreEntity {
    @Column({length: 100})
    name: string = '';

    public static FromDataToObject(data: any) {
        let category = new Category();
        category.id = data["id"];
        category.name = data["name"]
        return category;
    }

    public static SerializeDatas(datas: Category[]): string[] {
        var SerializedDatas = new Array();
        for( var cat in datas) {
            SerializedDatas.push(JSON.stringify(datas[cat]))
        }
        return SerializedDatas;
    }

    public static UnSerializeDatas(datas: string[]): Category[] {
        var SerializedDatas = new Array();
        for( var cat in datas) {
            SerializedDatas.push(Category.FromDataToObject(JSON.parse(datas[cat])));
        }
        return SerializedDatas;
    }
}
