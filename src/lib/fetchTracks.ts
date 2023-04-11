const apiToken: string =
  'BQDaM7OCpA8xOs38g8FzH6CyR0ZSY7xwyiDab2kJ3gfUGs9yqzv_UymdYxnLbRO_tg3jiLRNurQPrNff9l0vRTF0-EGk4g4-tPn9nme2qTEa7eQ3r-3mxqwR80UMwW-11R6tTXPYGwwjElnJWXtmBU6w1-5EeU6ZVs3ygZRJJactYStYOnuA18iCI6SAq3lWf4gDg4AdvlpkmOtCGy479btsVtwxbz5qAIZ6ZkPpbvhArfDpPYW4vUnaOFm-YwO8dZ9eUlDChKUIWqi7T-fbwJjRnXXBdH8dOAtCGMt-DxpcoH5yFHhizmT2tZyrCSmCc4gs2W0SIvoBN9pK1XTOiMyC';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
    throw new Error(`Fetching tracks failed with status ${response.status}`);
  }
  const data = (await response.json()) as { items: unknown[] };

  return data.items;
};
