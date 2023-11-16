import { Metadata } from "next"

interface HomeLayoutProps {
  children: React.ReactNode
}
export const metadata: Metadata = {
  title: "TV Shows",
  description: "All TV shows grouped by genre",
}
export default function HomeLayout({ children }: HomeLayoutProps) {
  return <div>{children}</div>
}
