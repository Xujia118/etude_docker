export const albDns = fetch("../config.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load config: ${config.status}`)
    }
    return response.json()
  })
  .then((config) => {
    return config.alb_dns_name;
  })
  .catch((error) => {
    console.error("Error loading config:", error);
    return null;
  });
