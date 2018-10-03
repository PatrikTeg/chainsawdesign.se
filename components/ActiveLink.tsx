import { withRouter } from "next/router"

const ActiveLinkAtom: React.SFC<{ children: any; router?: any; href: string }> = ({ children, router, href }) => {
  const active = router.pathname === href

  return (
    <a href={href} className={active ? "active" : ""}>
      {children}
    </a>
  )
}

export const ActiveLink = withRouter(ActiveLinkAtom)

const AlbumLinkAtom: React.SFC<{ children: any; router?: any; href: string }> = ({ children, router, href }) => {
  const parts = href.split("/")
  const lastPart = parts[parts.length - 1]

  const active = router.query && router.query.key === lastPart

  return (
    <a href={href} className={active ? "active" : ""}>
      {children}
    </a>
  )
}

export const AlbumLink = withRouter(AlbumLinkAtom)
