import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cards from './components/Cards'
import SecondCard from './components/SecondCard'
import Footer from './components/Footer'

function App() {
  const [ theme , setTheme ] = useState("white")
  return (
   <div className={`px-2 md:p-0 dark:${theme}  text-black   `}>
<Navbar setTheme={setTheme} theme={theme} />
<Main/>
<Cards/>
<SecondCard/>
<Footer/>
   </div>
  )
}

export default App  