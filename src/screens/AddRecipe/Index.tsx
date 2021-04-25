import { Button, Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Recipe } from "~/entity/Recipe/Recipe";
import RecipeRepository from "~/entity/Recipe/RecipeRepository";
import { RecipeAddSteps } from "./Steps/RecipeAddSteps";

enum ScreeenSteps {
    DescriptionStep,
    StepDetail,
    PicturesStep,
    
}
interface AddRecipeProps {
    navigation: any
}
interface AddRecipeState {
    recipe: Recipe,
    currentStep: ScreeenSteps
    createLoading: boolean
}



export default class IndexAddRecipe extends React.Component<AddRecipeProps, AddRecipeState> {
    private recipeRepository: RecipeRepository = new RecipeRepository()
    constructor(props) {
        super(props);
        this.state = {
            recipe: Recipe.Create(),
            currentStep: ScreeenSteps.DescriptionStep,
            createLoading: false,
        }
    }
    
    async addRecipe() {	
        const recipe = new Recipe();
		recipe.how_many = 1
        const {navigate} = this.props.navigation;
		this.recipeRepository.repository.save(recipe).then(() => {
            navigate('Home');
        })
	}
    validateBtnText() {
        return (
            this.state.createLoading ? 
            <Spinner status='primary'/> : 
            <Text>Terminer</Text>
        )
    }
    updateRecipe(recipe: Recipe) {
        this.setState({'recipe': recipe})
    }
    render() { 
        return (
            <Layout style={CustomStyles.globalLayout}>
                <Layout style={CustomStyles.stepsContent}>
                    <RecipeAddSteps />    
                </Layout>
            </Layout>
        )
    }
}

const CustomStyles = StyleSheet.create({
    globalLayout: {
        flexDirection: 'column',
        flex: 1
    },
    bottomNav: {
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        flex: 1,
    },
    stepsContent: {
        flex: 5
    }
})