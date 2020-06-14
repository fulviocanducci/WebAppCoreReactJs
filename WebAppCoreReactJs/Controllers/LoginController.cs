using Microsoft.AspNetCore.Mvc;
using System.Linq;
using WebAppCoreReactJs.Model;
using WebAppCoreReactJs.Services.Interfaces;

namespace WebAppCoreReactJs.Controllers
{
    [Route("api/login")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        public DatabaseContextApi Context { get; }
        public ITokenService TokenService { get; }

        public LoginController(DatabaseContextApi context, ITokenService tokenService)
        {
            Context = context;
            TokenService = tokenService;
        }


        [HttpPost]
        [Route("auth")]
        public IActionResult Authenticate(Login login)
        {
            if (ModelState.IsValid)
            {
                User user = CheckLogin(login);
                if (user == null)
                {
                    return NotFound(new { message = "User no found" });
                }
                return TokenService.GenerateTokenJsonResult(user);
            }
            return BadRequest(ModelState);
        }

        [NonAction]
        protected User CheckLogin(Login login)
        {
            return Context
               .User
               .Where(x => x.Email == login.Email && x.Password == login.Password)
               .FirstOrDefault();
        }
    }
}
