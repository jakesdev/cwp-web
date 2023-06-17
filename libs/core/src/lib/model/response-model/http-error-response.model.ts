export interface HttpErrorResponse {
  error: string;
  messageCode: string;
  statusCode: number;
  timestamp: Date;
}
// TODO: Linh: move this to shared/model