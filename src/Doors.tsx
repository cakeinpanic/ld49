import './Doors.css'

export const Doors = () => {
  return (
    <>
      <div className='door'>
        <div className='face'>
          <div className='right'></div>
        </div>
      </div>
      <div className='door'>
        <div className='face'>
          <div className='right'></div>
        </div>
      </div>
      <div className='door'>
        <div className='face'>
          <div className='right'></div>
        </div>
      </div>
      <div className='door'>
        <div className='face'>
          <div className='right'></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{display:'none'}}>
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
          </filter>
          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
          </filter>
          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
          </filter>
        </defs>
      </svg>
    </>
  )
}
