import { useCatFact } from './facts'

export function App () {
  const { catFact } = useCatFact()

  return (
    <>
      <h1>{catFact}</h1>
    </>
  )
}
