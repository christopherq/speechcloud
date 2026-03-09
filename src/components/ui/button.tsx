import * as React from "react"
import { cn } from "@/lib/utils"

const Slot = React.forwardRef<HTMLElement, any>(({ children, ...props }, ref) => {
  if (React.isValidElement(children)) return React.cloneElement(children, { ...props, ref } as any)
  return <span {...props} ref={ref}>{children}</span>
})
Slot.displayName = "Slot"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, ...props }, ref) => {
    const Comp: any = asChild ? Slot : "button"
    return <Comp className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      variant === "default" && "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      variant === "outline" && "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
      variant === "secondary" && "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
      size === "default" && "h-9 px-4 py-2",
      size === "sm" && "h-8 rounded-md px-3 text-xs",
      size === "lg" && "h-10 rounded-md px-8",
      className
    )} ref={ref} {...props} />
  }
)
Button.displayName = "Button"
export { Button }
