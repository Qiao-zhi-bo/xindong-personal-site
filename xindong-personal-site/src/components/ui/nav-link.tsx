import * as React from 'react'
import { cn } from '../../lib/utils'

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean
  children: React.ReactNode
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          'text-sm transition-colors',
          active
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground',
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
NavLink.displayName = 'NavLink'

export { NavLink }
