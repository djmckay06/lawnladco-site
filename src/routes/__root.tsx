import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Lawn Lad Co. | Innes Park Lawn Care & Renovations',
      },
      {
        name: 'description',
        content: 'Reliable lawn mowing, lawn care, renovations and professional equipment hire across Innes Park, Bargara and Headlands.',
      },
      {
        name: 'theme-color',
        content: '#0c2919',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
