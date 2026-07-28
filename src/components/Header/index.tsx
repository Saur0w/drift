"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(SplitText, useGSAP);

const NAV_LINKS = [
    { label: "Work,", href: "/" },
    { label: "About", href: "/about" },
];

const heading = "ドリフト";

export default function Header() {
    const headerRef = useRef<HTMLHeadElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);
    const navRef = useRef<HTMLUListElement>(null);

    useGSAP(() => {
        if (!headingRef.current || !navRef.current) return;

        SplitText.create(headingRef.current, {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.lines, {
                    yPercent: 110,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power2.inOut",
                });
            },
        });

        SplitText.create(navRef.current, {
            type: "chars",
            mask: "chars",
            autoSplit: true,
            onSplit: (self) => {
                return gsap.from(self.chars, {
                    yPercent: 110,
                    duration: 0.6,
                    stagger: 0.02,
                    ease: "power2.inOut",
                    delay: 0.3,
                });
            },
        });
    }, { scope: headerRef });

    return (
        <header className={styles.header} ref={headerRef}>
            <div className={styles.body}>
                <div className={styles.heading}>
                    <h1 ref={headingRef}>{heading}</h1>
                </div>
                <nav>
                    <ul ref={navRef}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href} className={styles.navItem}>
                                <Link href={link.href} className={styles.link}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}