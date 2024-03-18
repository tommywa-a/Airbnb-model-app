'use client'

import axios from 'axios'
import {AiFillGithub} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';



import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'

import Modal from './Modal'
import Heading from '../Heading'
import Input from '../inputs/Input'
import toast from 'react-hot-toast'
import Button from '../Button'
import { signIn } from 'next-auth/react'
import * as yup from 'yup'

const RegisterModal = () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const [isLoading, setIsLoading] = useState(false)

  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters, amd must contain at least one uppercase letter, one lowercase letter, and one number').required('Password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  });

const {
  register,
  handleSubmit,
  formState: {
    errors: errors,
  }
} = useForm<FieldValues>({
  defaultValues: {
    name: '',
    email: '',
    password: '',
  },
  resolver: yupResolver(schema) as any,
})

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fix the errors in the form');
      return;
    }
    setIsLoading(true)

    axios.post('/api/register', data)
      .then(() => {
        toast.success('Successfully registered!')
        registerModal.onClose()
        loginModal.onOpen()
      })
      .catch((error) => {
        toast.error('Something went wrong')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const toggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title='Welcome to Airbnb' subtitle='Create an account' />
      <Input
        id='email'
        type='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
      outline
      label='Continue with Google'
      icon={FcGoogle}
      onClick={() => signIn('google')}
      />
      <Button
      outline
      label='Continue with Github'
      icon={AiFillGithub}
      onClick={() => signIn('github')}
      />
      <div className="text-neutral text-center mt-4 font-light">
        <div className='justify-center flex flex-row items-center gap-2'>
          <div>
            Already have an account?
          </div>
          <div onClick={toggle} className='text-neutral-800 cursor-pointer hover:underline'>
            Log in
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}

export default RegisterModal