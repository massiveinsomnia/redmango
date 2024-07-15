export default interface apiResponse {
  data?: {
    // this will be included in suggestions so if possible use the format if you know that
    statusCode?: number;
    isSuccess?: boolean;
    errorMessage?: Array<string>;
    result: {
      // this will not give suggestion
      [key: string]: string;
    };
  };
  error?: any;
}
