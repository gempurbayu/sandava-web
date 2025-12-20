"use client";

import { useEffect, useState, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/logo-sandava.png";

// Extended Navigator interface for connection API
interface NetworkInformation extends EventTarget {
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
  onchange?: ((this: NetworkInformation, ev: Event) => void) | null;
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation;
  mozConnection?: NetworkInformation;
  webkitConnection?: NetworkInformation;
}

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isSlowNetwork, setIsSlowNetwork] = useState(false);
  const [showSlowMessage, setShowSlowMessage] = useState(false);

  // Check network speed
  const checkNetworkSpeed = useCallback(() => {
    if (typeof window !== "undefined") {
      const nav = navigator as NavigatorWithConnection;
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

      if (connection) {
        const effectiveType = connection.effectiveType;
        const downlink = connection.downlink || 10;
        const rtt = connection.rtt || 0;

        // Slow network: 2g, slow-2g, or low downlink/high rtt
        const isSlow =
          effectiveType === "slow-2g" ||
          effectiveType === "2g" ||
          effectiveType === "3g" ||
          downlink < 1.5 ||
          rtt > 500;

        setIsSlowNetwork(isSlow);
        return isSlow;
      }
    }
    return false;
  }, []);

  useEffect(() => {
    const isSlow = checkNetworkSpeed();

    // Show loading on route change
    setIsLoading(true);
    setShowSlowMessage(false);

    // Determine loading duration based on network
    const baseDuration = isSlow ? 1500 : 500;

    // Show slow network message after delay
    let slowMessageTimeout: NodeJS.Timeout;
    if (isSlow) {
      slowMessageTimeout = setTimeout(() => {
        setShowSlowMessage(true);
      }, 800);
    }

    // Hide loading after duration
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setShowSlowMessage(false);
    }, baseDuration);

    // Listen for network changes
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    const handleConnectionChange = () => {
      checkNetworkSpeed();
    };

    if (connection) {
      connection.addEventListener?.("change", handleConnectionChange);
    }

    return () => {
      clearTimeout(timeout);
      clearTimeout(slowMessageTimeout);
      if (connection) {
        connection.removeEventListener?.("change", handleConnectionChange);
      }
    };
  }, [pathname, searchParams, checkNetworkSpeed]);

  // Also show loading when page resources are still loading
  useEffect(() => {
    const handleLoad = () => {
      // Page fully loaded
      setTimeout(() => setIsLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center transition-opacity duration-300">
      <div className="flex flex-col items-center gap-8">
        {/* Logo with pulse animation */}
        <div className="relative">
          <Image
            src={logo}
            alt="Sandava"
            className="h-28 w-auto animate-logo-pulse"
            height={112}
            priority
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 rounded-full animate-flow-line" />
        </div>

        {/* Loading text with dots */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-slate-500 text-sm font-medium">Loading</span>
            <span className="flex gap-0.5 ml-1">
              <span
                className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-bounce-loading"
                style={{ animationDelay: "300ms" }}
              />
            </span>
          </div>

          {/* Slow network message */}
          {showSlowMessage && isSlowNetwork && (
            <p className="text-xs text-slate-400 animate-pulse">
              Slow connection detected, please wait...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
