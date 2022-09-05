const RattingSelect = ({ select, selected, reverse }) => {
  const handleChange = (e) => {
    const newRating = +e.target.value
    select(newRating)
  }

  return (
    <ul className={`rating ${reverse && 'reverse'}`}>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}

RattingSelect.defaultProps = {
  reverse: false,
}

export default RattingSelect
