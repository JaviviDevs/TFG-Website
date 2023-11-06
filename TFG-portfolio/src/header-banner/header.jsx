import './header.css'


export function Header({title}) {

  return (
    <article className='header'>
      <h1 className='header-h1'>{title}</h1>
    </article> 
  )
}