type ClassValue = string | number | null | undefined | false | ClassValue[];

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx/tailwind-merge to avoid extra dependencies.
 */
export function cn(...inputs: ClassValue[]): string {
  const flatten = (values: ClassValue[]): string[] =>
    values.flatMap((value) => {
      if (!value) return [];
      if (Array.isArray(value)) return flatten(value);
      return [String(value)];
    });

  return flatten(inputs).join(" ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
