import { Outlet } from "react-router-dom"
import { Footer } from "../../widget/footer"
import { Header } from "../../widget/header"

export  const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
      <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}


