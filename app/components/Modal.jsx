"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"


const Modal = ({ children }) => {
    const router = useRouter()
    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal()
        }
    }, [])

    const onHide = () => {
        router.back()
    }

    const modalRef = useRef(null)
    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="relative w-[80%] bg-[#1D1E28] shadow-lg rounded-md text-white"
        >
            <span
                onClick={onHide}
                className="cursor-pointer absolute right-0 bg-slate-300 shadow-lg rounded-full p-1"
            >
                <Image
                    src="/xmark.svg"
                    alt="close"
                    width={30}
                    height={30}
                />
            </span>
            {children}
        </dialog>,
        document.getElementById("modal-root-portal")
    )
}

export default Modal
