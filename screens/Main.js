import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Button, View, Text, SafeAreaView, Image, FlatList, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';


class HomeService extends React.Component {

    SampleFunction = () => {
        // Write your own code here, Which you want to execute on Floating Button Click Event.
        Alert.alert("Floating Button Clicked");
    }

    state = {
        serviceData: [
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba23423sdf',
                title: 'First Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63234234dsf',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
            {
                id: '586sdfsd94a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
            {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63234234dsf',
                title: 'Second Item',
            },
            {
                id: '58694a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
            {
                id: '586sdfsd94a0f-3da1-471f-bd96-145571e29d72234234sdf',
                title: 'Third Item',
            },
        ],
        images: [
            "https://source.unsplash.com/1024x768/?nature",
            "https://source.unsplash.com/1024x768/?water",
            "https://source.unsplash.com/1024x768/?girl",
            "https://source.unsplash.com/1024x768/?tree", // Network image
            //require('./assets/images/girl.jpg'),          // Local image
        ]
    }
    renderItem = ({ item }) => {
        const navigation = this.props.navigation;
        return (
            <TouchableOpacity onPress={() => { navigation.navigate('ServiceDetail') }}>
                <View style={styles.item}>
                    <View style={{
                        width: "100%",
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Image
                            style={{
                                width: 108,
                                height: 108,
                                borderRadius: 4
                            }}
                            resizeMode={'cover'}
                            source={require('../assets/8.1-Home-Selft-Care/logo_pic2.png')}
                        />
                        <View style={{ width: "100%", marginStart: 10, marginEnd: 10, }}>
                            <Text style={{ fontSize: 18, marginTop: 4, textAlign: 'left' }}>Rona Roban Beauty Salon </Text>

                            <Text style={{ color: '#B3B3B3' }}>AI - Dubai, 2.5 km </Text>
                            <View style={{ width: "100%", justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                <Rating
                                    type='custom'
                                    ratingColor='#FFB74D'
                                    ratingBackgroundColor='#FFB74D'
                                    ratingCount={5}
                                    imageSize={16}
                                    //onFinishRating={this.ratingCompleted}
                                    style={{ paddingVertical: 4 }}
                                />
                            </View>
                            <Text style={{ fontWeight: 'bold' }}>25.00 AED </Text>
                            <Text style={{ width: "72%", color: '#999999', marginEnd: 8, textAlign: 'left' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
                        </View>
                    </View>
                </View >
            </TouchableOpacity>
        )
    }

    render() {
        const navigation = this.props.navigation;
        const toggleDrawer = () => {
            //Props to open/close the drawer
            props.navigationProps.toggleDrawer();
        };

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ width: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', }}>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', }}>
                        <TouchableOpacity onPress={() => navigation.navigate("DrawerNavigation")}>
                            {/* //navigation.dispatch(DrawerActions.toggleDrawer()) */}
                            <Image source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png', }}
                                style={{ width: 30, height: 30, marginLeft: 14, marginTop: 28, tintColor: '#444444' }}
                            />
                        </TouchableOpacity>
                        <Image
                            style={{ alignItems: 'center', width: 30, height: 30, marginTop: 28, marginBottom: 2 }}
                            resizeMode={'cover'}
                            source={require('../assets/app-icon.jpg')}
                        />
                        <View style={{ flexDirection: 'row', marginRight: 16, marginBottom: 2, marginTop: 30, }}>
                            <TouchableOpacity onPress={() => navigation.navigate("MyCart")}>
                                <Image resizeMode={'cover'}
                                    source={require('../assets/8.1-Home-Selft-Care/cart.png')}
                                    style={{ width: 22, height: 22, marginEnd: 4, tintColor: '#444444' }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('NotificationStack')}>
                                <Image resizeMode={'center'}
                                    source={require('../assets/8.1-Home-Selft-Care/notifications.png')}
                                    style={{ width: 22, height: 22, tintColor: '#444444' }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        width: '94%',
                        flexDirection: 'row',
                        borderRadius: 4,
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginTop: 4,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            borderRadus: 4,
                            width: '76%',
                            backgroundColor: '#F2F2F2',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 4,
                            marginTop: 4,
                        }}>
                            <Image resizeMode={'cover'}
                                source={require('../assets/8.1-Home-Selft-Care/search.png')}
                                style={{ width: 16, height: 16, marginStart: 8, tintColor: '#444444' }}
                            />
                            <TextInput
                                style={{
                                    height: 40,
                                    width: '90%',
                                    alignSelf: 'stretch',
                                    padding: 10,
                                    backgroundColor: '#F2F2F2',
                                }}
                                placeholder="Search"
                            />
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: 80, height: 40, backgroundColor: '#00C8E4', margin: 8, borderRadius: 4 }}>
                                <Image source={require('../assets/8.1-Home-Selft-Care/filter.png')}
                                    style={{ width: 16, height: 16, alignSelf: 'center', tintColor: '#444444', tintColor: '#FFFFFF' }}
                                />
                                <Text style={{ marginStart: 8, color: '#FFFFFF', fontSize: 14 }}>Filter</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <View style={[styles.buttonContainer, { marginBottom: 8 }]} >
                        <SliderBox ImageComponentStyle={{ borderRadius: 6, width: '92%', marginTop: 2, }} sliderBoxHeight={160} images={this.state.images} />
                    </View>

                <FlatList
                    data={this.state.serviceData}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
                </ScrollView>
                <View
                    style={{
                        bottom: 8,
                        position: 'absolute',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 8,
                        shadowRadius: 8,
                        shadowOpacity: 0.6,
                        borderRadius: 8,
                        elevation: 8
                    }}>
                    <View style={{
                        backgroundColor: "#FFFFFF",
                        padding: 10,
                        borderTopStartRadius: 4,
                        borderBottomStartRadius: 4,
                    }}>
                        <TouchableOpacity style={styles.centerAlign}>
                            <Text style={[styles.textButtonSocial, { color: '#000000' }]}>Self Care</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: "#00C8E4",
                        padding: 10,
                        borderBottomEndRadius: 4,
                        borderTopEndRadius: 4,
                    }}>
                        <TouchableOpacity style={styles.centerAlign}>
                            <Text style={[styles.textButtonSocial, { color: '#FFFFFF' }]}>Car Care</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        )
    }
}
export default HomeService;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 66,
        height: 58,
    },
    buttonContainer: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerList: {
        width: "100%",
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 8,
        width: "92%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
    centerAlign: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        height: 40,
        padding: 10,
        backgroundColor: '#F2F2F2',
    },
});