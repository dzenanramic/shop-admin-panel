export type AppConfigType = {
  frontend: {
    idle_timeout_seconds: string;
  };
  backend: {
    baseUrl: string;
  };
};

export async function getAppConfig() {
  try {
    const response = await fetch('/config/appConfig.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error loading appConfig: ${response.statusText}`);
    }

    const config: AppConfigType = await response.json();
    return config;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
