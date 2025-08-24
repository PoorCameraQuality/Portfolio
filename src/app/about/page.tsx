import { Metadata } from 'next'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and experience in creative development and design.',
}

const skills = [
  { name: 'Local SEO', level: 95 },
  { name: 'Mobile-First Design', level: 90 },
  { name: 'Small Business Websites', level: 85 },
  { name: 'Google Business Setup', level: 88 },
  { name: 'Affordable Hosting', level: 92 },
  { name: 'Local Marketing', level: 85 },
]

const timeline = [
  {
    year: '2023 - Present',
    title: 'Local Business Website Specialist',
    company: 'Freelance @ BraxCraft',
    description: 'Focusing on helping small businesses in Central PA get affordable, effective websites.',
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'BraxCraft',
    description: 'Built scalable web applications and led development teams.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'MMO.TM',
    description: 'Created responsive websites and interactive user interfaces.',
  },
  {
    year: '2013 - 2016',
    title: 'Junior Developer',
    company: 'Freelance Dec',
    description: 'Started my journey in web development and design.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 mb-6">
              Helping Local Businesses Shine Online
            </h1>
            <p className="lead max-w-3xl mx-auto">
              I've spent 4 years building websites and backend systems, specializing in design and SEO. 
              My goal is simple: help small businesses get online with a site that looks professional, 
              works smoothly, and brings in customers. I handle the tech, hosting, and updates—you focus on your business.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-96 rounded-2xl overflow-hidden flex items-center justify-center" style={{ background: 'linear-gradient(135deg, var(--sage), var(--forest))' }}>
                  {/* BraxCraft Logo */}
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-6 relative">
                      {/* BraxCraft Logo Image */}
                      <Image
                        src="/braxcraft-logo.png"
                        alt="BraxCraft Logo - Deer Skull with Antlers and BRAXCRAFT Text"
                        width={192}
                        height={192}
                        className="w-full h-full object-contain"
                        priority
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl shadow-lg flex items-center justify-center" style={{ backgroundColor: 'var(--cream)' }}>
                  <Award className="w-12 h-12" style={{ color: 'var(--sage)' }} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="h2">
                One-on-One{' '}
                <span style={{ color: 'var(--soil)' }}>Client Focus</span>
              </h2>
              
              <p className="text-body text-muted">
                I work one-on-one with every client to make sure your site not only represents your business but also gets found on Google, Maps, Yelp, and beyond.
              </p>
              
              <p className="text-body text-muted">
                My approach combines technical expertise with creative vision, ensuring that 
                every solution is not only functional but also beautiful and engaging. I'm 
                constantly learning and evolving, staying up-to-date with the latest 
                technologies and design trends.
              </p>
              
              <p className="text-body text-muted">
                <strong>Clean design, reliable hosting, and simple maintenance</strong> — 
                so you can focus on running your business.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { icon: Users, number: '50+', label: 'Projects Completed' },
                  { icon: Award, number: '4 Years', label: 'Experience' },
                  { icon: Clock, number: '2-Week', label: 'Turnaround' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: 'var(--cream)' }}>
                      <stat.icon className="w-6 h-6" style={{ color: 'var(--sage)' }} />
                    </div>
                    <div className="text-2xl font-display font-bold mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section soft-section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 mb-6">
              What I Specialize In
            </h2>
            <p className="lead max-w-2xl mx-auto">
              I focus on the specific skills that help local businesses succeed online.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-semibold" style={{ color: 'var(--sage)' }}>{skill.level}%</span>
                  </div>
                  <div className="w-full rounded-full h-2" style={{ backgroundColor: 'var(--border)' }}>
                    <div
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${skill.level}%`,
                        background: 'linear-gradient(135deg, var(--sage), var(--forest))'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 mb-6">
              My Journey
            </h2>
            <p className="lead max-w-2xl mx-auto">
              From general web development to specializing in local business websites.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ backgroundColor: 'var(--border)' }} />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--border)' }}>
                      <CheckCircle className="w-6 h-6" style={{ color: 'var(--sage)' }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="font-semibold mb-2" style={{ color: 'var(--sage)' }}>
                        {item.year}
                      </div>
                      <h3 className="h3 mb-2">
                        {item.title}
                      </h3>
                      <div className="font-medium mb-3 text-muted">
                        {item.company}
                      </div>
                      <p className="text-body text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
