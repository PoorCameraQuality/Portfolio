import { Onepager } from '../_data/onepagers'
import { 
  Phone, 
  Smartphone, 
  Search, 
  Clock, 
  Wrench, 
  List, 
  Shield, 
  Users, 
  DollarSign, 
  Scissors, 
  Coffee, 
  Image, 
  Wifi, 
  Flower, 
  Mail, 
  Heart 
} from 'lucide-react'

interface FeatureListProps {
  onepager: Onepager
}

const iconMap: Record<string, React.ComponentType<any>> = {
  phone: Phone,
  smartphone: Smartphone,
  search: Search,
  clock: Clock,
  wrench: Wrench,
  list: List,
  shield: Shield,
  users: Users,
  'dollar-sign': DollarSign,
  scissors: Scissors,
  coffee: Coffee,
  image: Image,
  wifi: Wifi,
  flower: Flower,
  mail: Mail,
  heart: Heart
}

export default function FeatureList({ onepager }: FeatureListProps) {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2>What We Offer</h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Simple, effective solutions for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {onepager.features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
              </div>
              <h3>{feature}</h3>
              <p>Professional service for your business needs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
