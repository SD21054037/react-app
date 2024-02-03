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

public class ChatBerichtController : ControllerBase
{
    private readonly yourDbContext _context;

    public ChatBerichtController(yourDbContext context)
    {
        _context = context;
    }

    // GET: api/Chat
    [HttpGet(Name = "getChats")]
    public async Task<ActionResult<IEnumerable<dbGebruiker>>> GetAllUsers()
        {
            var users = await _context.berichten.ToListAsync();
            return Ok(users);
        }


    // POST: api/Chat
[HttpPost("{zender}/{ontvanger}")]
    public async Task<ActionResult<dbChatBericht>> PostChatMessage(int zender,int ontvanger,[FromBody]dbChatBericht chatBericht)
    {
        try
    {
        chatBericht.Timestamp = DateTime.Now;
       chatBericht.ZenderID = zender;
        chatBericht.OntvangerID = ontvanger;  

        _context.berichten.Add(chatBericht);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetChatMessage", new { id = chatBericht.ChatBerichtID }, chatBericht);
    }
    catch (Exception ex)
    {
        return BadRequest($"Failed to add OnderzoekGebruiker. Error: {ex.Message}");
    }
    }
    [HttpGet("getChatMessage")]
        public ActionResult<IEnumerable<dbChatBericht>> getChatMessage()
        {
            try
            {
                var berichten = _context.berichten.ToList();
                return Ok(berichten);
            }
            catch (Exception ex)
            {
                return BadRequest($"Failed to retrieve messages. Error: {ex.Message}");
            }
        }
}
}