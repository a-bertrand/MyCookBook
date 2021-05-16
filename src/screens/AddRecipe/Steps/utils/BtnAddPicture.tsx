import { Icon, Layout, Text } from "@ui-kitten/components";
import React from "react";
import { ImageBackground, PermissionsAndroid, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "react-native-image-picker"
import { CameraOptions, ImagePickerResponse, ImageLibraryOptions } from "react-native-image-picker";

interface BtnAddPictureProps {
    addImage: Function
}

interface BtnAddPictureSate {
    imageResponse: ImagePickerResponse | null
}


export default class BtnAddPicture extends React.Component<BtnAddPictureProps, BtnAddPictureSate> {
    constructor(props) {
        super(props);
        this.state = {
            imageResponse: null
        }
    }  
    cameraOptions: CameraOptions = {
        mediaType: 'photo',
        includeBase64: true
    };
    libraryOptions: ImageLibraryOptions = {
        mediaType: 'photo',
        includeBase64: true
    };
    async launchCamera() {
        try {
            const _this = this;
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Accès appareil photo",
                    message:"L'application a besoin d'accéder a votre appareil photo",
                    buttonNegative: "Annuler",
                    buttonPositive: "Accepter"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchCamera(this.cameraOptions, (response: ImagePickerResponse) => {
                    _this.treatImageResponse(response)
                });
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }
    async launchImageLibrary() {
        try {
            const _this = this;
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Accès bibliothèque photo",
                    message:"L'application a besoin d'accéder a votre bibliothèque photo",
                    buttonNegative: "Annuler",
                    buttonPositive: "Accepter"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                ImagePicker.launchImageLibrary(this.libraryOptions, (response: ImagePickerResponse) => {
                    _this.treatImageResponse(response)
                });
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }
    treatImageResponse(response: ImagePickerResponse) {
        console.log('Response', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }   
        else {
            this.setState({imageResponse: response});
        }
    }
    removeImage(){
        this.setState({imageResponse: null})
    }
    renderImage() {
        const image = this.state.imageResponse;
        this.props.addImage(image)
        return(
             <ImageBackground  source={{uri: image.uri}} style={styles.images}>
                 <TouchableOpacity onPress={this.removeImage.bind(this)} style={styles.iconOpacity}>
                    <Icon
                        style={styles.removeIcon}
                        fill='#8F9BB3'
                        name='close-outline'
                    />
                </TouchableOpacity>
            </ImageBackground>
        )
    }
    render() {
        if (this.state.imageResponse !== null) {
            return(
                <Layout style={styles.btnBox}>
                    {this.renderImage()}
                </Layout>
            )
        } else {
            return (
                <Layout style={styles.btnBox}>
                    <TouchableOpacity onPress={this.launchCamera.bind(this)} style={styles.btnSection}  >
                        <Icon style={styles.icon} fill='#8F9BB3' name='camera-outline'/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.launchImageLibrary.bind(this)} style={styles.btnSection}  >
                        <Icon style={styles.icon} fill='#8F9BB3' name='folder-outline'/>
                    </TouchableOpacity>
                </Layout>
            )
        }
    }
}

const styles = StyleSheet.create({
    btnBox: {
        width: '100%',
        height: 200,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        borderWidth: 1,
    },
    btnSection: {
        width: 70,
        height: 70,
        borderColor: '#8F9BB3',
        borderWidth: 1,
        margin: 5,
        borderRadius: 5,
    },
    images: {
        width: '100%',
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginHorizontal: 3,
        zIndex: 0
    },
    icon: {
        borderRadius: 3,
        width: '100%',
        height: '100%'
    },
    removeIcon: {
        borderRadius: 3,
        width: '40',
        height: '40',
        position: 'absolute'
    },
    iconOpacity: {
        height: 40,
        width: 40,
    }
});
