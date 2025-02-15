const response = new Response(null, { status: 204 });

/**
 * Handles incoming requests and returns a 204 No Content response.
 * This handler discards the incoming request and always returns the same response.
 *
 * Args:
 *   _req (Request): The incoming request object.
 *
 * Returns:
 *   Promise<Response>: A promise that resolves to a 204 No Content response.
 */
const handler = (_req: Request): Promise<Response> => {
    return Promise.resolve(response); // 204 No Content
};

export {handler};