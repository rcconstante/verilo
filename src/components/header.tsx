"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { SmallIcon } from "./graphics";
const links = [
  { label: "Product", href: "#product" },
  { label: "How it works", href: "#routine" },
  { label: "Chrome extension", href: "#extension" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const navigationTarget = useRef<string | null>(null);
  return (
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Verilo home">
        <Image
          src="/brand/verilo-mark.svg"
          alt=""
          width={34}
          height={34}
          priority
        />
        <span>Verilo</span>
      </a>
      <nav className="navigation" aria-label="Product navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="account-actions">
        <a className="login" href="#product">
          Explore
        </a>
        <a
          className="scan-control"
          href="#routine"
          aria-label="Explore the Verilo scan workflow"
        >
          <span className="free-scan">Free Scan</span>
          <span className="scan-icon" aria-hidden="true">
            <SmallIcon name="scan" />
          </span>
        </a>
      </div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          className="mobile-menu-trigger"
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="menu-overlay" />
          <Dialog.Content
            className="mobile-menu"
            onCloseAutoFocus={(event) => {
              const hash = navigationTarget.current;
              if (!hash) return;
              event.preventDefault();
              navigationTarget.current = null;
              requestAnimationFrame(() => {
                const target = document.getElementById(hash.slice(1));
                if (!target) return;
                history.pushState(null, "", hash);
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
                target.scrollIntoView({
                  behavior: matchMedia("(prefers-reduced-motion: reduce)")
                    .matches
                    ? "instant"
                    : "smooth",
                });
              });
            }}
          >
            <Dialog.Title>Explore Verilo</Dialog.Title>
            <Dialog.Description>
              A little closer to more human writing.
            </Dialog.Description>
            <Dialog.Close className="menu-close" aria-label="Close navigation">
              <X size={24} />
            </Dialog.Close>
            <nav aria-label="Mobile navigation">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    navigationTarget.current = link.href;
                    setOpen(false);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
