'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface ChatBubble {
  id: number
  text: string
  delay: number
}

const bubbles: ChatBubble[] = [
  {
    id: 1,
    text: "שלום בנות ויישר כח על הקבוצה. בזכותכן שינעתי כבר 4 פעמים חבילות לחיילים, ציוד ביגוד למשפחה שביתה נשרף ועוד. יישר כח!",
    delay: 0,
  },
  {
    id: 2,
    text: "היי! קוראים לי ליאור ואני הצטרפתי לקבוצה של ההתנדבות בתחילת המלחמה, מאז הלכתי למספר מקומות מבתי מלון ועד בייביסיטרים דרך הקבוצה וכבר כמה פעמים לבחורה עם שיתוק מוחין שהתפנתה מהאזור. האמא ביקשה למסור תודה ענקית על העשייה והיוזמה המבורכת שבזכותה מגיעות כל כך הרבה מתנדבות שמנעימות את זמנה בתקופה המאוד מאתגרת הזאת. ואני אישית רוצה להודות על הפלטפורמה הזאת שהופכת את ההתנדבות להרבה יותר קלה ונגישה❤️❤️ יוזמה מדהימה",
    delay: 300,
  },
]

export default function AnimatedChatBubbles() {
  const ref = useRef<HTMLDivElement>(null)
  const [shouldAnimate, setShouldAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="space-y-4">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          initial={{ opacity: 0, x: -50 }}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: bubble.delay / 1000,
          }}
          className="flex justify-start"
        >
          <div
            className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl"
            style={{
              backgroundColor: '#2B9B9E',
              color: 'white',
            }}
          >
            <p className="text-sm sm:text-base leading-relaxed">{bubble.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
