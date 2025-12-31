import { useEffect, useState } from 'react';

function SnowFarmParallax() {
  const [needsFallback, setNeedsFallback] = useState(false);

  useEffect(() => {
    // Detect older iOS versions that don't support background-attachment: fixed properly
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (isIOS) {
      // Extract iOS version
      const match = navigator.userAgent.match(/OS (\d+)_/);
      const iOSVersion = match ? parseInt(match[1]) : 0;

      // iOS 15.4+ (2022) has proper support, older versions need fallback
      setNeedsFallback(iOSVersion < 15);
    }
  }, []);

  return (
    <section
      className={`snow-farm-parallax ${needsFallback ? 'mobile-fallback' : ''}`}
      aria-label="Snow Farm Vineyard"
    ></section>
  );
}

export default SnowFarmParallax;