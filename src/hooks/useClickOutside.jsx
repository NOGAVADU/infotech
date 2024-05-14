"use client"

import React, {useEffect, useRef, useState} from "react";

export default function useClickOutside(initialIsVisible) {
    const [isShow, setIsShow] = useState(initialIsVisible)
    const ref = useRef(null)

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    });

    return [ref, isShow, setIsShow]
}