import { useEffect, useState } from 'react'

const navItems = [
	{ label: 'Home', href: '#home' },
	{ label: 'What We Do', href: '#what-we-do' },
	{ label: 'Where We Operate', href: '#where-we-operate' },
	{ label: 'Partners & References', href: '#partners-references' },
	{ label: 'Case Studies', href: '#case-studies' },
	{ label: 'News & Press', href: '#news-press' },
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

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeHref, setActiveHref] = useState('#home')

	useEffect(() => {
		const updateActiveHref = () => {
			setActiveHref(window.location.hash || '#home')
		}

		updateActiveHref()
		window.addEventListener('hashchange', updateActiveHref)

		return () => window.removeEventListener('hashchange', updateActiveHref)
	}, [])

	return (
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
					<a
						href="#contact"
						className="rounded-md bg-(--hooza-primary) px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--hooza-primary-dark)"
					>
						Contact
					</a>
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
						<a
							href="#contact"
							className="rounded-md bg-(--hooza-primary) px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-(--hooza-primary-dark)"
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
