import { cn } from "@/app/_lib/utils"

export interface SectionProps {
  children: React.ReactNode
  background?: "primary" | "secondary" | "light" | "white"
  title?: string
  subtitle?: string
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  contentClassName?: string
}

function Section({
  children,
  background = "white",
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  contentClassName,
}: SectionProps) {
  const bgClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    light: "bg-gray-50",
    white: "bg-white",
  }

  return (
    <section
      className={cn(
        "py-16",
        bgClasses[background],
        className
      )}
    >
      <div className="container mx-auto px-4">
        {title && (
          <h2 
            className={cn(
              "text-3xl font-bold text-center mb-2",
              background === "primary" || background === "secondary" ? "text-white" : "text-gray-900",
              titleClassName
            )}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p 
            className={cn(
              "text-xl text-center max-w-3xl mx-auto mb-10",
              background === "primary" || background === "secondary" ? "text-white/80" : "text-gray-600",
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  )
}

export { Section } 