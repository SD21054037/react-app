using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Model;
using Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace Controller
{

    [ApiController]
    [Route("[controller]")]
    public class GebruikerController : ControllerBase
    {
        private readonly yourDbContext _dbContext;
        public GebruikerController(yourDbContext dbContext)
        {
            _dbContext = dbContext;
        }

    [HttpPost]
        public async Task<ActionResult<dbGebruiker>> AddUser([FromBody] dbGebruiker newUser)
        {
            try
            {
                newUser.Datum_Registratie = DateTime.Now; // Set the registration date

                _dbContext.Gebruikers.Add(newUser);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction("GetAllUsers", new { id = newUser.GebruikerID }, newUser);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to add user. Error: {ex.Message}");
            }
        }
        [HttpGet(Name = "GetGebruiker")]
        public async Task<ActionResult<IEnumerable<dbGebruiker>>> GetAllUsers()
        {
            var users = await _dbContext.Gebruikers.ToListAsync();
            return Ok(users);
        }
        

        [HttpGet("{gebruikerID}", Name = "GetGebruikerById")]
        public async Task<ActionResult<dbGebruiker>> GetGebruikerById(int gebruikerID)
        {
                var gebruiker = await _dbContext.Gebruikers.FindAsync(gebruikerID);         
                if (gebruiker == null)
                {
                    return NotFound(); // Return 404 if user with the specified ID is not found
                     }
                     return Ok(gebruiker);
}


    

        [HttpPut("{id}/update")]
        public async Task<ActionResult<dbGebruiker>> UpdateUser(int id, [FromBody] dbGebruiker updatedUser)
        {
            try
            {
        var user = await _dbContext.Gebruikers.FindAsync(id);

        if (user == null)
        {
            return NotFound($"User with ID {id} not found.");
        }

        if (!string.IsNullOrEmpty(updatedUser.Voornaam))
        {
            user.Voornaam = updatedUser.Voornaam;
        }

        if (!string.IsNullOrEmpty(updatedUser.Achternaam))
        {
            user.Achternaam = updatedUser.Achternaam;
        }

        if (!string.IsNullOrEmpty(updatedUser.Email))
        {
            user.Email = updatedUser.Email;
        }

        if (!string.IsNullOrEmpty(updatedUser.Telefoonnummer))
        {
            user.Telefoonnummer = updatedUser.Telefoonnummer;
        }

        if (!string.IsNullOrEmpty(updatedUser.Password))
        {
            user.Password = updatedUser.Password;
        }

        await _dbContext.SaveChangesAsync();

        return Ok(user);
    }
    catch (Exception ex)
    {
        return BadRequest($"Failed to update user. Error: {ex.Message}");
    }
}



        
    }
}
