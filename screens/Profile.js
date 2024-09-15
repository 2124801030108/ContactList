import React from "react";
import { View, Text, Button, Linking, StyleSheet } from "react-native";

const Profile = ({ route }) => {
  const { contact } = route.params;

  const handleCall = () => {
    const phoneNumber = contact.phone; // Giả sử số điện thoại được lưu trong `contact.phone`
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
      <Button title="Gọi điện" onPress={handleCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
  phone: {
    fontSize: 18,
    color: "gray",
  },
});

export default Profile;
