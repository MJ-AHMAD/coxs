import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, GitPullRequest, Code, Bug, MessageSquare, FileText, BookOpen, Heart } from "lucide-react"

export default function ContributingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contributing to Cox's Bazar District Management</h1>
          <p className="text-lg text-gray-600">
            Thank you for your interest in contributing to this open source project! Here's how you can help.
          </p>
        </div>

        <Tabs defaultValue="code">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="code">Code Contributions</TabsTrigger>
            <TabsTrigger value="non-code">Non-Code Contributions</TabsTrigger>
            <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-500" />
                  Code Contributions
                </CardTitle>
                <CardDescription>Help improve the codebase by submitting pull requests</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Setting Up the Development Environment</h3>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                    <p># Clone the repository</p>
                    <p>git clone https://github.com/MJ-AHMAD/coxs-bazar-management.git</p>
                    <p>cd coxs-bazar-management</p>
                    <p># Install dependencies</p>
                    <p>npm install</p>
                    <p># Start the development server</p>
                    <p>npm run dev</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Pull Request Process</h3>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Fork the repository on GitHub</li>
                    <li>Create a new branch for your feature or bugfix</li>
                    <li>Make your changes and commit them with descriptive messages</li>
                    <li>Push your branch to your fork</li>
                    <li>Submit a pull request to the main repository</li>
                    <li>Address any feedback from maintainers</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Code Style</h3>
                  <p>
                    We use ESLint and Prettier to maintain code quality. Please ensure your code follows our style
                    guidelines by running:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-md font-mono text-sm mt-2">
                    <p>npm run lint</p>
                    <p>npm run format</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="non-code">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-500" />
                  Non-Code Contributions
                </CardTitle>
                <CardDescription>There are many ways to contribute without writing code</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-500" />
                      Documentation
                    </h3>
                    <p>Help improve our documentation by fixing typos, adding examples, or clarifying instructions.</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Bug className="h-5 w-5 text-red-500" />
                      Bug Reports
                    </h3>
                    <p>Submit detailed bug reports to help us identify and fix issues.</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-purple-500" />
                      Translations
                    </h3>
                    <p>Help translate the project into different languages to make it more accessible.</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <GitPullRequest className="h-5 w-5 text-orange-500" />
                      Feature Requests
                    </h3>
                    <p>Suggest new features or improvements that would enhance the project.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guidelines">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-amber-500" />
                  Contribution Guidelines
                </CardTitle>
                <CardDescription>Please follow these guidelines when contributing to the project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Code of Conduct</h3>
                  <p>
                    We expect all contributors to adhere to our Code of Conduct. Please read it before participating.
                  </p>
                  <p className="mt-2">
                    <Link href="/code-of-conduct" className="text-blue-600 hover:underline">
                      Read our Code of Conduct
                    </Link>
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Commit Messages</h3>
                  <p>We follow the conventional commits specification for our commit messages:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>
                      <code>feat:</code> for new features
                    </li>
                    <li>
                      <code>fix:</code> for bug fixes
                    </li>
                    <li>
                      <code>docs:</code> for documentation changes
                    </li>
                    <li>
                      <code>style:</code> for formatting changes
                    </li>
                    <li>
                      <code>refactor:</code> for code refactoring
                    </li>
                    <li>
                      <code>test:</code> for adding or updating tests
                    </li>
                    <li>
                      <code>chore:</code> for maintenance tasks
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Issue and Pull Request Templates</h3>
                  <p>
                    Please use our templates when creating issues and pull requests to ensure all necessary information
                    is provided.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Getting Help</h3>
                  <p>If you need help with your contribution, you can:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Join our Discord community</li>
                    <li>Ask questions in GitHub Discussions</li>
                    <li>
                      Contact the maintainer at{" "}
                      <a href="mailto:mjahmad2024@outlook.com" className="text-blue-600 hover:underline">
                        mjahmad2024@outlook.com
                      </a>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Contribute?</h2>
          <p className="mb-6">
            We welcome contributions from developers of all experience levels. Don't hesitate to get involved!
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/MJ-AHMAD"
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Link>
            <Link
              href="https://github.com/Sponsors/MJ-AHMAD"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-800 rounded-md hover:bg-gray-50 transition-colors"
            >
              <Heart className="h-5 w-5 text-red-500" />
              Sponsor Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
