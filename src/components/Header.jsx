/* eslint-disable @next/next/no-img-element */
import { FloatingIcon } from "./FloatingIcon"
import { data } from "../data.js"

export default function Header() {
    const { profiles, image } = data.basics

    return (
        <header className="  w-full  mt-2  inset-x-0 sticky top-0 z-50 overflow-x-auto fold:overflow-x-clip">
            <nav className="flex w-full max-w-4xl px-8 mx-auto items-center justify-between  py-4 backdrop-blur-sm  text-sm font-medium text-gray-600 dark:text-gray-200">
                <a href="/" className="font-semibold text-xl">
                    <span>iverse.dev</span>
                </a>
                <div className="flex items-center gap-x-3">
                    <FloatingIcon profiles={profiles} />

                    <img
                        className="aspect-square size-9  overflow-clip rounded-full  object-cover"
                        src={image}
                        alt="icono de perfil"
                        loading="eager"
                        formats={["avif", "webp", "png"]}
                    />
                </div>
            </nav>
        </header>
    )
}
