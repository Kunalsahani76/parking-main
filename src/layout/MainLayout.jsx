import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
