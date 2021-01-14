import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground, } from 'react-native';
//import { Alert } from 'react-native';
//import LottieFilesPicker from '@cawfree/react-native-lottie-files-picker'




class PaymentFailed extends React.Component {

    render() {
        //const [selectedValue, setSelectedValue] = useState("java");

        const navigation = this.props.navigation;
        return (
            <ImageBackground style={{ flex: 1 }} resizeMode={'cover'} source={require('../assets/failed_bg.jpg')}>
                <View style={styles.container}>
                    <ScrollView style={{ width: '100%', paddingHorizontal: 15, }}>
                        <StatusBar style="auto" />
                        <View style={{ alignItems: 'center', marginTop: 50 }}> 
                            <Image style={{
                                width:100,
                                height:100, 
                                marginBottom: 16, 
                                marginTop:'15%',
                            }} resizeMode={'contain'} source={require('../assets/Payment/failed_icon.png')} />
                            <Text style={styles.headline}>Failed!</Text>
                            <Text style={styles.textStyle}>Unfortunately Payment was rejected.</Text>
                            <TouchableOpacity style={styles.submit}
                                onPress={() => Alert.alert('Apply')}>
                                <Text style={{ color: '#fff', fontWeight: '300', fontSize:18 }}> Try Again </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground >
        );
    }

}
export default PaymentFailed;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    headline: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 30,
        marginTop: 20,
        width: 200,
        width: '100%',
        color: '#ffffff'
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 20,
        color: '#ffffff'
    },
    submit: {
        marginTop:20,
        paddingHorizontal:26,
        paddingVertical:8,
        borderRadius:8,
        borderWidth: 1,
        borderColor: '#fff'
    },

});