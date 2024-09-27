import JsonLoad from "./components/JsonLoad"
import AutoSearch from "./components/AutoSearch"
import SearchObject from "./components/SearchObject"
import OnClickSearch from "./components/OnClickSearch"

function App() {

  return (
    <>
     
       <div className="max-w-screen-lg mx-auto">
        <OnClickSearch/>
        <AutoSearch/>
        <SearchObject/>
        <JsonLoad/>
       </div>
    </>
  )
}

export default App
