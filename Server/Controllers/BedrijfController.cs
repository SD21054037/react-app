using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Model;
using Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace Controllers{
    
    [ApiController]
    [Route("[controller]")]
    public class BedrijfController : ControllerBase
{
    private readonly yourDbContext _dbContext;

    public BedrijfController(yourDbContext dbContext)
    {
        _dbContext = dbContext;
    }

     [HttpPost("{gebruikerId}")]
    public async Task<ActionResult<dbBedrijf>> AddBedrijf(int gebruikerId, [FromBody] dbBedrijf newBedrijf)
    {
        try
        {
            // You may want to perform any additional validation or business logic here
            newBedrijf.GebruikerID = gebruikerId;  // Set the GebruikerID from the route parameter

            _dbContext.bedrijven.Add(newBedrijf);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetAllBedrijven", new { id = newBedrijf.BedrijfID }, newBedrijf);
        }
        catch (Exception ex)
        {
            return BadRequest($"Failed to add bedrijf. Error: {ex.Message}");
        }
    }
}

}