using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


public abstract class ControllerBase
{
    public HttpContext HttpContext { get; }

    public HttpRequest Request { get; }

    public HttpResponse Response { get; }

    public ControllerBase()
    {
        // Initialize HttpContext, Request, and Response
    }

    // Standardized action results
    public IActionResult Ok() { 
                return new OkResult();

    }

    public IActionResult BadRequest() {  
        return new BadRequestObjectResult("Invalid input data");
 }

    public IActionResult NotFound() { 
                return new NotFoundResult();

     }

    // Methods for common scenarios
    public IActionResult Redirect(string url) {  
          return new RedirectResult(url);
 }

     public IActionResult RedirectToAction(string actionName, string controllerName, object routeValues = null)
    {
        return new RedirectToActionResult(actionName, controllerName, routeValues);
    }


    // Other methods and properties...
}
