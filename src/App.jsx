import Layout from './components/layout/Layout'
import Hero from './components/home/Hero'
import Biography from './components/home/Biography'
import Stats from './components/home/Stats'
import Gallery from './components/home/Gallery'
import Quotes from './components/home/Quotes'
import Timeline from './components/home/Timeline'
import Sources from './components/home/Sources'
import Ornament from './components/shared/Ornament'

function App() {
  return (
    <Layout>
      <Hero />
      <Ornament className="bg-sagaalgan-white dark:bg-[#0a1628]" />
      <Biography />
      <Stats />
      <Ornament className="bg-white dark:bg-[#0d1b2e]" />
      <Gallery />
      <Ornament className="bg-white dark:bg-[#0d1b2e]" />
      <Quotes />
      <Ornament className="bg-sagaalgan-white dark:bg-[#0a1628]" />
      <Timeline />
      <Ornament className="bg-sagaalgan-white dark:bg-[#0a1628]" />
      <Sources />
    </Layout>
  )
}

export default App
