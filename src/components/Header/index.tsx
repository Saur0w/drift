"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(SplitText, useGSAP);

const NAV_LINKS = [
    { label: "Work", href: "/work"},
    { label: "About", href: "/about"},
];

const heading = "ドリフト";

export default function Header() {
    const headerRef = useRef<HTMLHeadElement>(null);

    useGSAP(() => {

    }, { scope: headerRef })
    return (
        <header className={styles.header}>
            <div className={styles.body}>
                <div className={styles.heading}>
                    <h1>{heading}</h1>
                </div>
                <nav>
                    <ul>
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
    )
}