"use client"
import { useRef } from "react"

const LETTERS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

const useHackTextEffect = (text: string, delay: number = 100) => {
    const ref = useRef<HTMLDivElement>(null)
    let ite = 0
    const interval = setInterval(() => {
        ref.current.innerText = ref.current?.innerText.split("").map((char, index) => {
            if (index < ite) return ref.current.dataset.value[index]
            return LETTERS[Math.floor(Math.random() * LETTERS.length)]

        }
        ).join("");

        if (ite >= text.length) {
            clearInterval(interval)
        }
        ite++;
    }, delay)
    return ref
}

export default useHackTextEffect