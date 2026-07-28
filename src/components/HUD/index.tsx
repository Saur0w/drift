"use client";

import styles from "./style.module.scss";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

export default function Header() {
    return (
        <header className={styles.header}>
            
        </header>
    )
}