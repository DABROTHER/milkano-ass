export interface DropDownProps {
    data?: ExploreBlock[]
    defaultValue: ExploreBlock
    onChange: (value: ExploreBlock) => void
    className?: string
    hoverDropdown?: boolean
    isRatio?: boolean
    isCheckBox?: boolean
    children?: React.ReactNode
    isSearch?: boolean
  }

export interface ExploreBlock {
  id: string
  name: string
}
  