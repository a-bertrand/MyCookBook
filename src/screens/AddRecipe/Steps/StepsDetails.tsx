import { Button, Icon, Input, Layout } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Step } from "~/entity/Index";
import { StepProps } from "./components/RecipeAddStep";
import { AddStep } from "./components/RenderStepInput";

interface StepsDetailsStepState {
    'steps': Step[]
}


export class StepsDetailsStep extends React.Component<StepProps, StepsDetailsStepState> {
    constructor(props) {
        super(props)
        this.state = {
            steps: props.recipe.steps
        }
    }
    addStep() {
        let steps = this.state.steps;

        let newStep = new Step()
        newStep.number = steps.length + 1; 
        steps.push(newStep);

        this.setState({steps: steps})
    }
    reduceStep() {
        let steps = this.state.steps;
        steps.pop()
        this.setState({steps: steps})
    }
    render() {
        const {steps} = this.state;
        const {updateRecipe} = this.props
        return (
            <>
                <View style={{flexDirection: 'row'}}>
                    <Text>Etapes: </Text>
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
                <>
                    {
                        steps.map((step) => { return (
                            <AddStep step={step} key={step.number}/>
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
