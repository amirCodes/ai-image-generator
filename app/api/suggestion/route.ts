export async function GET(request: Request) {
    try {
      // Connect to mcrft azure func endpoint
      const response = await fetch(
        `${
          process.env.VERCEL_URL || "http://localhost:3000"
        }/api/getChatGPTSuggestion`,
        {
          cache: "no-store",
        }
      );
  
      const textData = await response.text();
  
      return new Response(JSON.stringify(textData.trim()), {
        status: 200,
      });
    } catch (error) {
      console.log("error inside get route",error)
      if (error instanceof Error) {
        return new Response(error.message, { status: 500 });
      }
  
      return new Response("Internal Server Error", { status: 500 });
    }
  }