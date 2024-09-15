import React, { useState } from "react";
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
    const [language, setLanguage] = useState('en');

    const handleUpdateProfile = () => {
        navigation.navigate("User"); // Điều hướng đến màn hình cập nhật hồ sơ
    };

    const handleChangeLanguage = () => {
        const newLanguage = language === 'en' ? 'vi' : 'en';
        setLanguage(newLanguage);
        Alert.alert("Ngôn ngữ đã được thay đổi", newLanguage === 'en' ? "Language changed to English!" : "Đã chuyển sang tiếng Việt!");
    };

    const handleSignOut = () => {
        Alert.alert("Đăng xuất", "Bạn có chắc chắn muốn đăng xuất không?", [
            { text: "Hủy", style: "cancel" },
            { text: "Đồng ý", onPress: () => {
                // Logic để đăng xuất
                console.log("Đã đăng xuất");
                // Thực hiện các thao tác đăng xuất như xóa token, điều hướng đến màn hình đăng nhập
            }},
        ]);
    };

    return (
        <View style={styles.container}>
            <DetailListItem title={language === 'en' ? "Update Profile" : "Cập nhật hồ sơ"} onPress={handleUpdateProfile} />
            <DetailListItem title={language === 'en' ? "Change Language" : "Thay đổi ngôn ngữ"} onPress={handleChangeLanguage} />
            <DetailListItem title={language === 'en' ? "Sign Out" : "Đăng xuất"} onPress={handleSignOut} />
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
