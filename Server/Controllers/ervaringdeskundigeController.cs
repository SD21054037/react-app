using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using System.Threading.Tasks;
[Route("api/ervaringsdeskundige")]
[ApiController]
public class ervaringdeskundigeController : ControllerBase
{
    private readonly ErvaringsdeskundigeRepository _ervaringsdeskundigeRepository;

    public ervaringdeskundigeController(ErvaringsdeskundigeRepository ervaringsdeskundigeRepository)
    {
        _ervaringsdeskundigeRepository = ervaringsdeskundigeRepository;
    }

    [HttpPost("add")]
    public IActionResult AddErvaringsdeskundige([FromBody] Ervaringsdeskundige model)
    {
        _ervaringsdeskundigeRepository.AddErvaringsdeskundige(model);

        return Ok("Ervaringsdeskundige added successfully.");
    }
     [HttpPatch("{ervaringsdeskundigeId}/update-postcode")]
    public IActionResult UpdatePostcode(int ervaringsdeskundigeId, [FromBody] Ervaringsdeskundige request)
    {
        var ervaringsdeskundige = _ervaringsdeskundigeRepository.GetErvaringsdeskundigeById(ervaringsdeskundigeId);

        if (ervaringsdeskundige == null)
        {
            return NotFound("Ervaringsdeskundige not found.");
        }

        ervaringsdeskundige.Postcode = request.Postcode;

        _ervaringsdeskundigeRepository.SaveChanges();

        return Ok("Postcode updated successfully.");
    }

    [HttpPatch("{ervaringsdeskundigeId}/update-type-beperking")]
    public IActionResult UpdateTypeBeperking(int ervaringsdeskundigeId, [FromBody] Ervaringsdeskundige request)
    {
        var ervaringsdeskundige = _ervaringsdeskundigeRepository.GetErvaringsdeskundigeById(ervaringsdeskundigeId);

        if (ervaringsdeskundige == null)
        {
            return NotFound("Ervaringsdeskundige not found.");
        }

        ervaringsdeskundige.TypeBeperking = request.TypeBeperking;

        _ervaringsdeskundigeRepository.SaveChanges();

        return Ok("TypeBeperking updated successfully.");
    }


    [HttpGet("all")]
    public IActionResult GetAllErvaringsdeskundigen()
    {
        var allErvaringsdeskundigen = _ervaringsdeskundigeRepository.GetAllErvaringsdeskundigen();
        return Ok(allErvaringsdeskundigen);
    }
}

