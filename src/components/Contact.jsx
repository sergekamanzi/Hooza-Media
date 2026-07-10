const navigationLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'What We Do', href: '#what-we-do' },
	{ label: 'Where We Operate', href: '#where-we-operate' },
	{ label: 'Careers', href: '#careers' },
	{ label: 'News & Press', href: '#news-press' },
]

const resourceLinks = [
	{ label: 'Brand Assets', href: '#brand-assets' },
	{ label: 'Hooza & Partners', href: '#partners-france' },
]

const legalLinks = [
	{ label: 'Sitemap', href: '#sitemap' },
	{ label: 'GDPR Notice', href: '#gdpr' },
	{ label: 'Privacy Policy', href: '#privacy' },
	{ label: 'Terms of Service', href: '#terms' },
]

function SocialIcon({ children, label, href = '#' }) {
	return (
		<a
			href={href}
			aria-label={label}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-(--hooza-primary) shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
		>
			{children}
		</a>
	)
}

export default function Contact() {
	return (
		<footer id="contact" className="bg-[#f2deef] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
			<div className="mx-auto max-w-7xl px-0 py-0 sm:px-0 sm:py-0 lg:px-0 lg:py-0">
				<div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
					<div className="max-w-sm lg:col-span-3">
						<a href="#home" className="inline-flex items-center">
							<img src="/logo.png" alt="Hooza Media logo" className="h-12 w-auto object-contain sm:h-14" />
						</a>
						<p className="mt-6 text-sm leading-7 text-[#6f5a67] sm:text-base">
							Connecting African narratives through technology, data, and broadcast innovation since 2012. A leader in Pan-African media-tech.
						</p>

						<div className="mt-8">
							<p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--hooza-text)">
								Follow Us
							</p>
							<div className="mt-4 flex items-center gap-3">
								<SocialIcon label="Instagram" href="https://www.instagram.com/hoozamedia/">
									<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
										<path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.5A3.25 3.25 0 0 0 4.5 7.75v8.5a3.25 3.25 0 0 0 3.25 3.25h8.5a3.25 3.25 0 0 0 3.25-3.25v-8.5a3.25 3.25 0 0 0-3.25-3.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7Zm5.2-2.25a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
									</svg>
								</SocialIcon>
								<SocialIcon label="Facebook" href="https://www.facebook.com/hoozamedia">
									<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
										<path d="M13.5 22v-8.5h2.9l.4-3h-3.3V8.6c0-.9.3-1.6 1.7-1.6H17V4.3c-.7-.1-1.5-.2-2.3-.2-2.4 0-4 1.5-4 4.1v2.3H8v3h2.7V22h2.8Z" />
									</svg>
								</SocialIcon>
								<SocialIcon label="LinkedIn" href="https://www.linkedin.com/company/hoozarwanda">
									<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
										<path d="M6.5 8.5H3.75V21H6.5V8.5ZM5.12 3A1.62 1.62 0 1 0 5.13 6.25 1.62 1.62 0 0 0 5.12 3Zm6.22 5.5H8.7V21h2.7v-6.5c0-1.72.33-3.37 2.44-3.37 2.08 0 2.1 1.95 2.1 3.48V21h2.7v-7.36c0-3.61-.78-6.39-4.5-6.39-1.79 0-2.99.98-3.5 1.87h-.02V8.5Z" />
									</svg>
								</SocialIcon>
								<SocialIcon label="X" href="https://www.twitter.com/hoozamedia">
									<svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
										<path d="M18.9 3h3.4l-7.4 8.48L23 21h-6.6l-5.16-6.29L5.8 21H2.4l7.88-9.02L1 3h6.78l4.67 5.73L18.9 3Zm-1.18 16h1.88L6.7 4.93H4.68L17.72 19Z" />
									</svg>
								</SocialIcon>
							</div>
						</div>
					</div>

					<div className="grid gap-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3 lg:gap-12">
						<div>
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--hooza-text)">
								Navigation
							</h2>
							<ul className="mt-5 space-y-4 text-sm text-[#6f5a67] sm:text-base">
								{navigationLinks.map((link) => (
									<li key={link.label}>
										<a className="transition-colors hover:text-(--hooza-primary)" href={link.href}>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--hooza-text)">
								Legal
							</h2>
							<ul className="mt-5 space-y-4 text-sm text-[#6f5a67] sm:text-base">
								{legalLinks.map((link) => (
									<li key={link.label}>
										<span className="cursor-default text-[#6f5a67]">
											{link.label}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-(--hooza-text)">
								Resources
							</h2>
							<ul className="mt-5 space-y-4 text-sm text-[#6f5a67] sm:text-base">
								{resourceLinks.map((link) => (
									<li key={link.label}>
										<span className="cursor-default text-[#6f5a67]">
											{link.label}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-white/60 pt-8 text-center text-xs leading-6 text-[#6f5a67] sm:mt-14 sm:text-sm">
					© 2026 Hooza Group. All Rights Reserved.<br/> Pan-African Media-Tech Excellence with © 2026 Hooza Media. All Rights Reserved.
				</div>
			</div>
		</footer>
	)
}
