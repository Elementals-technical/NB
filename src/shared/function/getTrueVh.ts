export function getTrueVh() {
    setTimeout(() => {
      const vh = window.innerHeight * 0.01;
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      // getPlayerAndInterfaceHeight(vh)
  
      // // We listen to the resize event
  
      window.addEventListener("resize", () => {
        // We execute the same script as before
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
        // getPlayerAndInterfaceHeight(vh)
      });
    }, 0);
  }