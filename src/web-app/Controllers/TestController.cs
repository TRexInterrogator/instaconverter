using Microsoft.AspNetCore.Mvc;

namespace Instaconverter.Controllers {

    [ApiController]
    [Route("/api/test")]
    [Produces("application/json")]
    public class TestController : ControllerBase {

        [HttpGet("me")]
        public IActionResult RunTest() {
            return this.Ok("hi - mom");
        }
    }
}