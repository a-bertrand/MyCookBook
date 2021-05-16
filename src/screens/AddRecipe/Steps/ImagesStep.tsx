import PictureBtn from './components/BtnAddPicture'
import React from 'react';
import { ImagePickerResponse } from 'react-native-image-picker';
import { Layout } from '@ui-kitten/components';
import { StepProps } from './components/RecipeAddStep';
import { Image } from '~/entity/Index';


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
            </Layout>
        )
    }
}