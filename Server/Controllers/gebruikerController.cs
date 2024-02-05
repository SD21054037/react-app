using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Model;
using Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace Controllers
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


        [HttpPut("{id}")]
        public async Task<ActionResult<dbGebruiker>> UpdateUser(int id, [FromBody] dbGebruiker updatedUser)
        {
            try
            {
                var existingUser = await _dbContext.Gebruikers.FindAsync(id);

                if (existingUser == null)
                {
                    return NotFound($"User with ID {id} not found");
                }

                // Update the properties that are allowed to be modified
                existingUser.Voornaam = updatedUser.Voornaam ?? existingUser.Voornaam;
                existingUser.Achternaam = updatedUser.Achternaam ?? existingUser.Achternaam;
                existingUser.Telefoonnummer = updatedUser.Telefoonnummer ?? existingUser.Telefoonnummer;
                existingUser.Postcode = updatedUser.Postcode ?? existingUser.Postcode;
                existingUser.Type_Beperking = updatedUser.Type_Beperking ?? existingUser.Type_Beperking;
                existingUser.Hulpmiddelen = updatedUser.Hulpmiddelen ?? existingUser.Hulpmiddelen;
                existingUser.Aandoening_Ziekte = updatedUser.Aandoening_Ziekte ?? existingUser.Aandoening_Ziekte;
                existingUser.Voorkeur_Onderzoek = updatedUser.Voorkeur_Onderzoek ?? existingUser.Voorkeur_Onderzoek;
                existingUser.Verstandelijkheid = updatedUser.Verstandelijkheid ?? existingUser.Verstandelijkheid;
                existingUser.Voorkeur_Benadering = updatedUser.Voorkeur_Benadering ?? existingUser.Voorkeur_Benadering;
                existingUser.Commerciele_Benadering = updatedUser.Commerciele_Benadering ?? existingUser.Commerciele_Benadering;
                existingUser.Geboortedatum = updatedUser.Geboortedatum ?? existingUser.Geboortedatum;

                await _dbContext.SaveChangesAsync();

                return Ok(existingUser);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to update user. Error: {ex.Message}");
            }
        }




    }
}
