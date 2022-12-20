import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './ninjas/comps/Footer'
import Navbar from './ninjas/comps/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facere, animi rerum odit quibusdam sit nobis, et quae amet error dicta magnam quia assumenda sint commodi aperiam repudiandae voluptas ipsa!</p>
      <p className={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab facere, animi rerum odit quibusdam sit nobis, et quae amet error dicta magnam quia assumenda sint commodi aperiam repudiandae voluptas ipsa!</p>
      <Link className={styles.btn} href="/ninjas">
        See Ninja Listing
      </Link>
    </div>
    </>
  )
}
