import ActedJobApplication from "@/components/email/acted-job-application"

export default function ActedApplicationPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Acted Job Application Template</h1>
        <p className="text-gray-600">
          Use this template to apply for the Project Development Manager position at Acted Bangladesh.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Download as PDF</button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Copy to Clipboard</button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Send via Email</button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg shadow-lg">
        <ActedJobApplication
          applicantName="Your Name"
          applicantEmail="your.email@example.com"
          applicantPhone="+880 1XXX XXXXXX"
          portfolioLink="https://yourportfolio.com"
          linkedInProfile="https://linkedin.com/in/yourprofile"
          githubProfile="https://github.com/yourusername"
        />
      </div>
    </div>
  )
}

