import LogoImage from '@/components/LogoImage';
import OverviewContent from '@/components/OverviewContent';

export default function Home() {
  
  return (
    <main id="viewport" className="flex min-h-screen">
      <div id="nav-column" className="w-56 bg-dark-color">
        <div id="nav-header" className="flex items-center p-5">
          <div id="logo-image" className='flex-none'> 
            <LogoImage width={36}/>
          </div>
          <p id="logo-text" className='flex-none ml-3 w-32 text-xs'>Conference Paper Review System</p>
        </div>
      </div>
      <div id="content-column" className="flex-1">
        <div id="content-header" className="flex justify-between items-center m-5">
          <h2 className="text-3xl">Dashboard</h2>
        </div>
        <div id="content" className='mx-5'>
          <OverviewContent />
        </div>
      </div>
    </main>
  )
}
