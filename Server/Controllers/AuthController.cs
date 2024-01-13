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
        // Add any additional validation logic

        _dbContext.RegisterUser(user);
        return Ok("User registered successfully.");
    }
    [HttpPatch("{userId}/update-name")]
    public IActionResult UpdateName(int userId, [FromBody] Gebruikers request)
    {
        // Validate request
        // ...

        // Retrieve user from the database
        var user = _dbContext.Gebruikers.Find(userId);

        // Update name attributes
        user.Voornaam = request.Voornaam;
        user.Achternaam = request.Achternaam;

        // Save changes to the database
        _dbContext.SaveChanges();

        return Ok("Name updated successfully.");
    }

    [HttpPatch("{userId}/update-password")]
    public IActionResult UpdatePassword(int userId, [FromBody] Gebruikers request)
    {
        // Validate request
        // ...

        // Retrieve user from the database
        var user = _dbContext.Gebruikers.Find(userId);

        // Update password attribute
        user.Password = request.Password;

        // Save changes to the database
        _dbContext.SaveChanges();

        return Ok("Password updated successfully.");
    }

    [HttpPatch("{userId}/update-email")]
    public IActionResult UpdateEmail(int userId, [FromBody] Gebruikers request)
    {
        // Validate request
        // ...

        // Retrieve user from the database
        var user = _dbContext.Gebruikers.Find(userId);

        // Update email attribute
        user.Email = request.Email;

        // Save changes to the database
        _dbContext.SaveChanges();

        return Ok("Email updated successfully.");
    }

    [HttpPatch("{userId}/update-telefoonnummer")]
    public IActionResult UpdateTelefoonnummer(int userId, [FromBody] Gebruikers request)
    {
        // Validate request
        // ...

        // Retrieve user from the database
        var user = _dbContext.Gebruikers.Find(userId);

        // Update telefoonnummer attribute
        user.Telefoonnummer = request.Telefoonnummer;

        // Save changes to the database
        _dbContext.SaveChanges();

        return Ok("Telefoonnummer updated successfully.");
    }





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
   
}
