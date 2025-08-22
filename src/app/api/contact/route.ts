import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // For now, we'll just log the data since Resend API key isn't configured
    // In production, you would use the Resend API here
    console.log('Contact form submission:', validatedData)
    
    // TODO: Uncomment and configure when you have a Resend API key
    /*
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <noreply@yourdomain.com>',
      to: [process.env.CONTACT_TO || 'hello@braxcraft.com'],
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Subject:</strong> ${validatedData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message}</p>
      `,
    })
    
    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { message: 'Failed to send email. Please try again.' },
        { status: 500 }
      )
    }
    */
    
    // Return success response
    return NextResponse.json(
      { 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        success: true 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          message: 'Invalid form data. Please check your inputs.',
          errors: error.issues
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { message: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
