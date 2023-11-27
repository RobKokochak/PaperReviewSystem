import prisma from "@/db"

export default async function SigninForm() {

  const handleSubmit = async (formSubmit: FormData) => {
    'use server'
    const email = formSubmit.get("email")
    const password = formSubmit.get("password")
    console.log(`Email: ${email}, Password: ${password}`);
    const user = await prisma.user.findFirst();
    if (email == user?.email && password == user?.password) {
      console.log(`Welcome, ${user?.fname}`);
    }
  }

  return (
    <form id="signin-form" className="mt-8 space-y-14" action={handleSubmit}>
      <div id="email-field" className="flex items-center border-b border-gray-400 py-1 -space-y-px">
        <input
          id="email-field"
          name="email"
          type="email"
          required
          className="appearance-none bg-transparent border-none w-full py-1 leading-tight focus:outline-none"
          placeholder="Enter your email address"
          aria-label="email"
        />
      </div>
      <div id="pw-field" className="flex items-center border-b border-gray-400 py-1 -space-y-px">
        <input
          id="pw-field"
          name="password"
          type="password"
          required
          className="appearance-none bg-transparent border-none w-full py-1 leading-tight focus:outline-none"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button
          id="login-button"
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-3xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </div>
    </form>
  )
}