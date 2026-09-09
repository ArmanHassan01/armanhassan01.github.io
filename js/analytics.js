(function () {
  const data = window.portfolioData;
  if (!data || !data.analytics || !data.analytics.enabled) return;

  const id = (data.analytics.measurementId || "").trim();
  if (!/^G-[A-Z0-9]+$/i.test(id)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { anonymize_ip: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);

  const params = new URLSearchParams(window.location.search);
  window.portfolioCampaign = {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    utm_content: params.get('utm_content') || undefined,
    utm_term: params.get('utm_term') || undefined
  };

  window.trackPortfolioEvent = function (name, payload = {}) {
    if (!window.gtag) return;
    const cleanCampaign = Object.fromEntries(Object.entries(window.portfolioCampaign || {}).filter(([, v]) => v));
    window.gtag('event', name, { ...cleanCampaign, ...payload });
  };
})();
