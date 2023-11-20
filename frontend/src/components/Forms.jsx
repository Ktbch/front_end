import { Button, Input } from "./utils"


export const Form = ({ isReg = false, registerUser, firstname, lastname, email, username, password, errorMessage }) => {
  return (
    <>
      <form onSubmit={registerUser}>
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          {isReg ?
            <>
              <Input label='FirstName' type={'text'} name={firstname} />
              <Input label='Lastname' type={'text'} name={lastname} />
              <Input label='Email' type={'Email'} name={email} />
              <Input label='Username' type={'text'} name={username} />
              <Input label='Password' type={'password'} name={password} />
            </>
            :
            <>
              <Input label='Username' type={'text'} name={username} />
              <Input label='Password' type={'password'} name={password} />
            </>
          }
          <div className="pt-4">
            <Button name={isReg ? 'register' : 'login'} />
          </div>

        </div>
      </form>
      <div>
        {errorMessage}
      </div>
    </>

  )
}
