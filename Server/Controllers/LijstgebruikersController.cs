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
    public class Lijstgebruikers : ControllerBase
    {
        private readonly yourDbContext _dbContext;

        public Lijstgebruikers(yourDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult GetAllOnderzoekGebruikers()
        {
            try
            {
                List<dbLijstgebruikers> allOnderzoekGebruikers = _dbContext.lijstgebruikers.ToList();

                return Ok(allOnderzoekGebruikers);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve OnderzoekGebruikers. Error: {ex.Message}");
            }
        }

       [HttpPost("{onderzoekId}/{gebruikerId}")]
public async Task<ActionResult<Lijstgebruikers>> AddOnderzoekGebruiker(int onderzoekId, int gebruikerId, [FromBody] dbLijstgebruikers newOnderzoekGebruiker)
{
    try
    {
        // Assign OnderzoekID and GebruikerID from the API parameters
        newOnderzoekGebruiker.OnderzoekID = onderzoekId;
        newOnderzoekGebruiker.GebruikerID = gebruikerId;

        _dbContext.lijstgebruikers.Add(newOnderzoekGebruiker);
        await _dbContext.SaveChangesAsync();
        return CreatedAtAction("GetAllOnderzoekGebruikers", new { id = newOnderzoekGebruiker.Id }, newOnderzoekGebruiker);
    }
    catch (Exception ex)
    {
        return BadRequest($"Failed to add OnderzoekGebruiker. Error: {ex.Message}");
    }
}
    }
}