using System.Web.Mvc;
using QuotePoc.WebUI.Models;

namespace QuotePoc.WebUI.Controllers
{
    public class QuoteController : Controller
    {
        public ActionResult Quote()
        {
            return View(new Quote());
        }
    }
}