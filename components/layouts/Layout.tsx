import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { Navbar } from '../ui'


export const Layout: FC<PropsWithChildren> = ({ children }) => {
   return (
      <>
         <Head>
            <title>Cookie Master</title>
            <meta name="desciption" content='Home Page' />
            {/* <link rel="stylesheet" href="/public/" /> */}
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
