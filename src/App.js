import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/templates/Layout'
import ListMusic from './pages/ListMusic'
import Homepage from './pages/Homepage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/list-music/:term" element={<ListMusic />} />
      </Routes>
    </Layout>
  )
}

export default App
