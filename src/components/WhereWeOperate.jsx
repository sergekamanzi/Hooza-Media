const cities = [
  { name: 'PARIS', top: '22%', left: '44%' },
  { name: 'DAKAR', top: '38%', left: '30%' },
  { name: 'KIGALI', top: '58%', left: '53%' },
  { name: 'NAIROBI', top: '56%', left: '61%' },
]

const connections = [
  { x1: '44%', y1: '22%', x2: '30%', y2: '38%' },
  { x1: '44%', y1: '22%', x2: '53%', y2: '58%' },
  { x1: '44%', y1: '22%', x2: '61%', y2: '56%' },
  { x1: '30%', y1: '38%', x2: '53%', y2: '58%' },
  { x1: '53%', y1: '58%', x2: '61%', y2: '56%' },
  { x1: '30%', y1: '38%', x2: '61%', y2: '56%' },
]

export default function WhereWeOperate() {
  return (
    <>
      <section id="where-we-operate" className="bg-[#faf5fb] py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* ── Top Header ── */}
        <div className="mb-10 grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          {/* Left – text */}
          <div>
            <p
              className="mb-4 text-xs font-bold uppercase tracking-widest sm:text-sm"
              style={{ color: '#92278f' }}
            >
              GLOBAL FOOTPRINT
            </p>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              A Pan-African{' '}
              <span style={{ color: '#92278f' }}>Media-Tech</span>
              <br />
              Powerhouse
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
              Headquartered in Kigali, Hooza Group bridges the digital divide through innovative media solutions across 20+ countries, delivering impact at the intersection of technology and local engagement.
            </p>
          </div>

          {/* Right – image */}
          <div className="flex items-start justify-start lg:justify-end lg:pt-4">
            <img
              src="/operate.jpg"
              alt="Where We Operate"
              className="w-full max-w-sm rounded-2xl object-cover shadow-md lg:max-w-md"
            />
          </div>
        </div>

        {/* ── Globe Visual ── */}
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #0d0d1a 0%, #12082a 40%, #1a0a1a 70%, #0a0d1a 100%)',
            minHeight: '420px',
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 70% at 40% 60%, rgba(146,39,143,0.18) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 70% 30%, rgba(100,20,100,0.12) 0%, transparent 60%)',
            }}
          />

          {/* Globe ring — large outer */}
          <div
            className="pointer-events-none absolute z-10"
            style={{
              width: '520px',
              height: '520px',
              borderRadius: '50%',
              border: '1px solid rgba(146,39,143,0.22)',
              top: '50%',
              left: '38%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          {/* Globe ring — medium */}
          <div
            className="pointer-events-none absolute z-10"
            style={{
              width: '380px',
              height: '380px',
              borderRadius: '50%',
              border: '1px solid rgba(146,39,143,0.28)',
              top: '50%',
              left: '38%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          {/* Globe ring — inner */}
          <div
            className="pointer-events-none absolute z-10"
            style={{
              width: '240px',
              height: '240px',
              borderRadius: '50%',
              border: '1px solid rgba(146,39,143,0.35)',
              top: '50%',
              left: '38%',
              transform: 'translate(-50%,-50%)',
            }}
          />
          {/* Globe core glow */}
          <div
            className="pointer-events-none absolute z-10"
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(146,39,143,0.45) 0%, rgba(146,39,143,0.08) 70%, transparent 100%)',
              top: '50%',
              left: '38%',
              transform: 'translate(-50%,-50%)',
            }}
          />

          {/* SVG connection lines */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 h-full w-full"
            preserveAspectRatio="none"
          >
            {connections.map((c, i) => (
              <line
                key={i}
                x1={c.x1} y1={c.y1}
                x2={c.x2} y2={c.y2}
                stroke="rgba(146,39,143,0.55)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* City dots + labels */}
          {cities.map((city) => (
            <div
              key={city.name}
              className="absolute z-30 flex flex-col items-center"
              style={{ top: city.top, left: city.left, transform: 'translate(-50%,-50%)' }}
            >
              {/* Pulse ring */}
              <span
                className="absolute inline-flex h-5 w-5 animate-ping rounded-full opacity-60"
                style={{ background: 'rgba(146,39,143,0.4)' }}
              />
              {/* Dot */}
              <span
                className="relative inline-flex h-3 w-3 rounded-full border-2 border-white"
                style={{ background: '#92278f' }}
              />
              <span className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-widest text-white/80 sm:text-xs">
                {city.name}
              </span>
            </div>
          ))}

          {/* GLOBAL CONNECTIVITY label */}
          <div className="pointer-events-none absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30 sm:text-xs">
              GLOBAL CONNECTIVITY
            </span>
          </div>

          {/* ── Territorial Impact card ── */}
          <div
            className="absolute right-4 top-1/2 z-40 w-56 -translate-y-1/2 rounded-2xl p-5 shadow-xl sm:right-8 sm:w-64 sm:p-6"
            style={{ background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <p className="mb-4 text-sm font-bold text-white sm:text-base">Territorial Impact</p>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Francophone Coverage</span>
                <span className="text-sm font-bold text-white">12 <span className="font-normal text-white/60">Markets</span></span>
              </div>
              <div className="mt-2 h-0.5 w-full rounded-full bg-white/20">
                <div className="h-0.5 rounded-full" style={{ width: '75%', background: '#92278f' }} />
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/70">Anglophone Presence</span>
                <span className="text-sm font-bold text-white">8 <span className="font-normal text-white/60">Markets</span></span>
              </div>
              <div className="mt-2 h-0.5 w-full rounded-full bg-white/20">
                <div className="h-0.5 rounded-full" style={{ width: '50%', background: '#92278f' }} />
              </div>
            </div>

            <p className="mt-3 text-[10px] italic leading-relaxed text-white/50 sm:text-xs">
              Active expansion into Lusophone Africa and Mediterranean markets underway for Q4 2024.
            </p>
          </div>

          {/* ── Operational Status card ── */}
          <div
            className="absolute bottom-6 left-4 z-40 rounded-xl px-4 py-3 sm:left-6 sm:px-5 sm:py-4"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-white/60 sm:text-xs">
              OPERATIONAL STATUS
            </p>
            <ul className="space-y-2">
              {[
                { label: 'Global HQ', color: '#92278f' },
                { label: 'Regional Office', color: '#c76bc5' },
                { label: 'Strategic Partnerships', color: '#6b1a6a' },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2.5 w-2.5 rounded-full flex-shrink-0"
                    style={{ background: item.color }}
                  />
                  <span className="text-[11px] text-white/75 sm:text-xs">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ── Strategic Anchors Section ── */}
    <section className="bg-[#faf5fb] pb-16 sm:pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Our Regional Hubs</h2>
          <p className="mt-3 max-w-lg text-sm leading-7 text-gray-500 sm:text-base">
            Operating locally with global standards, our regional hubs drive innovation, collaboration, and sector-specific excellence across Africa and beyond.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {[
            {
              tag: 'CENTRAL HUB',
              image: 'https://images.unsplash.com/photo-1611348586755-53860f3a4e74?w=800&q=80',
              city: 'Kigali, Rwanda',
              description: 'The nerve center of Hooza R&D, hosting our primary server architecture and AI media development lab.',
            },
            {
              tag: 'WEST CLUSTER',
              image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
              city: 'Dakar, Senegal',
              description: 'Strategic gateway for Francophone West Africa operations, specializing in mass-mobile citizen engagement.',
            },
            {
              tag: 'EU RELATIONS',
              image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
              city: 'Paris, France',
              description: 'Partner office managing international institutional relationships and European media-tech consortiums.',
            },
          ].map((hub) => (
            <div
              key={hub.city}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              {/* Image with tag */}
              <div className="relative h-48 w-full overflow-hidden sm:h-52 lg:h-56">
                <img
                  src={hub.image}
                  alt={hub.city}
                  className="h-full w-full object-cover"
                />
                {/* Tag pill */}
                <span
                  className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white"
                  style={{ background: '#92278f' }}
                >
                  {hub.tag}
                </span>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-7">
                <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">{hub.city}</h3>
                <p className="text-sm leading-relaxed text-gray-500 sm:text-base">{hub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  )
}
