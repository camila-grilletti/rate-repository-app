import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats.jsx'

const styles = StyleSheet.create({
    container: {
      padding: 20,
      paddinBottom: 5,
      paddintTop: 5
    }
})

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
        <StyledText color={'secondary'} fontSize={'subheading'} fontWeight={'bold'}>{props.fullName}</StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText>{props.language}</StyledText>
        <RepositoryStats {...props} />
    </View>
  )
}

export default RepositoryItem