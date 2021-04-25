import { Input } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { RecipeAddStep } from "./utils/RecipeAddStep";


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
