import type { SVGProps } from 'react'

type ProductFamilyIconProps = SVGProps<SVGSVGElement> & {
  code: string
}

const Ground = () => <path d="M10 49h44" />
const Grass = () => (
  <>
    <path d="M18 48c1-10 3-18 8-27 0 10 1 18 6 27" />
    <path d="M31 48c0-14 3-25 9-34-1 14 0 24 4 34" />
    <path d="M43 48c2-8 5-14 10-19-1 8-1 13-3 19" />
  </>
)

export function ProductFamilyIcon({ code, ...props }: ProductFamilyIconProps) {
  const key = code.trim().toUpperCase()
  const svgProps = {
    viewBox: '0 0 64 64',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    ...props,
  }

  switch (key) {
    case 'FEED':
      return (
        <svg {...svgProps}>
          <Ground /><Grass />
          <circle cx="22" cy="13" r="2.1" /><circle cx="31" cy="8" r="2.2" /><circle cx="40" cy="14" r="2.1" />
          <circle cx="27" cy="19" r="1.8" /><circle cx="36" cy="21" r="1.8" />
          <circle cx="20" cy="55" r="1.5" /><circle cx="29" cy="56" r="1.5" /><circle cx="38" cy="55" r="1.5" /><circle cx="47" cy="56" r="1.5" />
        </svg>
      )
    case 'GREEN':
      return (
        <svg {...svgProps}>
          <Ground /><Grass />
          <path d="M48 11l1.8 4.3L54 17l-4.2 1.7L48 23l-1.8-4.3L42 17l4.2-1.7L48 11Z" />
        </svg>
      )
    case 'ROOT':
      return (
        <svg {...svgProps}>
          <Ground /><Grass />
          <path d="M31 49c-1 5-4 8-8 12M36 49c0 5-1 8-4 13M41 49c2 4 5 7 9 10M26 50c-4 3-7 5-12 6M46 50c4 2 7 4 10 7" />
        </svg>
      )
    case 'HYDRATE':
      return (
        <svg {...svgProps}>
          <path d="M32 7c-6 9-10 14-10 20a10 10 0 0 0 20 0c0-6-4-11-10-20Z" />
          <path d="M37 24c0 4-2 7-5 8" />
          <Ground />
          <path d="M20 38v15m0 0-4-5m4 5 4-5M32 38v15m0 0-4-5m4 5 4-5M44 38v15m0 0-4-5m4 5 4-5" />
          <circle cx="14" cy="56" r="1.3" /><circle cx="28" cy="57" r="1.3" /><circle cx="40" cy="56" r="1.3" /><circle cx="51" cy="57" r="1.3" />
        </svg>
      )
    case 'REVIVE':
      return (
        <svg {...svgProps}>
          <Ground /><Grass />
          <path d="M12 25a22 22 0 0 1 37-9" /><path d="M48 9l2 8-8-1" />
          <path d="M52 30a22 22 0 0 1-36 18" /><path d="M17 55l-2-8 8 1" />
        </svg>
      )
    case 'PET PEE':
      return (
        <svg {...svgProps}>
          <circle cx="15" cy="25" r="4" /><circle cx="24" cy="19" r="3.5" /><circle cx="9" cy="18" r="3.5" />
          <circle cx="20" cy="33" r="3.5" /><path d="M10 35c3-6 10-7 14-1 3 4 0 9-5 9h-4c-5 0-8-4-5-8Z" />
          <path d="M42 49c0-11 2-20 7-28 0 11 1 19 5 28M34 49c1-8 3-14 7-19" />
          <Ground /><path d="M40 15c-4 5-6 8-6 11a6 6 0 1 0 12 0c0-3-2-6-6-11Z" />
        </svg>
      )
    case 'WEED':
      return (
        <svg {...svgProps}>
          <circle cx="32" cy="32" r="20" /><circle cx="32" cy="32" r="12" />
          <path d="M32 8v7M32 49v7M8 32h7M49 32h7" />
          <path d="M31 39c0-9 4-15 12-18-1 8-5 14-12 18Z" /><path d="M31 39c-2-7-6-11-12-13 1 7 5 11 12 13Z" />
        </svg>
      )
    case 'BARRIER':
      return (
        <svg {...svgProps}>
          <path d="M11 34c8-13 34-13 42 0" /><path d="M13 38h38" />
          <path d="M20 42v6M32 42v7M44 42v6" />
          <path d="M17 54l5-5m-5 0 5 5M42 54l5-5m-5 0 5 5" />
          <path d="M31 55c0-5 3-8 8-10-1 5-3 8-8 10Z" />
        </svg>
      )
    case 'GRUB':
      return (
        <svg {...svgProps}>
          <path d="M20 17c-7 2-11 9-8 15 2 5 7 6 12 5-5 3-7 8-4 13 3 5 10 6 14 1 3-4 2-8-1-11 6 2 12 0 14-5 3-6-1-13-7-15-7-3-13-1-20-3Z" />
          <path d="M18 21l7 5M14 29l9 3M23 41l8 3M35 22l-5 7M42 29l-8 3" />
          <circle cx="48" cy="16" r="7" /><circle cx="48" cy="16" r="2.5" />
          <path d="M48 5v4M48 23v4M37 16h4M55 16h4" />
        </svg>
      )
    case 'SHIELD':
      return (
        <svg {...svgProps}>
          <path d="M32 7 50 14v15c0 13-7 22-18 28-11-6-18-15-18-28V14L32 7Z" />
          <path d="M22 42c1-9 3-16 8-23 0 9 1 16 5 23M34 42c1-7 4-12 8-16-1 7-1 11-3 16" />
          <path d="M20 44h24" />
        </svg>
      )
    case 'DEFEND':
      return (
        <svg {...svgProps}>
          <path d="M32 7 50 14v15c0 13-7 22-18 28-11-6-18-15-18-28V14L32 7Z" />
          <path d="M20 43c1-9 3-16 8-23 0 9 1 16 5 23M32 43c2-7 4-12 8-16-1 7-1 11-3 16" />
          <circle cx="43" cy="20" r="5" />
          <path d="M43 11v4M43 25v4M34 20h4M48 20h4M37 14l3 3M46 23l3 3M49 14l-3 3M40 23l-3 3" />
        </svg>
      )
    default:
      return (
        <svg {...svgProps}>
          <Ground /><Grass />
        </svg>
      )
  }
}
