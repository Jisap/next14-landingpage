import logo from '@/assets/logosaas.png'
import Image from 'next/image';


export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Image
          src={logo}
          alt="logo"
          height={40}
          className=''
        />
        <nav>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
      </div>
    </footer>
  )
};
