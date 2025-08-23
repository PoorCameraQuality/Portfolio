import { Camera, Award, Heart, Users, MapPin, Phone, Mail, Instagram } from 'lucide-react'
import Breadcrumb from '../_components/Breadcrumb'

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Me' }]} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent to-accent-2 py-20">
        <div className="container text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Passionate photographer dedicated to capturing life's most precious moments 
            with creativity, skill, and a genuine love for storytelling through images.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">My Photography Journey</h2>
              <div className="space-y-4 text-muted">
                <p>
                  Photography has been my passion since I first picked up a camera at age 12. 
                  What started as capturing family moments has evolved into a professional career 
                  spanning over 15 years of documenting life's beautiful stories.
                </p>
                <p>
                  I believe every moment has a story worth telling, whether it's the nervous excitement 
                  of a bride on her wedding day, the pure joy of a family celebrating together, or the 
                  quiet confidence of a business professional. My goal is to capture these authentic 
                  moments in a way that feels natural and timeless.
                </p>
                <p>
                  Based in Central Pennsylvania, I've had the privilege of working with hundreds of 
                  families, couples, and businesses, building lasting relationships and creating 
                  images that will be treasured for generations.
                </p>
              </div>
            </div>
            <div className="bg-surface rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2 text-accent">15+ Years Experience</h3>
              <p className="text-muted">Professional photography since 2009</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Photography Philosophy</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              The principles that guide my approach to every shoot
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Authentic Moments</h3>
              <p className="text-muted">
                I focus on capturing genuine emotions and real moments rather than overly posed shots. 
                The best photos happen when people are being themselves.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Artistic Vision</h3>
              <p className="text-muted">
                Every image is crafted with attention to composition, lighting, and artistic detail. 
                I blend technical skill with creative vision to create stunning photographs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Personal Connection</h3>
              <p className="text-muted">
                Building rapport with my clients is essential. When you're comfortable and relaxed, 
                your true personality shines through in the photos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Specialize In</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Areas where my experience and passion truly shine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Wedding Photography</h3>
              <p className="text-muted mb-4">
                From intimate ceremonies to grand celebrations, I document every precious moment 
                of your special day with a blend of photojournalistic and artistic approaches.
              </p>
              <ul className="text-muted space-y-2">
                <li>• Engagement sessions</li>
                <li>• Full wedding day coverage</li>
                <li>• Bridal portraits</li>
                <li>• Wedding albums</li>
              </ul>
            </div>
            
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Portrait Photography</h3>
              <p className="text-muted mb-4">
                Professional headshots, family portraits, and creative personal branding sessions 
                that capture your unique personality and style.
              </p>
              <ul className="text-muted space-y-2">
                <li>• Professional headshots</li>
                <li>• Family portraits</li>
                <li>• Senior photos</li>
                <li>• Personal branding</li>
              </ul>
            </div>
            
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Event Photography</h3>
              <p className="text-muted mb-4">
                Corporate events, milestone celebrations, and special occasions captured with 
                professional attention to detail and storytelling.
              </p>
              <ul className="text-muted space-y-2">
                <li>• Corporate events</li>
                <li>• Birthday parties</li>
                <li>• Anniversaries</li>
                <li>• Community events</li>
              </ul>
            </div>
            
            <div className="bg-surface rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">Commercial Photography</h3>
              <p className="text-muted mb-4">
                Product photography, real estate, and business branding that helps companies 
                showcase their offerings in the best possible light.
              </p>
              <ul className="text-muted space-y-2">
                <li>• Product photography</li>
                <li>• Real estate</li>
                <li>• Business branding</li>
                <li>• Marketing materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Process */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent">My Equipment & Process</h2>
              <div className="space-y-4 text-muted">
                <p>
                  I use professional-grade Canon and Sony equipment to ensure the highest quality images. 
                  My kit includes multiple camera bodies, a variety of lenses for different situations, 
                  and professional lighting equipment for controlled environments.
                </p>
                <p>
                  My process begins with a consultation to understand your vision and needs. During the shoot, 
                  I guide you naturally while capturing candid moments. Afterward, I carefully edit each image 
                  to ensure it meets my high standards before delivering your final gallery.
                </p>
                <p>
                  I believe in quality over quantity, so I focus on delivering fewer, exceptional images 
                  rather than hundreds of mediocre ones.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-accent">What You Can Expect</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted">Professional consultation and planning</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted">Relaxed, fun shooting experience</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted">Careful editing and retouching</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted">High-resolution digital delivery</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-accent rounded-full mr-3"></div>
                  <span className="text-muted">Print-ready files for albums</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-accent text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">200+</div>
              <p className="text-white/80">Weddings Captured</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <p className="text-white/80">Photos Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Something Beautiful?</h2>
          <p className="text-lg text-muted mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create a custom package that's perfect for you. 
            I'm excited to help tell your story through beautiful, timeless images.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Get In Touch
            </a>
            <a 
              href="#portfolio" 
              className="btn-secondary"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* Example Site Notice */}
      <section className="bg-blue-50 border-t border-blue-200 py-8">
        <div className="container text-center">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              📸 This is an EXAMPLE SITE for Portfolio Demonstration 📸
            </h3>
            <p className="text-blue-700 text-sm">
              This photography business website is a demo created to showcase web development skills. 
              All content, images, and contact information are fictional and for demonstration purposes only.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
