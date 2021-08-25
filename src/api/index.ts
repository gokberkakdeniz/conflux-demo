/* eslint-disable class-methods-use-this */

export type LoginResult =
  | {
      token: string;
    }
  | {
      error: string;
    };

interface Api {
  login: (username: string, password: string) => Promise<LoginResult>;
}

class FakeApi implements Api {
  async login(username: string, password: string): Promise<LoginResult> {
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Origin": "*",
      },
      body: JSON.stringify({ username, password }),
    });

    return res.json();
  }
}

const instance: Api = new FakeApi();

export default instance;
