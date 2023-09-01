
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';




interface SideMenuProps {
  closeSideMenu: () => void; 
}

function SideMenu({ closeSideMenu }:SideMenuProps) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    closeSideMenu(); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => changeLanguage('en')}
      >
        <Text style={styles.menuItemText}>English</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => changeLanguage('tr')}
      >
        <Text style={styles.menuItemText}>Türkçe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f1f1f1',
  },
  menuItem: {
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 18,
  },
});

export default SideMenu;
