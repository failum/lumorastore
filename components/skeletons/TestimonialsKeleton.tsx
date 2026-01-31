"use client";

import { motion } from "motion/react";

export default function TestimonialsSkeleton() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
          
          <div className="h-12 md:h-16 bg-gray-200 rounded-lg max-w-2xl mx-auto mb-4 animate-pulse"></div>
          
          <div className="h-6 bg-gray-200 rounded-lg max-w-3xl mx-auto animate-pulse"></div>
        </div>

        {/* Main Carousel Skeleton */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative h-[500px]">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 h-full">
              <div className="grid md:grid-cols-2 h-full">
                {/* Left Side Skeleton */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                      <div className="w-24 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="space-y-3 mb-8">
                      <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-5/6"></div>
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-4/6"></div>
                      <div className="h-6 bg-gray-200 rounded animate-pulse w-3/6"></div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="h-8 bg-gray-200 rounded w-48 mb-2 animate-pulse"></div>
                    <div className="flex items-center justify-between">
                      <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side Skeleton */}
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 p-8 md:p-12 flex flex-col justify-center items-center relative overflow-hidden">
                  <div className="w-32 h-32 rounded-full bg-gray-300 mb-6 animate-pulse"></div>
                  
                  <div className="text-center">
                    <div className="h-16 bg-gray-300 rounded-lg w-24 mx-auto mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-32 mx-auto mb-4 animate-pulse"></div>
                    
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                      ))}
                    </div>
                    
                    <div className="mt-8 text-center">
                      <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-2 animate-pulse"></div>
                      <div className="w-48 bg-gray-300 rounded-full h-2 animate-pulse mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Skeleton */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
            
            <div className="flex gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
              ))}
            </div>
            
            <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Testimonials Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6"></div>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                  <div className="w-4 h-4 bg-gray-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section Skeleton */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="h-16 bg-gray-300 rounded-lg w-24 mx-auto md:mx-0 mb-2 animate-pulse"></div>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gray-300 rounded-full animate-pulse"></div>
                ))}
              </div>
              <div className="h-5 bg-gray-300 rounded w-32 animate-pulse"></div>
            </div>
            
            <div className="space-y-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-20">
                    <div className="h-6 bg-gray-300 rounded w-4 animate-pulse"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-300 rounded w-8 animate-pulse ml-2"></div>
                  </div>
                  <div className="flex-1 h-3 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="h-5 bg-gray-300 rounded w-8 animate-pulse"></div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="h-16 bg-gray-300 rounded-lg w-24 mx-auto mb-2 animate-pulse"></div>
              <div className="h-5 bg-gray-300 rounded w-32 mx-auto mb-4 animate-pulse"></div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 rounded-full animate-pulse">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                <div className="h-4 bg-gray-400 rounded w-24"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Skeleton */}
        <div className="mt-16 text-center">
          <div className="h-10 bg-gray-200 rounded-lg max-w-2xl mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-lg max-w-3xl mx-auto mb-8 animate-pulse"></div>
          <div className="px-8 py-4 bg-gray-200 rounded-xl w-48 h-12 mx-auto animate-pulse"></div>
        </div>

        {/* Shimmer Effect Overlay */}
        <motion.div
          className="fixed inset-0 pointer-events-none -z-10"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-64 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}