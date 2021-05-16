import { Icon, Layout, Button } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Recipe, Step } from '~/entity/Index';
import { DescriptionStep } from './DescriptionStep';
import { IngredientsStep } from './IngredientsStep';
import { StepsDetailsStep } from './StepsDetails';
import { ImagesStep } from './ImagesStep';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RecipeRepository from '~/entity/Recipe/RecipeRepository';


interface RecipeAddStepsProps {
    navigation: any
}
interface RecipeAddStepsState {
    recipe: Recipe,
}


export class RecipeAddSteps extends React.Component<RecipeAddStepsProps, RecipeAddStepsState> {
    constructor(props) {
        super(props)
        this.state = {
            recipe: Recipe.Create(),
        }
    }
    updateRecipe(recipe) {
        this.setState({'recipe': recipe})
    }
    saveRecipe() {
        let recipeRepository = new RecipeRepository();
        recipeRepository.SaveNewRecipe(this.state.recipe);
        //return this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <ScrollView >
                <Layout style={{paddingHorizontal:20, paddingVertical:20, }} level='1'>
                    <ImagesStep 
                        recipe={this.state.recipe}
                        updateRecipe={this.updateRecipe.bind(this)} 
                    />
                    <DescriptionStep 
                        recipe={this.state.recipe}
                        updateRecipe={this.updateRecipe.bind(this)} 
                    />
                    <IngredientsStep 
                        recipe={this.state.recipe}
                        updateRecipe={this.updateRecipe.bind(this)} 
                    />
                    <StepsDetailsStep 
                        recipe={this.state.recipe}
                        updateRecipe={this.updateRecipe.bind(this)} 
                    />
                    {/* TODO OUVRIR DANS UNE POPUP <SummaryStep 
                        recipe={this.state.recipe}
                        updateRecipe={this.updateRecipe.bind(this)} 
                    /> */}
                    <Button status='success' onPress={this.saveRecipe.bind(this)}>
                        Enregistrer
                    </Button>
                    <Button appearance='ghost' status='basic'>
                        Annuler
                    </Button>
                </Layout>
            </ScrollView>
        )
    }
}


const globalStyle = StyleSheet.create({
    navBtn: {
        flexDirection:'column',
        justifyContent: 'center'
    }
})
const navHeight = 30;
const CustomStyles = StyleSheet.create({    
    navBtns: {
        justifyContent: 'space-between',
        height: navHeight,
        marginVertical: 10,
        flexDirection:'row',
    },
    navBtnLeft: {
        ...globalStyle.navBtn,
        alignSelf: 'flex-start'
    },
    navBtnRight: {
        ...globalStyle.navBtn,
        alignSelf: 'flex-end'
    },
    iconText: {
        flexDirection: 'row',
    },
    navText: {
        textAlignVertical: 'center',
        paddingHorizontal: 5,
    },
    navIcon: {
        width: navHeight,
        height: navHeight,
    },
})
