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

    [HttpPost("register")]
    public IActionResult RegisterUser([FromBody] Gebruikers user)
{
    Console.WriteLine("well it came this far");

    try
    {
        _dbContext.RegisterUser(user);
        return Ok("User registered successfully.");
    }
    catch (Exception ex)
    {
        Console.Error.WriteLine($"Error registering user: {ex.Message}");
        return StatusCode(500, "Internal Server Error");
    }
}
    //    [HttpPost("register")]
    // public IActionResult RegisterUser([FromBody] Gebruikers user)
    // {
    //     Console.WriteLine("well it came this far");

    //     _dbContext.RegisterUser(user);
    //     return Ok("User registered successfully.");
    // }
    [HttpPatch("{userId}/update-name")]
    public IActionResult UpdateName(int userId, [FromBody] Gebruikers request)
    {
        

        var user = _dbContext.Gebruikers.Find(userId);

        user.Voornaam = request.Voornaam;
        user.Achternaam = request.Achternaam;

        _dbContext.SaveChanges();

        return Ok("Name updated successfully.");
    }

    [HttpPatch("{userId}/update-password")]
    public IActionResult UpdatePassword(int userId, [FromBody] Gebruikers request)
    {
      

        var user = _dbContext.Gebruikers.Find(userId);

        user.Password = request.Password;

        _dbContext.SaveChanges();

        return Ok("Password updated successfully.");
    }

    [HttpPatch("{userId}/update-email")]
    public IActionResult UpdateEmail(int userId, [FromBody] Gebruikers request)
    {
    
        var user = _dbContext.Gebruikers.Find(userId);

        user.Email = request.Email;

        _dbContext.SaveChanges();

        return Ok("Email updated successfully.");
    }

    [HttpPatch("{userId}/update-telefoonnummer")]
    public IActionResult UpdateTelefoonnummer(int userId, [FromBody] Gebruikers request)
    {
       
        var user = _dbContext.Gebruikers.Find(userId);

        user.Telefoonnummer = request.Telefoonnummer;

        _dbContext.SaveChanges();

        return Ok("Telefoonnummer updated successfully.");
    }





      [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] Gebruikers model)
    {
        if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
        {
            return BadRequest("Email and password are required for login.");
        }

        Gebruikers authenticatedUser = _dbContext.AuthenticateUser(model.Email, model.Password);

        if (authenticatedUser != null)
        {
            return Ok("Login successful.");
        }
        else
        {
            return Unauthorized("Invalid email or password.");
        }
    }
   
}
