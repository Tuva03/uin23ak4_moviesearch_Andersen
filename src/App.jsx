import { useEffect, useState } from 'react'
import './styles/main.scss'
import Layout from './components/Layout'
import Searchresults from './components/Searchresults'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [query, setQuery] = useState("")
  const [content, setContent] = useState([])
  const [currentId, setCurrentId] = useState("")

  const getData = async () => {
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}+james+bond`)
      const data = await response.json()
      setContent(data.docs)
      console.log(data)
    } catch {
      console.error("Error")
    }
  }

  useEffect(() => {
    getData()
    setCurrentId(localStorage.getItem("bookTitle"))
  }, [query])

  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Searchresults content={content} setQuery={setQuery} setCurrentId={setCurrentId} />} />
        </Routes>
      </Layout >
    </>
  )
}

export default App