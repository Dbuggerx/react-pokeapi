export class ApiError extends Error {
  constructor(response: Response) {
    super(response.status.toString());
  }
}
