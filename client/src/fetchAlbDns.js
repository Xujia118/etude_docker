export const albDns = fetch('../config.json')
  .then(response => response.json())
  .then(config => config.alb_dns_name)
  .catch(error => {
    console.error('Error loading config:', error);
    return null;
  });