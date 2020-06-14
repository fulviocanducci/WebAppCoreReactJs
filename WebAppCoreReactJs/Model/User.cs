using System.ComponentModel.DataAnnotations;
using WebAppCoreReactJs.Services.Interfaces;

namespace WebAppCoreReactJs.Model
{
    public class User : IUser
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name required.")]
        [MaxLength(100, ErrorMessage = "Name maximum 100 characters.")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Email required.")]
        [EmailAddress(ErrorMessage = "Email invalid.")]
        public string Email { get; set;  }

        [Required(ErrorMessage = "Password required.")]
        [MinLength(5, ErrorMessage = "Password minimum 5 characters.")]
        public string Password { get; set; }
    }

    public class Todo
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name required.")]
        public string Title { get; set; }

        [Required(ErrorMessage = "Done required.")]
        public bool Done { get; set; }



    }
}
