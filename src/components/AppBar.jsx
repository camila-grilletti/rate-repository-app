import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import Constants from 'expo-constants';
import theme from '../theme.js';
import { Link, useLocation } from "react-router-native";
import { TouchableOpacity, ScrollView } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
        paddingLeft: 10
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    },
    scroll: {
        paddingBottom: 15
    },
    active: {
        color: theme.appBar.textPrimary
    },
    inactive: {
        color: theme.appBar.textSecondary
    }
});

const AppBarTab = ({ children, to }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    const textStyles = [
        styles.text,
        isActive ? styles.active : styles.inactive
    ];

    return (
        <Link to={to} component={TouchableOpacity}>
            <StyledText fontWeight={'bold'} style={textStyles}>
                {children}
            </StyledText>
        </Link>
    );
};

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <AppBarTab active to='/'>Repositories</AppBarTab>
                <AppBarTab to='/signin'>Sign In</AppBarTab>
            </ScrollView>
        </View>
    );
};

export default AppBar;
