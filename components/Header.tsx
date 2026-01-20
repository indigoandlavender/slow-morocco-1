"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// Currency options with exchange rates (EUR as base = 1)
const currencies = [
  { code: "EUR", symbol: "€", rate: 1 },
  { code: "USD", symbol: "$", rate: 1.08 },
  { code: "GBP", symbol: "£", rate: 0.86 },
  { code: "MAD", symbol: "DH", rate: 10.8 },
];

// Language options
const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "es", label: "ES" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Language & Currency state
  const [currentLang, setCurrentLang] = useState("en");
  const [currentCurrency, setCurrentCurrency] = useState("EUR");
  const [langOpen, setLangOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  
  const langRef = useRef<HTMLDivElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Store preferences in localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("slowmorocco_lang");
    const savedCurrency = localStorage.getItem("slowmorocco_currency");
    if (savedLang) setCurrentLang(savedLang);
    if (savedCurrency) setCurrentCurrency(savedCurrency);
  }, []);

  const handleLangChange = (code: string) => {
    setCurrentLang(code);
    localStorage.setItem("slowmorocco_lang", code);
    setLangOpen(false);
    // In production, this would trigger i18n route change
  };

  const handleCurrencyChange = (code: string) => {
    setCurrentCurrency(code);
    localStorage.setItem("slowmorocco_currency", code);
    setCurrencyOpen(false);
    // Dispatch event for other components to listen
    window.dispatchEvent(new CustomEvent("currencyChange", { detail: code }));
  };

  const currentCurrencyData = currencies.find((c) => c.code === currentCurrency) || currencies[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-background/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-sm tracking-[0.2em] text-foreground">
              SLOW MOROCCO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/journeys"
              className="text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Journeys
            </Link>
            <Link
              href="/stories"
              className="text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Stories
            </Link>
            <Link
              href="/places"
              className="text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              Places
            </Link>
            <Link
              href="/about"
              className="text-[11px] tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>

            {/* Divider */}
            <div className="w-px h-4 bg-foreground/20" />

            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => {
                  setLangOpen(!langOpen);
                  setCurrencyOpen(false);
                }}
                className="flex items-center gap-1 text-[11px] tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors"
              >
                {languages.find((l) => l.code === currentLang)?.label || "EN"}
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border shadow-lg min-w-[60px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`block w-full px-4 py-2 text-left text-[11px] tracking-[0.1em] uppercase transition-colors ${
                        currentLang === lang.code
                          ? "bg-foreground/5 text-foreground"
                          : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Selector */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => {
                  setCurrencyOpen(!currencyOpen);
                  setLangOpen(false);
                }}
                className="flex items-center gap-1 text-[11px] tracking-[0.1em] uppercase text-foreground/60 hover:text-foreground transition-colors"
              >
                {currentCurrencyData.symbol} {currentCurrency}
                <ChevronDown className="w-3 h-3" />
              </button>
              {currencyOpen && (
                <div className="absolute top-full right-0 mt-2 bg-background border border-border shadow-lg min-w-[80px]">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handleCurrencyChange(currency.code)}
                      className={`block w-full px-4 py-2 text-left text-[11px] tracking-[0.1em] uppercase transition-colors ${
                        currentCurrency === currency.code
                          ? "bg-foreground/5 text-foreground"
                          : "text-foreground/60 hover:bg-foreground/5 hover:text-foreground"
                      }`}
                    >
                      {currency.symbol} {currency.code}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plan Your Trip button */}
            <Link
              href="/plan-your-trip"
              className="text-[11px] tracking-[0.15em] uppercase border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              Plan Your Trip
            </Link>
          </nav>

          {/* Mobile: Currency/Lang + Menu */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Currency/Lang compact */}
            <div className="flex items-center gap-2 text-[10px] tracking-[0.1em] uppercase text-foreground/60">
              <button
                onClick={() => {
                  const idx = languages.findIndex((l) => l.code === currentLang);
                  const next = languages[(idx + 1) % languages.length];
                  handleLangChange(next.code);
                }}
              >
                {languages.find((l) => l.code === currentLang)?.label}
              </button>
              <span className="text-foreground/30">|</span>
              <button
                onClick={() => {
                  const idx = currencies.findIndex((c) => c.code === currentCurrency);
                  const next = currencies[(idx + 1) % currencies.length];
                  handleCurrencyChange(next.code);
                }}
              >
                {currentCurrencyData.symbol}
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 tap-target"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-8 space-y-1 border-t border-border bg-background">
            <Link
              href="/journeys"
              className="block text-sm tracking-[0.15em] uppercase py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Journeys
            </Link>
            <Link
              href="/stories"
              className="block text-sm tracking-[0.15em] uppercase py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Stories
            </Link>
            <Link
              href="/places"
              className="block text-sm tracking-[0.15em] uppercase py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Places
            </Link>
            <Link
              href="/about"
              className="block text-sm tracking-[0.15em] uppercase py-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            {/* Mobile Language/Currency selectors */}
            <div className="py-4 border-t border-border mt-4 flex items-center gap-6">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-2">Language</p>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`px-3 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        currentLang === lang.code
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20 text-foreground/60"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-foreground/40 mb-2">Currency</p>
                <div className="flex gap-2">
                  {currencies.map((currency) => (
                    <button
                      key={currency.code}
                      onClick={() => handleCurrencyChange(currency.code)}
                      className={`px-3 py-1.5 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        currentCurrency === currency.code
                          ? "border-foreground bg-foreground text-background"
                          : "border-foreground/20 text-foreground/60"
                      }`}
                    >
                      {currency.symbol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/plan-your-trip"
                className="inline-block text-sm tracking-[0.15em] uppercase border border-foreground px-8 py-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Plan Your Trip
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
