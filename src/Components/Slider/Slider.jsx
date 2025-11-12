import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
 import image2  from '../../assets/greenhouseculimage.jpeg'
 import image3  from '../../assets/cutting.jpg'
 import image4  from '../../assets/after.jpg'
 import image5  from '../../assets/after2.jpg'
 import image6  from '../../assets/after3.jpg'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';

const Slider = () => {
    return (

    <div className='py-14 mt-10 bg-gradient-to-r from-[#166534] via-[#22C55E] to-[#A3E635] rounded-3xl'>
      <Swiper  navigation={true}      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{
        delay:2000,
        disableOnInteraction:false
      }}
      speed={800}
      loop={true}
      
      
      className="mySwiper">
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src={image2} alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src={image3} alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src={image4} alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src={image5} alt="" /></SwiperSlide>
        <SwiperSlide className='flex justify-center items-center'><img className=' max-w-[300px] max-h-[250px] mx-auto my-auto md:max-w-[400px] md:max-h-[350px] lg:max-w-[600px] lg:max-h-[500px] rounded-2xl' src={image6} alt="" /></SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;