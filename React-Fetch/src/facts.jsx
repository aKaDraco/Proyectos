import { useState, useEffect } from 'react'

export const CAT_FACT_ENPOINT = 'https://catfact.ninja/fact'

export const useCatFact = () => {
  const [catFact, setCatFact] = useState()

  useEffect(() => {
    fetch(CAT_FACT_ENPOINT)
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact)
      })
  }, [])
  return { catFact }
}
