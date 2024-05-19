import { View, Text } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

const CartScreen = () => {
    return(
        <View>
            <Text>Cart</Text>
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}

export default CartScreen;