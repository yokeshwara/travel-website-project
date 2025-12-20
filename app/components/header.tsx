"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Plane, Hotel, Car, Menu, X, Eye, EyeOff } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="absolute top-0 left-0 right-0 z-40">
        <div className="w-full mx-auto  py-5 px-2">
          <div className="flex items-center justify-between">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex gap-8 text-white text-sm ">
              <Link href="#" className="flex items-center gap-2 hover:text-orange-400">
                <Plane size={16} /> Find Flight
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-orange-400">
                <Hotel size={16} /> Find Stays
              </Link>
              <Link href="#" className="flex items-center gap-2 hover:text-orange-400">
                <Car size={16} /> Airport Taxi
              </Link>
            </nav>

            {/* Logo */}
            <Link href="/">
              <Image
                src="/travel-logo.png"
                alt="Travel Mania"
                width={160}
                height={40}
                priority
              />
            </Link>

            {/* Right Buttons */}
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowLogin(true)}
                className="hidden md:block text-white hover:text-orange-400 "
              >
                Login
              </button>

              <button
                onClick={() => setShowSignup(true)}
                className="hidden md:block bg-white text-black rounded-full px-6 py-2"
              >
                Sign up
              </button>

              <button
                className="lg:hidden text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 bg-black/40 backdrop-blur-md rounded-xl p-5 text-white flex flex-col gap-4">
              <Link href="#" className="flex gap-2"><Plane size={16} /> Find Flight</Link>
              <Link href="#" className="flex gap-2"><Hotel size={16} /> Find Stays</Link>
              <Link href="#" className="flex gap-2"><Car size={16} /> Airport Taxi</Link>

              <div className="pt-3 border-t border-white/20 flex flex-col gap-2">
                <button
                  onClick={() => setShowLogin(true)}
                  className="border border-white rounded-md py-2"
                >
                  Login
                </button>
                <button
                  onClick={() => setShowSignup(true)}
                  className="bg-white text-black rounded-md py-2"
                >
                  Sign up
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* ================= SIGN UP MODAL ================= */}
      {showSignup && (
        <Modal onClose={() => setShowSignup(false)} title="Create Account">
          <Input label="Name" placeholder="Full Name" />
          <Input label="Email Address" placeholder="Email" />
          <PasswordInput
            label="Password"
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />

          <Checkbox />

          <PrimaryButton text="Sign Up" />

          <Divider />

          <GoogleButton text="Sign up with Google" />

          <FooterText
            text="Already have an account?"
            linkText="Log In"
            onClick={() => {
              setShowSignup(false)
              setShowLogin(true)
            }}
          />
        </Modal>
      )}

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <Modal onClose={() => setShowLogin(false)} title="Login">
          <Input label="Email Address" placeholder="Enter your email address" />
          <PasswordInput
            label="Password"
            show={showPassword}
            toggle={() => setShowPassword(!showPassword)}
          />

          <Checkbox />

          <PrimaryButton text="Sign In" />

          <Divider />

          <GoogleButton text="Sign In with Google" />

          <FooterText
            text="Don't have an account?"
            linkText="Sign Up"
            onClick={() => {
              setShowLogin(false)
              setShowSignup(true)
            }}
          />
        </Modal>
      )}
    </>
  )
}

/* ================= REUSABLE COMPONENTS ================= */

function Modal({ title, children, onClose }: any) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 md:p-8">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500">
          <X size={22} />
        </button>
        <h2 className="text-2xl font-semibold text-center mb-6">{title}</h2>
        <div className="space-y-4">{children}</div>
      </div>
    </div>
  )
}

function Input({ label, placeholder }: any) {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        placeholder={placeholder}
        className="w-full mt-1 border rounded-md px-4 py-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  )
}

function PasswordInput({ label, show, toggle }: any) {
  return (
    <div className="relative">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={show ? "text" : "password"}
        placeholder="Password"
        className="w-full mt-1 border rounded-md px-4 py-2.5 pr-10"
      />
      <button
        type="button"
        onClick={toggle}
        className="absolute right-3 top-9 text-gray-400"
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  )
}

function Checkbox() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <input type="checkbox" />
      <span>
        I agree with <a className="text-blue-600">Terms</a> and{" "}
        <a className="text-blue-600">Privacy</a>
      </span>
    </div>
  )
}

function PrimaryButton({ text }: any) {
  return (
    <button className="w-full bg-blue-600 text-white py-2.5 rounded-md hover:bg-blue-700">
      {text}
    </button>
  )
}

function Divider() {
  return <div className="text-center text-gray-400 text-sm">or</div>
}

function GoogleButton({ text }: any) {
  return (
    <button className="w-full border rounded-md py-2.5 flex justify-center items-center gap-3">
      <Image src="/grommet-icons_google.png" alt="Google" width={20} height={20} />
      {text}
    </button>
  )
}

function FooterText({ text, linkText, onClick }: any) {
  return (
    <p className="text-center text-sm text-gray-600 mt-4">
      {text}{" "}
      <button onClick={onClick} className="text-blue-600 font-medium">
        {linkText}
      </button>
    </p>
  )
}
