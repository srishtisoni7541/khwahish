import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

const TWEEN_FACTOR_BASE = 0.52

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max)

const TestimonialCarousel = (props) => {
  const { slides, options } = props
  // console.log(slides)
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number')
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, eventName) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = eventName === 'scroll'

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.slideRegistry[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress)
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress)
              }
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, 0.9, 1).toString()
        console.log(scale)
        const tweenNode = tweenNodes.current[slideIndex]
        tweenNode.style.transform = `scale(${scale})`
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale)
  }, [emblaApi, tweenScale])
console.log(slides)
  return (
    <div className="embla w-full">
      <div className="embla__viewport " ref={emblaRef}>
        <div className="embla__container md:h-[500px]">
        {slides.map((slide,index) => (
            <div className="embla__slide flex flex-col max-w-[88%]  md:flex-grow-1 md:flex-shrink-1 md:basis-2/3 lg:basis-1/3" key={index}>

              <div className="embla__slide__number  gap-4 flex-1 flex-col justify-between bg-white">

                  <h4 className='
                  after:rotate-45 after:skew-x-[9deg] after:skew-y-[9deg] after:w-[15px] after:h-[15px] after:bg-white after:absolute after:bottom-0 after:left-12 after:translate-y-[58%] after:border-r after:border-b after:border-l-0 after:border-t-[#000] after:border-r-[#000] after:border-b-[#000] after:border-l-[#000]

                  relative flex justify-center items-center px-8 h-full border border-black border-solid rounded-3xl
                  
                  max-w-[1280px] text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-500 md:max-w-[80%]
                  '> {slide.comment}</h4>

                  <div className='px-5 py-1 w-full flex gap-4'>
                <img className='rounded-full h-20' src={slide.imageUrl}/>
                <div className='flex flex-col justify-center gap-1'>
                  <h2 className='text-lg text-[#B2872D]'>
                    {slide.name}
                  </h2>
                  <span className='max-w-[1280px] text-center text-sm font-normal leading-[1.8] tracking-[1.3px] text-gray-600 md:max-w-[80%]'>{slide.profession}</span>
                </div>
              </div>

              </div>

              
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default TestimonialCarousel
