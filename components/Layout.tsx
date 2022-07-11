import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Logo from '../utils/voico.jpg'
import Image from 'next/image'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className="flex flex-col flex-grow h-screen">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <header className="border-b-2 flex-none border-slate-400">
            <div className="text-xl py-3 px-5 text-lg">
                <a>. . .</a>
                <p className="float-right">
                    <Image src={Logo} alt="VOICO" width={40} height={40} />
                </p>
            </div>
        </header>
        <div className="grow flex">{children}</div>

        <footer className="flex-none"></footer>
    </div>
)

export default Layout
