export type ApiResponse<T> = T | { error: ApiError };

export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
}
