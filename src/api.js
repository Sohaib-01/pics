import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID anPUcd1qYOzkax2bsu910TQ4VBUGDY2LJ4iuPM22KDs",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
