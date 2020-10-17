export function number(a: unknown): number {
  return Number(a);
}

export function string(a: unknown): string {
  return `${a}`;
}

export function boolean(a: unknown): boolean {
  return !!a;
}

export function date(val: string | number | undefined | null): Date | null {
  // Invalid date instances are quite problematic
  // so we need to deal with it properly by default
  if (val === null || val === undefined) {
    return null;
  }
  const d = new Date(val);
  return isNaN(d.getTime()) ? null : d;
}

export function booleanAttr(val: unknown): boolean {
  return val || val === '' ? true : false;
}
