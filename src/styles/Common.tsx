import { StyleSheet } from 'react-native';

export const CommonStyles = StyleSheet.create({
	h1: {
	  fontSize: 22,
	  fontWeight: 'bold',
	  textAlign:'center',
	  marginTop: 15,
	  marginBottom: 15,
	},
	h2: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign:'left',
	},
	paddingContainer: {
        paddingLeft: 10,
        paddingRight: 10,
	},
	BtnSuccess: {
		borderWidth: 1,
		borderColor: 'green',
		padding: 5,
		marginTop: 15,
		marginBottom: 15,
	}
});