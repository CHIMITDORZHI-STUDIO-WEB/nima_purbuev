import Layout from './components/layout/Layout'
import Hero from './components/home/Hero'
import Biography from './components/home/Biography'
import Gallery from './components/home/Gallery'
import Timeline from './components/home/Timeline'
import Contact from './components/home/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <Biography />
      <Gallery />
      <Timeline />
      <Contact />
    </Layout>
  )
}

export default App
