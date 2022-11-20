<<<<<<< HEAD
import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'


=======
import Head from 'next/head'
import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui'

>>>>>>> 8f46a6973bd1f1b3cb1ca6ec01417af78227cd1a
export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Head>
<<<<<<< HEAD
            <title>Cookie Master</title>
            <meta name="desciption" content='Home Page' />
            {/* <link rel="stylesheet" href="/public/" /> */}
=======

>>>>>>> 8f46a6973bd1f1b3cb1ca6ec01417af78227cd1a
         </Head>

         <nav>
            <Navbar />
         </nav>

         <main style={{ padding: '20px 50px' }} >
            {children}
         </main>
      </>
   )
}
