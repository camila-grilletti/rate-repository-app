import React from 'react'
import { Image, StyleSheet, View, Platform } from 'react-native'
import RepositoryStats from './RepositoryStats.jsx'
import StyledText from './StyledText'
import theme from '../theme.js'


const RepositoryItemHeader = (props) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
      <View style={{ flexGrow: 0 }}>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }}></Image>
      </View>
      <View style={{ flexGrow: 1, paddingLeft: 10, gap: 4 }}>
        <StyledText color={'secondary'} fontSize={'subheading'} fontWeight={'bold'}>{props.fullName}</StyledText>
        <StyledText>{props.description}</StyledText>
        <StyledText style={styles.language}>{props.language}</StyledText>
      </View>
    </View>
  )
}


const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader  {...props}/>
      <RepositoryStats {...props} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddinBottom: 5,
    paddintTop: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export default RepositoryItem