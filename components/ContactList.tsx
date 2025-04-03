import React from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Tim Cook',
      status: 'Apple CEO',
      image:
        'https://people.com/thmb/fnq_ezDdZ8z126LfIaHZYKzL8gM=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x412:961x414)/tim-cook-2000-e9041b8472c1431991e8ac9de672d2ab.jpg',
    },
    {
      uid: 2,
      name: 'Jef Bezos',
      status: 'Amazon CEO',
      image:
        'https://m.media-amazon.com/images/M/MV5BNWI4ZTJiZmUtZGI5MC00NTk4LTk2OTYtNDU3NTJiM2QxNzM0XkEyXkFqcGc@._V1_.jpg',
    },
    {
      uid: 3,
      name: 'Mark Zuckerberg',
      status: 'Facebook CEO',
      image:
        'https://assets.bizclikmedia.net/1200/321b173d99788027dca1974c995eedce:9d93f88eb7cb3a6e55807f20b97c5c3c/118371872-2979410852184921-6072789506655055916-n.jpeg.jpg',
    },
    {
      uid: 4,
      name: 'Elon Musk',
      status: 'Tesla CEO',
      image:
        'https://hips.hearstapps.com/hmg-prod/images/elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}> Contact List </Text>
      <ScrollView style={styles.container}>
        {contacts.map((contact) => (
          <View
            key={contact.uid}
            style={styles.userCard}>
            <Image
              source={{uri: contact.image}}
              style={styles.contactImage}
            />
            <View>
              <Text style={styles.userText}>
                {contact.name}
              </Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    paddingHorizontal: 8,
  },
  container:{
    paddingHorizontal: 16,
    marginBottom:4,
},
  contactImage:{
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 14,
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:4,
    backgroundColor:'#FF6E6E',
    padding: 8,
    borderRadius:10,
  },
  userText:{
    fontSize: 16,
    fontWeight: 'bold',
    color:'#FFF',
  },
  userStatus:{
    color:'white',
    fontSize: 12,
  },
});
