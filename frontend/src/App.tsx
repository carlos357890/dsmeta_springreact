import Header from "./components/Header/index_header"
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard/index_SalesCard"


function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>

  )
}

export default App
