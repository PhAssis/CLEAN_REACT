import { HttpPostClientSpy } from "../../test/mock-http-client"
import { RemoteAuthentication } from "./remote-authentication"


describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'any_url'
    const HttpPostClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, HttpPostClient)
    await sut.auth()
    expect(HttpPostClient.url).toBe(url)
  })
})