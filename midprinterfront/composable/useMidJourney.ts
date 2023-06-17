const MIDJOURNEY_API_KEY = "1cd9f5a5-58b8-4a65-90a3-255c562d8026";
const MIDJOURNEY_BASE_URL = "https://api.midjourneyapi.io";
const promptTest =
  "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg a superhero";

interface IUseMidJourney {
  imagine: (prompt: string, imageUrl?: string) => Promise<any>;
  result: (resultId: string) => Promise<any>;
}

export function useMidJourney(): IUseMidJourney {
  const imagine = async (prompt: string, imageUrl?: string) => {
    const { data: image } = await useFetch(`${MIDJOURNEY_BASE_URL}/imagine`, {
      method: "post",
      body: {
        prompt: `${imageUrl} ${prompt}`,
      },
      headers: {
        Authorization: MIDJOURNEY_API_KEY,
        "Content-Type": "application/json",
      },
    });
    return image;
  };

  const result = async (resultId: string) => {
    const { data: uploadedImageResult } = await useFetch(
      `${MIDJOURNEY_BASE_URL}/result`,
      {
        method: "post",
        body: {
          resultId: resultId,
        },
        headers: {
          Authorization: MIDJOURNEY_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    return uploadedImageResult;
  };

  return {
    imagine,
    result,
  };
}
