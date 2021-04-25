import { Icon, Input } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import Ingredient from "~/entity/Ingredient/Ingredient";
import { StepProps } from "./utils/RecipeAddStep";
import { AddIngredient } from "./utils/RenderIngredientInput";

interface StepsDetailsStepState {
    'ingredients': Ingredient[]
}


export class IngredientsStep extends React.Component<StepProps, StepsDetailsStepState> {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: props.recipe.ingredients
        }
    }
    addStep() {
        let ingredients = this.state.ingredients;

        let newIngredient = new Ingredient()
        newIngredient.quantity = 0;
        ingredients.push(newIngredient);

        this.setState({ingredients: ingredients})
    }
    reduceStep() {
        let ingredients = this.state.ingredients;
        ingredients.pop()
        this.setState({ingredients: ingredients})
    }
    render() {
        const {ingredients} = this.state;
        return (
            <>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Pour combien de personne: </Text>
                        <Input keyboardType="numeric"/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Ingredients: </Text>
                        <TouchableHighlight onPress={this.reduceStep.bind(this)}>
                            <View style={CustomStyles.addStep}>
                                <Icon name='minus-outline' style={CustomStyles.icon}/>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={this.addStep.bind(this)}>
                            <View style={CustomStyles.addStep}>
                                <Icon name='plus-outline' style={CustomStyles.icon}/>
                            </View>
                        </TouchableHighlight>
                        </View>
                </View>
                <>
                    {
                        ingredients.map((ingredient) => { return (
                            <AddIngredient ingredient={ingredient}/>
                        )})
                    }
                </>
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
    icon: {
        width: 32,
        height: 32,
    },
    addStep: {
        flexDirection: 'row',
        marginVertical: 10,

    }
})
