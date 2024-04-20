import { getPayload } from 'payload'
import React from 'react'
import config from '@payload-config'

const Home = async () => {
  const payload = await getPayload({ config })

  return <div>Home adminUrl: {payload.getAdminURL()}</div>
}

export default Home
