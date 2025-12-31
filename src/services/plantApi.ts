import axios from 'axios';

const API_URL = 'https://apiplantdisease.kusumanoor.com';

export interface DetectionResponse {
  disease: string;
  confidence: number;
  severity: string;
  description: string;
  symptoms: string[];
  treatment: string[];
}

interface DetectionApiResponse {
  status: string;
  result: DetectionResponse;
}

export const detectPlantDisease = async (
  imageFile: File
): Promise<DetectionResponse> => {
  const formData = new FormData();
  formData.append('file', imageFile);

  const response = await axios.post<DetectionApiResponse>(
    `${API_URL}/predict`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }
  );

  return response.data.result;
};
