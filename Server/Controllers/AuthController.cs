// Controllers/AuthController.cs

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System.Threading.Tasks;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
         public AuthController(YourDbContext dbContext)
    {
        _dbContext = dbContext;
    }
            private readonly YourDbContext _dbContext;


    // [HttpPost("login")]
    // public async Task<IActionResult> Login([FromBody] Gebruikers model)
    // {
    //     // Validate user credentials (replace this with your authentication logic)
    //     if (model.Email == "user@example.com" && model.Password == "password123")
    //     {
    //         return Ok(new { success = true, message = "Login successful" });
    //     }

    //     return Unauthorized(new { success = false, message = "Invalid credentials" });
    // }
    
      [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] Gebruikers model)
    {
        // Check if the required fields are provided
        if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
        {
            return BadRequest("Email and password are required for login.");
        }

        // Authenticate user
        Gebruikers authenticatedUser = _dbContext.AuthenticateUser(model.Email, model.Password);

        if (authenticatedUser != null)
        {
            // You may generate a token or perform additional actions for successful login
            return Ok("Login successful.");
        }
        else
        {
            return Unauthorized("Invalid email or password.");
        }
    }
      [HttpPost("register")]
    public IActionResult RegisterUser([FromBody] Gebruikers user)
    {
        // Add any additional validation logic

        _dbContext.RegisterUser(user);
        return Ok("User registered successfully.");
    }
}
