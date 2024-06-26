import {useEffect, useRef, useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {fakeSliderData} from '../data.js'




const CoverflowSlider = () => {
  const [content, setContent] = useState({})

  const dataIndex = useRef(-1);
  const defaultIndex = 2;
  const swiperRef = useRef(null);


  const handleSlideChange = (index) => {
    const content = fakeSliderData[index];
    setContent(content);
    dataIndex.current = index;
  };


  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      handleSlideChange(defaultIndex);

      const slideChangeHandler = () => {
        setTimeout(() => {
          const activeSlideElement = swiperInstance.el.querySelector('.swiper-slide-active');
          if (activeSlideElement !== null) {
            const activeSlide = activeSlideElement.getAttribute('data-index');
            console.log(activeSlide);
            if (dataIndex.current !== activeSlide) {
              handleSlideChange(activeSlide);
            }
          } else {
            console.log("No active slide found");
          }
        }, 300);
      };

      swiperInstance.on('slideChange', slideChangeHandler);
      return () => {
        swiperInstance.off('slideChange', slideChangeHandler);
      };
    }
  }, []);


  return (
    <>
      <div>
        <div className=' w-full h-[100vh] bg-gray-800 relative overflow-hidden'>
          <div className='trailerImage w-full h-[100vh] absolute'>
            <img
              src={content.img}
              alt=''
              className='w-full h-[100vh] object-cover'
            />
          </div>

          <div className='w-full h-[40px] bottom-[0px] absolute z-[10] bg-[#f1f5f9] dark:bg-black'></div>
          <div className='w-full h-[300px] bottom-[40px] absolute z-[0] down-shadow'></div>
          <div
            className='flex flex-col-reverse md:flex-row justify-around md:justify-between items-center md:items-end w-full h-full p-8 md:p-16 relative'>
            <div className="content w-[90%] sm:w-[70%] md:max-w-[50%] mx-auto md:m-0">
              <p className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start font-bold text-white"
                 >{content.title}</p>
              <div className="flex justify-center md:justify-start gap-4 my-2">
                <a
                  className="rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white"
                  >{content.year}</a>
                <a
                  className="rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white"
                  >{content.category}</a>
                <a
                  className="rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white"
                  >{content.length}</a>
              </div>
              <p className=" text-sm md:text-md text-center md:text-start text-black dark:text-white"
                 id="coSliderMovieDescription">Four women — a travel blogger, her friend's biker granny, a makeshift
                mechanic and a young girl set to be married — ride to the highest motorable</p>
              <div className="actionButtonsWrap flex justify-center md:justify-start gap-4 my-2">
                <button
                  className="btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]">
                  <i className="fa-regular fa-heart text-[16px] md:text-[20px]"></i>
                </button>
                <button
                  className="btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]">
                  <i className="fa-solid fa-share-nodes text-[16px] md:text-[20px]"></i>
                </button>
                <button
                  className="btn rounded-[8px]  bg-[#C1141E] h-[48px] px-14 text-white border-none hover:bg-[#b4111b]">
                  <i className="fa-solid fa-play text-[16px] md:text-[20px] mr-3"></i> Play
                </button>
              </div>
            </div>
            <Swiper

              onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)} ref={swiperRef}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              autoplay={{ delay: 5000 }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              initialSlide={2}
              loop={true}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="swiper homepageCardSlider w-[45%] pt-8 md:pt-12"
            >
              <div className='swiper-wrapper' id='sliderSlides'>
                {fakeSliderData.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide w-[200px] rounded-[5px] overflow-hidden"
                               data-index={item.id} title={item.title}>
                    <img
                      src={item.lThumb}
                      alt={item.title}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>

          </div>

        </div>
      </div>
    </>
  );
};

export default CoverflowSlider;
