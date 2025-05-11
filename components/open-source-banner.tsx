<<<<<<< HEAD
export function OpenSourceBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 text-white py-3">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M16 18 22 12 16 6"></path>
            <path d="M8 6 2 12 8 18"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
          <span>Open Source Innovation Hub - Join the Knowledge Revolution</span>
          <a href="https://github.com/MJ-AHMAD" className="underline ml-2 hover:text-blue-100">
            Contribute on GitHub
          </a>
        </p>
=======
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
>>>>>>> 2f4b40afb1bbd680c8044a43a587318f6c3c3c44
      </div>
    </div>
  )
}
