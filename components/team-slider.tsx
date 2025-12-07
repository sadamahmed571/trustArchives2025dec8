"use client"

import { useState, useEffect, useCallback } from "react"
import { getTeamMembers } from "@/lib/data"

export function TeamSlider() {
  const members = getTeamMembers()
  const [currentIndex, setCurrentIndex] = useState(3) // Start at index 3 as per original JS
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % members.length)
  }, [members.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length)
  }, [members.length])

  const goToIndex = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 4000)
    }
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const getItemStyle = (index: number) => {
    let offset = index - currentIndex

    if (offset > members.length / 2) {
      offset = offset - members.length
    } else if (offset < -members.length / 2) {
      offset = offset + members.length
    }

    const absOffset = Math.abs(offset)
    const sign = Math.sign(offset)

    let translateX = offset * 220
    const translateZ = -absOffset * 200
    const rotateY = -sign * Math.min(absOffset * 60, 60)
    let opacity = 1 - absOffset * 0.2
    const scale = 1 - absOffset * 0.1
    const zIndex = 100 - Math.floor(absOffset)

    if (absOffset > 3) {
      opacity = 0
      translateX = sign * 800
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
    }
  }

  return (
    <section className="slider-section">
      <div className="container">
        <h2 className="slider-title">
          <i className="fa-solid fa-users-viewfinder"></i> تعرف على أعضاء فريق الأرشيف
        </h2>
        <div className="coverflow-wrapper">
          <div className="coverflow-container">
            <div className="coverflow" id="coverflow">
              {members.map((member, index) => {
                const isActive = index === currentIndex
                return (
                  <div
                    className={`coverflow-item ${isActive ? "active" : ""}`}
                    key={member.id}
                    style={getItemStyle(index)}
                    onClick={() => goToIndex(index)}
                  >
                    <div className="cover">
                      <img src={member.image || "/placeholder.svg"} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h3 className="member-name">{member.name}</h3>
                      <div className="member-stats">
                        <span>
                          <span className="stat3-value">{member.role}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <button
              className="nav-button prev"
              id="prevBtn"
              onClick={() => {
                prevSlide()
                setIsAutoPlaying(false)
              }}
            >
              <i className="fas fa-angle-double-right"></i>
            </button>
            <button
              className="nav-button next"
              id="nextBtn"
              onClick={() => {
                nextSlide()
                setIsAutoPlaying(false)
              }}
            >
              <i className="fas fa-angle-double-left"></i>
            </button>

            <div className="dots-container" id="dots">
              {members.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? "active" : ""}`}
                  onClick={() => goToIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
