import './AnimatedLetters.scss'

const AnimatedLetters = ({ letterClass, nameArr, idx }) => {
  return (
    <span>
      {nameArr.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
