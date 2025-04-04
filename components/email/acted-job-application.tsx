import type React from "react"

interface ActedJobApplicationProps {
  applicantName: string
  applicantEmail: string
  applicantPhone: string
  portfolioLink?: string
  linkedInProfile?: string
  githubProfile?: string
}

export const ActedJobApplication: React.FC<ActedJobApplicationProps> = ({
  applicantName = "Md Jafor Ahmad",
  applicantEmail = "mjahmad2024@outlook.com",
  applicantPhone = "+880 1336 221217",
  websiteLink = "https://tallybd.vercel.app/",
  linkedInProfile = "https://linkedin.com/in/jafor-ahmad",
  githubProfile = "https://github.com/MJ-AHMAD",
}) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="email-template max-w-4xl mx-auto p-8 bg-white text-gray-800">
      <div className="email-header mb-8">
        <div className="sender-info mb-4">
          <p className="font-bold text-lg">{applicantName}</p>
          <p>{applicantEmail}</p>
          <p>{applicantPhone}</p>
          {portfolioLink && (
            <p>
              Portfolio:{" "}
              <a href={portfolioLink} className="text-blue-600 hover:underline">
                {portfolioLink}
              </a>
            </p>
          )}
        </div>
        <div className="recipient-info">
          <p>Human Resources Department</p>
          <p>Acted Bangladesh</p>
          <p>Email: jobs@acted.org</p>
        </div>
        <p className="mt-4">{currentDate}</p>
      </div>

      <div className="email-subject mb-6">
        <p className="font-bold text-xl">
          Subject: Application for Project Development Manager Position (Reference: PDM/BGD)
        </p>
      </div>

      <div className="email-body space-y-4">
        <p>Dear Hiring Manager,</p>

        <p>
          I am writing to express my interest in the Project Development Manager position at Acted Bangladesh, as
          advertised on your official website. With a deep appreciation for Acted's 30-year commitment to humanitarian
          action and its triple mandate as a humanitarian, environmental, and development actor, I am eager to
          contribute to your mission of building a 3ZERO world.
        </p>

        <p>
          Having closely followed Acted's impactful work in Bangladesh since 2018, particularly your comprehensive
          response to the Rohingya refugee crisis, I am inspired by your five-pillar strategy encompassing Emergency
          response, WASH systems, Information Management, CSO support, and green economy practices. I believe my skills
          in web development and digital solutions can significantly enhance these efforts.
        </p>

        <p>
          As a web developer with expertise in creating comprehensive digital platforms, I have successfully designed
          and implemented websites that effectively communicate organizational missions and facilitate program
          management. My most recent project involves developing a large-scale website focused on Cox's Bazar region,
          which aligns perfectly with Acted's operational areas in Bangladesh.
        </p>

        <p>
          While I am still developing my spoken English fluency, I am highly proficient in using advanced technological
          tools including Microsoft suite, content management systems, and various digital platforms. My technical
          expertise allows me to overcome communication barriers and deliver exceptional results in multicultural
          environments. I excel at problem-solving and can quickly adapt to find solutions to complex challenges.
        </p>

        <p>Regarding the key responsibilities of the position, I offer the following:</p>

        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>Positioning and Fundraising:</strong> I can develop digital tools to enhance context analysis,
            support strategy visualization, and create compelling digital presentations for donor engagement.
          </li>
          <li>
            <strong>Grant Management:</strong> I can implement systems to streamline contract follow-up, reporting
            processes, and partner communications.
          </li>
          <li>
            <strong>Management and Internal Coordination:</strong> I can develop internal platforms to improve team
            coordination and information sharing.
          </li>
          <li>
            <strong>External Communication:</strong> I can significantly enhance Acted's digital presence through
            innovative web solutions that effectively communicate your impact and mission.
          </li>
        </ul>

        <p>My technical skills include:</p>
        <ul className="list-disc pl-8 space-y-2">
          <li>Full-stack web development (React, Next.js, Node.js)</li>
          <li>Database management and information systems</li>
          <li>Data visualization and reporting tools</li>
          <li>Content management systems</li>
          <li>Digital collaboration platforms</li>
          <li>UI/UX design focused on accessibility and user engagement</li>
        </ul>

        <p>
          I am particularly excited about the opportunity to apply my web development expertise to strengthen Acted's
          digital infrastructure, which I believe is crucial for effective humanitarian response in today's connected
          world. The website I am developing for the Cox's Bazar region could serve as a powerful tool for Acted's
          operations, enhancing visibility, coordination, and impact measurement.
        </p>

        <p>
          I am prepared to commit fully to Acted's mission and am comfortable with the working conditions outlined,
          including accommodation in Acted guesthouses and the required travel. I am ready to leverage my technical
          skills to overcome any communication challenges and contribute meaningfully to your team.
        </p>

        <p>
          My comprehensive CV is attached for your review. I would welcome the opportunity to discuss how my technical
          expertise could benefit Acted's important work in Bangladesh.
        </p>

        <p>
          Thank you for considering my application. I look forward to the possibility of contributing to Acted's
          impactful work.
        </p>

        <p className="mt-6">Sincerely,</p>
        <p className="font-bold">{applicantName}</p>

        <div className="social-links mt-8 pt-4 border-t border-gray-200">
          <p className="font-medium mb-2">Connect with me:</p>
          <div className="flex space-x-4">
            {portfolioLink && (
              <a href={websiteLink} className="text-blue-600 hover:underline">
                Website
              </a>
            )}
            {linkedInProfile && (
              <a href={linkedInProfile} className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
            {githubProfile && (
              <a href={githubProfile} className="text-blue-600 hover:underline">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActedJobApplication

