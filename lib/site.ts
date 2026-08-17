export const BASE_PATH = "/about"
export const SITE_ORIGIN = "https://ddakji.kr"
export const SITE_URL = `${SITE_ORIGIN}${BASE_PATH}`

export function assetPath(path: string) {
  return `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`
}
