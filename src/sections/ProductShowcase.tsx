

import productImage from '@/assets/product-image.png'
import pyramideImage from '@/assets/pyramid.png'
import tube from '@/assets/tube.png'
import Image from 'next/image';

export const ProductShowcase = () => {
  return (
    <section className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>
              Boost your productivity
            </div>
          </div>
          <h2 className='section-title mt-5'>
            A more effective way to track progress
          </h2>
          <p className='section-description'>
            Effortlessly turn your ideas into a fully functional, responsive, SaaS
            website in just minutes with this template.
          </p>
        </div>
        <div className='relative'>
          <Image
            src={productImage}
            alt="product image"
            className='mt-10'
          />
          <Image 
            src={pyramideImage}
            alt='Pyramid Image'
            height={262}
            width={262}
            className='hidden md:block absolute -right-36 -top-32'
          />
          <Image 
            src={tube}
            alt='Tube Image'
            height={248}
            className='hidden md:block absolute bottom-24 -left-36'
          />
        </div>
      </div>
    </section>
  )
};
