"use server"

import { neon } from "@neondatabase/serverless"

// Define the type for the form data
type ContactFormData = {
  name: string
  email: string
  inquiryType: string
  message: string
  timestamp: string
}

// Initialize the Neon SQL client
const sql = neon(process.env.DATABASE_URL || "")

// Create the contact_logs table if it doesn't exist
async function ensureContactLogsTable() {
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS contact_logs (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        inquiry_type TEXT,
        message TEXT NOT NULL,
        timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `
    return true
  } catch (error) {
    console.error("Error creating contact_logs table:", error)
    return false
  }
}

export async function logContactSubmission(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const inquiryType = (formData.get("inquiryType") as string) || "general"
    const message = formData.get("message") as string
    const timestamp = new Date().toISOString()

    // Validate form data
    if (!name || !email || !message) {
      return { success: false, message: "Please fill in all required fields." }
    }

    // Create contact data object
    const contactData: ContactFormData = {
      name,
      email,
      inquiryType,
      message,
      timestamp,
    }

    // Ensure the table exists
    const tableExists = await ensureContactLogsTable()
    if (!tableExists) {
      throw new Error("Failed to create contact_logs table")
    }

    // Insert into database
    await sql`
      INSERT INTO contact_logs (name, email, inquiry_type, message, timestamp)
      VALUES (${name}, ${email}, ${inquiryType}, ${message}, ${timestamp})
    `

    // Log to console as well
    console.log("New contact form submission logged to database:", contactData)

    return {
      success: true,
      message: "Your message has been received. Our team will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Error logging contact form submission:", error)
    return {
      success: false,
      message: "There was an error submitting your message. Please try again later.",
    }
  }
}

// Function to retrieve logs (for admin use)
export async function getContactLogs() {
  try {
    // Ensure the table exists
    await ensureContactLogsTable()

    // Fetch logs from database
    const logs = await sql`
      SELECT * FROM contact_logs
      ORDER BY timestamp DESC
    `

    if (logs.length === 0) {
      return "No logs found"
    }

    // Format logs for display
    const formattedLogs = logs
      .map(
        (log) => `
==========================================================
TIMESTAMP: ${new Date(log.timestamp).toISOString()}
NAME: ${log.name}
EMAIL: ${log.email}
INQUIRY TYPE: ${log.inquiry_type}
MESSAGE: ${log.message}
==========================================================
`,
      )
      .join("\n")

    return formattedLogs
  } catch (error) {
    console.error("Error reading logs:", error)
    return "Error reading logs"
  }
}
