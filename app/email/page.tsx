import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, FileText, Briefcase } from "lucide-react"

export default function EmailTemplatesPage() {
  const emailTemplates = [
    {
      id: "acted-application",
      title: "Acted Job Application",
      description: "Template for Project Development Manager position at Acted Bangladesh",
      icon: Briefcase,
      category: "Job Applications",
    },
    // You can add more email templates here in the future
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Email Templates</h1>
        <p className="text-gray-600">
          Browse and use our collection of professional email templates for various purposes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emailTemplates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader className="bg-muted pb-2">
              <div className="flex justify-between items-start">
                <template.icon className="h-8 w-8 text-primary" />
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{template.category}</span>
              </div>
              <CardTitle className="mt-2">{template.title}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="h-24 overflow-hidden text-sm text-gray-500">
                <p>
                  Professional template for job application with customizable fields for personal information and
                  portfolio links.
                </p>
              </div>
            </CardContent>
            <CardFooter className="border-t bg-muted/50 flex justify-between">
              <Button variant="ghost" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Preview
              </Button>
              <Link href={`/email/${template.id}`} passHref>
                <Button variant="default" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Use Template
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

