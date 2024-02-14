declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: string;
      DIALECT: "sqlite";
      STORAGE: string;
    }
  }
}
export {};
