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

}