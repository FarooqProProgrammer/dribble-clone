import React from 'react'
import Hero from '../../components/Hero'
import DribbleCards from '../../components/DribbleCards'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Dribble</title>
      </Helmet>

      <Hero />
      <DribbleCards />
    </>
  )
}

export default Home
