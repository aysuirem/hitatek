import React from 'react';
import { View } from 'react-native';
import NewsCards from './NewsCards';
import enTranslations from './locales/en.json';
import trTranslations from './locales/tr.json';
import { useTranslation } from 'react-i18next'; 
import { NavigationContainer } from '@react-navigation/native'; //


function SinglePage() {
  const { t, i18n } = useTranslation(); 
  return (
    <NavigationContainer>
      <View>
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
          author="Sharan Dhaliwal"
          authorImage={require('./assets/pp.png')}
        />
      </View>
    </NavigationContainer>
  );
}

export default SinglePage;
