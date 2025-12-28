import React, { useState } from "react";
import {
    FiHome,
    FiBox,
    FiTool,
    FiFileText,
    FiChevronDown,
    FiMenu,
    FiX,
    FiPackage,
    FiSettings,
    FiHeadphones,
    FiInfo,
    FiBriefcase,
    FiClock,
    FiMail,
    FiCalendar,
} from "react-icons/fi";
import { FaBuilding } from "react-icons/fa";

const PRIMARY = "#0ADCAF";

const PRODUCTS = [
    { label: "Product A", href: "#product-a", icon: FiPackage },
    { label: "Product B", href: "#product-b", icon: FiBox },
    { label: "Product C", href: "#product-c", icon: FiPackage },
];

const SERVICES = [
    { label: "Consulting", href: "#consulting", icon: FiHeadphones },
    { label: "Integration", href: "#integration", icon: FiSettings },
    { label: "Support", href: "#support", icon: FiTool },
];

const COMPANY = [
    { label: "About Us", href: "#about", icon: FiInfo },
    { label: "Careers", href: "#careers", icon: FiBriefcase },
    { label: "History", href: "#history", icon: FiClock },
    { label: "Contact", href: "#contact", icon: FiMail },
    { label: "Book a Free Consultation", href: "#consultation", icon: FiCalendar },
];

