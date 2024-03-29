import { useState } from "react"

export const ReadMore = ( { id, text, wordsLimit = 40 } ) => {
  const wordsArray = text.split(' ')
  const introText = wordsArray.slice(0,wordsLimit).join(' ')
  const remainingText = wordsArray.slice(wordsLimit).join(' ')
  const longDescription = wordsArray.length > wordsLimit
  const [isOpen, setIsOpen] = useState(false)

  return(
    <p key={id} className="sm:text-left text-center">
      {introText}
      {!isOpen && longDescription && <span className="text-black dark:text-white">... </span>}
      {longDescription?
        <>
          <span className={isOpen? "text-black dark:text-white" : "hidden"}> {remainingText}</span>
          <span className="font-bold text-blue-600 dark:text-blue-400" role="button" onClick={() => setIsOpen(prev => !prev)}>
            {isOpen? " Show less" : "Read more"}
          </span>
        </>
      : ""}
    </p>
  )
}