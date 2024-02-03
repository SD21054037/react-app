// using Microsoft.AspNetCore.Mvc;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.AspNetCore.Mvc.ApplicationModels;
// using Model;
// using Services;
// using System.Threading.Tasks;
// using System.Collections.Generic;
// using System.Linq;

// namespace Controller{

//     [ApiController]
//     [Route("[controller]")]
//     public class ErvaringsdeskundigeController : ControllerBase{

//            private readonly yourDbContext _dbContext;
           
//         public ErvaringsdeskundigeController(yourDbContext dbContext)
//         {
//             _dbContext = dbContext;
//         }


//         [HttpPost]
//         public async Task<ActionResult<dbErvaringsdeskundige>> AddErvaringsdeskundige([FromBody] dbErvaringsdeskundige newErvaringsdeskundige)
//         {
//             try
//             {
//         // Assuming that GebruikerID is provided in the request or you get it from the authenticated user
//         int gebruikerId = newErvaringsdeskundige.GebruikerID;
//         var dbGebruiker = await _dbContext.Gebruikers.FindAsync(gebruikerId);
//          if (dbGebruiker == null)
//         {
//             return NotFound($"User with ID {gebruikerId} not found.");
//         }


//         // Create a new dbErvaringsdeskundige object
//         var ervaringsdeskundige = new dbErvaringsdeskundige
//         {
//             GebruikerID = gebruikerId,
//             Gebruiker = null  // Set the Gebruiker property directly

//             };

//         // Add the dbErvaringsdeskundige to the context and save changes
//         _dbContext.ervaringsdeskundigen.Add(ervaringsdeskundige);
//         await _dbContext.SaveChangesAsync();
//         ervaringsdeskundige.Gebruiker = dbGebruiker;


//         return Ok(ervaringsdeskundige);
//             }
//     catch (Exception ex)
//     {
//         return BadRequest($"Failed to add ervaringsdeskundige. Error: {ex.Message}");
//     }
// }



//         [HttpPut("{id}/update-ervaringsdeskundige")]
// public async Task<ActionResult<dbErvaringsdeskundige>> UpdateErvaringsdeskundige(int id, [FromBody] dbErvaringsdeskundige updatedErvaringsdeskundige)
// {
//     try
//     {
//         var ervaringsdeskundige = await _dbContext.ervaringsdeskundigen
//             .Include(e => e.Gebruiker)
//             .FirstOrDefaultAsync(e => e.ErvaringsdeskundigeID == id);

//         if (ervaringsdeskundige == null)
//         {
//             return NotFound($"Ervaringsdeskundige with ID {id} not found.");
//         }

//         // Update fields if new values are provided
//         if (!string.IsNullOrEmpty(updatedErvaringsdeskundige.Postcode))
//         {
//             ervaringsdeskundige.Postcode = updatedErvaringsdeskundige.Postcode;
//         }

//         if (!string.IsNullOrEmpty(updatedErvaringsdeskundige.TypeBeperking))
//         {
//             ervaringsdeskundige.TypeBeperking = updatedErvaringsdeskundige.TypeBeperking;
//         }

//         if (!string.IsNullOrEmpty(updatedErvaringsdeskundige.Hulpmiddelen))
//         {
//             ervaringsdeskundige.Hulpmiddelen = updatedErvaringsdeskundige.Hulpmiddelen;
//         }

//         if (!string.IsNullOrEmpty(updatedErvaringsdeskundige.Aandoening_Ziekte))
//         {
//             ervaringsdeskundige.Aandoening_Ziekte = updatedErvaringsdeskundige.Aandoening_Ziekte;
//         }

//         if (updatedErvaringsdeskundige.DateOfBirth != null)
//         {
//             ervaringsdeskundige.DateOfBirth = updatedErvaringsdeskundige.DateOfBirth;
//         }

//         await _dbContext.SaveChangesAsync();

//         return Ok(ervaringsdeskundige);
//     }
//     catch (Exception ex)
//     {
//         return BadRequest($"Failed to update ervaringsdeskundige. Error: {ex.Message}");
//     }
// }

//    [HttpGet("{ErvaringsdeskundigeID}", Name = "GetErvaringById")]
//         public async Task<ActionResult<dbErvaringsdeskundige>> GetErvaringById(int ErvaringsdeskundigeID)
//         {
//                 var Ervaringdeskundige = await _dbContext.Gebruikers.FindAsync(ErvaringsdeskundigeID);         
//                 if (Ervaringdeskundige == null)
//                 {
//                     return NotFound(); // Return 404 if user with the specified ID is not found
//                      }
//                      return Ok(Ervaringdeskundige);
// }
//   [HttpGet(Name = "getErvaringDeskundigen")]
//         public async Task<ActionResult<IEnumerable<dbErvaringsdeskundige>>> getAllErvaringsdeskundigen()
//         {
//             var users = await _dbContext.ervaringsdeskundigen.ToListAsync();
//             return Ok(users);
//         }


//     }
// }