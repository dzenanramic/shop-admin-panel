export type AppVersionType = {
  version: string;
  buildDate: string;
};

export async function getAppVersion() {
  try {
    const response = await fetch('/version.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error loading appVersion: ${response.statusText}`);
    }

    const config: AppVersionType = await response.json();
    return config;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
