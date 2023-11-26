import LogoImage from '@/components/LogoImage';
import SigninForm from '@/components/SigninForm';

export default function userLogin() {
  
  return (
    <main id="viewport" className="min-h-screen flex p-6">
      <div id="left-col" className="flex-1">
        <h2 id="title" className="mb-20 mr-5 text-3xl text-white">
          Conference Paper Review System
        </h2>
        <div id="signin-title&card" className="m-10">
          <h2 id="signin-title" className="mb-20 text-3xl text-white">
            Sign in
          </h2>
          <div id="signin-form" className="p-5 rounded-xl max-w-md bg-dark-color">
            <SigninForm />
          </div>
        </div>
      </div>
      <div id="right-col" className="flex-1">
        <div id="logo-card" className="p-5 h-full w-full flex flex-1 flex-col justify-between space-y-8 bg-dark-color rounded-xl">
          <div id="logo-image"> 
            <LogoImage width={250}/>
          </div>
          <div id="banner" className="py-12">
            <h2 className="pb-3 text-5xl">Conference Paper Review System</h2>
            <p className="text-m">Sign in with your credentials to get started.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
