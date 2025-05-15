import { Lightbulb, Target, HeadphonesIcon } from "lucide-react"

interface FeatureSectionProps {
  icon: string
  title: string
  description: string
}

export default function FeatureSection({ icon, title, description }: FeatureSectionProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-700">
        {icon === "precision" && <Target className="h-8 w-8" />}
        {icon === "innovation" && <Lightbulb className="h-8 w-8" />}
        {icon === "support" && <HeadphonesIcon className="h-8 w-8" />}
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
