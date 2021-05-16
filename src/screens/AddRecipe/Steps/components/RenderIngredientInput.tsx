import { Input, Layout, Text } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import Ingredient from "~/entity/Ingredient/Ingredient"

interface AddStepProps {
    ingredient: Ingredient
}

export class AddIngredient extends React.Component<AddStepProps, any> {
    constructor(props) {
        super(props)
        this.state = {
            ingredient: this.props.ingredient
        }
    }
    onNumericChange(propsIngredient: Ingredient, inputValue: string){
        let newValue = parseFloat(inputValue) > -1 ? parseFloat(inputValue) : 0;
        const ingredient = this.state.ingredient
        ingredient.quantity = newValue;
        this.setState({ingredient: ingredient})
        propsIngredient = ingredient
    }
    render() {
        let {ingredient} = this.state
        const propsIngredient = this.props.ingredient
        return (
            <Layout style={CustomStyles.layout}>
                <Input
                    label='Quantité'
                    value={'' + ingredient.quantity}
                    onChangeText={(newValue) => {
                        this.onNumericChange(propsIngredient, newValue)
                    }}
                    keyboardType='number-pad'
                    style={CustomStyles.quantityInputForm}
                    textStyle={CustomStyles.textInputForm}
                />
                <Input
                    label='Ingredient'
                    value={ingredient.description}
                    onChangeText={(nextValue) => {
                        propsIngredient.description = nextValue
                    }}
                    style={CustomStyles.descriptionInputForm}
                />
            </Layout>
        )
    }
}

const CustomStyles = StyleSheet.create({
    layout:{
        flexDirection: 'row',
        flexWrap: 'nowrap'
    },
    quantityInputForm: {
        flex:1
    },
    descriptionInputForm: {
        flex:5
    },
    textInputForm: {
        padding: 0,
        marginHorizontal: 0
    }
})
