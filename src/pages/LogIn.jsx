import { Formik, useField } from 'formik'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

const initialValues = {
    email: '',
    password: ''
}

const styles = StyleSheet.create({
    form: {
        margin: 12
    }
})

const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    return (
        <StyledTextInput value={field.value} onChangeText={value => helpers.setValue(value)} {...props}/>
    )
}

const LogIn = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
        {({ handleSubmit }) => {
            return (
                <View style={styles.form}>
                    <FormikInputValue placeholder='Email' name='email' />
                    <FormikInputValue placeholder='Password' name='password' secureTextEntry />
                    <Button onPress={handleSubmit} title={'Log In'}></Button>
                </View>
            )
        }}
    </Formik>
  )
}

export default LogIn