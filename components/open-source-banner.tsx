import Link from "next/link"
import { Github, Heart, Coffee } from "lucide-react"

export function OpenSourceBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Cox's Bazar District Management</h2>
            <p className="text-sm text-blue-100">An open source project for comprehensive district management</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/MJ-AHMAD"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
            <Link
              href="https://github.com/Sponsors/MJ-AHMAD"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              <Heart className="h-4 w-4 text-red-300" />
              Sponsor
            </Link>
            <Link
              href="https://ko-fi.com/mjahmad"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors"
            >
              <Coffee className="h-4 w-4 text-amber-300" />
              Ko-fi
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
