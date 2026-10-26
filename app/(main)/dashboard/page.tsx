import { checkUser } from '@/actions/check-user'
import { redirect } from 'next/navigation';
import React from 'react'

const DashboardPage = () => {

    const user = checkUser();
    if(!user) redirect("/sign-in")

  return (
    <div>DashboardPage</div>
  )
}

export default DashboardPage