import FirecrawlApp from "@mendable/firecrawl-js";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  try {
    const result = await firecrawl.extract({
      urls: [url],
      prompt: `
        Extract:
        - productName (string)
        - currentPrice (number)
        - currencyCode (string like INR, USD)
        - productImageUrl (string)
      `,
      schema: {
        type: "object",
        properties: {
          productName: { type: "string" },
          currentPrice: { type: "number" },
          currencyCode: { type: "string" },
          productImageUrl: { type: "string" },
        },
        required: ["productName", "currentPrice"],
      },
    });


    const data = result.data;

  

    if (!data || !data.productName) {
      throw new Error("No data extracted");
    }

    return data;
  } catch (error) {
    console.error("Firecrawl extract error:", error);
    throw new Error(error.message || "Scraping failed");
  }
}