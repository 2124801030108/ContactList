import React from "react";
import { StyleSheet, View, Alert, TouchableOpacity, Text } from "react-native";

// Component để hiển thị từng mục
const DetailListItem = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.listItem} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

// Component chính
const Options = ({ navigation }) => {
    const handleUpdateProfile = () => {
        navigation.navigate("User"); // Điều hướng đến màn hình cập nhật hồ sơ
    };

    const handleSignOut = () => {
        Alert.alert("Đăng xuất", "Bạn có chắc chắn muốn đăng xuất không?", [
            { text: "Hủy", style: "cancel" },
            { text: "Đồng ý", onPress: () => {
                // Logic để đăng xuất
                console.log("Đã đăng xuất");
            }},
        ]);
    };

    return (
        <View style={styles.container}>
            <DetailListItem title="Update Profile" onPress={handleUpdateProfile} />
            <DetailListItem title="Sign Out" onPress={handleSignOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        fontSize: 18,
    },
});

export default Options;