export default function Navbar() {
    const [openMobile, setOpenMobile] = useState(false);

    return (
        <header className="w-full fixed top-0 left-0 z-50" style={{ fontFamily: "'Fira Code', monospace" }}>
            <nav className="w-full">
                <div className="relative bg-white/95 backdrop-blur-sm shadow-md">
                    <span
                        className="absolute bottom-0 left-0 w-full h-[3px]"
                        style={{
                            backgroundColor: PRIMARY,
                            boxShadow: `0 0 10px ${PRIMARY}40`
                        }}
                    />

                    <div className="flex items-center justify-between h-20 px-6 lg:px-12">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center gap-3 select-none text-gray-900 group"
                            aria-label="GeekSSort home"
                        >
                            <div
                                className="flex items-center justify-center bg-black text-white rounded-md w-10 h-10 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    boxShadow: `0 0 0 0px ${PRIMARY}`,
                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 0 3px ${PRIMARY}40`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 0 0px ${PRIMARY}`;
                                }}
                            >
                                <FiBox className="w-5 h-5" />
                            </div>
                            <span className="text-2xl font-bold">GeekSSort</span>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
                            <ul className="flex items-center gap-5">
                                {/* Home */}
                                <li className="relative group">
                                    <a
                                        href="#home"
                                        className="flex items-center gap-2 px-3 py-2 text-gray-700 transition-colors duration-300 group-hover:text-[#0ADCAF]"
                                    >
                                        <FiHome className="w-5 h-5" />
                                        <span className="text-base">Home</span>
                                    </a>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: PRIMARY }}
                                    />
                                </li>

                                {/* Products dropdown */}
                                <li className="relative group">
                                    <div className="flex items-center gap-2 px-3 py-2 text-gray-700 transition-colors duration-300 group-hover:text-[#0ADCAF] cursor-pointer">
                                        <FiBox className="w-5 h-5" />
                                        <span className="text-base">Products</span>
                                        <FiChevronDown
                                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                            style={{ color: PRIMARY }}
                                        />
                                    </div>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: PRIMARY }}
                                    />

                                    {/* Dropdown */}
                                    <div
                                        className="absolute left-0 mt-2 w-64 bg-white border-2 rounded-xl shadow-2xl overflow-hidden transform origin-top transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-10px]"
                                        style={{
                                            borderColor: PRIMARY,
                                            boxShadow: `0 10px 40px ${PRIMARY}20`
                                        }}
                                    >
                                        <div className="py-2">
                                            {PRODUCTS.map((p, idx) => {
                                                const Icon = p.icon;
                                                return (
                                                    <a
                                                        key={p.label}
                                                        href={p.href}
                                                        className="relative flex items-center gap-4 px-5 py-3 text-gray-700 transition-all duration-200 group/item"
                                                        style={{
                                                            animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`
                                                        }}
                                                    >
                                                        <Icon
                                                            className="w-5 h-5 transition-colors duration-200 group-hover/item:text-[#0ADCAF]"
                                                        />
                                                        <span className="text-base group-hover/item:text-[#0ADCAF] transition-colors duration-200">
                                                            {p.label}
                                                        </span>
                                                        <span
                                                            className="absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 transition-transform duration-200 group-hover/item:scale-x-100"
                                                            style={{ backgroundColor: PRIMARY }}
                                                        />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>

                                {/* Services dropdown */}
                                <li className="relative group">
                                    <div className="flex items-center gap-2 px-3 py-2 text-gray-700 transition-colors duration-300 group-hover:text-[#0ADCAF] cursor-pointer">
                                        <FiTool className="w-5 h-5" />
                                        <span className="text-base">Services</span>
                                        <FiChevronDown
                                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                            style={{ color: PRIMARY }}
                                        />
                                    </div>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: PRIMARY }}
                                    />

                                    <div
                                        className="absolute left-0 mt-2 w-64 bg-white border-2 rounded-xl shadow-2xl overflow-hidden transform origin-top transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-10px]"
                                        style={{
                                            borderColor: PRIMARY,
                                            boxShadow: `0 10px 40px ${PRIMARY}20`
                                        }}
                                    >
                                        <div className="py-2">
                                            {SERVICES.map((s, idx) => {
                                                const Icon = s.icon;
                                                return (
                                                    <a
                                                        key={s.label}
                                                        href={s.href}
                                                        className="relative flex items-center gap-4 px-5 py-3 text-gray-700 transition-all duration-200 group/item"
                                                        style={{
                                                            animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`
                                                        }}
                                                    >
                                                        <Icon className="w-5 h-5 transition-colors duration-200 group-hover/item:text-[#0ADCAF]" />
                                                        <span className="text-base group-hover/item:text-[#0ADCAF] transition-colors duration-200">
                                                            {s.label}
                                                        </span>
                                                        <span
                                                            className="absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 transition-transform duration-200 group-hover/item:scale-x-100"
                                                            style={{ backgroundColor: PRIMARY }}
                                                        />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>

                                {/* Company dropdown */}
                                <li className="relative group">
                                    <div className="flex items-center gap-2 px-3 py-2 text-gray-700 transition-colors duration-300 group-hover:text-[#0ADCAF] cursor-pointer">
                                        <FaBuilding className="w-5 h-5" />
                                        <span className="text-base">Company</span>
                                        <FiChevronDown
                                            className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                                            style={{ color: PRIMARY }}
                                        />
                                    </div>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: PRIMARY }}
                                    />

                                    <div
                                        className="absolute left-0 mt-2 w-64 bg-white border-2 rounded-xl shadow-2xl overflow-hidden transform origin-top transition-all duration-300 ease-out opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-[-10px]"
                                        style={{
                                            borderColor: PRIMARY,
                                            boxShadow: `0 10px 40px ${PRIMARY}20`
                                        }}
                                    >
                                        <div className="py-2">
                                            {COMPANY.map((c, idx) => {
                                                const Icon = c.icon;
                                                return (
                                                    <a
                                                        key={c.label}
                                                        href={c.href}
                                                        className="relative flex items-center gap-4 px-5 py-3 text-gray-700 transition-all duration-200 group/item"
                                                        style={{
                                                            animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`
                                                        }}
                                                    >
                                                        <Icon className="w-5 h-5 transition-colors duration-200 group-hover/item:text-[#0ADCAF]" />
                                                        <span className="text-base group-hover/item:text-[#0ADCAF] transition-colors duration-200">
                                                            {c.label}
                                                        </span>
                                                        <span
                                                            className="absolute bottom-0 left-5 right-5 h-[2px] scale-x-0 transition-transform duration-200 group-hover/item:scale-x-100"
                                                            style={{ backgroundColor: PRIMARY }}
                                                        />
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </li>

                                {/* Blog */}
                                <li className="relative group">
                                    <a
                                        href="#blog"
                                        className="flex items-center gap-2 px-3 py-2 text-gray-700 transition-colors duration-300 group-hover:text-[#0ADCAF]"
                                    >
                                        <FiFileText className="w-5 h-5" />
                                        <span className="text-base">Blog</span>
                                    </a>
                                    <span
                                        className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full"
                                        style={{ backgroundColor: PRIMARY }}
                                    />
                                </li>
                            </ul>
                        </div>

                        {/* Right: Careers button + mobile toggle */}
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <button
                                    className="px-8 py-4 text-white font-semibold shadow-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden group"
                                    style={{
                                        backgroundColor: PRIMARY,
                                        minHeight: '60px'
                                    }}
                                >
                                    <span className="relative z-10">Careers</span>
                                    <span
                                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                    />
                                </button>
                            </div>

                            <div className="md:hidden">
                                <button
                                    aria-label={openMobile ? "Close menu" : "Open menu"}
                                    onClick={() => setOpenMobile(v => !v)}
                                    className="rounded-md p-2 inline-flex items-center justify-center text-black hover:bg-gray-100 transition-colors duration-200"
                                >
                                    {openMobile ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Panel */}
                    <div className={`md:hidden overflow-hidden transition-all duration-300 ${openMobile ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className="px-4 pb-6">
                            <ul className="flex flex-col gap-3 py-4">
                                <li>
                                    <a href="#home" onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-[#0ADCAF]">
                                        <FiHome className="w-5 h-5" />
                                        Home
                                    </a>
                                </li>

                                <li>
                                    <details className="group">
                                        <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none text-gray-700">
                                            <div className="flex items-center gap-3">
                                                <FiBox className="w-5 h-5" />
                                                Products
                                            </div>
                                            <FiChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                                        </summary>
                                        <div className="mt-2 flex flex-col">
                                            {PRODUCTS.map(p => {
                                                const Icon = p.icon;
                                                return (
                                                    <a key={p.label} href={p.href} onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:text-[#0ADCAF] transition-colors">
                                                        <Icon className="w-4 h-4" />
                                                        {p.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </details>
                                </li>

                                <li>
                                    <details className="group">
                                        <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none text-gray-700">
                                            <div className="flex items-center gap-3">
                                                <FiTool className="w-5 h-5" />
                                                Services
                                            </div>
                                            <FiChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                                        </summary>
                                        <div className="mt-2 flex flex-col">
                                            {SERVICES.map(s => {
                                                const Icon = s.icon;
                                                return (
                                                    <a key={s.label} href={s.href} onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:text-[#0ADCAF] transition-colors">
                                                        <Icon className="w-4 h-4" />
                                                        {s.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </details>
                                </li>

                                <li>
                                    <details className="group">
                                        <summary className="flex items-center justify-between px-3 py-2 cursor-pointer list-none text-gray-700">
                                            <div className="flex items-center gap-3">
                                                <FaBuilding className="w-5 h-5" />
                                                Company
                                            </div>
                                            <FiChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" />
                                        </summary>
                                        <div className="mt-2 flex flex-col">
                                            {COMPANY.map(c => {
                                                const Icon = c.icon;
                                                return (
                                                    <a key={c.label} href={c.href} onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-6 py-2 text-gray-700 hover:text-[#0ADCAF] transition-colors">
                                                        <Icon className="w-4 h-4" />
                                                        {c.label}
                                                    </a>
                                                );
                                            })}
                                        </div>
                                    </details>
                                </li>

                                <li>
                                    <a href="#blog" onClick={() => setOpenMobile(false)} className="flex items-center gap-3 px-3 py-2 text-gray-700 hover:text-[#0ADCAF]">
                                        <FiFileText className="w-5 h-5" />
                                        Blog
                                    </a>
                                </li>

                                <li className="mt-2">
                                    <button
                                        className="w-full text-white py-4 rounded-lg font-semibold shadow-lg"
                                        style={{ backgroundColor: PRIMARY }}
                                        onClick={() => setOpenMobile(false)}
                                    >
                                        Careers
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </header>
    );
}