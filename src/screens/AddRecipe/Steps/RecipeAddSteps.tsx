import { Icon, Layout } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Recipe, Step } from '~/entity/Index';
import { DescriptionStep } from './DescriptionStep';
import { IngredientsStep } from './IngredientsStep';
import { StepsDetailsStep } from './StepsDetails';
import { ImagesStep } from './ImagesStep';

enum ScreeenSteps {
    DescriptionStep,
    StepsDetail,
    IngredientsDetail,
    ImagesStep,
    SummaryStep
}
interface StepProps {}
interface StepState {
    recipe: Recipe
    currentStep: ScreeenSteps,
}


export class RecipeAddSteps extends React.Component<StepProps, StepState> {
    constructor(props) {
        super(props)
        this.state = {
            recipe: Recipe.Create(),
            currentStep: ScreeenSteps.DescriptionStep,
        }
    }
    nextStep() {
        const {currentStep} = this.state;
        let nextStep;

        if (currentStep === ScreeenSteps.DescriptionStep) {
            nextStep = ScreeenSteps.IngredientsDetail
        }
        else if (currentStep === ScreeenSteps.IngredientsDetail) {
            nextStep = ScreeenSteps.StepsDetail
        }
        else if (currentStep === ScreeenSteps.StepsDetail) {
            nextStep = ScreeenSteps.ImagesStep
        }

        this.setState({'currentStep': nextStep});
    }
    previousStep() {
        const {currentStep} = this.state;
        let previousStep;

        if (this.state.currentStep === ScreeenSteps.IngredientsDetail) {
            previousStep = ScreeenSteps.DescriptionStep
        } 
        else if (this.state.currentStep === ScreeenSteps.StepsDetail) {
            previousStep = ScreeenSteps.IngredientsDetail
        }
        else if (currentStep === ScreeenSteps.ImagesStep) {
            previousStep = ScreeenSteps.StepsDetail
        }

        this.setState({'currentStep': previousStep});
    }
    updateRecipe(recipe) {
        this.setState({'recipe': recipe})
    }
    stepRender() {
        const {currentStep} = this.state;
        let currrentStepcomp;
        
        if (currentStep === ScreeenSteps.DescriptionStep) {
            currrentStepcomp = (
                <DescriptionStep 
                    recipe={this.state.recipe}
                    updateRecipe={this.updateRecipe.bind(this)} 
                />
            )
        }
        else if (currentStep === ScreeenSteps.IngredientsDetail) {
            currrentStepcomp = (
                <IngredientsStep 
                    recipe={this.state.recipe}
                    updateRecipe={this.updateRecipe.bind(this)} 
                />
            )
        }
        else if (currentStep === ScreeenSteps.StepsDetail) {
            currrentStepcomp = (
                <StepsDetailsStep 
                    recipe={this.state.recipe}
                    updateRecipe={this.updateRecipe.bind(this)} 
                />
            )
        }
        else if (currentStep === ScreeenSteps.ImagesStep) {
            currrentStepcomp = (
                <ImagesStep 
                    recipe={this.state.recipe}
                    updateRecipe={this.updateRecipe.bind(this)} 
                />
            )
        }
        else {
            return (<Text>TO DODO</Text>)
        }
        return currrentStepcomp
    }
    render() {
        return (
            <Layout style={{paddingHorizontal:20, paddingVertical:5}}>
                <Layout style={CustomStyles.navBtns}>
                    {this.getPreviousStep()}
                    {this.getNextStep()}
                </Layout>
                <ScrollView >
                    <View>
                        {this.stepRender()}
                    </View>
                </ScrollView>
            </Layout>
        )
    }
    getPreviousStep() {
        if (this.state.currentStep === ScreeenSteps.DescriptionStep) {
            return(<View style={CustomStyles.navBtnLeft}></View>)
        } else {
            return (
                <TouchableHighlight onPress={this.previousStep.bind(this)}>
                    <View style={CustomStyles.navBtnLeft}>
                        <View style={CustomStyles.iconText}>
                            <Icon
                                style={CustomStyles.navIcon}
                                fill='#8F9BB3'
                                name='arrowhead-left-outline'
                            /> 
                            <Text style={CustomStyles.navText}>Précedent</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }
    }
    getNextStep() {
        if (this.state.currentStep === ScreeenSteps.SummaryStep) {
            return(<></>)
        } else {
            return (
                <TouchableHighlight onPress={this.nextStep.bind(this)}>
                    <View style={CustomStyles.navBtnRight}>
                        <View style={CustomStyles.iconText}>
                            <Text style={CustomStyles.navText}>Suivant</Text>
                            <Icon
                                style={CustomStyles.navIcon}
                                fill='#8F9BB3'
                                name='arrowhead-right-outline'
                            /> 
                        </View>
                    </View>
                </TouchableHighlight>
            )
        }
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
