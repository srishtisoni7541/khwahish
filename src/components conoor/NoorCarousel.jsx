import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'

const NoorCarousel = ({slides}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', slidesToScroll: 'auto' })


  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla mt-2 flex flex-col gap-4 w-full h-[600px] md:h-auto md:w-auto">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex gap-4">
          {slides.map((slide,index) => {
          return <img alt={slide.description} loading="eager" key={index} className={`h-full w-full object-cover object-center block flex-grow-0 flex-shrink-0 md:w-1/3`} src={slide.imageUrl}/>
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

export default NoorCarousel
