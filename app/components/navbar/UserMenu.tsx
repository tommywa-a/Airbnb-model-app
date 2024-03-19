'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import { useCallback, useState } from 'react'
import { signOut } from 'next-auth/react'

import MenuItem from './MenuItem'

import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import useRentModal from '@/app/hooks/useRentModal'
import { User } from '@prisma/client'
import { useRouter } from 'next/navigation'

interface userMenuProps {
	currentUser?: User | null
}

const UserMenu: React.FC<userMenuProps> = ({ currentUser }) => {
	const router = useRouter()
	const registerModal = useRegisterModal()
	const loginModal = useLoginModal()
	const rentModal = useRentModal()
	const [isOpen, setIsOpen] = useState(false)

	const toggleOpen = useCallback(() => {
		setIsOpen((value) => !value)
	}, [])

	const onRent = useCallback(() => {
		if (!currentUser) {
			return loginModal.onOpen()
		}

		rentModal.onOpen()
	}, [currentUser, loginModal, rentModal])

	return (
		<div className='relative'>
			<div className='flex flex-row items-center gap-3'>
				<div
					onClick={onRent}
					className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'
				>
					Airbnb your home
				</div>
				<div
					onClick={toggleOpen}
					className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
				>
					<AiOutlineMenu />
					<div className='hidden md:block'>
						<Avatar src={currentUser?.image} />
					</div>
				</div>
			</div>

			{isOpen && (
				<div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
					<div className='flex flex-col cursor-pointer'>
						{currentUser ? (
							<>
								<h1 className='pl-4 font-bold text-lg'>
									Hello, {currentUser.name}
								</h1>
								<br />
								<MenuItem
									onClick={() => {
										router.push('/trips')
										toggleOpen()
									}}
									label='My trips'
								/>
								<MenuItem
									onClick={() => {
										router.push('/favorites')
										toggleOpen()
									}}
									label='My favorites'
								/>
								<MenuItem
									onClick={() => {
										router.push('/reservations')
										toggleOpen()
									}}
									label='My reservations'
								/>
								<MenuItem
									onClick={() => {
										router.push('/properties')
										toggleOpen()
									}}
									label='My properties'
								/>
								<MenuItem
									onClick={rentModal.onOpen}
									label='Airbnb my home'
								/>
								<hr />
								<MenuItem
									onClick={() => signOut()}
									label='Logout'
								/>
							</>
						) : (
							<>
								<MenuItem
									onClick={loginModal.onOpen}
									label='Login'
								/>
								<MenuItem
									onClick={registerModal.onOpen}
									label='Sign Up'
								/>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default UserMenu
