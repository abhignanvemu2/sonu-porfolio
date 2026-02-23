import { useEffect, useState } from "react";

declare global {
  interface Window {
    google: any;
  }
}

const CLIENT_ID = "867312147055-plcrk0kvbu0sap4objc9cabubhpuvrms.apps.googleusercontent.com";

export default function GoogleDriveFiles() {
  const [files, setFiles] = useState<any[]>([]);
  const [tokenClient, setTokenClient] = useState<any>(null);

  useEffect(() => {
    if (window.google) {
      const client = window.google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: "https://www.googleapis.com/auth/drive.readonly",
        callback: async (response: any) => {
          const accessToken = response.access_token;

          const res = await fetch(
            "https://www.googleapis.com/drive/v3/files?pageSize=10&fields=files(id,name,mimeType)",
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const data = await res.json();
          setFiles(data.files);
        },
      });

      setTokenClient(client);
    }
  }, []);

  const handleLogin = () => {
    tokenClient.requestAccessToken();
  };

  return (
    <div>
      <button onClick={handleLogin}>Connect Google Drive</button>

      <ul>
        {files.map((file) => (
          <li key={file.id}>
            {file.name} ({file.mimeType})
          </li>
        ))}
      </ul>
    </div>
  );
}