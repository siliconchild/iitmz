export function isDriveResourceUrl(url: string): boolean {
  // Simple regex to check if the URL starts with "/drive-resources/"
  const driveResourceRegex = /^\/drive-resources\//;
  return driveResourceRegex.test(url);
}
