using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Model;
using Services;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace Controllers {

    [ApiController]
    [Route("[controller]")]
    public class OuderController : ControllerBase
    {
    private readonly yourDbContext _dbContext;

    public OuderController(yourDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    [HttpPost("{gebruikerId}")]
public async Task<ActionResult<dbOuder>> AddOuder(int gebruikerId, [FromBody] dbOuder newOuder)
{
    try
    {
        // Assign GebruikerID from the API parameter
        newOuder.GebruikerID = gebruikerId;

        _dbContext.Ouders.Add(newOuder);
        await _dbContext.SaveChangesAsync();

        return CreatedAtAction("GetAllOuders", new { id = newOuder.OuderID }, newOuder);
    }
    catch (Exception ex)
    {
        return BadRequest($"Failed to add ouder. Error: {ex.Message}");
    }
}

[HttpGet("GetAllOuders")]
public IActionResult GetAllOuders()
{
    try
    {
        // Retrieve all Ouders from the database
        List<dbOuder> allOuders = _dbContext.Ouders.ToList();

        // Return the list of Ouders as IActionResult
        return Ok(allOuders);
    }
    catch (Exception ex)
    {
        // Handle the exception and return a BadRequest response if an error occurs
        return BadRequest($"Failed to retrieve all Ouders. Error: {ex.Message}");
    }
}

}

}