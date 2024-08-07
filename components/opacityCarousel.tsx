import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import Image from 'next/image'

import './embla.css'

const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

function slideImage(props: {src: string}) {
    return (
        <div style={{ objectFit: 'contain', width: "10rem", height: "fit-content"}}>
            <Image
                src={props.src}
                alt='photo'
                fill
            ></Image>
        </div>
    )
}

const EmblaCarousel = () => {

  /* Carousel Settings. */
  const options: EmblaOptionsType = { loop: true }
  const SLIDE_COUNT = 5
  const slides = Array.from(Array(SLIDE_COUNT).keys())

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
  const tweenFactor = useRef(0)

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenOpacity = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
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
          const opacity = numberWithinRange(tweenValue, 0, 1).toString()
          emblaApi.slideNodes()[slideIndex].style.opacity = opacity
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenFactor(emblaApi)
    tweenOpacity(emblaApi)
    emblaApi
      .on('reInit', setTweenFactor)
      .on('reInit', tweenOpacity)
      .on('scroll', tweenOpacity)
      .on('slideFocus', tweenOpacity)
  }, [emblaApi, tweenOpacity])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
            <div className="embla__slide">
                <Image
                    src="/images/JaneCambell/slide1.png"
                    alt='Slide1'
                    width={1200}
                    height={800}
                >
                </Image>
            </div>
            <div className="embla__slide">
                <Image
                    src="/images/JaneCambell/slide2.png"
                    alt='Slide2'
                    width={1200}
                    height={800}
                >
                </Image>
            </div>
            <div className="embla__slide">
                <Image
                    src="/images/JaneCambell/slide3.png"
                    alt='Slide3'
                    width={1200}
                    height={800}
                >
                </Image>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
