import { useEffect, useState } from "react"

const useRepositories = () => {
    const [repositories, setRepositories] = useState(null)
  
    const fetchRepositories = async () => {
      const response = await fetch('http://192.168.100.6:5000/api/repositories')
      console.log(response)
      const json = await response.json()
      setRepositories(json)
      console.log(json)
    }
  
    useEffect(() => {
      fetchRepositories()
    }, [])
  
    const repositoriesNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : []
  
    return {repositories: repositoriesNodes}
}

export default useRepositories