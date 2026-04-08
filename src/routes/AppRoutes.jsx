import MainLayout from '../layout/MainLayout'
import About from '../pages/About/About'
import ConnectUs from '../pages/ConnectUs/ConnectUs'
import Contact from '../pages/Contact/Contact'
import Home from '../pages/Home/Home'
import Services from '../pages/Services/Services'
import ServicesFour from '../pages/ServicesFour/ServicesFour'
import ServicesFive from '../pages/ServicesFive/ServicesFive'
import ServicesSix from '../pages/ServicesSix/ServicesSix'
import ServicesTwo from '../pages/ServicesTwo/ServicesTwo'
import SuccessStory from '../pages/SuccessStory/SuccessStory'

function AppRoutes() {
  const currentPath = window.location.pathname.replace(/\/+$/, '') || '/'

  const page =
    currentPath === '/about'
      ? <About />
      : currentPath === '/connect-us'
        ? <ConnectUs />
      : currentPath === '/contact'
        ? <Contact />
      : currentPath === '/services'
        ? <Services />
        : currentPath === '/services-3'
          ? <Services />
        : currentPath === '/services-4'
          ? <ServicesFour />
        : currentPath === '/services-5'
          ? <ServicesFive />
        : currentPath === '/services-6'
          ? <ServicesSix />
        : currentPath === '/services-2'
          ? <ServicesTwo />
        : currentPath === '/success-story'
          ? <SuccessStory />
        : <Home />

  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}

export default AppRoutes
