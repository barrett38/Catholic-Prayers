import { useEffect } from "react";

// Use this for the home page
export function useFadingEntry0(setShowContent) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Scroll to top on page load

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Set Time here

    return () => clearTimeout(timer);
  }, [setShowContent]);
}

// This can be used for other pages
export function useFadingEntry1(setShowContent) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page load

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3800); // Set Time here

    return () => clearTimeout(timer);
  }, [setShowContent]);
}

///////////////////////////////////////
////// Using useFadingEntry's /////////
///////////////////////////////////////

// import React, { useState } from "react";
// import { useFadingEntry } from "./fadingEntry";

// export default function ExampleComponent() {
//   const [showContent, setShowContent] = useState(false);
//   useFadingEntry(setShowContent);

// +SaveCode+
