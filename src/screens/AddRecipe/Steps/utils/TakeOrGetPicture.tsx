import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {Icon} from '@ui-kitten/components';
import React from 'react';

interface TakePictureProps {

};
interface TakePictureState {

};

export default class TakeOrGetPicture extends React.Component<TakePictureProps, TakePictureState> {

    constructor(props) {
        super(props)
        this.state = {}
    }
    TakePicture(content) {
        console.log('piucture content', content)
    }
    render() {
        return (
            <TouchableHighlight onPress={() => launchCamera({}, this.TakePicture) }>
                <Icon name='eye' stlye={styles.icon}/>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
      width: 32,
      height: 32,
    },
});
