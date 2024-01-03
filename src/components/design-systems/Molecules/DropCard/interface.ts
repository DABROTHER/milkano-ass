import { Route } from "../../../../utils/routes"

export interface DropCardProps {
  className?: string
  title: string
  children?: React.ReactNode
  drop: DropList[]
  ROUTES:Route[]
}
export interface DropList {
  to: string
  name:string
}