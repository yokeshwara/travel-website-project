"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"

export default function Newsletter() {
 


  return (
     <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">Subscribe for</h3>
                  <p className="text-xl md:text-2xl">Latest Newsletter</p>
                </div>
    
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <Input type="email" placeholder="Your Email Address" className="bg-white w-full sm:w-80 px-6 py-6" />
                  <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
  )
}
