import { Input, Layout, Text } from "@ui-kitten/components"
import React from "react"
import { StyleSheet } from "react-native"
import { Step } from "~/entity/Index"


interface AddStepProps {
    step: Step
}

export class AddStep extends React.Component<AddStepProps, any> {
    render() {
        const {step} = this.props
        return (
            <Layout style={CustomStyles.layout}>
                <Input
                    label={'Etape '+step.number}
                    value={step.description}
                    onChangeText={(nextValue) => {
                        step.description = nextValue
                    }}
                    style={CustomStyles.inputForm}
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
    inputForm: {
        flex:1,
    }
})
