import spinner from '../assets/spinner.gif'

export const Spinner = () => {
  return (
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '80px',
        margin: 'auto',
        display: 'block',
      }}
    />
  )
}
