import { Button, Icon, Input, Layout, Spinner, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import { Recipe } from "~/entity/Recipe/Recipe";
import RecipeRepository from "~/entity/Recipe/RecipeRepository";


interface RecipeListProps {
    navigation: any
}

export default class IndexAddRecipe extends React.Component<RecipeListProps, any> {
    private recipeRepository: RecipeRepository = new RecipeRepository()

    constructor(props) {
        super(props);
        this.state = {
                title: '',
                description: '',
                createLoading: false
        }
    }
    
    addRecipe() {	
        if (this.state.title == '' || this.state.description == '') {
            return;
        }
        console.log(this.state)
        this.setState({'createLoading': true});
        const recipe = new Recipe();
		recipe.title = this.state.title,
		recipe.description = this.state.description;
		recipe.how_many = 1
        const {navigate} = this.props.navigation;
		this.recipeRepository.repository.save(recipe)
        this.setState({'createLoading': false});
        return navigate('Home', {'needReload': true});
	}
    validateBtnText() {
        return (
            this.state.createLoading ? 
            <Spinner status='primary'/> : 
            <Text>Valider</Text>
        )
    }
    render() {
        const {title, description} = this.state;
        const {navigate} = this.props.navigation;
        return (
            <Layout style={{padding:15}}>
                <Text style={CustomStyles.title}>Ajouter une recette</Text>
                <Input
                    label='Titre'
                    value={title}
                    onChangeText={nextValue => this.setState({'title': nextValue})}
                    style={CustomStyles.inputForm}
                />
                <Input
                    label='Description'
                    value={description}
                    onChangeText={nextValue => this.setState({'description': nextValue})}
                    style={CustomStyles.inputForm}
                />
                <Layout style={CustomStyles.bottomNav}>
                    <TouchableHighlight onPress={() => navigate('Home')}>
                        <>
                            <Icon
                                style={CustomStyles.icon}
                                fill='#8F9BB3'
                                name='arrowhead-left-outline'
                            /> 
                            <Text>Retour</Text>
                        </>
                    </TouchableHighlight>
                    <Button onPress={() => this.addRecipe()}>
                        {this.validateBtnText.bind(this)}
                    </Button>
                </Layout>
            </Layout>
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
    bottomNav: {
        justifyContent:'space-between',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    icon: {
        width: 32,
        height: 32,
      },
})