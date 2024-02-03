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
    public class OnderzoekController : ControllerBase
    {
        private readonly yourDbContext _context;

        public OnderzoekController(yourDbContext context)
        {
            _context = context;
        }

        // POST: api/Onderzoek
        [HttpPost]
        public async Task<ActionResult<dbOnderzoek>> PostOnderzoek([FromBody] dbOnderzoek onderzoek)
        {
            try
            {
                // Validate or perform additional logic if needed

                // Set default values or perform additional logic if needed
                onderzoek.Datum = DateTime.Now;

                // Add the onderzoek to the context
                _context.onderzoeken.Add(onderzoek);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetOnderzoek", new { id = onderzoek.OnderzoekID }, onderzoek);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }

       
        [HttpGet("{id}")]
        public async Task<ActionResult<dbOnderzoek>> GetOnderzoek(int id)
                {
                var onderzoek = await _context.onderzoeken.FindAsync(id);

                if (onderzoek == null)
                {
                return NotFound();
                }

                 return onderzoek;
        }
    }

}