import React from "react"

export interface IHeader {
    navItems: Array<HeaderItem>
    Primary?: React.ReactElement
}

export interface HeaderItem {
    title: string
    path: string
    CustomComponent?: React.ReactElement
    CustomOnClick?: () => void
    isBtn?: boolean,
    id: string
}
