//Day - 1, 2 (props and states)

import Cards from "./components/Cards"
const App = () => {
  const nums = 10
  return (
   <div>
      <Cards a={nums} />
   
   </div>
  )
}

export default App




//day - 3 (redux)


import Counter from "./Counter.jsx"

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  )
}

export default App