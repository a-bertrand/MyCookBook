import { Input } from "@ui-kitten/components";
import React, {Fragment} from "react";
import { StyleSheet } from "react-native";
import { RecipeAddStep } from "./components/RecipeAddStep";


export class DescriptionStep extends RecipeAddStep {
    isValidate(): boolean {
        const {recipe} = this.state;
        return (
            recipe.title.length > 0 && 
            recipe.description.length > 0
        )
    }
    render() {
        const {recipe} = this.state;
        const {updateRecipe} = this.props
        return (
            <>
                <Input
                    label='Titre'
                    value={recipe.title}
                    onChangeText={(nextValue) => {
                        recipe.title = nextValue; 
                        updateRecipe(recipe)
                    }}
                    style={CustomStyles.inputForm}
                />
                <Input
                    label='Pour combien de personne'
                    multiline={true}
                    keyboardType='number-pad'
                    value={recipe.how_many.toString()}
                    onChangeText={(nextValue) => {
                        let val = parseInt(nextValue);
                        recipe.how_many = val > 0 ? val : 0; 
                        updateRecipe(recipe)
                    }}
                    style={CustomStyles.inputForm}
                />
                <Input
                    label='Description'
                    multiline={true}
                    textStyle={{ minHeight: 64 }}
                    value={recipe.description}
                    onChangeText={(nextValue) => {
                        recipe.description = nextValue; 
                        updateRecipe(recipe)
                    }}
                    style={CustomStyles.inputForm}
                />
            </>
        )
    }
}

const CustomStyles = StyleSheet.create({
    title: {
        textAlign:'center',
        marginBottom: 15
    },
    inputForm: {
        marginBottom: 15
    },
})
