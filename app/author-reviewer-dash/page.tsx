'use client'

import { useState } from 'react';
import UserDropdown from '@/components/UserDropdown';
import LogoImage from '@/components/LogoImage';
import OverviewContent from '@/components/OverviewContent';
import SubmitPaperForm from '@/components/SubmitPaperForm';
import SearchConferenceForm from '@/components/SearchConferenceForm';

export default function Home() {

  const [activeContent, setActiveContent] = useState('overview');
  
  return (
    <main id="viewport" className="flex min-h-screen">
      <div id="nav-column" className="w-56 bg-dark-color">
        <div id="nav-header" className="flex items-center p-5">
          <div id="logo-image" className='flex-none'> 
            <LogoImage width={36}/>
          </div>
          <p id="logo-text" className='flex-none ml-3 w-32 text-xs'>Conference Paper Review System</p>
        </div>
        <div id="nav-buttons" className='flex flex-col m-5'>
          <button className={`button ${activeContent === 'overview' ? 'activeButtonStyle' : 'unactiveButtonStyle'}`} onClick={() => setActiveContent('overview')}>Overview</button>
          <button className={`button ${activeContent === 'submitPaper' ? 'activeButtonStyle' : 'unactiveButtonStyle'}`} onClick={() => setActiveContent('submitPaper')}>Submit Paper</button>
          <button className={`button ${activeContent === 'searchConference' ? 'activeButtonStyle' : 'unactiveButtonStyle'}`} onClick={() => setActiveContent('searchConference')}>Search Conference</button>
        </div>
      </div>
      <div id="content-column" className="flex-1">
        <div id="content-header" className="flex justify-between items-center m-5">
          <h2 className="text-3xl">Dashboard</h2>
          <UserDropdown username="Jane Doe"/>
        </div>
        <div id="content" className='mx-5'>
          {activeContent === 'overview' && <OverviewContent />}
          {activeContent === 'submitPaper' && <SubmitPaperForm />}
          {activeContent === 'searchConference' && <SearchConferenceForm />}
        </div>
      </div>
    </main>
  )
}
