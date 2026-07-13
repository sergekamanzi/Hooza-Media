import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'What We Do', href: '#what-we-do' },
	{ label: 'Where We Operate', href: '#where-we-operate' },
	{ label: 'News & Press', href: '#news-press' },
	{ label: 'Partners & References', href: '#partners-references' },
	{ label: 'Careers', href: '#careers' },
]

function MenuIcon({ open }) {
	return open ? (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18 18 6" />
		</svg>
	) : (
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	)
}

function ContactModal({ onClose }) {
	const formRef = useRef(null)
	const [formStatus, setFormStatus] = useState('idle') // idle | sending | success | error
	const [consent, setConsent] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!consent) return
		setFormStatus('sending')
		try {
			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
			setFormStatus('success')
			formRef.current.reset()
			setConsent(false)
		} catch {
			setFormStatus('error')
		}
	}

	useEffect(() => {
		const onKey = (e) => { if (e.key === 'Escape') onClose() }
		document.addEventListener('keydown', onKey)
		document.body.style.overflow = 'hidden'
		return () => {
			document.removeEventListener('keydown', onKey)
			document.body.style.overflow = ''
		}
	}, [onClose])

	return (
		<div className="fixed inset-0 z-999 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4" onClick={onClose}>
			<div
				className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#f2deef] shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#92278f] shadow transition-colors hover:bg-white"
					aria-label="Close"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
					</svg>
				</button>

				<div className="grid lg:grid-cols-3">
					{/* Form */}
					<div className="lg:col-span-2 p-8 sm:p-10">
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#92278f]/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#92278f]">
							<span className="h-1.5 w-1.5 rounded-full bg-[#92278f]" />
							General Inquiry
						</div>

						<form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
							<div className="grid gap-5 sm:grid-cols-2">
								<div>
									<label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3d56]">Full Name</label>
									<input name="name" type="text" required placeholder="Names" className="w-full rounded-lg border border-[#d4b8d0] bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#92278f] focus:ring-1 focus:ring-[#92278f]" />
								</div>
								<div>
									<label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3d56]">Email Address</label>
									<input name="email" type="email" required placeholder="@example.com" className="w-full rounded-lg border border-[#d4b8d0] bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#92278f] focus:ring-1 focus:ring-[#92278f]" />
								</div>
							</div>

							<div className="grid gap-5 sm:grid-cols-2">
								<div>
									<label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3d56]">Organization</label>
									<input name="organization" type="text" placeholder="Company Name" className="w-full rounded-lg border border-[#d4b8d0] bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#92278f] focus:ring-1 focus:ring-[#92278f]" />
								</div>
								<div>
									<label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3d56]">Phone</label>
									<input name="phone" type="tel" placeholder="+250 ..." className="w-full rounded-lg border border-[#d4b8d0] bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#92278f] focus:ring-1 focus:ring-[#92278f]" />
								</div>
							</div>

							<div>
								<label className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#5a3d56]">Your Message</label>
								<textarea name="message" rows={5} required placeholder="How can we help you?" className="w-full resize-none rounded-lg border border-[#d4b8d0] bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-[#92278f] focus:ring-1 focus:ring-[#92278f]" />
							</div>

							<label className="flex items-start gap-3 cursor-pointer">
								<input
									type="checkbox"
									checked={consent}
									onChange={(e) => setConsent(e.target.checked)}
									className="mt-0.5 h-4 w-4 accent-[#92278f]"
								/>
								<span className="text-xs leading-relaxed text-[#5a3d56]">
									I consent to the processing of my personal data in accordance with the{' '}
									<a href="#gdpr" className="underline text-[#92278f]">GDPR Notice</a> and{' '}
									<a href="#privacy" className="underline text-[#92278f]">Privacy Policy</a>.
								</span>
							</label>

							{formStatus === 'success' && (
								<p className="text-xs font-medium text-green-700">Your message has been sent! We'll get back to you soon.</p>
							)}
							{formStatus === 'error' && (
								<p className="text-xs font-medium text-red-600">Something went wrong. Please try again.</p>
							)}

							<button
								type="submit"
								disabled={!consent || formStatus === 'sending'}
								className="rounded-md bg-[#92278f] px-7 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow transition-colors hover:bg-[#6b1a6a] disabled:cursor-not-allowed disabled:opacity-50"
							>
								{formStatus === 'sending' ? 'Sending…' : 'Send Message'}
							</button>
						</form>
					</div>

					{/* Sidebar */}
					<div className="flex flex-col justify-center gap-8 rounded-b-2xl bg-[#6b1a6a] p-8 lg:rounded-l-none lg:rounded-r-2xl sm:p-10">
						<div className="flex items-start gap-4">
							<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-white">
									<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" />
								</svg>
							</div>
							<div>
								<p className="text-sm font-bold text-white">24/7 Strategic Support</p>
								<p className="mt-1 text-xs leading-relaxed text-white/65">Our specialized pan-African teams are active across all time zones.</p>
							</div>
						</div>

						<div>
							<p className="text-base font-semibold text-white">info@hooza.rw</p>
							<p className="mt-2 text-[10px] font-semibold uppercase tracking-widest text-white/50">Email</p>
						</div>
				</div>
			</div>
		</div>
		</div>
	)
}

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeHref, setActiveHref] = useState('#home')
	const [isContactOpen, setIsContactOpen] = useState(false)

	useEffect(() => {
		const handler = () => setIsContactOpen(true)
		window.addEventListener('open-contact', handler)
		return () => window.removeEventListener('open-contact', handler)
	}, [])

	useEffect(() => {
		const updateActiveHref = () => {
			setActiveHref(window.location.hash || '#home')
		}

		updateActiveHref()
		window.addEventListener('hashchange', updateActiveHref)

		return () => window.removeEventListener('hashchange', updateActiveHref)
	}, [])

	return (
		<>
		{isContactOpen && <ContactModal onClose={() => setIsContactOpen(false)} />}
		<header className="sticky top-0 z-50 border-b border-(--hooza-border) bg-[rgba(251,246,252,0.94)] backdrop-blur-sm">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
				<a href="#home" className="flex shrink-0 items-center" aria-label="Hooza Media home">
					<img
						src="/logo.png"
						alt="Hooza Media logo"
						className="block w-32 object-contain sm:w-40 md:w-44 lg:w-52 xl:w-56"
					/>
				</a>

				<nav className="hidden items-center gap-5 text-[15px] text-(--hooza-text-soft) xl:flex">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							className={
								activeHref === item.href
									? 'whitespace-nowrap border-b-2 border-(--hooza-primary) pb-1 font-medium text-(--hooza-primary)'
									: 'whitespace-nowrap transition-colors hover:text-(--hooza-primary)'
							}
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="hidden items-center gap-6 xl:flex">
					<a href="#fr" className="text-sm font-semibold tracking-[0.08em] text-(--hooza-primary)">
						FR
					</a>
					<button
						type="button"
						onClick={() => setIsContactOpen(true)}
						className="rounded-md bg-(--hooza-primary) px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--hooza-primary-dark)"
					>
						Contact
					</button>
				</div>

				<button
					type="button"
					onClick={() => setIsMenuOpen((current) => !current)}
					className="inline-flex items-center justify-center rounded-md p-2 text-(--hooza-primary) transition-colors hover:bg-(--hooza-primary-soft) xl:hidden"
					aria-label="Toggle navigation menu"
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
				>
					<MenuIcon open={isMenuOpen} />
				</button>
			</div>

			<div
				id="mobile-menu"
				className={`${isMenuOpen ? 'max-h-128 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-(--hooza-border) bg-(--hooza-surface) transition-all duration-300 ease-out xl:hidden`}
			>
				<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
					{navItems.map((item) => (
						<a
							key={item.label}
							href={item.href}
							onClick={() => setIsMenuOpen(false)}
							className={
								activeHref === item.href
									? 'rounded-md px-3 py-2 text-[15px] font-medium text-(--hooza-primary) transition-colors hover:bg-(--hooza-primary-soft)'
									: 'rounded-md px-3 py-2 text-[15px] font-medium text-(--hooza-text-soft) transition-colors hover:bg-(--hooza-primary-soft) hover:text-(--hooza-primary)'
							}
						>
							{item.label}
						</a>
					))}

					<div className="mt-2 flex items-center gap-3 px-3 pt-2">
						<a href="#fr" className="text-sm font-semibold tracking-[0.08em] text-(--hooza-primary)">
							FR
						</a>
						<button
							type="button"
							onClick={() => { setIsMenuOpen(false); setIsContactOpen(true) }}
							className="rounded-md bg-(--hooza-primary) px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--hooza-primary-dark)"
						>
							Contact
						</button>
					</div>
				</div>
			</div>
		</header>
		</>
	)
}
