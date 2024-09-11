import { ApolloClient, InMemoryCache } from '@apollo/client'

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'http://192.168.100.6:5000/graphql',
        cache: new InMemoryCache()
    })
}

export default createApolloClient