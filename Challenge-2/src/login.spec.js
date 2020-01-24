import login from "./login";

describe("login", () => {
  it("fails if email is not found", async () => {
    const resp = await login("invalidEmail", "");
    expect(resp.success).toBe(false);
  });

  it("fails if email is valid but password is not", async () => {
    const resp = await login("safe@example.com", "invalidPassword");
    expect(resp.success).toBe(false);
  });

  it("succeeds if email and password are valid and there are no recent breaches", async () => {
    const resp = await login("safe@example.com", "pw");
    expect(resp.success).toBe(true);
  });

  it("suggests a password change and provides a list of breaches if account was involved with breaches since lastLogin", async () => {
    const resp = await login("test@example.com", "pw");
    expect(resp.meta.suggestPasswordChange).toBe(true);
  });
});
