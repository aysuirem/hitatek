//app.tsx


import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text
} from 'react-native';
import NewsCards from './NewsCards';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SideMenu from './sidemenu';
import enTranslations from './locales/en.json';
import trTranslations from './locales/tr.json';
import SinglePage from './singlepage';


const Stack = createStackNavigator();


function HomeScreen({navigation}:{navigation: any}){
  const { t, i18n } = useTranslation();
  
  
  // const [isSideMenuOpen, setIsSideMenuOpen] = React.useState(false);

  // const openSideMenu = () => {
  //   setIsSideMenuOpen(true);
  // };
  
  // const closeSideMenu = () => {
  //   setIsSideMenuOpen(false);
  // };


  return (
      <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/g10.png')} style={styles.logo} />
        </View>
        {/* <TouchableOpacity style={styles.menuButton} onPress={openSideMenu}>
          <Image source={require('./assets/menu.png')} style={styles.menuIcon} />
        </TouchableOpacity> */}
      </View>

      {/* {isSideMenuOpen && (
        <SideMenu closeSideMenu={closeSideMenu} />
      )} */}


      <View style={styles.separatorContainer}>
        <Image source={require('./assets/20.png')} style = {styles.separator}/>
      </View>
    
       <ScrollView style={styles.scrollContainer}>
      <NewsCards
        imageSource={require('./assets/thumb.png')}
        title={
          i18n.language === 'en'
            ? enTranslations.news[0].title
            : trTranslations.news[0].title
        }
        description={
          i18n.language === 'en'
            ? enTranslations.news[0].description
            : trTranslations.news[0].description
        }
        author="Sharan Dhaliwal
        "
        authorImage={require('./assets/pp.png')}
      />
      <NewsCards
        imageSource={require('./assets/thumb2.png') }
        title={
          i18n.language === 'en'
            ? enTranslations.news[1].title
            : trTranslations.news[1].title
        }
        description={
          i18n.language === 'en'
            ? enTranslations.news[1].description
            : trTranslations.news[1].description
        }
        author="Abdi Ismail Samatar
        "
        authorImage={require('./assets/pp2.png')}
      />
      <NewsCards
        imageSource={require('./assets/thumb3.png')}
        title={
          i18n.language === 'en'
            ? enTranslations.news[2].title
            : trTranslations.news[2].title
        }
        description={
          i18n.language === 'en'
            ? enTranslations.news[2].description
            : trTranslations.news[2].description
        }
        author="WAQAS MIRZA"
        authorImage={require('./assets/pp.png')} // Yazar resminin yolunu belirtin

      />
      <TouchableOpacity onPress={() => navigation.navigate('SinglePage')}>
    <Table title1="1" title2="Haber Başlığı" />  
  </TouchableOpacity>
      <Table title1="2" title2="Haber Başlığı" />
      <Table title1="3" title2="Haber Başlığı" />
      <Table title1="4" title2="Haber Başlığı" />
      <Table title1="5" title2="Haber Başlığı" />
      </ScrollView>
    </View>
    
  );
}

function App() {
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="SinglePage" component={SinglePage} />
  </Stack.Navigator>
</NavigationContainer>
  );
}

function Table({ title1, title2 }: { title1: string; title2: string }) {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableRow}>
        <Text style={styles.tableTitle}>{title1}</Text>
        <Text style={styles.tableTitle}>{title2}</Text>
      </View>
      <View style={styles.tableLine} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#005D99',
    paddingHorizontal: 16,
   
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    height:40,
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'flex-start',
  },
  logo: {
    paddingTop: 38,
    paddingLeft:5,
    width: 46,
    height: 38,
  },
  menuButton: {
    width: 20,
    height: 20,
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  newsContainer: {
    flex: 1,
    padding: 20,
  },
  newsText: {
    fontSize: 18,
  },
  separatorContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  separator: {
    marginStart:10,
    marginTop:10,
  },
  scrollContainer: {
    flex: 1, 
  },
  thumb:{
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,

  },tableContainer: {
    paddingHorizontal: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tableLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
});


export default App;