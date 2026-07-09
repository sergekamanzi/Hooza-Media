import { TbWorld } from 'react-icons/tb'
import { MdOutlineMenuBook, MdOutlinePeople, MdOutlineTrendingUp, MdOutlineVolunteerActivism, MdOutlineLightbulb } from 'react-icons/md'

const whyItems = [
  { icon: <TbWorld size={28} />,                   label: 'Remote & Hybrid Opportunities' },
  { icon: <MdOutlineMenuBook size={28} />,          label: 'Continuous Learning' },
  { icon: <MdOutlinePeople size={28} />,            label: 'Collaborative Team' },
  { icon: <MdOutlineTrendingUp size={28} />,        label: 'Career Growth' },
  { icon: <MdOutlineVolunteerActivism size={28} />, label: 'Meaningful Social Impact' },
  { icon: <MdOutlineLightbulb size={28} />,         label: 'Innovative Projects' },
]

export default function Careers() {
  return (
    <>
    <section
      id="careers"
      className="py-16 sm:py-20 lg:py-28" style={{ backgroundColor: '#F5F5F5' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* ── Left column ── */}
          <div>
            <span className="inline-flex rounded-full bg-(--hooza-primary-soft) px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-(--hooza-primary-dark) shadow-sm">
              Careers
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] text-(--hooza-text) sm:text-5xl lg:text-[3.25rem]">
              Build the Future of Digital Inclusion in Africa
            </h1>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-(--hooza-text-soft)">
              Join a team using media and technology to connect millions of people
              across Africa and beyond. At Hooza Media, you'll work on projects that
              create real social impact alongside global partners.
            </p>
          </div>

          {/* ── Right column ── */}
          <div className="flex items-center justify-center">
            <img
              src="/career.png"
              alt="Careers at Hooza Media"
              className="w-full max-w-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    {/* ── Why Hooza? ── */}
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10 text-center">
        <h2 className="text-3xl font-extrabold text-(--hooza-text) sm:text-4xl">Why Hooza?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-(--hooza-text-soft)">
          At Hooza Media, we believe technology and media should empower communities. We
          collaborate with international organizations, governments, and private-sector partners to
          create innovative digital communication solutions. We value curiosity, creativity, ownership,
          and continuous learning.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col gap-3 rounded-2xl bg-white p-6 text-left shadow-sm"
            >
              <span className="text-(--hooza-primary)">{icon}</span>
              <span className="text-[0.95rem] font-semibold text-(--hooza-primary)">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Life at Hooza ── */}
    <section className="py-16 sm:py-20 lg:py-24 bg-(--hooza-surface)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left */}
          <div>
            <h2 className="text-3xl font-extrabold text-(--hooza-text) sm:text-4xl">Life at Hooza</h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-(--hooza-text-soft)">
              Our team brings together professionals from media, technology,
              communications, and strategy. We encourage independent
              thinking, collaboration, and experimentation while delivering
              high-quality work for clients across multiple countries.
            </p>
          </div>

          {/* Right – image with decorative accents */}
          <div className="relative flex justify-center">
            {/* top dash */}
            <span className="absolute -top-4 left-[44%] h-0.75 w-6 rounded-full bg-(--hooza-primary)" />
            {/* bottom dash */}
            <span className="absolute -bottom-4 left-[44%] h-0.75 w-6 rounded-full bg-(--hooza-primary)" />
            {/* left circle */}
            <span className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-(--hooza-primary) bg-transparent" />

            <img
              src="/career1.png"
              alt="Life at Hooza Media"
              className="w-full max-w-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>

    {/* ── Team Stories & Stats ── */}
    <section className="py-16 sm:py-20 lg:py-24" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* ── Left: phone mockup with image grid ── */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg rounded-4xl overflow-hidden">
              <img src="/career2.png" alt="Team" className="w-full object-cover" />
            </div>
          </div>

          {/* ── Right: quote + stats ── */}
          <div className="flex flex-col gap-6">

            {/* decorative circle */}
            <span className="hidden lg:block absolute -translate-x-8 mt-16 h-5 w-5 rounded-full border-2 border-(--hooza-primary) bg-transparent self-start" />

            {/* Quote card */}
            <div className="relative rounded-2xl bg-(--hooza-primary-soft) p-7 border-l-4 border-(--hooza-primary)">
              {/* big closing quote mark */}
              <span className="absolute top-4 right-6 text-6xl font-extrabold leading-none text-(--hooza-primary)/20 select-none">
                99
              </span>
              <p className="text-lg font-semibold leading-relaxed text-(--hooza-text) max-w-sm">
                "At HOOZA, your growth isn't just a promise; it's our policy. We are building
                the tools that will redefine how an entire continent consumes information."
              </p>
              {/* attribution */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--hooza-primary) text-sm font-bold text-white shrink-0">
                  VN
                </div>
                <div>
                  <p className="text-sm font-bold text-(--hooza-text)">Victor Nkindi</p>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-(--hooza-text-soft)">CEO</p>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-(--hooza-primary)">25%</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-(--hooza-text-soft)">Annual Team Growth</p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-(--hooza-primary)">15+</p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-(--hooza-text-soft)">Strategic Partners</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  </>
  )
}
