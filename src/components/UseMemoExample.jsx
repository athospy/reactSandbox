import {useState, useEffect, useRef, useMemo} from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  //const sqrt = getSqrt(number)
  const sqrt = useMemo(()=>getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(()=>{
    renders.current +=1
  })

  const onClick = ()=>{
    setInc((prevState)=>{
      console.log(prevState)
      return prevState+1
    })
  }

  return (
    <div>
      <input type="number" value={number} 
      onChange={(e)=>setNumber(e.target.value)}
      className="forms-conter x-25" />
      <h3>Renders: {renders.current}</h3>

      <h2 className="my-3">
         The sqrt of {number} is {sqrt}
      </h2>

      <button className="btn btn-primary"
      onClick={onClick}>
        re Render
        </button>
    </div>
  )
}

function getSqrt(n) {
  for(let i = 0; i < 10000; i++) {
    console.log(i)
  }
  console.log("Expensive Function Called")
  return Math.sqrt(n)
}

export default UseMemoExample
