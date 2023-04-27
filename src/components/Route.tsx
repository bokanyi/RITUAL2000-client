import { FC, ReactNode } from "react"
import { $path } from "../states/routes"
import useGlobal from "../hooks/useGlobal"

type Props = {
    path: string
    children: ReactNode
    hasAccess: boolean
}

export const Route: FC<Props> = ({path, children, hasAccess}) => {
    const currentPath = useGlobal($path)
    if (path != currentPath) return null
    return(
        <>{children}</>
    )
}