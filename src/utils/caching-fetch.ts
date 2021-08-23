function cloneResponseWithExpiresHeader(
  response: Response,
  expiresDate: Date
): Response {
  const newHeaders = new Headers(response.headers);
  newHeaders.set("expires", expiresDate.toUTCString());
  return new Response(response.body, { headers: newHeaders });
}

export async function cachingFetch(url: string): Promise<string> {
  const cacheStorage = await caches.open("markdown");
  const cacheResponse = await cacheStorage.match(url);
  if (cacheResponse) {
    const expiresDate = new Date(
      cacheResponse.headers.get("expires") as string
    );
    if (Date.now() <= expiresDate.getTime()) {
      console.log(`[${url}] response cached data. (expires: ${expiresDate})`);
      return cacheResponse.text();
    } else {
      console.log(`[${url}] cache data expired !!`);
    }
  }

  console.log(`fetch [${url}]`);

  const response = await fetch(url);

  await cacheStorage.put(
    url,
    cloneResponseWithExpiresHeader(
      response.clone(),
      new Date(Date.now() + 1000 * 60) // 60sec
    )
  );

  return response.text();
}
