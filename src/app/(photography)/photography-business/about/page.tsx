import { Camera, Heart, Award, Users, MapPin, Phone, Mail, Instagram, Clock, CheckCircle, Star } from 'lucide-react'
import Breadcrumb from '../_components/Breadcrumb'

export default function PhotographyAboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Me' }]} />
      
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }} />
        </div>
        
        <div className="container text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
            Capturing life's precious moments with passion and artistry
          </p>
        </div>
      </section>

      {/* My Story */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">My Photography Journey</h2>
              <p className="text-lg text-muted mb-6">
                Photography has been my passion since I was a child, when my grandfather gave me my first 
                camera. What started as capturing family moments has evolved into a lifelong pursuit of 
                documenting life's most beautiful and meaningful experiences.
              </p>
              <p className="text-lg text-muted mb-6">
                After studying fine arts and photography in college, I spent several years working as a 
                photojournalist, which taught me to capture authentic moments and tell compelling stories 
                through images. This experience shaped my approach to wedding and portrait photography.
              </p>
              <p className="text-lg text-muted">
                Today, I specialize in wedding photography, family portraits, and special events, always 
                striving to create images that are both beautiful and meaningful. My goal is to capture 
                not just what you look like, but who you are.
              </p>
            </div>
            <div className="bg-surface rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">2005</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">First Camera</h3>
                    <p className="text-sm text-muted">Received my first camera from Grandpa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">2010</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Photography Degree</h3>
                    <p className="text-sm text-muted">Graduated with BFA in Photography</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">2015</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">First Wedding</h3>
                    <p className="text-sm text-muted">Shot my first wedding ceremony</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-accent">2020</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Full-Time Business</h3>
                    <p className="text-sm text-muted">Launched Capture Life Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Photography Philosophy</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              How I approach every session to create authentic, beautiful images
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Authentic Moments</h3>
              <p className="text-muted">I believe the best photos happen when people are being themselves. I create a relaxed, fun atmosphere that allows genuine emotions to shine through.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Artistic Vision</h3>
              <p className="text-muted">Every image is carefully composed and edited to be both technically excellent and artistically beautiful. I blend photojournalism with fine art photography.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent-2">Personal Connection</h3>
              <p className="text-muted">I take the time to get to know my clients before the session. Understanding your story helps me capture images that truly represent you and your relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Specialize In</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              From intimate elopements to grand celebrations, I capture all types of special moments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Wedding Photography</h3>
              <p className="text-muted mb-6">
                I specialize in capturing the full story of your wedding day, from the quiet moments of 
                preparation to the joyous celebration. My approach combines documentary-style coverage 
                with artistic portraits.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Full-day coverage</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Engagement sessions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Wedding albums</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Online gallery</span>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Portrait Photography</h3>
              <p className="text-muted mb-6">
                Whether it's family portraits, senior photos, or professional headshots, I create 
                beautiful images that capture your personality and tell your story. Sessions are 
                relaxed and fun, resulting in natural, authentic photos.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Family portraits</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Senior sessions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Professional headshots</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Maternity & newborn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What My Clients Say</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Don't just take my word for it - hear from the people I've had the privilege to photograph
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted mb-4">
                "Sarah captured our wedding day perfectly. She made us feel so comfortable and the photos 
                are absolutely stunning. We couldn't be happier with how she documented our special day."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold text-sm">E</span>
                </div>
                <div>
                  <p className="font-semibold">Emily & David</p>
                  <p className="text-sm text-muted">Wedding Clients</p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-muted mb-4">
                "Our family portraits turned out amazing! Sarah has a way of making everyone feel relaxed 
                and natural. The photos perfectly capture our family's personality and relationships."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-accent font-semibold text-sm">M</span>
                </div>
                <div>
                  <p className="font-semibold">The Martinez Family</p>
                  <p className="text-sm text-muted">Portrait Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Ready to create beautiful memories? Get in touch to discuss your photography needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-accent">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted">Central Pennsylvania<br />Serving the entire region</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted">(717) 555-0124</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted">hello@capturelifephoto.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Instagram className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p className="text-muted">@capturelifephoto</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-accent mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Availability</h4>
                    <div className="text-muted">
                      <p>Weekdays: 9AM - 6PM</p>
                      <p>Weekends: Available</p>
                      <p>By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">15+ years of experience</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Professional equipment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Quick turnaround times</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Online proofing gallery</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Print and digital packages</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3" />
                  <span className="text-muted">Travel throughout PA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
