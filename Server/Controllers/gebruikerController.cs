using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Model;
using Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

// namespace _20jan.Controller
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

        [HttpGet(Name = "GetGebruiker")]
        public async Task<ActionResult<IEnumerable<dbGebruiker>>> GetAllUsers()
        {
            var users = await _dbContext.Gebruikers.ToListAsync();
            return Ok(users);
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





    }
}
