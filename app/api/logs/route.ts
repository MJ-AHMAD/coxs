import { type NextRequest, NextResponse } from "next/server"
import { getContactLogs } from "@/app/actions/contact"

export async function GET(request: NextRequest) {
  // This should be protected with authentication in a real application
  try {
    const logs = await getContactLogs()

    if (logs.length === 0) {
      return new NextResponse("No logs found", {
        status: 404,
      })
    }

    // Format logs for display
    const formattedLogs = logs
      .map(
        (log) => `
==========================================================
TIMESTAMP: ${log.timestamp}
NAME: ${log.name}
EMAIL: ${log.email}
INQUIRY TYPE: ${log.inquiryType}
MESSAGE: ${log.message}
==========================================================
`,
      )
      .join("\n")

    return new NextResponse(formattedLogs, {
      headers: {
        "Content-Type": "text/plain",
      },
    })
  } catch (error) {
    console.error("Error reading logs:", error)
    return new NextResponse("Error reading logs", {
      status: 500,
    })
  }
}
