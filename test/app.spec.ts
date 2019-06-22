import request from "supertest";
import app from "@/app";

describe("GET /random-url", () => {
    it("should return Hello World!", (done) => {
        request(app).get("/")
            .expect("Hello World!", done);
    });
    it("should return 404", (done) => {
        request(app).get("/reset")
            .expect(404, done);
    });
});
