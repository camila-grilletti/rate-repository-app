import { StyleSheet, Text } from "react-native"
import theme from '../theme.js'

const styles = StyleSheet.create({
    text: {
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      color: theme.colors.textPrimary,
      fontWeight: theme.fontWeights.normal
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    bold: {
      fontWeight: theme.fontWeights.bold,
      marginBottom: 5
    },
    subheading: {
        color: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
}) 

export default function StyledText ({ align, children, color, fontSize, fontWeight, style, ...restOfProps }) {

    const textSystem = [
        styles.text,
        align === 'center' && styles.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
    ]

    return (
        <Text style={textSystem}>
            { children }
        </Text>
    )

}