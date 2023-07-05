export interface HttpErrorResponse {
  error: any;
  messageCode: string;
  statusCode: number;
  timestamp: Date;

  status: number;
}
// TODO: Linh: move this to shared/model
