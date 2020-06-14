using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppCoreReactJs.Services.Interfaces
{
    public interface ITokenResult
    {
        DateTime Expires { get; }
        DateTime Created { get; }
        bool Status { get; }
        string Token { get; }
    }
}
