"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

const NAV_LINKS = [
    { label: "Home", href: "/"},
    { label: "About", href: "/about"},
    { label: "Contact", href: "/contact"},
]

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.top}>
                <div className={styles.heading}>
                    <h1>Drift</h1>
                </div>
                <nav>
                    <ul>
                        {
                            NAV_LINKS.map((link) => ())
                        }
                    </ul>
                </nav>
            </div>
            <div className={styles.bottom}>

            </div>
        </header>
    )
}