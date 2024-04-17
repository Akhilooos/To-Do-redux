import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyVanillacake,buyStrawberrycake,buyChococake,addVanillacake} from '../redux/Cakesilce';

const Cake = () => {

    const cakes = useSelector((state)=>state.cake);
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Vanilla Cakes in Store : {cakes.vanillacake}</h2>

<button
  className="bg-blue-500 ml-5 rounded-md text-white p-2"
  onClick={() => {
      dispatch(
        buyVanillacake()
      )
  }}
>
  Buy Vanilla Cake
</button>
<button
    className="bg-blue-500 ml-5 rounded-md text-white p-2"
    onClick={()=>{
        dispatch(
            addVanillacake(10)
        )
    }}>
        Add Vanilla Cake
    </button>

    </div>
  )
}

export default Cake