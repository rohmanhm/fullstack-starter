import prisma from '@/shared/prisma'
import React from 'react'

const PrismaPage = () => {
  return (
    <div>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi atque
      odio dolorem? Labore, earum, laborum unde non sint nobis aut quisquam nisi
      modi asperiores odit delectus nesciunt, accusantium minus sequi?
    </div>
  )
}

export const getServerSideProps = async () => {
  console.log(prisma.user.findMany())
  return {
    props: {},
  }
}

export default PrismaPage
