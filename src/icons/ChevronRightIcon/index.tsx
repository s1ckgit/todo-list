import { SVGProps } from "react"

const ChevronRight = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg 
        {...props} 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="1" 
        stroke-linecap="round" 
        stroke-linejoin="miter"
    >
        <polyline points="11 17 16 12 11 7"></polyline>
    </svg>
  )
}
export default ChevronRight