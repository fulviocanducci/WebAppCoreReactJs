using Microsoft.AspNetCore.Mvc;

namespace WebAppCoreReactJs.Services.Interfaces
{
    public interface ITokenService
    {
        TokenResult GenerateTokenResult(IUser user);
        JsonResult GenerateTokenJsonResult(IUser user);
    }
}
