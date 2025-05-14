import { Home, CheckSquare, Shield, Calendar } from "lucide-react"

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function WhyChooseUs() {
  return (
    <div
      className="relative py-16 px-4 md:px-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First row */}
          <FeatureCard
            icon={<Home className="w-6 h-6 text-amber-500" />}
            title="Wide Selection of Luxury Villas"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
            icon={<CheckSquare className="w-6 h-6 text-amber-500" />}
            title="Verified Listings"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
            icon={<Home className="w-6 h-6 text-amber-500" />}
            title="Wide Selection of Luxury Villas"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          {/* Second row */}
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-amber-500" />}
            title="Secure Transactions"
            description="Discover a wide selection of luxury villas, offering exquisite designs, breathtaking views, and world-class amenities for an unforgettable stay."
          />

          <FeatureCard
            icon={<Calendar className="w-6 h-6 text-amber-500" />}
            title="Flexible Booking"
            description="Enjoy flexible booking options tailored to your schedule and preferences. Modify, reschedule, or cancel with ease for a stress-free experience."
          />

          {/* Image on the right side of second row */}
          <div className="md:col-span-1 h-full">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }:FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex flex-col items-start">
        <div className="bg-amber-100 p-3 rounded-full mb-4">{icon}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button className="bg-amber-400 hover:bg-amber-500 text-gray-800 px-4 py-2 rounded-md text-sm font-medium">
          Learn More
        </button>
      </div>
    </div>
  )
}
