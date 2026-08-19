import { Music2 } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { NAV_LINKS, siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient font-condensed text-lg text-[#0c0a06]">
                V
              </span>
              <span className="font-display text-lg font-bold text-foreground">
                {siteConfig.shortName}
                <span className="text-gold"> Auto</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
                { icon: Music2, href: siteConfig.social.tiktok, label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-gold/40 hover:text-gold"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Navigate</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-muted transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Contact</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>{siteConfig.address.line1}</li>
              <li>{siteConfig.address.line2}</li>
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-gold">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-gold">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-foreground">Opening Hours</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              {siteConfig.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-foreground/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Crafted for those who expect more from their car care.</p>
        </div>
      </div>
    </footer>
  );
}
