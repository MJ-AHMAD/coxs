import ActedJobApplication from "@/components/email/acted-job-application"

export default function ActedApplicationPage() {
  return (
    <div className="container mx-auto py-8">

      <div className="border border-gray-300 rounded-lg shadow-lg">
        <ActedJobApplication
          applicantName="Md Jafor Ahmad"
          applicantEmail="mjahmad2024@outlook.com"
          applicantPhone="+880 1336 221217"
          websiteLink="https://coxs.vercel.app/"
          linkedInProfile="https://linkedin.com/in/jafor-ahmad"
          githubProfile="https://github.com/MJ-AHMAD"
        />
      </div>
    </div>
  )
}

