import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Gridofphotos from '../components/Gridofphotos'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
     <Navbar />
     <Gridofphotos />
     <Footer />
    
    </div>
  )
}
