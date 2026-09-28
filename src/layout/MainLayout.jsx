import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import FloatingContactActions from '../components/FloatingContactActions/FloatingContactActions'

function MainLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingContactActions />
    </div>
  )
}

export default MainLayout
