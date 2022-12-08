import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return <>
        <div className={styles.navlinks}>
            <Link
                href='/'
                style={{ opacity: activeLink === '/' || activeLink === '/#work' ? '100%' : '80%' }}>Home</Link>
        </div>
        <div className={styles.navlinks}>
            <Link
                href='/#about'
                style={{ opacity: activeLink === '/#about' ? '100%' : '80%' }}>About</Link>
        </div>
        <div className={styles.navlinks}>
            <Link href='/work' style={{ opacity: activeLink === '/work' ? '100%' : '80%' }}>Work</Link>
        </div>
        <div className={styles.navlinks}>
            <Link
                href='/contact'
                style={{ opacity: activeLink === '/contact' ? '100%' : '80%' }}>Contact</Link>
        </div>
    </>;
}

export default Navlinks
