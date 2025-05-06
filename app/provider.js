"use client"
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { db } from '../configs/db'
import { Users } from '../configs/schema'
import { eq } from 'drizzle-orm'

function Provider({ children }) {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      isNewUser()
    }
  }, [user]);

  const isNewUser = async () => {

    const returnedUser = await db.select().from(Users)
      .where(eq(Users.email, user?.primaryEmailAddress?.emailAddress))

    if (returnedUser.length === 0) {
      router.push('/sign-up');

    }
  }

  return <>{children}</>
}

export default Provider
