import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import {CommonStyles} from '~/styles/Common';



const StepList = (props: any) => {
	const steps = props.steps;

	return (
		<View style={CommonStyles.paddingContainer}>
			<Text style={styles.customH2}>Liste des étapes :</Text>
            <View style={CommonStyles.paddingContainer}>
                {
                    steps.map((step: any) => {
                            return(
                                <RenderStep key={step.id} step={step} />
                            )
                        }
                    )
                }
            </View>
		</View>
	);
};

export default StepList;

class RenderStep extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      this.state = {checked: false};
    }
    render() {
        const step = this.props.step
        return (
            <View style={styles.listItem}>
                <Switch
                    style={styles.checkBox}
                    value={this.state.checked}
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style={styles.textItem}>
                    <Text style={styles.textQuantityItem}>
                        {step.number}
                    </Text> 
                    &nbsp; {step.text}
                </Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
	listItem: {
        padding: 15,
        marginTop: 15,
        borderWidth:1,
        borderColor: 'black',
        flexDirection: 'row',
	},
	textItem: {
		fontSize: 16,
        padding: 5,
	},
	textQuantityItem: {
		fontWeight: 'bold'
	},
	customH2 : {
		...CommonStyles.h2,
		marginBottom: 15,
    },
    checkBox: {
        width: 60,
        height: 20
    }
});