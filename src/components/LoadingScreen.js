import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const LoadingScreen = ({ message = 'Loading...', showSpinner = true }) => {
    return (
        <View style={styles.container}>
            {showSpinner && <ActivityIndicator size="large" color="#3498db" style={styles.spinner} />}
            <Text style={styles.message}>{message}</Text>
        </View>
    );
};

LoadingScreen.propTypes = {
    message: PropTypes.string,
    showSpinner: PropTypes.bool,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D7BC89',
    },
    spinner: {
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center',
    },
});

export default LoadingScreen;
