export default function InvestorOpportunity() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Exclusive Investment Opportunity</h1>
          <p className="text-xl text-gray-600">Cox's Bazar District Management Platform</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-12">
          <div className="bg-blue-600 px-6 py-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Seeking One Strategic Investor</h2>
            <p className="text-lg opacity-90">
              Join us in transforming how Cox's Bazar district is managed, promoted, and developed
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">About The Project</h3>
              <p className="mb-4">
                The Cox's Bazar District Management Platform is a comprehensive digital ecosystem designed to connect
                and streamline all aspects of district management, from tourism and education to economic development,
                climate initiatives, and social programs.
              </p>

              <p className="mb-6">
                Our platform is already in advanced development stages. We're seeking a single investor to help us
                complete the final setup and launch the platform to the public.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Highlights</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Limited Opportunity:</strong> Seeking only one investor for this project
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Advanced Development:</strong> Platform is already built with multiple hubs and features
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Quick Launch:</strong> Investment will be used for final setup and immediate launch
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Guaranteed Returns:</strong> Structured profit-sharing model with priority returns
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold mr-2">✓</span>
                  <span>
                    <strong>Strategic Position:</strong> Be part of transforming Bangladesh's premier tourist
                    destination
                  </span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Tourist Hub</h4>
                  <p className="text-sm text-gray-600">Comprehensive tourism information and services</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Education Hub</h4>
                  <p className="text-sm text-gray-600">Educational resources and institution management</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Economic Hub</h4>
                  <p className="text-sm text-gray-600">Business opportunities and economic development</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Climate Hub</h4>
                  <p className="text-sm text-gray-600">Environmental initiatives and climate data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Social Initiatives</h4>
                  <p className="text-sm text-gray-600">Community programs and social development</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900">Administrative Tools</h4>
                  <p className="text-sm text-gray-600">District management and governance features</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">Investment Benefits</h3>
              <p className="mb-4">As our exclusive investor, you will receive:</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">•</span>
                  <span>Priority profit distribution with guaranteed minimum returns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">•</span>
                  <span>Recognition as the founding investor of the platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">•</span>
                  <span>Input on strategic decisions and platform development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 font-bold mr-2">•</span>
                  <span>Opportunity to expand the model to other districts in Bangladesh</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Express Your Interest</h3>
              <p className="mb-4">
                This is a limited opportunity for one investor only. To express your interest or learn more about this
                investment opportunity, please contact us directly:
              </p>
              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Email:</strong> t-ally@outlook.com
                </p>
                <p>
                  <strong>Phone:</strong> +880 1336221217
                </p>
                <p>
                  <strong>Contact Person:</strong> MJ Ahmad, Project Director
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Cox's Bazar District Management Platform</p>
        </div>
      </div>
    </div>
  )
}
