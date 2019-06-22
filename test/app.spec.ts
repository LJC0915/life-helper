import request from "supertest";
import app from "@/app";

describe("app spec", () => {
  it("should return Hello World!", (done) => {
    request(app)
      .get("/")
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.text).toBe("Hello World!");
      });

    done();
  });
  it("should return 404", (done) => {
    request(app)
      .get("/reset")
      .then((response) => {
        expect(response.status).toBe(404);
      });

    done();
  });
});
