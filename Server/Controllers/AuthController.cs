// Controllers/AuthController.cs

using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] Gebruikers model)
    {
        // Validate user credentials (replace this with your authentication logic)
        if (model.Email == "user@example.com" && model.Password == "password123")
        {
            return Ok(new { success = true, message = "Login successful" });
        }

        return Unauthorized(new { success = false, message = "Invalid credentials" });
    }
}
