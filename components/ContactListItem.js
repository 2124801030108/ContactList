import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import PropTypes from 'prop-types';
import colors from "../utility/colors";

const ContactListItem = ({
    name = "Minh Giang", // Tên của Minh Giang
    avatar = "https://example.com/giang_avatar.jpg", // URL ảnh đại diện của Minh Giang
    phone = "+841234567890", // Số điện thoại của Minh Giang
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.contactInfo}>
                <Image 
                    style={styles.avatar}
                    source={{
                        uri: avatar,
                    }}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                </View>
            </View>
        </View>
    );
};

ContactListItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
};

export default ContactListItem;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingVertical: 8,
    },
    contactInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingRight: 24,
        borderBottomColor: colors.grey,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    avatar: {
        borderRadius: 22,
        width: 44,
        height: 44,
    },
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 20,
    },
    title: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: colors.blue,
        fontSize: 15,
        marginTop: 4,
    },
});
