import { Metadata } from 'next'
import { CheckCircle, Award, Users, Clock } from 'lucide-react'

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
    company: 'Freelance',
    description: 'Focusing on helping small businesses in Central PA get affordable, effective websites.',
  },
  {
    year: '2021 - 2023',
    title: 'Full-Stack Developer',
    company: 'TechCorp',
    description: 'Built scalable web applications and led development teams.',
  },
  {
    year: '2019 - 2021',
    title: 'Frontend Developer',
    company: 'DesignStudio',
    description: 'Created responsive websites and interactive user interfaces.',
  },
  {
    year: '2018 - 2019',
    title: 'Junior Developer',
    company: 'StartupHub',
    description: 'Started my journey in web development and design.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h1 className="h1 text-text-primary mb-6">
              About Me
            </h1>
            <p className="lead text-text-primary/80 max-w-3xl mx-auto">
              I specialize in helping small businesses get a professional online presence without the hassle. 
              With years of web development and design experience, I've shifted my focus to making it easy 
              for local shops and services to show up online, look professional, and connect with their community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-brand to-brand-accent rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
                    alt="Professional headshot"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-surface rounded-2xl shadow-large flex items-center justify-center">
                  <Award className="w-12 h-12 text-brand" />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="h2 text-text-primary">
                My Approach is{' '}
                <span className="gradient-text">Straightforward</span>
              </h2>
              
              <p className="text-text-primary/80 text-body">
                My approach combines technical expertise with creative vision, ensuring that 
                every solution is not only functional but also beautiful and engaging. I'm 
                constantly learning and evolving, staying up-to-date with the latest 
                technologies and design trends.
              </p>
              
              <p className="text-text-primary/80 text-body">
                <strong>Clean design, reliable hosting, and simple maintenance</strong> — 
                so you can focus on running your business.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { icon: Users, number: '25+', label: 'Local Businesses' },
                  { icon: Award, number: '100%', label: 'Satisfaction' },
                  { icon: Clock, number: '24hrs', label: 'Response Time' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-brand" />
                    </div>
                    <div className="text-2xl font-display font-bold text-text-primary mb-1">
                      {stat.number}
                    </div>
                    <div className="text-text-primary/60 text-sm">
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
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              What I Specialize In
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
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
                    <span className="text-text-primary font-medium">{skill.name}</span>
                    <span className="text-brand font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-surface-light/20 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-brand to-brand-accent h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section bg-bg">
        <div className="container">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="h2 text-text-primary mb-6">
              My Journey
            </h2>
            <p className="lead text-text-primary/80 max-w-2xl mx-auto">
              From general web development to specializing in local business websites.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-surface-light/30" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 w-16 h-16 bg-surface rounded-full flex items-center justify-center border-4 border-bg">
                      <CheckCircle className="w-6 h-6 text-brand" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="text-brand font-semibold mb-2">
                        {item.year}
                      </div>
                      <h3 className="h3 text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <div className="text-text-primary/60 font-medium mb-3">
                        {item.company}
                      </div>
                      <p className="text-text-primary/80 text-body">
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
