import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./buttonVariants" // <- import

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        buttonVariants({ variant, size, className }),
        variant === "bottom-bar" &&
        "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#09E7B6] after:transition-all after:duration-300 hover:after:w-full"
      )}
      {...props}
    />
  )
}

export { Button }
