const TIMESTAMP_ONE_DAY = 1000 * 60 * 60 * 24; // 86400000

// argument can be anything but string:
const validateNonStringCache = (cached) => {
  if (!cached || !cached.updatedAt) return null;
  if (cached.updatedAt < Date.now() - TIMESTAMP_ONE_DAY) return null;

  return cached;
};

export const getCachedItem = (item) => {
  const cached_string = localStorage.getItem(item);
  if (!cached_string) return null;

  try {
    const parsed = JSON.parse(cached_string);
    if (typeof parsed !== "string") {
      return validateNonStringCache(parsed);
    }
  } catch {}
  return cached_string;
};

export const updateCachedItem = (payload, item) => {
  if (!payload) return;
  let to_save = "";
  if (typeof payload === "string") {
    to_save = payload;
  } else {
    to_save = JSON.stringify({ ...payload, updatedAt: Date.now() });
  }
  localStorage.setItem(item, to_save);
};

export const removeCachedItem = (item) => localStorage.removeItem(item);
