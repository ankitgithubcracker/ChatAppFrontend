import React, {useState } from 'react'


const Forgotpassword = () => {
  const [data, setData] = useState({
    email: "",
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   e.stopPropagation()

  //   const URL = `${process.env.REACT_APP_BACKEND_URL}/api/forget-password`

  //   try {
  //     const response = await axios.post(URL, data)

  //     toast.success(response.data.message)

  //     if (response.data.success) {
  //       setData({
  //         email: "",
  //       })
  //       navigate('/password', {
  //         state: response?.data?.data
  //       })
  //     }
  //   } catch (error) {
  //     toast.error(error?.response?.data?.message)
  //   }
  // }


  return (
    <div className='mt-5'>
      <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>

        <h1 className='text-2xl font-semibold text-center'>Forget Password</h1>

        <form
          className='grid gap-4 mt-3'
          // onSubmit={handleSubmit}
        >


          <div className='flex flex-col gap-1'>
            <label htmlFor='email'>Email :</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='enter your email'
              className='bg-slate-100 px-2 py-1 focus:outline-primary'
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <button
            className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
          >
            Send OTP
          </button>

        </form>
      </div>
    </div>
  )
}

export default Forgotpassword
