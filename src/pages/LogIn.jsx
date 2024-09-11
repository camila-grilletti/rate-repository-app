import { Formik, useField } from 'formik';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';

const initialValues = {
    email: '',
    password: ''
};

const styles = StyleSheet.create({
    form: {
        margin: 12
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginBottom: 20,
        marginTop: -10
    }
});

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <StyledTextInput
                error={meta.error}
                value={field.value}
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error && (
                <StyledText style={styles.error}>{meta.error}</StyledText>
            )}
        </>
    );
};

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    }

    return errors;
};

const LogIn = () => {
    return (
        <Formik initialValues={initialValues} validate={validate} onSubmit={values => console.log(values)}>
            {({ handleSubmit }) => {
                return (
                    <View style={styles.form}>
                        <FormikInputValue placeholder='Email' name='email' />
                        <FormikInputValue placeholder='Password' name='password' secureTextEntry />
                        <Button onPress={handleSubmit} title={'Log In'} />
                    </View>
                );
            }}
        </Formik>
    );
};

export default LogIn;
