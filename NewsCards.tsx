
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

interface NewsCardProps {
  imageSource: any;
  title: string;
  description: string;
  author: string;
  authorImage:any;
}

function NewsCard({ imageSource, title, description, author, authorImage  }: NewsCardProps) {
    console.log("NewsCard component rendered");

  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDescription}>{description}</Text>
      <View style={styles.authorContainer}>
        <Image source={authorImage} style={styles.authorImage} />
        <Text style={styles.cardAuthor}>{author}</Text>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 250,
    marginBottom: 10,
    
  },
  cardTitle: {
    fontSize:40,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: 'Noto Serif',
    color:'black'
  },
  cardDescription: {
    fontSize: 26,
    marginBottom: 15,
    color: 'black'
  },
  cardAuthor: {
    fontSize: 18,
    color: 'black'
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    marginRight: 5,
  },
});

export default NewsCard;
