import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Server, Layers } from "lucide-react"

export default function DocumentationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Project Documentation</h1>
          <p className="text-lg text-gray-600">
            Comprehensive documentation for the Cox's Bazar District Management System
          </p>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-500" />
                  Project Overview
                </CardTitle>
                <CardDescription>Introduction to the Cox's Bazar District Management System</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">About the Project</h3>
                  <p>
                    The Cox's Bazar District Management System is an open-source platform designed to provide
                    comprehensive information and services for Cox's Bazar district. It aims to connect various sectors
                    and initiatives to create a unified management system that benefits residents, visitors, and
                    administrators.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Comprehensive hub system covering various sectors (Tourism, Education, Health, etc.)</li>
                    <li>Multi-language support (English, Bangla, Arabic)</li>
                    <li>Interactive maps and data visualization</li>
                    <li>Administrative dashboard for district management</li>
                    <li>Community engagement tools</li>
                    <li>News and updates section</li>
                    <li>Contact and feedback system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Technology Stack</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-1">Frontend</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Next.js (React Framework)</li>
                        <li>Tailwind CSS</li>
                        <li>shadcn/ui Components</li>
                        <li>TypeScript</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Backend</h4>
                      <ul className="list-disc list-inside text-sm">
                        <li>Next.js API Routes</li>
                        <li>Server Actions</li>
                        <li>Database Integration</li>
                        <li>Authentication System</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
                  <p>
                    To get started with the project, visit our{" "}
                    <Link href="/contributing" className="text-blue-600 hover:underline">
                      Contributing Guide
                    </Link>{" "}
                    for setup instructions and development guidelines.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5 text-purple-500" />
                  System Architecture
                </CardTitle>
                <CardDescription>Technical architecture and design patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Architecture Overview</h3>
                  <p className="mb-4">
                    The Cox's Bazar District Management System follows a modern web application architecture based on
                    Next.js, utilizing both client and server components for optimal performance and user experience.
                  </p>

                  <div className="border p-4 rounded-md bg-gray-50">
                    <pre className="text-xs overflow-auto">
                      {`┌─────────────────────────────────────┐
│           Client Browser             │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│           Next.js Frontend          │
│  ┌─────────────────────────────┐    │
│  │     React Components        │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │     Server Components       │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │     Client Components       │    │
│  └─────────────────────────────┘    │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│           API Layer                 │
│  ┌─────────────────────────────┐    │
│  │     Next.js API Routes      │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │     Server Actions          │    │
│  └─────────────────────────────┘    │
└───────────────┬─────────────────────┘
                │
┌───────────────▼─────────────────────┐
│           Data Layer                │
│  ┌─────────────────────────────┐    │
│  │     Database                │    │
│  └─────────────────────────────┘    │
│  ┌─────────────────────────────┐    │
│  │     External APIs           │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Component Structure</h3>
                  <p>The application is organized into the following key components:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>
                      <strong>Hub Pages:</strong> Specialized sections for different district sectors
                    </li>
                    <li>
                      <strong>Shared Components:</strong> Reusable UI elements across the application
                    </li>
                    <li>
                      <strong>Layout Components:</strong> Structure and navigation elements
                    </li>
                    <li>
                      <strong>Server Actions:</strong> Backend functionality for data processing
                    </li>
                    <li>
                      <strong>API Routes:</strong> Endpoints for data access and manipulation
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Data Flow</h3>
                  <p>The application follows a unidirectional data flow pattern:</p>
                  <ol className="list-decimal list-inside space-y-2 mt-2">
                    <li>User interactions trigger events in client components</li>
                    <li>Events call server actions or API routes</li>
                    <li>Server processes requests and interacts with the database</li>
                    <li>Data is returned to the client</li>
                    <li>UI is updated to reflect the new state</li>
                  </ol>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-500" />
                  API Documentation
                </CardTitle>
                <CardDescription>Reference for available API endpoints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">API Overview</h3>
                  <p>
                    The Cox's Bazar District Management System provides a set of API endpoints for accessing and
                    manipulating data. These endpoints are implemented using Next.js API routes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                  <p className="mb-2">
                    Most API endpoints require authentication. Include an authorization header with a valid token:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                    <p>Authorization: Bearer {"{your-token}"}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Available Endpoints</h3>

                  <div className="space-y-4">
                    <div className="border p-4 rounded-md">
                      <h4 className="font-medium mb-2">GET /api/logs</h4>
                      <p className="text-sm mb-2">Retrieves system logs</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Parameters:</p>
                          <ul className="list-disc list-inside">
                            <li>page: Page number (default: 1)</li>
                            <li>limit: Items per page (default: 10)</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Response:</p>
                          <p>Array of log entries</p>
                        </div>
                      </div>
                    </div>

                    <div className="border p-4 rounded-md">
                      <h4 className="font-medium mb-2">POST /api/contact-logs</h4>
                      <p className="text-sm mb-2">Creates a new contact log entry</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Request Body:</p>
                          <ul className="list-disc list-inside">
                            <li>name: User's name</li>
                            <li>email: User's email</li>
                            <li>message: Contact message</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium">Response:</p>
                          <p>Created log entry</p>
                        </div>
                      </div>
                    </div>

                    {/* Additional endpoints would be documented here */}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Error Handling</h3>
                  <p>API errors are returned with appropriate HTTP status codes and a JSON response containing:</p>
                  <ul className="list-disc list-inside mt-2">
                    <li>error: Error message</li>
                    <li>statusCode: HTTP status code</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-red-500" />
                  Deployment Guide
                </CardTitle>
                <CardDescription>Instructions for deploying the application</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Deployment Options</h3>
                  <p>
                    The Cox's Bazar District Management System can be deployed using various methods. We recommend using
                    Vercel for the simplest deployment experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Deploying to Vercel</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Fork the repository on GitHub</li>
                    <li>Create a Vercel account if you don't have one</li>
                    <li>Import your forked repository in Vercel</li>
                    <li>Configure environment variables</li>
                    <li>Deploy the application</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Environment Variables</h3>
                  <p className="mb-2">The following environment variables are required for deployment:</p>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                    <p># Database</p>
                    <p>DATABASE_URL=your_database_connection_string</p>
                    <p># Authentication</p>
                    <p>NEXTAUTH_SECRET=your_nextauth_secret</p>
                    <p>NEXTAUTH_URL=your_deployment_url</p>
                    <p># Other services</p>
                    <p>API_KEY=your_api_key</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Manual Deployment</h3>
                  <p className="mb-2">For manual deployment to your own server:</p>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                    <p># Build the application</p>
                    <p>npm run build</p>
                    <p># Start the production server</p>
                    <p>npm start</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
          <p className="mb-6">
            If you need additional assistance, feel free to reach out to the project maintainers or join our community.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/MJ-AHMAD/issues"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition-colors"
            >
              Open an Issue
            </Link>
            <Link
              href="mailto:mjahmad2024@outlook.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Maintainer
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
