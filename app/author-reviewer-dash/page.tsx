'use client'

import UserDropdown from '../../components/UserDropdown';

export default function Home() {
  
  return (
    <main id="viewport" className="min-h-screen flex">
      <div id="nav-column" className="border border-red-400 flex-1">
        <div id="logo" className="border">

        </div>
      </div>
      <div id="page" className="border border-green-400 flex-1">
        <div id="header" className="p-5 border">
          <div id="heading" className="flex justify-between items-center">
            <h2 className="text-3xl">Dashboard</h2>
            <UserDropdown/>
          </div>
          <div id="user-dropdown"></div>
        </div>
        <div id="content"></div>
      </div>
    </main>
  )
}
