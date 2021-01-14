// React Native Tab - Example using React Navigation V5 //
// https://aboutreact.com/react-native-tab //
import * as React from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView, FlatList, Image } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];



const ItemService = ({ title }) => (
  <TouchableOpacity
    onPress={() => { navigation.navigate('DentalClinicServicesDetails') }}
  >
    <View style={styles.item}>

      <View style={styles.buttonContainer}>
        <Image
          style={{
            width: 108,
            height: 108,
          }}
          resizeMode={'cover'}
          source={require('../assets/self_service_pic_2.png')}
        />

        <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>

          <Text style={{ width: "98%", textAlign: 'left' }}>Implant Bridges </Text>
          <Text style={{ width: "50%", fontWeight: 'bold' }}>25.00 AED </Text>
          <Text style={{ width: "98%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
          <Text style={{ width: "98%", color: '#808080' }}>2 Hrs 30 Min </Text>

        </View>
      </View>

    </View >
  </TouchableOpacity>
);



// const ServicePage = ({ navigation }) => {
class ServicePage extends React.Component {
  
  // const navigation = this.props.navigation;
   renderItem = ({ item }) => {
    
    const navigation = this.props.navigation;
   return (
    // <ItemService title={item.title} />

    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DentalClinicServicesDetails') 
      }}
    >
      <View style={styles.item}>

        <View style={styles.buttonContainer}>
          <Image
            style={{
              width: 108,
              height: 108,
            }}
            resizeMode={'cover'}
            source={require('../assets/self_service_pic_2.png')}
          />

          <View style={{ width: '76%', marginStart: 10, marginEnd: 10 }}>

            <Text style={{ width: "98%", textAlign: 'left' }}>Implant Bridges </Text>
            <Text style={{ width: "50%", fontWeight: 'bold' }}>25.00 AED </Text>
            <Text style={{ width: "98%", color: '#B3B3B3' }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,  </Text>
            <Text style={{ width: "98%", color: '#808080' }}>2 Hrs 30 Min </Text>

          </View>
        </View>

      </View >
    </TouchableOpacity>
  )};

  render() {

   return (
    <SafeAreaView style={styles.containerList}>
      <FlatList
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

  )};
}

export default ServicePage;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 8,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});