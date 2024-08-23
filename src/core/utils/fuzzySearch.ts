import Fuse from "fuse.js";

export const fuzzySearch = <T extends object>({
  items,
  key,
  search,
}: {
  items: readonly T[];
  key: keyof T;
  search: string;
}) => {
  const fuse = new Fuse(items, {
    distance: 100,
    keys: [key as string],
    threshold: 0.3,
  });
  return fuse.search(search).map((result) => result.item);
};
