import { FiRadio, FiShare2, FiUsers,  FiTrendingUp, FiZap, FiGlobe, FiArrowRight, FiArrowDown } from 'react-icons/fi'

const services = [
  {
    id: 1,
    Icon: FiRadio,
    title: 'Digital Broadcasting',
    description: 'State-of-the-art radio and television broadcasting infrastructure designed for wide-reach pan-African coverage and crystal-clear digital delivery.',
  },
  {
    id: 2,
    Icon: FiShare2,
    title: 'Media Distribution',
    description: 'Strategic placement and distribution of content across diverse digital platforms, ensuring maximum reach and engagement.',
  },
  {
    id: 3,
    Icon: FiUsers,
    title: 'Corporate Consulting',
    description: 'High-level advisory services for media integration and operational efficiency in the digital age.',
  },
  {
    id: 5,
    Icon: FiTrendingUp,
    title: 'Strategic Communications',
    description: 'Narrative shaping and content positioning for institutional and corporate entities.',
  },
  {
    id: 6,
    Icon: FiZap,
    title: 'Technology & Streaming',
    description: 'Proprietary OTT platforms and live-delivery streaming solutions optimized for the unique connectivity challenges of the African market.',
  },
  {
    id: 7,
    Icon: FiGlobe,
    title: 'Market Expansion',
    description: 'Strategic market intelligence for new regional markets.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'In-depth analysis of market needs and client objectives.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Developing tailored frameworks for media and tech implementation.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Rigorous deployment of infrastructure and media services.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Continuous monitoring and strategy refinement for sustained long-term impact.',
  },
]

function ServiceCard({ Icon, title, description, tags }) {
  return (
    <div className="group flex flex-col rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-[#92278f] sm:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg" style={{background:'#f9f0f9'}}>
        <Icon className="h-6 w-6" style={{color:'#92278f'}} />
      </div>
      <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
      <p className="flex-grow text-sm leading-relaxed text-gray-600 sm:text-base">{description}</p>
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block rounded-full px-3 py-1 text-xs font-medium" style={{background:'#f9f0f9',color:'#92278f'}}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="flex flex-col">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-300 bg-white text-2xl font-bold text-gray-400 transition-all duration-300 sm:h-20 sm:w-20 sm:text-3xl lg:border-2 lg:border-gray-400">
        {number}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{description}</p>
    </div>
  )
}

export default function WhatWeDo() {
  return (
    <>
      {/* What We Do Section */}
      <section id="what-we-do" className="bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <p className="mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest sm:text-sm" style={{background:'#f9f0f9',color:'#92278f'}}>
             • OUR EXPERTISE
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:mt-6 sm:text-4xl lg:text-5xl">
              Empowering the Pan-African Narrative
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base lg:text-lg">
              We combine technical precision with media innovation to deliver high-impact communication and technology solutions across the African continent.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                Icon={service.Icon}
                title={service.title}
                description={service.description}
                tags={service.tags}
              />
            ))}
          </div>

          {/* Know More About Us Banner */}
          <div className="mt-8 w-full overflow-hidden rounded-2xl sm:mt-12 lg:mt-16 flex flex-col lg:flex-row" style={{ minHeight: '420px' }}>
            {/* Left – purple text panel */}
            <div
              className="flex flex-1 flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-12"
              style={{ background: 'linear-gradient(135deg, #92278f 0%, #6b1a6a 100%)' }}
            >
              <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Know more About Us
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70 sm:text-base">
                A pan-African media and technology company powering digital transformation and Africa's narrative.
              </p>
              {/* Arrow pointing to the video */}
              <div className="mt-8 flex items-center gap-3">
                <FiArrowDown className="block lg:hidden animate-bounce text-white" style={{ width: 56, height: 56, strokeWidth: 2 }} />
                <FiArrowRight className="hidden lg:block animate-pulse text-white" style={{ width: 72, height: 72, strokeWidth: 2 }} />
                <span className="text-white font-semibold text-lg">Watch the video</span>
              </div>
            </div>

            {/* Right – video player */}
            <div className="relative flex w-full items-center justify-center bg-gray-200 lg:w-[50%]" style={{ minHeight: '420px' }}>
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
              >
                <source src="/aboutus.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collaborative Process Section */}
      <section id="process" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 text-center sm:mb-16 lg:mb-20">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Our Collaborative Process</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-600 sm:mt-6 sm:text-base lg:text-lg">
              A structured methodology that ensures every project transitions seamlessly from strategy to execution.
            </p>
          </div>

          {/* Process Steps Grid */}
          <div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <ProcessStep number={step.number} title={step.title} description={step.description} />

                {/* Connector Line (hidden on mobile) */}
                {idx < processSteps.length - 1 && (
                  <div className="absolute -right-[25%] top-8 hidden h-0.5 w-1/2 lg:block" style={{background:'linear-gradient(to right,#92278f,transparent)'}} />
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Call to Action Banner ── */}
      <section className="relative overflow-hidden bg-[#28252a] py-0">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row min-h-[600px]">

            {/* Left — text */}
            <div className="relative z-10 flex w-full flex-col justify-center px-8 py-14 sm:px-12 lg:w-1/2 lg:px-16">
              {/* label */}

              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Ready to transform your<br />
                <span style={{ color: '#c76bc5' }}>media & tech strategy?</span>
              </h2>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => window.dispatchEvent(new Event('open-contact'))}
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-85 sm:text-base"
                  style={{ background: 'linear-gradient(135deg, #92278f 0%, #6b1a6a 100%)' }}
                >
                  Contact Us
                  <FiArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            {/* Right — image */}
            <div className="relative w-full lg:w-1/2 min-h-[280px] lg:min-h-full overflow-hidden">
              <img
                src="/1.png"
                alt="Transform your strategy"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              {/* overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, transparent 60%, #28252a 100%)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
