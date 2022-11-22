import app from "../app.js";
import supertest from "supertest";

const request = supertest(app);

describe('GET /', () => { // checked can we get response with GET method from back-end side
  it('response to user a sentence', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.msg).toBe("hello from backend to frontend!")
  });

});

describe('POST /weather', () => { // checked 3 different situations in this code block

  it('when user write a wrong city name', async () => { //  if the user write a city name true or not
    const body = {
      cityName: "amster"
    }
    const response = await request.post('/weather').send(body);
    expect(response.statusCode).toBe(500);
  });

  it('user should write a correct city name', async () => { // with true city name, is status code 200 ?
    const body = {
      cityName: "amsterdam"
    }
    const response = await request.post('/weather').send(body);
    expect(response.statusCode).toBe(200);
  });

  it('user should write a city name', async () => { // if users send an empty, status code should be 400
    const body = {
      cityName: ""
    }
    const response = await request.post('/weather').send(body);
    expect(response.statusCode).toBe(400);
  });
});

