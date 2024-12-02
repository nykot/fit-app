import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'


function App() {
  const [workout, setWorkout] = useState(null)
  const [goal, setGoal] = useState('strenght_power')
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])

  function updateWorkout() {
    if(muscles.length < 1) {
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal})
    setWorkout(newWorkout)
    window.location.href = '#workout'
  }

   
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base items-center'>      
      <Hero />
      <Generator 
        poison={poison} 
        setPoison={setPoison} 
        muscles={muscles} 
        setMuscles={setMuscles} 
        goal={goal} 
        setGoal={setGoal} 
        updateWorkout={updateWorkout}/>
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
