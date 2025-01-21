import React from 'react'
import { DotButton, useDotButton } from './components conoor/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './components conoor/EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { slide } from './constants'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'

export default function EmblaCarousel({slide}) {
  const [emblaRef,emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:3000})])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
  useDotButton(emblaApi)

const {
  prevBtnDisabled,
  nextBtnDisabled,
  onPrevButtonClick,
  onNextButtonClick
} = usePrevNextButtons(emblaApi)

  // const scrollPrev = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollPrev()
  // }, [emblaApi])

  // const scrollNext = useCallback(() => {
  //   if (emblaApi) emblaApi.scrollNext()
  // }, [emblaApi])

  return (
    <div className="embla w-[90%] mx-auto my-[30px]" >
      <div className='embla__viewport' ref={emblaRef}>
      <div className="embla__container ">
        {slide.map((slide,index)=>{
          return <div key={index} className="mx-2 embla__slide overflow-hidden flex w-full h-full flex-shrink-0 rounded-[40px] select-none max-lg:flex-col ">
          {/* Image Section */}
          <div className="w-[65%] max-lg:h-[60%] overflow-hidden">
            <img alt={slide.description} loading="eager" key={index} className={`h-full w-full object-cover object-center block flex-grow-0 flex-shrink-0`} src={slide.imageUrl}/>
          </div>
          {/* Content Section */}
          <div className="p-4 flex flex-col justify-center items-center gap-8 text-card font-semibold w-[35%] bg-gray-200 max-lg:w-full max-lg:h-[40%]">
            <h3 className='font-bigilla text-[40px] text-[#000 font-thin]' >{slide.name}</h3>
            <p className='text-[18px] text-[#757575] font-gothic'>{slide.description}</p>
            <button className="mt-2 px-5 py-1 bg-[#b2872d] text-[16px] hover:bg-white hover:text-black hover:border text-white rounded-3xl uppercase">EXPLORE MORE</button>
          </div>
      
          </div>
        })}
        
      </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div> 
      </div>
    </div>
  )
}
