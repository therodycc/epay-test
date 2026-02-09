import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import { ApiResponse, ApiError } from "@/types/api";

class Provider {
  protected readonly axios: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.axios = axios.create({
      baseURL: config.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      ...config,
    });
  }

  // 🔒 Normaliza cualquier error
  private handleError(error: unknown): { error: ApiError } {
    if (axios.isAxiosError(error)) {
      return {
        error: {
          message:
            error.response?.data?.message ||
            error.message ||
            "Error en la petición",
          status: error.response?.status,
          data: error.response?.data,
        },
      };
    }

    return {
      error: {
        message: "Error inesperado",
      },
    };
  }

  protected async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res: AxiosResponse<T> = await this.axios.get(endpoint, config);
      return res.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected async post<T, D = unknown>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res: AxiosResponse<T> = await this.axios.post(endpoint, data, config);
      return res.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected async put<T, D = unknown>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res: AxiosResponse<T> = await this.axios.put(endpoint, data, config);
      return res.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected async patch<T, D = unknown>(
    endpoint: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res: AxiosResponse<T> = await this.axios.patch(endpoint, data, config);
      return res.data;
    } catch (error) {
      return this.handleError(error);
    }
  }

  protected async delete<T>(
    endpoint: string,
    config?: AxiosRequestConfig
  ): Promise<ApiResponse<T>> {
    try {
      const res: AxiosResponse<T> = await this.axios.delete(endpoint, config);
      return res.data;
    } catch (error) {
      return this.handleError(error);
    }
  }
}

export default Provider;
