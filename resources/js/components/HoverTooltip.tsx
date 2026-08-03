import { useState } from 'react'

interface HoverTooltipProps {
  children: React.ReactNode
  definition: string
}

export default function HoverTooltip({ children, definition }: HoverTooltipProps) {
  const [show, setShow] = useState(false)

  return (
    <span 
      className="relative inline-block border-b-2 border-dashed border-[#9568FF] cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      style={{ color: '#372466', fontWeight: 600 }}
    >
      {children}
      {show && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 rounded-xl bg-white text-base shadow-xl text-left"
              style={{ border: '1px solid #E8E6F0', color: '#333333', fontWeight: 400, fontFamily: 'Poppins, sans-serif' }}>
          {definition}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-3 h-3 bg-white border-b border-r border-[#E8E6F0] rotate-45" />
        </span>
      )}
    </span>
  )
}
