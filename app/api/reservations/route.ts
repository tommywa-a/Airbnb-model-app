import { NextResponse } from 'next/server'
import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/libs/prismadb'

export async function POST(request: Request) {
	const currentUser = await getCurrentUser()

	if (!currentUser) {
		return NextResponse.error()
	}

	const body = await request.json()
	const { listingId, startDate, endDate, totalPrice, userName, userImage } = body

	if (!listingId || !startDate || !endDate || !totalPrice) {
		return NextResponse.error()
	}

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      reservations: {
        create: {
          userId: currentUser.id,
          startDate,
          endDate,
          totalPrice,
          userName: userName,
          userImage: userImage
          
        },
      },
    },
  })

  return NextResponse.json(listingAndReservation)
}
