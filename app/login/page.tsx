"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Login logic will go here
    console.log("Login attempt with:", { username, password });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans">
      {/* Left Side: Visual/Intro (Hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-brand-red-600 to-brand-red-800 items-center justify-center p-12 relative overflow-hidden text-white">
        <div className="relative z-10 max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
             <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-white group-hover:text-brand-red-700 transition-all">
                RC
              </div>
              <span className="text-xl font-bold tracking-tight">SATRANÇ</span>
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Gelişim Yolculuğuna Devam Et.
          </h1>
          <p className="text-lg text-brand-red-50/80 mb-8 leading-relaxed">
            Kişiselleştirilmiş eğitim planlarına, turnuva analizlerine ve gelişim grafiklerine erişmek için hesabına giriş yap.
          </p>
          
          <div className="space-y-4">
             {[
               "Ders Programı Takibi",
               "Özel Analiz Raporları",
               "Ödev ve Alıştırmalar"
             ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-white">{text}</span>
                </div>
             ))}
          </div>
        </div>
        
        {/* Decorative chess pattern/elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right Side: Form */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex md:hidden justify-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                RC
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">
                SATRANÇ
              </span>
            </Link>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Giriş Yap
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Hesabın yok mu?{" "}
            <Link href="#" className="font-semibold text-brand-red-600 hover:text-brand-red-500">
              Yeni üyelik oluştur
            </Link>
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-900">
                Kullanıcı Adı
              </Label>
              <Input
                id="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 focus-visible:ring-brand-red-600"
                placeholder="Kullanıcı Adı"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">
                  Şifre
                </Label>
                <Link href="#" className="text-sm font-semibold text-brand-red-600 hover:text-brand-red-500">
                  Şifremi unuttum?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 focus-visible:ring-brand-red-600"
                placeholder="••••••••"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 rounded-xl bg-brand-red-600 hover:bg-brand-red-700 text-white font-semibold shadow-md shadow-brand-red-600/10 transition-all"
            >
              Giriş Yap
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
}
