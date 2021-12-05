import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Home':
            return focus ? <Image source={{ uri: "https://img.icons8.com/material-rounded/24/000000/home.png" }} style={styles.icon} /> : <Image source={{ uri: "https://img.icons8.com/material-rounded/24/000000/home.png" }} style={styles.icon} />
        case 'Explore':
            return focus ? <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" }} style={styles.icon} /> : <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" }} style={styles.icon} />
        case 'Reels':
            return focus ? <Image source={{ uri: "https://img.icons8.com/ios/50/000000/instagram-reel.png" }} style={styles.icon} /> : <Image source={{ uri: "https://img.icons8.com/ios/50/000000/instagram-reel.png" }} style={styles.icon} />
        case 'Activities':
            return focus ? <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/online-shop.png" }} style={styles.icon} /> : <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/online-shop.png" }} style={styles.icon} />
        case 'Profile':
            return focus ? <Image source={{ uri: "https://img.icons8.com/material-outlined/50/000000/user-female-circle.png" }} style={styles.icon} /> : <Image source={{ uri: "https://img.icons8.com/material-outlined/50/000000/user-female-circle.png" }} style={styles.icon} />
        default:
            return <Image source={{ uri: "https://img.icons8.com/material-rounded/24/000000/home.png" }} />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <Icon label={label} focus={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 15,
        paddingBottom: 13,
        paddingHorizontal: 30,
        justifyContent: 'space-between'
    },
    icon: {
        width: 30,
        height: 30,
    }
})
