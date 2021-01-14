
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, ScrollView, TextInput, Button, TouchableOpacity, Image, ImageBackground } from 'react-native';

class DrawerNavigation extends React.Component {
    render() {
        const navigation = this.props.navigation;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar style="auto" />

                    <View style={styles.rawContainer}>
                        <TouchableOpacity onPress={() => { navigation.navigate('EditProfile')}}>
                            <Image
                                style={styles.userImage}
                                resizeMode={'cover'}
                                source={require('../assets/16-Menu/profile_pic.png')}
                            />
                        </TouchableOpacity>
                        <View>
                            <Text style={{
                                width: '100%',
                                fontSize: 16,
                                marginTop: 8,
                                color: '#1A1A1A',
                                fontWeight: 'bold'
                            }}>User Name </Text>
                            <Text style={{
                                width: '100%',
                                fontSize: 13,
                                color: '#CCCCCC',
                                marginTop: 4,
                            }}>test@gmail.com </Text>
                            <Text style={{
                                width: '100%',
                                fontSize: 13,
                                color: '#1A1A1A',
                                fontWeight: 'bold',
                                marginTop: 4,
                            }}>+91 4387347834 </Text>
                            <Text style={{
                                width: '100%',
                                fontSize: 13,
                                color: '#CCCCCC',
                                marginTop: 4,
                            }}>Dubai - UAE </Text>
                        </View>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/home.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.goBack()}>
                            <Text style={styles.label}>Home</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/my_bookings.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('MyBookingsClinicProcess')}>
                            <Text style={styles.label}>My Booking</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/wallet.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('MyWallet')}>
                            <Text style={styles.label}>My Wallet </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/transactions.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('AllTransactions')}>
                            <Text style={styles.label}>All Transactions </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/wishlist.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('MyWishlist')}>
                            <Text style={styles.label}>My Wishlist </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/my_cart.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('MyCart')}>
                            <Text style={styles.label}>My Carts</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/address.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('SaveAddress')}>
                            <Text style={styles.label}>Save Address </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/notifications_1.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('NotificationStack')}>
                            <Text style={styles.label}>Notifications</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/settings.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('SettingStack')}>
                            <Text style={styles.label}>Settings </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/terms_of_service.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('ChangePassword')}>
                            <Text style={styles.label}>Terms of Services</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/rateus.png')} />
                        <TouchableOpacity style={styles.label}
                        //onPress={() => navigation.navigate('ChangePassword')}
                        >
                            <Text style={styles.label}>Rate Us</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/feedback.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('ChangePassword')}>
                            <Text style={styles.label}>Help & Feedback</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view} />

                    <View style={styles.rawContainer}>
                        <Image style={styles.icon} resizeMode={'contain'} source={require('../assets/16-Menu/home.png')} />
                        <TouchableOpacity style={styles.label} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.label}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view} />

                </View>
            </ScrollView >
        );
    };
}

export default DrawerNavigation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    userImage: {
        width: 80,
        height: 80,
        margin: 8,
        borderRadius: 100
    },
    rawContainer: {
        width: '98%',
        alignSelf: 'center',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    icon: {
        width: 22,
        height: 22,
        marginEnd: 16,
        marginStart: 16,
    },
    label: {
        width: "80%",
        fontSize: 18,
        color: '#4D4D4D',
        justifyContent: 'center'
    },
    view: {
        width: "90%",
        marginBottom: 16,
        marginTop: 16,
        borderBottomColor: '#E6E6E6',
        borderBottomWidth: 1,
    },
});
