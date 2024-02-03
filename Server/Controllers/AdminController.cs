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
    public class AdminController : ControllerBase
    {
        private readonly yourDbContext _dbContext;

        public AdminController(yourDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("{gebruikerId}")]
        public async Task<ActionResult<dbAdmin>> AddAdmin(int gebruikerId, [FromBody] dbAdmin newAdmin)
        {
            try
            {
                // You may want to perform any additional validation or business logic here
                newAdmin.GebruikerID = gebruikerId;  // Set the GebruikerID from the route parameter

                _dbContext.Admins.Add(newAdmin);
                await _dbContext.SaveChangesAsync();

                return CreatedAtAction("getAdmin", new { id = newAdmin.AdminID }, newAdmin);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to add admin. Error: {ex.Message}");
            }
        }


        [HttpGet(Name = "getAdmin")]
        public async Task<ActionResult<IEnumerable<dbGebruiker>>> getAdmin()
        {
            var users = await _dbContext.Admins.ToListAsync();
            return Ok(users);
        }

        // [HttpGet("getAllAdmin")]
        // public ActionResult<IEnumerable<dbAdmin>> getAllAdmin()
        //         {
        //             try
        //             {
        //                 var adminVar = _dbContext.Admins.ToList();
        //                 return Ok(adminVar);
        //             }
        //             catch (Exception ex)
        //             {
        //                 return BadRequest($"Failed to retrieve A. Error: {ex.Message}");
        //             }
        //         }


    }
}