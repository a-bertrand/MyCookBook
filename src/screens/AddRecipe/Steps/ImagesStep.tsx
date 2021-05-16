import PictureBtn from './utils/BtnAddPicture'
import React from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { Layout } from '@ui-kitten/components';
import { StepProps } from './utils/RecipeAddStep';
import { Image } from '~/entity/Index';
import { v4 as uuidv4 } from 'uuid';


export class ImagesStep extends React.Component<StepProps, any> {
    addImage(imageResponse: ImagePickerResponse) {
        const recipe = this.props.recipe
        const imageTitle = `${recipe.title}_image_${recipe.images.length}`
        let image = new Image(imageTitle, imageResponse.base64)
        recipe.images.push(image)
        this.props.updateRecipe(recipe);
    }
    render() {
        return (
            <Layout>
                <PictureBtn addImage={this.addImage.bind(this)}/>
                <PictureBtn addImage={this.addImage.bind(this)}/>
            </Layout>
        )
    }
}